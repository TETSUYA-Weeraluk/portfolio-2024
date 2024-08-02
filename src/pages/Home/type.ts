export interface ResponseFormApi<T> {
  message: string;
  status: number;
  data: T;
}

export interface User {
  id: string;
  email: string;
}

export interface AboutMe {
  id: string;
  name: string;
  nickname: string;
  position: string;
  welcomeText: string;
  image: string;
  content: string;
  imageAboutMe: string;
  personalInfo: PerosnalInfo[];
  education: Education[];
  experience: Experience[];
  skill: Skills[];
  project: Projects[];
  user: User;
}

export enum LibraryIcon {
  Fa = "Fa",
  Md = "Md",
}

export interface PerosnalInfo {
  id: string;
  title: string;
  description: string;
  libraryIcon: LibraryIcon;
  icon: string;
  order: number;
}

export interface Education {
  id: string;
  school: string;
  description: string;
  location: string;
  startDate: string;
  endDate: string;
  order: number;
}

export interface Experience {
  id: string;
  company: string;
  position: string;
  location: string;
  startDate: string;
  endDate: string;
  experienceDescription: ExperienceDescription[];
  order: number;
}

export interface ExperienceDescription {
  id: string;
  description: string;
}

export interface Skills {
  id: string;
  title: string;
  skillDescription: SkillDescription[];
  order: number;
}

export interface SkillDescription {
  id: string;
  description: string;
  image: string;
  order: number;
}

export interface Projects {
  id: string;
  title: string;
  image: string;
  description: string;
  link_github: string;
  link_demo: string;
  order: number;
}
