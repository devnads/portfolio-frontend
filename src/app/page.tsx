import { Home } from "@/features/home";
import { Dev } from "@/types/dev";
import { Project } from "@/types/project";

async function getProjectsData(): Promise<Project[]> {
  const res = await fetch(`${process.env.API_ENDPOINT}/projects`);
  const projects = await res.json();

  const resDevs = await fetch(`${process.env.API_ENDPOINT}/devs`);
  const devs = await resDevs.json();

  const newData = projects.map((project: Project) => {
    const dev = devs.find((dev: Dev) => dev.id === project.dev_id);
    return {
      ...project,
      dev,
    };
  });

  return newData;
}

export default async function HomePage() {
  const data = await getProjectsData();
  return <Home projects={data} />;
}
