import Header from "@/components/Header";
import Home from "@/components/Home";
import Main from "@/components/Main";
import Footer from "@/components/Footer";
import Head from "next/head";
import type { InferGetStaticPropsType, GetStaticProps } from "next";

import axios from "axios";
import { OthersProjectProps } from "@/types/Project";

import "boxicons/css/boxicons.min.css";

export default function Index({
  projects,
}: InferGetStaticPropsType<typeof getStaticProps>) {
  const handleCursor = (e: any) => {
    const cursor = document.querySelector(".cursor");
    cursor?.setAttribute(
      "style",
      `top: ${e.pageY - 30}px; left: ${e.pageX - 30}px;`
    );
  };

  if (typeof window !== "undefined")
    window.addEventListener("mousemove", handleCursor);

  return (
    <div id="home">
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
      <Header />
      <Home />
      <Main projects={projects} />
      <Footer projects={projects} />
      <div className="cursor absolute w-16 h-16 bg-emerald-400 rounded-full z-50 pointer-events-none mix-blend-difference"></div>
    </div>
  );
}

export const getStaticProps: GetStaticProps<{
  projects: OthersProjectProps[];
}> = async () => {
  const username = "erxck";
  const language = ""; // Em branco para buscar todos os idiomas
  const sort = "created"; // Ordenar por data de atualização
  const params = {
    sort,
    direction: "desc",
    per_page: 100,
    language,
  };

  const { data } = await axios.get(
    `https://api.github.com/users/${username}/repos`,
    { params }
  );

  const filteredProjects = data.filter((project: any) => {
    const excludedProjectNames = [
      "erxck",
      "pesquisa-binaria",
      "sorting-algorithm-visualizer",
      "google-keep-clone",
    ];
    return !excludedProjectNames.includes(project.name);
  });

  const projects = filteredProjects.map((project: any) => ({
    id: project.id,
    name: project.name,
    description: project.description,
    html_url: project.html_url,
    homepage: project.homepage,
    created_at: project.created_at,
    updated_at: project.updated_at,
    language: project.language,
    stargazers_count: project.stargazers_count,
    forks_count: project.forks_count,
  }));

  return {
    props: {
      projects,
    },
  };
};
