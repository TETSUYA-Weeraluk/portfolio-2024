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
  PersonalInfo: PerosnalInfo[];
  Education: Education[];
  Experience: Experience[];
  Skill: Skills[];
  Project: Projects[];
  User: User;
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
}

export interface Education {
  id: string;
  school: string;
  description: string;
  location: string;
  startDate: string;
  endDate: string;
}

export interface Experience {
  id: string;
  company: string;
  position: string;
  location: string;
  startDate: string;
  endDate: string;
  ExperienceDescription: ExperienceDescription[];
}

export interface ExperienceDescription {
  id: string;
  description: string;
}

export interface Skills {
  id: string;
  title: string;
  skillDescription: SkillDescription[];
}

export interface SkillDescription {
  id: string;
  description: string;
  image: string;
}

export interface Projects {
  id: string;
  title: string;
  image: string;
  description: string;
  link_github: string;
  link_demo: string;
}
