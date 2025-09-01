export interface PersonalInformation {
  profileImg: string;
  full_name: string;
  username: string;
  email: string;
  location: string | null;
  tagline: string | null;
  bio: string | null;
  website: string | null;
  githubLink: string;
  followers: number;
  following: number;
  activeTemplateId?: string;
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
  logo: string;
  company: string;
  role: string;
  description: string;
  start_date: string;
  end_date: string;
  onGoing: boolean;
}
export interface SocialLinks {
  github: string | null;
  linkedin: string | null;
  twitter: string | null;
  website: string | null;
  instagram: string | null;
  facebook: string | null;
  behance: string | null;
  youtube: string | null;
}
export interface Education {
  id: string;
  logo: string;
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
  | { type: "Education"; data: Partial<Education> }
  | { type: "Template"; data: { activeTemplateId: string } };

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
  | "Education"
  | "Templates"
  | "Preview";

export interface DATA {
  personalInfo: PersonalInformation;
  projects: Projects[];
  experience: Experience[];
  education: Education[];
  socialLinks: SocialLinks;
  skills: string[];
}
export type ImagesTypes = Partial<{
  profile: File | null;
  project: File | null;
  education: File | null;
  experience: File | null;
}> | null;

export interface TemplateData {
  id: string;
  title: string;
  thumbnail?: string;
  video?: string;
  description: string;
  component: React.FC;
  desktopPreview?: string[];
  mobilePreview?: string[];
  mobileDevice?: "Iphone15Pro" | "Android";
  category: "FREE" | "PRO";
  INRpricing:number;
  USDpricing:number;
}
