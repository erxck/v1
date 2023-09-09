import Head from "next/head";
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

import PreviewBinarySearch from "@/assets/img/preview_binary_search.png";
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
      projectImage: PreviewBinarySearch,
      name: "Artigo: Pesquisa Binária e Pesquisa Linear",
      homepage: "/blog/binary-search",
      html_url: "",
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
    <>
      <Head>
        <title>Erick Rian</title>
        <meta name="description" content="Erick Rian" />
        <link rel="icon" href="/favicon.ico" />

        <meta property="og:title" content="Erick Rian" />
        <meta property="og:description" content="Portfólio de Erick Rian" />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://erickrian.com/" />
        <meta property="og:image" content="/preview.png" />
        <meta property="og:image:alt" content="Erick Rian" />
        <meta property="og:locale" content="pt_BR" />
        <meta property="og:site_name" content="Erick Rian" />

        <meta name="theme-color" content="#111827" />
        <meta name="msapplication-TileColor" content="#111827" />
        <meta name="msapplication-TileImage" content="/favicon.ico" />
        <meta name="msapplication-config" content="/favicon.ico" />

        <link rel="apple-touch-icon" href="/favicon.ico" />
      </Head>
      <Layout>
        {/* Home */}
        <Home />

        {/* About */}
        <About />

        {/* Projects */}
        <Projects featuredProjects={featuredProjects} />

        {/* Others Projects */}
        <OthersProjects projects={projects} />

        {/* Contact */}
        <Contact />
      </Layout>
    </>
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
