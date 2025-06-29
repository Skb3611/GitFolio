import prisma,{Prisma} from "@workspace/db";
import { createClerkClient } from "@clerk/backend";
import dotenv from "dotenv";
import {
  getUserContributionsGraph,
  getUserDetails,
  getUserRepos,
} from "./github.service";

dotenv.config();
const clerkClient = createClerkClient({
  secretKey: process.env.CLERK_SECRET_KEY,
});

export const processClerkWebhook = async (event: any): Promise<boolean> => {
  const { data, type } = event;
  switch (type) {
    case "user.created":
      const token = await getUserAccessToken(data.id);
      if (!token) return false;

      const userDetails = await getUserDetails(token);
      const userRepos = await getUserRepos(token);

      if (!userDetails || !userRepos) return false;

      const contibutions = await getUserContributionsGraph(
        token,
        userDetails.username,
        userDetails?.created_at
      );

      const res = await prisma.$transaction(async (tx:Prisma.TransactionClient) => {
        const user = await tx.user.create({
          data: {
            username: userDetails.username,
            bio: userDetails.bio,
            location: userDetails.location,
            website: userDetails.website,
            githubLink: userDetails.githubLink,
            followers: userDetails.followers,
            following: userDetails.following,
            id: data.id,
            email: data.email_addresses[0].email_address,
            firstname: data.first_name,
            lastname: data.last_name,
            profileImg: data.profile_image_url,
            contributions: contibutions,
          },
        });
        console.log("user created");
        const repoPromises = userRepos.map(async (repo) => {
          return tx.repo.create({
            data: {
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
              owner: {
                connect: {
                  id: user.id,
                },
              },
            },
          });
        });
        const createdRepos = await Promise.all(repoPromises);
        console.log("repos created", createdRepos.length);
        return { user, repos: createdRepos}
      });

      return (res) ? true : false;
    case "user.updated":
      const updatedUser = await prisma.user.update({
        where: {
          id: data.id,
        },
        data: {
          email: data.email_addresses[0].email_address,
          firstname: data.first_name,
          lastname: data.last_name,
          username: data.username,
          profileImg: data.profile_image_url,
        },
      });
      return updatedUser ? true : false;
  }
  return false;
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
