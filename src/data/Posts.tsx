type Post = {
  title: string;
  description: string;
  date: string;
  url: string;
};

const posts: Post[] = [
  {
    title: "Pesquisa Binária e Pesquisa Linear",
    description:
      "Explorando as diferenças entre pesquisa binária e pesquisa linear: uma análise comparativa dos algoritmos de busca mais populares.",
    date: "02 de Abril de 2023",
    url: "binary-search",
  },
  {
    title: "Listas Encadeadas",
    description: "O que são listas encadeadas e como elas funcionam?",
    date: "...",
    url: "linked-list",
  },
];

export default posts;
