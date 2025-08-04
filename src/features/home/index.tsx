import { Project } from "@/types/project";
import { addressSlicer } from "@/utils/format";

interface HomeProps {
  projects: Project[];
}

export const Home = ({ projects }: HomeProps) => {
  console.log("projects", projects);
  return (
    <main>
      <div className="grid grid-cols-3 gap-4 p-4">
        {projects.map((project) => {
          return (
            <div
              className="bg-[#252525] p-6 rounded-2xl border border-gray-800"
              key={project.id}
            >
              <h1 className="text-2xl font-bold text-white">{project.name}</h1>
              <p className="text-gray-400">{project.description}</p>

              {/* <img src={project.image} alt={project.name} /> */}
              <table className="w-full mt-4">
                <tbody>
                  <tr>
                    <td className="font-bold">Username:</td>
                    <td>{project.dev?.username}</td>
                  </tr>
                  <tr>
                    <td className="font-bold">Profile Image:</td>
                    <td>{project.dev?.profile_image}</td>
                  </tr>
                  <tr>
                    <td className="font-bold">Roles:</td>
                    <td>{project.dev?.roles.join(", ")}</td>
                  </tr>
                  <tr>
                    <td className="font-bold">Discord:</td>
                    <td>{project.dev?.discord}</td>
                  </tr>
                  <tr>
                    <td className="font-bold">Github:</td>
                    <td>{project.dev?.github}</td>
                  </tr>
                  <tr>
                    <td className="font-bold">Twitter:</td>
                    <td>{project.dev?.twitter}</td>
                  </tr>
                  <tr>
                    <td className="font-bold">Address:</td>
                    <td>{addressSlicer(project.dev?.address || "")}</td>
                  </tr>
                  <tr>
                    <td className="font-bold">Created At:</td>
                    <td>{project.dev?.created_at}</td>
                  </tr>
                </tbody>
              </table>
            </div>
          );
        })}{" "}
      </div>
    </main>
  );
};
