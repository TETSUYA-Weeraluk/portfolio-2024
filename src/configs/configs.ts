export const BASE_API = import.meta.env.VITE_API;
export const myId = import.meta.env.VITE_MY_ID;

export const pathUrl = {
  aboutMe: {
    get: "about-me",
    post: "about-me",
  },
  personalInfo: {
    get: "personal-info",
    patch: "personal-info",
  },
  education: {
    get: "education",
    patch: "education",
  },
  experience: {
    get: "experience",
    patch: "experience",
  },
  skill: {
    get: "skill",
    patch: "skill",
  },
  project: {
    get: "project",
    patch: "project",
  },
};
