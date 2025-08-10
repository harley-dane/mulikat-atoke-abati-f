// client/src/types.ts
export interface Project {
  _id: string;
  title: string;
  description: string;
  image: string;
  link: string;
}

export interface Leader {
  _id: string;
  name: string;
  position: string;
  bio: string;
  image: string;
}

export interface Staff {
  _id: string;
  name: string;
  role: string;
  bio: string;
  image: string;
}