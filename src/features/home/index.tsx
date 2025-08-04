import Image from "next/image";
import { Project } from "../../types/project";

interface HomeProps {
  projects: Project[];
}

export const Home = ({ projects }: HomeProps) => {
  console.log("projects", projects);
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
        <div className="col-span-6 flex flex-col gap-4 pl-5 justify-center h-full pr-10">
          <div className="flex items-center gap-2 border border-white/20 w-fit px-4 py-1.5 rounded-md">
            <h3 className="text-xl font-syne uppercase text-gray-300 font-medium">
              Devnads presents
            </h3>
          </div>
          <h1 className="text-4xl font-bold font-syne uppercase mt-5">
            <span className="text-6xl">Welcome</span> to <br />
            the <span className="text-6xl">devnads</span> <br />
            <span className="text-6xl">office</span>
          </h1>
          <p className="text-xl mt-6 text-white/80 font-light max-w-xl">
            We are a team of developers who are passionate about creating
            innovative solutions for the future. We are a team of developers who
            are passionate about creating innovative solutions
          </p>
        </div>
        <div className="col-span-8 h-full grid grid-cols-6 grid-rows-4 gap-6">
          <div className="col-span-4 row-span-2 bg-emerald-400 h-full rounded-[45px] rounded-br-[45px] shadow-lg transition-all hover:bg-emerald-500"></div>
          <div className="col-span-2 bg-orange-400 h-full rounded-[45px] shadow-lg transition-all hover:bg-emerald-500"></div>
          <div className="col-span-2 row-span-2 rounded-[45px] bg-amber-300 h-full shadow-lg transition-all hover:bg-amber-400"></div>
          <div className="col-span-4 row-span-1 rounded-[45px] bg-purple-300 h-full shadow-lg transition-all hover:bg-purple-400"></div>
          <div className="col-span-2 row-span-1 rounded-[45px] bg-red-300 h-full shadow-lg transition-all hover:bg-red-400"></div>
          <div className="col-span-4 row-span-1 rounded-[45px] bg-blue-300 h-full shadow-lg transition-all hover:bg-blue-400"></div>
        </div>
      </div>
    </main>
  );
};
