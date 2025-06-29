export interface PersonalInformation {
  profileImg: string;
  full_name: string;
  username: string;
  email: string;
  location: string;
  tagline: string;
  bio: string;
  website: string;
  githubLink: string;
  followers: number;
  following: number;
}
export interface Projects {
  id: string;
  name: string;
  description: string;
  thumbnail: string;
  repoLink: string;
  topics: string[];
  liveLink: string;
  languages: Object;
  stars: number;
  forks: number;
  isIncluded: boolean;
}

export interface Experience {
  id: string;
  company: string;
  role: string;
  description: string;
  start_date: string;
  end_date: string;
  onGoing: boolean;
}
export interface SocialLinks {
  github: string;
  linkedin: string;
  twitter: string;
  website: string;
  instagram: string;
  facebook: string;
  behance: string;
  youtube: string;
}
export interface Education {
  id: string;
  title: string;
  institution: string;
  description: string;
  start_date: string;
  end_date: string;
  onGoing: boolean;
}

export type SavePayload =
  | { type: "Personal Information"; data: Partial<PersonalInformation> }
  | { type: "Projects"; data: Partial<Projects> }
  | { type: "Experience"; data: Partial<Experience> }
  | { type: "Social Links"; data: SocialLinks }
  | { type: "Skills"; data: string[] }
  | { type: "Education"; data: Partial<Education> };

export enum DeleteType {
  PROJECT,
  EXPERIENCE,
  EDUCATION,
}

export type TabTypes =
  | "Overview"
  | "Projects"
  | "Personal Info"
  | "Experience"
  | "Social Links"
  | "Skills"
  | "Education";
