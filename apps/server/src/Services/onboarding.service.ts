import { createClerkClient } from "@clerk/backend";
import dotenv from "dotenv";
import { config } from "../config";
import {
  getUserContributionsGraph,
  getUserDetails,
  getUserRepos,
} from "./github.service";
import prisma from "@workspace/db";

dotenv.config();
export const clerkClient = createClerkClient({
  secretKey: config.CLERK_SECRET_KEY,
});

export const onBoardingProcess = async (
  githubURL: string,
  userId: string,
  authType: "GITHUB" | "GOOGLE" | "EMAIL"
): Promise<{
  message: string;
  status: boolean;
}> => {
  try {
    let userDetails;
    let userRepos;
    let contributions;
    const regex =
      /^(?:https?:\/\/)?(?:www\.)?github\.com\/([^\/\?#]+)(?:[\/\?#]|$)/i;
    const githubUsername = githubURL.match(regex)?.[1];
    switch (authType) {
      case "GITHUB":
        const token = await getUserAccessToken(userId);
        if (!token) throw Error("Invalid userID");
        userDetails = await getUserDetails({ token });
        userRepos = await getUserRepos({ token });
        contributions = userDetails
          ? await getUserContributionsGraph(
              token,
              userDetails?.username,
              userDetails?.created_at
            )
          : null;

        break;

      case "GOOGLE":
        if (!githubUsername) throw Error("No UserName");
        const AccountExists = await prisma.user.findUnique({
          where: { username: githubUsername.toLowerCase() },
        });
        if (AccountExists)
          return {
            message: "User already exists with the following link",
            status: false,
          };
        userDetails = await getUserDetails({ username: githubUsername });
        userRepos = await getUserRepos({ username: githubUsername });
        contributions = userDetails
          ? await getUserContributionsGraph(
              config.GITHUB_ACCESS_TOKEN ?? "",
              userDetails?.username,
              userDetails?.created_at
            )
          : null;
        break;
      case "EMAIL":
        if (!githubUsername) throw Error("No UserName");
        userDetails = await getUserDetails({ username: githubUsername });
        userRepos = await getUserRepos({ username: githubUsername });
        contributions = userDetails
          ? await getUserContributionsGraph(
              config.GITHUB_ACCESS_TOKEN ?? "",
              userDetails?.username,
              userDetails?.created_at
            )
          : null;
        break;

      default:
        throw Error("Invalid Auth Type");
    }
    if (!userDetails) {
      console.log("no user data found");
      return { message: "User data error", status: false };
    } else {
      userDetails &&
        (await prisma.user.update({
          where: { id: userId },
          data: {
            profileImg: userDetails.avatar_url,
            username:
              userDetails.username ||
              userDetails?.githubLink?.match(regex)?.[1] ||
              githubUsername,
            bio: userDetails.bio,
            location: userDetails.location,
            website: userDetails.website,
            githubLink: userDetails.githubLink,
            followers: userDetails.followers,
            following: userDetails.following,
            onBoardingStatus: true,
            contributions: contributions ?? undefined,
            socialAccounts: {
              github: userDetails.githubLink || "",
              linkedin: "",
              twitter: "",
              website: userDetails.website || "",
              instagram: "",
              facebook: "",
              behance: "",
              youtube: "",
            },
          },
        }));
    }
    if (userRepos) {
      const createdRepos = await prisma.repo.createMany({
        data: userRepos.map((repo) => ({
          userId: userId, // Add required userId field
          name: repo.name,
          description: repo.description,
          topics: repo.topics,
          languages: repo.languages || {},
          stars: repo.stars,
          forks: repo.forks,
          deployments: repo.deployments,
          repoLink: repo.repoLink,
          liveLink: repo.liveLink,
          created_at: repo.created_at,
          updated_at: repo.updated_at,
          pushed_at: repo.pushed_at,
        })),
        skipDuplicates: true,
      });
    }
    await clerkClient.users.updateUserMetadata(userId, {
      publicMetadata: {
        onBoarding: true,
      },
    });
    return { message: "Operation success", status: true };
  } catch (e) {
    console.log(e);
    return { message: "Internal Server Error", status: false };
  }
};
export const getUserAccessToken = async (
  userId: string
): Promise<false | string | undefined> => {
  try {
    const token = clerkClient.users.getUserOauthAccessToken(userId, "github");
    return (await token).data[0]?.token;
  } catch (e) {
    console.log(e);
    return false;
  }
};
