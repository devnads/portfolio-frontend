import { Projects } from "@/features/projects";
import { Dev } from "@/types/dev";
import { Project } from "@/types/project";

async function getProjectsData(): Promise<Project[]> {
  let newProjects = [];
  let newDevs = [];

  try {
    const res = await fetch(`${process.env.API_ENDPOINT}/projects`);
    console.log(res);
    const projects = await res.json();
    newProjects = projects;
  } catch (error) {
    console.error(error);
    return [];
  }
  try {
    const resDevs = await fetch(`${process.env.API_ENDPOINT}/devs`);
    console.log(resDevs);
    const devs = await resDevs.json();
    newDevs = devs;
  } catch (error) {
    console.error(error);
    return [];
  }

  const newData = newProjects.map((project: Project) => {
    const dev = newDevs.find((dev: Dev) => dev.id === project.dev_id);
    return {
      ...project,
      dev,
    };
  });

  return newData;
}

export default async function HomePage() {
  const data = await getProjectsData();
  return <Projects projects={data} />;
}
