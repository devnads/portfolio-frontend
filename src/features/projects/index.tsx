"use client";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useState } from "react";
import { FaDiscord, FaGithub } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";

export const Projects = () => {
  const router = useRouter();
  const [mission, setMission] = useState(1);

  const projects1 = [
    {
      id: 1,
      name: "Portdev",
      description:
        "Here is the description of the project 3 with a lot of text to see how it works and how it looks like",
      categories: ["Category 1", "Category 2"],
      dev: {
        username: "John Doe",
        id: 1,
      },
    },
    {
      id: 2,
      name: "Blocknads",
      description:
        "Here is the description of the project 3 with a lot of text to see how it works and how it looks like",
      categories: ["Category 3", "Category 4"],
      dev: {
        username: "John Doe",
        id: 1,
      },
    },
    {
      id: 3,
      name: "Monad Foundation",
      description:
        "Here is the description of the project 3 with a lot of text to see how it works and how it looks like",
      categories: ["Category 5", "Category 6"],
      dev: {
        username: "John Doe 3",
        id: 3,
      },
    },
    {
      id: 4,
      name: "Monad Tiles",
      description:
        "Here is the description of the project 3 with a lot of text to see how it works and how it looks like",
      categories: ["Category 7", "Category 8"],
      dev: {
        username: "John Doe 4",
        id: 4,
      },
    },
    {
      id: 5,
      name: "Kuru Exchange",
      description:
        "Here is the description of the project 3 with a lot of text to see how it works and how it looks like",
      categories: ["Category 9", "Category 10"],
      dev: {
        username: "John Doe 5",
        id: 5,
      },
    },
  ];
  const projects2 = [
    {
      id: 1,
      name: "Kevin Durand",
      description:
        "Here is the description of the project 3 with a lot of text to see how it works and how it looks like",
      categories: ["Category 1", "Category 2"],
      dev: {
        username: "John Doe",
        id: 1,
      },
    },

    {
      id: 4,
      name: "Monad Blabla",
      description:
        "Here is the description of the project 3 with a lot of text to see how it works and how it looks like",
      categories: ["Category 7", "Category 8"],
      dev: {
        username: "John Doe 4",
        id: 4,
      },
    },
    {
      id: 5,
      name: "JFK",
      description:
        "Here is the description of the project 3 with a lot of text to see how it works and how it looks like",
      categories: ["Category 9", "Category 10"],
      dev: {
        username: "John Doe 5",
        id: 5,
      },
    },
  ];
  const projects3 = [
    {
      id: 1,
      name: "Kevin Durand",
      description:
        "Here is the description of the project 3 with a lot of text to see how it works and how it looks like",
      categories: ["Category 1", "Category 2"],
      dev: {
        username: "John Doe",
        id: 1,
      },
    },
    {
      id: 2,
      name: "Jordan Monad",
      description:
        "Here is the description of the project 3 with a lot of text to see how it works and how it looks like",
      categories: ["Category 1", "Category 2"],
      dev: {
        username: "John Doe",
        id: 1,
      },
    },

    {
      id: 4,
      name: "Monad Blabla",
      description:
        "Here is the description of the project 3 with a lot of text to see how it works and how it looks like",
      categories: ["Category 7", "Category 8"],
      dev: {
        username: "John Doe 4",
        id: 4,
      },
    },
    {
      id: 5,
      name: "JFK",
      description:
        "Here is the description of the project 3 with a lot of text to see how it works and how it looks like",
      categories: ["Category 9", "Category 10"],
      dev: {
        username: "John Doe 5",
        id: 5,
      },
    },
  ];

  const devs = [
    {
      address: "0x12345678908328",
      created_at: "2024-01-01",
      discord: "https://discord.com/users/1234567890",
      github: "https://github.com/1234567890",
      id: "1",
      profile_image: "https://via.placeholder.com/150",
      roles: ["Devnads"],
      twitter: "https://twitter.com/1234567890",
      username: "Santi",
    },
    {
      address: "0x1234567890326696",
      created_at: "2024-01-01",
      discord: "https://discord.com/users/1234567890",
      github: "https://github.com/1234567890",
      id: "2",
      profile_image: "https://via.placeholder.com/150",
      roles: ["Devnads"],
      twitter: "https://twitter.com/1234567890",
      username: "Kutsal",
    },
    {
      address: "0x123456789000000000345673",
      created_at: "2024-01-01",
      discord: "https://discord.com/users/1234567890",
      github: "https://github.com/1234567890",
      id: "3",
      profile_image: "https://via.placeholder.com/150",
      roles: ["Devnads"],
      twitter: "https://twitter.com/1234567890",
      username: "Novee",
    },
    {
      address: "0x1234567890000000003434n3",
      created_at: "2024-01-01",
      discord: "https://discord.com/users/1234567890",
      github: "https://github.com/1234567890",
      id: "4",
      profile_image: "https://via.placeholder.com/150",
      roles: ["Devnads"],
      twitter: "https://twitter.com/1234567890",
      username: "Uday",
    },
  ];

  const missions = [
    {
      id: 1,
      name: "Mission 1",
      description: "Description of Mission 1",
      devs,
      projects: projects1,
    },
    {
      id: 2,
      name: "Mission 2",
      description: "Description of Mission 2",
      devs,
      projects: projects2,
    },
    {
      id: 3,
      name: "Mission 3",
      description: "Description of Mission 3",
      devs,
      projects: projects3,
    },
  ];

  return (
    <main>
      <div className={`col-span-6 w-full h-full max-w-[1400px] mx-auto`}>
        <div className="p-10">
          <div className="p-6 h-full flex flex-col">
            <div className="flex flex-col items-center gap-4 mb-20">
              <h1 className="text-6xl text-white font-bold mb-2 mx-auto">
                Missions
              </h1>
              <div className="flex items-center gap-4">
                {Array.from({ length: 3 }).map((_, i) => (
                  <button
                    className={`bg-[#1B1B1B] border border-[#313131] text-white px-3 py-2 rounded-lg hover:bg-[#252525] transition-colors ${
                      mission === i
                        ? "bg-[#3a3a3a] border-[#a9a9a9]"
                        : "bg-[#1B1B1B] border-[#313131]"
                    }`}
                    key={i}
                    onClick={() => setMission(i)}
                  >
                    Mission {i + 1}
                  </button>
                ))}
              </div>
            </div>
            <h1 className="text-5xl text-white font-bold mb-6">Projects</h1>
            <div className="flex items-center gap-4 mb-6">
              <button className="bg-[#1B1B1B] border border-[#313131] text-white px-3 py-2 rounded-lg hover:bg-[#252525] transition-colors">
                Filter By
              </button>
              <button className="bg-[#1B1B1B] border border-[#313131] text-white px-3 py-2 rounded-lg hover:bg-[#252525] transition-colors">
                Add Project
              </button>
            </div>
            <div className="grid grid-cols-3 gap-5">
              {missions[mission].projects.map((project) => (
                <div
                  className="col-span-1 bg-[#1b1b1b] border border-[#3c3c3c] hover:border-[#5c5c5c] hover:bg-[#252525] rounded-lg p-4 hover:translate-y-[-6px] transition-all duration-200 cursor-pointer"
                  onClick={() => router.push(`/projects/${project.id}`)}
                  key={project.id}
                >
                  <h3 className="text-2xl font-bold mb-2 text-white">
                    {project.name}
                  </h3>
                  <p className="text-sm text-white/80">
                    {project.description || "Pas de description"}
                  </p>
                  <div className="mt-5">
                    <span className="text-sm font-medium uppercase text-[#836EF9]">
                      Categories:
                    </span>
                    <div className="flex flex-wrap gap-1 mt-1">
                      {project.categories?.length
                        ? project.categories.map((category, index) => (
                            <span
                              key={index}
                              className="px-2 py-1 bg-[#836EF9]/20 text-[#836EF9] text-xs rounded"
                            >
                              {category}
                            </span>
                          ))
                        : null}
                    </div>
                  </div>
                  <div className="mt-6 text-base text-white/80">
                    Built by: {project.dev?.username || "N/A"}
                  </div>
                </div>
              ))}
            </div>
          </div>
          <div className="p-6 h-full flex flex-col">
            <h1 className="text-5xl text-white font-bold mb-6">Devs</h1>

            <div className="grid grid-cols-3 gap-5">
              {missions[0].devs.map((dev) => (
                <div
                  className="col-span-1 bg-[#1b1b1b] border border-[#3c3c3c] hover:border-[#5c5c5c] hover:bg-[#252525] rounded-lg p-4 hover:translate-y-[-6px] transition-all duration-200"
                  key={dev.id}
                >
                  <div
                    className="flex items-center justify-between gap-2 mb-2 cursor-pointer"
                    onClick={() => router.push(`/devs/${dev.id}`)}
                  >
                    <h3 className="text-2xl font-bold text-white">
                      {dev.username}
                    </h3>
                    <span className="px-3 py-1 bg-yellow-400/20 text-yellow-400 text-xs rounded-full">
                      {dev.roles[0]}
                    </span>
                  </div>

                  <div className="flex items-center gap-2 mt-2">
                    {dev.github && (
                      <Link
                        href={dev.github}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-white/80 hover:text-white group"
                      >
                        <FaGithub className="text-white/80 text-xl group-hover:text-white transition-all duration-200 hover:scale-110" />
                      </Link>
                    )}

                    {dev.twitter && (
                      <Link
                        href={dev.twitter}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-white/80 hover:text-white group"
                      >
                        <FaXTwitter className="text-white/80 text-xl group-hover:text-white transition-all duration-200 hover:scale-110" />
                      </Link>
                    )}

                    {dev.discord && (
                      <Link
                        href={dev.discord}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-white/80 hover:text-white group"
                      >
                        <FaDiscord className="text-white/80 text-2xl group-hover:text-white transition-all duration-200 hover:scale-110" />
                      </Link>
                    )}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </main>
  );
};
