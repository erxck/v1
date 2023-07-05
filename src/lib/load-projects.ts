import axios from "axios";
import { OthersProjectProps } from "@/types/Project";
import { GetStaticProps } from "next";

export async function loadProjects(): Promise<OthersProjectProps[]> {
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

  return projects;
}
