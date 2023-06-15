import { OthersProjectProps } from "@/types/Project";
import Link from "next/link";
import { useState } from "react";

type ProjectsProps = {
  projects: OthersProjectProps[];
};

export default function OthersProjects({ projects }: ProjectsProps) {
  const [numProjects, setNumProjects] = useState<number>(6);

  const handleShowMore = () => {
    setNumProjects(numProjects + 6);
  };

  return (
    <section className="mt-20 md:mt-34">
      <div className="border-l-4 border-emerald-400/30 pl-3">
        <h1 className="text-2xl text-emerald-400 font-bold md:text-3xl lg:text-4xl">
          Outros
        </h1>
      </div>
      <section className="mt-10">
        {projects && projects.length === 0 ? (
          <div className="p-6 w-full h-60 bg-gray-700/40 backdrop-blur-md ring-1 ring-gray-700/80 rounded-lg flex flex-col justify-center gap-4">
            <h1 className="text-xl text-gray-200 font-bold">
              Nenhum projeto encontrado
            </h1>
          </div>
        ) : (
          <>
            <ul className="grid grid-cols-1 gap-5 md:grid-cols-2 xl:grid-cols-3">
              {projects.slice(0, numProjects).map((project) => (
                <li
                  className="p-6 w-full h-60 bg-gray-700/40 backdrop-blur-md ring-1 ring-gray-700/80 rounded-lg flex flex-col justify-between gap-4"
                  key={project.id}
                >
                  <div className="flex flex-col gap-2">
                    <h1 className="text-xl text-gray-200 font-bold">
                      {project.name}
                    </h1>
                    <p className="text-sm text-gray-400">
                      {project.description}
                    </p>
                  </div>
                  <div className="flex items-center justify-between gap-4">
                    <span className="text-gray-400 text-sm">
                      {project.language}
                    </span>
                    <div className="flex items-center justify-center gap-4">
                      {project.homepage && (
                        <Link
                          className="flex items-center text-emerald-400 border border-emerald-400 py-3 px-4 text-base lg:text-lg font-bold rounded hover:bg-emerald-400/10 ease-in duration-300"
                          href={project.homepage}
                          passHref
                          target="_blank"
                          rel="noopener noreferrer"
                        >
                          <i className="bx bx-link-external"></i>
                        </Link>
                      )}
                      <Link
                        className="flex items-center text-emerald-400 border border-emerald-400 py-3 px-4 text-base lg:text-lg font-bold rounded hover:bg-emerald-400/10 ease-in duration-300"
                        href={project.html_url}
                        passHref
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <i className="bx bxl-github"></i>
                      </Link>
                    </div>
                  </div>
                </li>
              ))}
            </ul>
            {projects.length > numProjects && (
              <div className="flex justify-center mt-10 lg:mt-14">
                <button
                  className="w-fit py-3 px-7 text-sm font-bold text-center uppercase text-emerald-400 border border-emerald-400 rounded hover:bg-emerald-400/10 ease-in duration-300 lg:py-4 lg:px-10"
                  onClick={handleShowMore}
                  type="button"
                >
                  Ver mais
                </button>
              </div>
            )}
          </>
        )}
      </section>
    </section>
  );
}
