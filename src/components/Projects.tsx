import Image from "next/image";
import Link from "next/link";
import { OthersProjectProps } from "@/types/Project";

type ProjectProps = {
  featuredProjects: OthersProjectProps[];
};

export default function Projects({
  featuredProjects,
}: ProjectProps): JSX.Element {
  return (
    <section className="mt-28 md:mt-48 scroll-m-28" id="projects">
      <div className="border-l-4 border-emerald-400/30 pl-3">
        <h2 className="mb-1 text-base text-emerald-400 font-bold md:text-lg lg:text-xl">
          Meus
        </h2>
        <h1 className="text-4xl text-gray-200 font-bold lg:text-5xl">
          Projetos
        </h1>
      </div>

      {featuredProjects.map((project) => (
        <section className="mt-10 space-y-10" key={project.id}>
          <div className="p-6 bg-gray-700/40 backdrop-blur-md ring-1 ring-gray-700/80 rounded-lg block md:flex md:justify-around md:items-center md:gap-10">
            <div
              className={`flex justify-center md:justify-start w-full
                ${project.id === 2 && "order-2"}`}
            >
              <Image
                className="w-full rounded"
                src={project.projectImage}
                width={500}
                height={500}
                alt={`Project ${project.name}`}
                priority={true}
              />
            </div>
            <div className="mt-4 md:mt-0 w-full">
              <h1 className="mb-4 text-2xl xl:text-3xl text-gray-200 font-bold">
                {project.name}
              </h1>
              <p className="text-sm lg:text-base text-slate-400 w-full">
                {project.description}
              </p>
              <div className="mt-6 flex items-center justify-start gap-2">
                {project.tecnologias.map((tecnologia) => (
                  <div key={tecnologia.id} className="flex items-center">
                    {tecnologia.icon !== null && (
                      <span className="text-emerald-400">
                        {tecnologia.icon}
                      </span>
                    )}
                  </div>
                ))}
              </div>
              <div className="mt-7 flex justify-end gap-4">
                {project.homepage !== "" && (
                  <Link
                    className="flex items-center text-emerald-400 border border-emerald-400 py-3 px-4 text-base lg:text-lg font-bold rounded hover:bg-emerald-400/10 ease-in duration-300"
                    href={project.homepage}
                    target={project.homepage.charAt(0) === "/" ? "" : "_blank"}
                    rel={
                      project.homepage.charAt(0) === "/"
                        ? ""
                        : "noopener noreferrer"
                    }
                    passHref
                    title="Veja o projeto"
                  >
                    <i className="bx bx-link-external"></i>
                  </Link>
                )}
                {project.html_url !== "" && (
                  <Link
                    className="flex items-center text-emerald-400 border border-emerald-400 py-3 px-4 text-base lg:text-xl font-bold rounded hover:bg-emerald-400/10 ease-in duration-300"
                    href={project.html_url}
                    target={project.html_url.charAt(0) === "/" ? "" : "_blank"}
                    rel={
                      project.html_url.charAt(0) === "/"
                        ? ""
                        : "noopener noreferrer"
                    }
                    passHref
                    title="GitHub"
                  >
                    <i className="bx bxl-github"></i>
                  </Link>
                )}
              </div>
            </div>
          </div>
          {project.id !== featuredProjects.length && (
            <div className="w-full flex justify-center">
              <span className="inline-block border-b border-b-gray-700 w-full max-w-[50%]"></span>
            </div>
          )}
        </section>
      ))}
    </section>
  );
}
