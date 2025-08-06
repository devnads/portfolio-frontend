"use client";
import { useParams, useRouter } from "next/navigation";

async function getProject(id: string) {
  const res = await fetch(`http://localhost:3000/api/projects/${id}`);
  const data = await res.json();
  return {
    id: "1",
    name: "Portdev",
    description:
      "Here is the description of the project 3 with a lot of text to see how it works and how it looks like",
    categories: ["Category 1", "Category 2"],
    dev_id: "1",
    created_at: "2024-01-01",
    image: "/placeholder-project.jpg",
    mission_id: "1",
    dev: {
      id: "1",
      username: "John Doe",
      address: "",
      created_at: "2024-01-01",
      discord: "",
      github: "",
      profile_image: "",
      roles: [],
      twitter: "",
    },
  };
}

export default function ProjectDetail() {
  const params = useParams();
  const router = useRouter();
  const projectId = params.projectsID;
  const project = getProject(projectId as string);

  return <main className="min-h-screen bg-black text-white">{projectId}</main>;
}
