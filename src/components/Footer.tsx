import { loadProjects } from "@/lib/load-projects";
import { OthersProjectProps } from "@/types/Project";
import { GetStaticProps, InferGetStaticPropsType } from "next";
import Link from "next/link";
import { useEffect, useState } from "react";

export default function Footer() {
  const [projects, setProjects] = useState<OthersProjectProps[]>([]);
  useEffect(() => {
    async function load() {
      const response = await loadProjects();
      const data = response.filter((project) => project.id === 653839230);
      setProjects(data);
    }
    load();
  }, []);

  return (
    <footer className="py-6 bg-gray-800/50">
      <div className="flex justify-center">
        <Link
          href="https://github.com/erxck/v1"
          className="group flex flex-col items-center gap-1 text-sm text-slate-400 hover:text-emerald-600 duration-300"
          target="_blank"
          rel="noopener noreferrer"
        >
          <p>
            Projetado e desenvolvido por{" "}
            <span className="font-bold">Erick Rian</span>
          </p>
          <div className="space-x-2 flex items-center">
            <i className="bx bxs-star"></i>
            <span>{projects[0]?.stargazers_count}</span>
          </div>
        </Link>
      </div>
    </footer>
  );
}
