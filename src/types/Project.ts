import { StaticImageData } from "next/image";

export type OthersProjectProps = {
  id: number;
  name: string;
  description: string;
  html_url: string;
  homepage: string;
  created_at?: string;
  updated_at?: string;
  language?: string;
  stargazers_count?: number;
  forks_count?: number;
  projectImage: StaticImageData;
  tecnologias: {
    id: number;
    name: string;
    icon: any;
  }[];
};
