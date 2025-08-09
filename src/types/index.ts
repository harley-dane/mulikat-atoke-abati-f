// src/types/index.ts
export interface Project {
  id: string;
  title: string;
  description: string;
  image: string;
  link: string;
}

export interface BlogPost {
  id: string;
  title: string;
  content: string;
  date: string;
  image: string;
}