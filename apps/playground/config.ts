export const config = {
  gitfolio_url: "https://gitfolio.in",
  renderer_url: process.env.NODE_ENV === "development" ? "http://localhost:4000" : "https://portfolio.gitfolio.in",
  playground_url: process.env.NODE_ENV === "development" ? "http://localhost:8000" : "https://playground.gitfolio.in",
  github_token: process.env.GITHUB_ACCESS_TOKEN,
};
