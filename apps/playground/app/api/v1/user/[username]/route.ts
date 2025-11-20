import { NextRequest, NextResponse } from "next/server";
const GITHUB_API_URL = "https://api.github.com/";
import { DATA as USER_DETAILS, Projects } from "@workspace/types";
import { randomUUID } from "crypto";
export async function GET(
  req: NextRequest,
  { params }: { params: Promise<{ username: string }> }
) {
  try {
    let userData: Partial<USER_DETAILS> = {};
    const { username } = await params;
    console.log(username);
    try {
      const res = await fetch(`${GITHUB_API_URL}users/${username}`);
      const data = await res.json();
      if (data) {
        let res = await fetch(data.repos_url);
        let repos: Projects[] = await res.json();
        repos = repos.map((repo: any) => ({
          name: repo.name,
          description: repo.description,
          language: repo.language,
          topics: repo.topics || repo.tags,
          id: repo.id,
          liveLink: repo.homepage,
          repoLink: repo.html_url,
          thumbnail: "",
          languages: repo.language,
          stars: repo.stargazers_count,
          forks: repo.forks_count,
          isIncluded: true,
        }));
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
        };
      }
      return NextResponse.json({
        status: true,
        message: "User details fetched",
        data: userData,
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
