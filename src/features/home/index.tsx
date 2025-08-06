"use client";
import Image from "next/image";
import { useState } from "react";
import { Project } from "../../types/project";

interface HomeProps {
  projects: Project[];
}

export const Home = ({ projects }: HomeProps) => {
  console.log("projects", projects);
  const [isAnimating, setIsAnimating] = useState(false);

  const handleStartAnimation = () => {
    setIsAnimating(true);
  };

  const handleResetAnimation = () => {
    setIsAnimating(false);
  };

  return (
    <main>
      <div className="grid grid-cols-14 w-full p-6 h-screen">
        <div className="h-10 mb-auto absolute top-10 left-10">
          <Image
            src="/monad.svg"
            alt="logo"
            className="h-full w-full"
            width={215}
            height={40}
          />
        </div>
        <div
          className={`${
            isAnimating ? "col-span-6" : "col-span-6"
          } flex flex-col gap-4 pl-5 justify-center pr-10 transition-all duration-1000 ease-in-out h-full`}
        >
          <div className="flex items-center gap-2 border border-white/20 w-fit px-4 py-1.5 rounded-md">
            <h3 className="text-xl font-syne uppercase text-gray-300 font-medium">
              Novee presents
            </h3>
          </div>
          <h1
            className={`${
              isAnimating ? "text-4xl" : "text-4xl"
            } font-bold font-syne uppercase mt-5 transition-all duration-1000`}
          >
            <span
              className={`${
                isAnimating ? "text-6xl" : "text-6xl"
              } transition-all duration-1000`}
            >
              Welcome
            </span>{" "}
            to <br />
            the{" "}
            <span
              className={`${
                isAnimating ? "text-6xl" : "text-6xl"
              } transition-all duration-1000`}
            >
              Novee&apos;s
            </span>{" "}
            <br />
            <span
              className={`${
                isAnimating ? "text-6xl" : "text-6xl"
              } transition-all duration-1000`}
            >
              office
            </span>
          </h1>
          <p
            className={`${
              isAnimating ? "text-xl" : "text-xl"
            } mt-5 text-white/80 font-light max-w-xl transition-all duration-1000`}
          >
            Gmonad yall. Just a random project that I made to test some backend
            integration, don&apos;t expect anything from it.
          </p>

          {/* Boutons de contrôle */}
          <div className="flex gap-4 mt-6">
            <button
              onClick={handleResetAnimation}
              disabled={!isAnimating}
              className="px-4 py-2 bg-red-500 text-white font-medium rounded-lg hover:bg-red-400 transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
            >
              Reset
            </button>
          </div>
        </div>
        <div
          className={`${
            isAnimating ? "col-span-8" : "col-span-8"
          } h-full grid grid-cols-6 grid-rows-4 gap-6 transition-all duration-1000 ease-in-out overflow-hidden relative rounded-[45px]`}
        >
          <div
            className={`${
              !isAnimating ? "-translate-y-[100vh]" : "translate-y-0"
            } absolute top-0 left-0 col-span-6 w-full h-full bg-[#252525] z-10 transition-all duration-1000 ease-in-out rounded-[45px]`}
          >
            <div className="p-10">
              <div className="p-6 h-full flex flex-col">
                <table className="w-full h-full text-white text-base">
                  <thead>
                    <tr>
                      <th className="text-left text-3xl pb-8">Projet</th>
                      <th className="text-left text-3xl pb-8">Dev</th>
                    </tr>
                  </thead>
                  <tbody>
                    {projects.map((project) => (
                      <tr key={project.id}>
                        <td>
                          <pre className="whitespace-pre-wrap">
                            {JSON.stringify(project, null, 2)}
                          </pre>
                        </td>
                        <td>
                          <pre className="whitespace-pre-wrap">
                            {JSON.stringify(project.dev, null, 2)}
                          </pre>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          </div>
          <div
            className={`col-span-4 row-span-2 bg-emerald-400 h-full rounded-[45px] rounded-br-[45px] shadow-lg transition-all duration-300 ease-in-out hover:bg-emerald-500 ${
              isAnimating ? "transform translate-x-[100vw] opacity-0" : ""
            }`}
            style={{ transitionDelay: isAnimating ? "100ms" : "0ms" }}
            onClick={handleStartAnimation}
          ></div>
          <div
            className={`col-span-2 bg-orange-400 h-full rounded-[45px] shadow-lg transition-all duration-300 ease-in-out hover:bg-orange-500 ${
              isAnimating ? "transform translate-x-[100vw] opacity-0" : ""
            }`}
            style={{ transitionDelay: isAnimating ? "0ms" : "0ms" }}
            onClick={handleStartAnimation}
          ></div>
          <div
            className={`col-span-2 row-span-2 rounded-[45px] bg-amber-300 h-full shadow-lg transition-all duration-300 ease-in-out hover:bg-amber-400 ${
              isAnimating ? "transform translate-x-[100vw] opacity-0" : ""
            }`}
            style={{ transitionDelay: isAnimating ? "50ms" : "0ms" }}
            onClick={handleStartAnimation}
          ></div>
          <div
            className={`col-span-4 row-span-1 rounded-[45px] bg-purple-300 h-full shadow-lg transition-all duration-300 ease-in-out hover:bg-purple-400 ${
              isAnimating ? "transform translate-x-[100vw] opacity-0" : ""
            }`}
            style={{ transitionDelay: isAnimating ? "150ms" : "0ms" }}
            onClick={handleStartAnimation}
          ></div>
          <div
            className={`col-span-2 row-span-1 rounded-[45px] bg-red-300 h-full shadow-lg transition-all duration-300 ease-in-out hover:bg-red-400 ${
              isAnimating ? "transform translate-x-[100vw] opacity-0" : ""
            }`}
            style={{ transitionDelay: isAnimating ? "200ms" : "0ms" }}
            onClick={handleStartAnimation}
          ></div>
          <div
            className={`col-span-4 row-span-1 rounded-[45px] bg-blue-300 h-full shadow-lg transition-all duration-300 ease-in-out hover:bg-blue-400 ${
              isAnimating ? "transform translate-x-[100vw] opacity-0" : ""
            }`}
            style={{ transitionDelay: isAnimating ? "100ms" : "0ms" }}
            onClick={handleStartAnimation}
          ></div>
        </div>
      </div>
    </main>
  );
};
