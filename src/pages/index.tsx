import { GetStaticProps, InferGetStaticPropsType } from "next";

import Layout from "@/components/Layout";
import Home from "@/components/Home";
import About from "@/components/About";
import Projects from "@/components/Projects";
import OthersProjects from "@/components/OthersProjects";
import Contact from "@/components/Contact";

import {
  IconTypeScript,
  IconFirebase,
  IconReact,
  IconTailwind,
} from "@/components/icons";
import { loadProjects } from "@/lib/load-projects";
import { OthersProjectProps } from "@/types/Project";

import PreviewSearchBinary from "@/assets/img/search_binary.png";
import PreviewGoogleKeepClone from "@/assets/img/google-keep-clone.png";
import PreviewSortingAlgorithms from "@/assets/img/SortingAlgorithms.png";

export default function index({
  projects,
}: InferGetStaticPropsType<typeof getStaticProps>) {
  const featuredProjects = [
    {
      id: 1,
      projectImage: PreviewSortingAlgorithms,
      name: "Sorting Algorithms Visualizer",
      homepage: "https://sorting-algorithms-visualizer-erick.vercel.app/",
      html_url: "https://github.com/erxck/sorting-algorithm-visualizer",
      description:
        "Visualizador de algoritmos de ordenação desenvolvido com React e Tailwind CSS.",
      tecnologias: [
        {
          id: 1,
          name: "React",
          icon: IconReact,
        },
        {
          id: 2,
          name: "Tailwind CSS",
          icon: IconTailwind,
        },
        { id: 3, name: "", icon: null },
        {
          id: 4,
          name: "",
          icon: null,
        },
      ],
    },
    {
      id: 2,
      projectImage: PreviewSearchBinary,
      name: "Artigo: Pesquisa Binária e Pesquisa Linear",
      homepage: "",
      html_url: "https://github.com/erxck/pesquisa-binaria",
      description:
        "Explorando as diferenças entre pesquisa binária e pesquisa linear: uma análise comparativa dos algoritmos de busca mais populares.",
      tecnologias: [
        {
          id: 1,
          name: "",
          icon: null,
        },
        {
          id: 2,
          name: "",
          icon: null,
        },
        { id: 3, name: "", icon: null },
        {
          id: 4,
          name: "",
          icon: null,
        },
      ],
    },
    {
      id: 3,
      projectImage: PreviewGoogleKeepClone,
      name: "Google Keep Clone",
      homepage: "https://keep-clone-21bed.web.app/",
      html_url: "https://github.com/erxck/google-keep-clone",
      description:
        "Aplicação web clone do Google Keep, desenvolvida com TypeScript, React, Tailwind CSS e Firebase.",
      tecnologias: [
        {
          id: 1,
          name: "TypeScript",
          icon: IconTypeScript,
        },
        {
          id: 2,
          name: "React",
          icon: IconReact,
        },
        { id: 3, name: "Tailwind CSS", icon: IconTailwind },
        {
          id: 4,
          name: "Firebase",
          icon: IconFirebase,
        },
      ],
    },
  ];

  return (
    <Layout>
      <Home />
      <div className="px-6 py-16 w-full max-w-[1440px] mx-auto sm:px-16 lg:px-24 xl:px-36">
        {/* About */}
        <About />

        {/* Projects */}
        <Projects featuredProjects={featuredProjects} />

        {/* Others Projects */}
        <OthersProjects projects={projects} />

        {/* Contact */}
        <Contact />
      </div>
    </Layout>
  );
}

export const getStaticProps: GetStaticProps<{
  projects: OthersProjectProps[];
}> = async () => {
  const projects = await loadProjects();

  return {
    props: {
      projects,
    },
  };
};
