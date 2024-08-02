export const BASE_API = import.meta.env.VITE_API;
export const myId = import.meta.env.VITE_MY_ID;

export const pathUrl = {
  aboutMe: {
    get: "/about-me",
    post: "/about-me",
  },
  personalInfo: {
    get: "/personal-info",
    patch: "/personal-info",
  },
};
