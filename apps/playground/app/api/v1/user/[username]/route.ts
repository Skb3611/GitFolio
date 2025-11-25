import { NextRequest, NextResponse } from "next/server";
const GITHUB_API_URL = "https://api.github.com/";
import { DATA as USER_DETAILS, Projects } from "@workspace/types";
import { config } from "@/config";
export async function GET(
  req: NextRequest,
  { params }: { params: Promise<{ username: string }> }
) {
  try {
    let userData: USER_DETAILS;
    const { username } = await params;
    try {
      const res = await fetch(`${GITHUB_API_URL}users/${username}`, {
        headers: {
          Authorization: `Bearer ${config.github_token}`,
        },
      });
      const data = await res.json();
      if (data) {
        let res = await fetch(data.repos_url);
        let parseData = await res.json();
        let repos = await Promise.all(
          parseData.map(async (repo: any) => {
            return {
              name: repo.name,
              description: repo.description,
              languages: await getLanguages({ url: repo.languages_url }),
              topics: repo.topics || repo.tags,
              id: repo.id,
              liveLink: repo.homepage,
              repoLink: repo.html_url,
              thumbnail: null,
              stars: repo.stargazers_count,
              forks: repo.forks_count,
              isIncluded: true,
            };
          })
        );
        userData = {
          personalInfo: {
            profileImg: data.avatar_url,
            username: data.login,
            full_name: data.name,
            followers: data.followers,
            following: data.following,
            email: data.email,
            location: data.location,
            tagline: data.bio,
            bio: data.bio,
            website: data.blog,
            githubLink: data.html_url,
          },
          projects: repos,
          education: [],
          experience: [],
          skills: [],
          socialLinks: {
            github: `https://github.com/${username}`,
            linkedin: "",
            twitter: "",
            website: "",
            instagram: "",
            facebook: "",
            behance: "",
            youtube: "",
          },
        };
      }
      return NextResponse.json({
        status: true,
        message: "User details fetched",
        data: userData!,
      });
    } catch (e) {
      console.log(e);
      return NextResponse.json(
        {
          status: false,
          message: "Failed fetching User details. Try again",
        },
        { status: 404 }
      );
    }
  } catch (e) {
    console.log(e);
    return NextResponse.json(
      {
        status: false,
        message: "Internal Server Error",
      },
      { status: 500 }
    );
  }
}

const getLanguages = async ({ url }: { url: string }): Promise<{} | false> => {
  try {
    const res = await fetch(url, {
      headers: {
        Authorization: `Bearer ${config.github_token!}`,
      },
    });
    const lang = await res.json();
    return lang;
  } catch (e) {
    console.log(e);
    return false;
  }
};
