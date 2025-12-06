import { Education, Experience, Projects, SocialLinks } from "@workspace/types";

export const initialSocailLinks: SocialLinks = {
  github: "",
  linkedin: "",
  twitter: "",
  website: "",
  instagram: "",
  facebook: "",
  behance: "",
  youtube: "",
};

export const initialExperience: Experience = {
  id: Math.random().toString(36).substring(2),
  role: "",
  company: "",
  logo: "",
  description: "",
  start_date: "",
  end_date: "",
  onGoing: false,
};

export const initialEducation: Education = {
  id: Math.random().toString(36).substring(2),
  title: "",
  institution: "",
  logo: "",
  description: "",
  start_date: "",
  end_date: "",
  onGoing: false,
};

export const initialProjects: Projects = {
  id: Math.random().toString(36).substring(2),
  name: "",
  description: "",
  thumbnail: "",
  repoLink: "",
  liveLink: "",
  languages: {},
  stars: 0,
  forks: 0,
  isIncluded: false,
  topics: [],
};
export const MONTHS = [
  "Jan",
  "Feb",
  "Mar",
  "Apr",
  "May",
  "Jun",
  "Jul",
  "Aug",
  "Sep",
  "Oct",
  "Nov",
  "Dec",
];

export const YEARS = Array.from(
  { length: new Date().getFullYear() - 1980 + 1 },
  (_, i) => 1980 + i
).reverse();