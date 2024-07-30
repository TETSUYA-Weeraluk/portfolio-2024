export interface ResponseAPI<T> {
  status: number;
  message: string;
  data: T;
}

export interface MainContent {
  id: string;
  name: string;
  nickname: string;
  position: string;
  welcomeText: string;
  image: string;
}

export interface AboutMeContent {
  id: string;
  content: string;
}
