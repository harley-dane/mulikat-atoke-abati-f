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

export interface StaffMember { // Renamed from Staff to StaffMember
  _id: string;
  name: string;
  role: string;
  bio: string;
  image: string;
}