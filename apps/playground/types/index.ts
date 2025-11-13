type USER_DETAILS = {
  avatar_url?: string;
  username?: string;
  name?: string;
  followers?: number;
  following?: number;
  total_repos?: number;
  repos?: {
    name?: string;
    description?: string;
    language?: string;
    topics?: string[];
    repo_url?: string;
    live_url?: string;
  }[];
};
