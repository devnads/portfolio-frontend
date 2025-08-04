import { Dev } from "./dev";

export interface Project {
  categories: string[] | null;
  created_at: string;
  description: string;
  id: string;
  dev_id: string;
  image: string;
  mission_id: string;
  name: string;
  dev?: Dev;
}
