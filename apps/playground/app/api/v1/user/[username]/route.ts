import { NextRequest, NextResponse } from "next/server";
const GITHUB_API_URL = "https://api.github.com/";

export async function GET(
  req: NextRequest,
  { params }: { params: Promise<{ username: string }> }
) {
  try {
    let userData: USER_DETAILS = {};
    const { username } = await params;
    console.log(username);
    try {
      const res = await fetch(`${GITHUB_API_URL}users/${username}`);
      const data = await res.json();
      console.log(data);
      if (data) {
        let res = await fetch(data.repos_url);
        let repos = await res.json();
        repos = repos.map((repo: any) => ({
          name: repo.name,
          description: repo.description,
          language: repo.language,
          topics: repo.topics ||repo.tags,
          repo_url: repo.html_url,
          live_url: repo.homepage,
        }));
        userData = {
          avatar_url: data.avatar_url,
          username: data.login,
          name: data.name,
          followers: data.followers,
          following: data.following,
          total_repos: data.public_repos,
          repos: repos,
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
