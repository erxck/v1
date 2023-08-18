import Introducion from "./components/Introduction";
import Logarithms from "./components/binarySearch/Logarithms";
import WorkingBinarySearch from "./components/binarySearch/WorkingBinarySearch";
import WorkingLinearSearch from "./components/binarySearch/WorkingLinearSearch";
import Runtime from "./components/binarySearch/Runtime";
import Examples from "./components/binarySearch/Examples";
import Implementation from "./components/binarySearch/Implementation";
import Navigation from "./components/Navigation";
import Title from "./components/Title";

type NavigationItem = {
  id: string;
  title: string;
};

export default function BinarySearch(): JSX.Element {
  const nav: NavigationItem[] = [
    {
      id: "introduction",
      title: "Introdução",
    },
    {
      id: "logarithms",
      title: "Logaritmos",
    },
    {
      id: "binary-search",
      title: "Pesquisa Binária",
    },
    {
      id: "linear-search",
      title: "Pesquisa Linear",
    },
    {
      id: "runtime",
      title: "Tempo de execução",
    },
    {
      id: "examples",
      title: "Exemplos",
    },
    {
      id: "implementation",
      title: "Implementação",
    },
  ];

  return (
    <div className="block xl:flex xl:gap-10 xl:flex-row xl:justify-between">
      <Navigation
        navigation={nav}
        githubLink="https://github.com/erxck/binary-search"
      />

      <div className="flex flex-col">
        <Title
          title="Pesquisa Binária e Pesquisa Linear"
          date="02 de Abril de 2023"
        />
        <Introducion id="introduction">
          <p>
            A <strong className="text-emerald-400">pesquisa binária</strong> é
            um algoritmo eficiente para encontrar um elemento em uma lista
            ordenada que contenha um grande número de dados (milhares ou milhões
            de elementos). O algoritmo funciona dividindo repetidamente a metade
            da lista de elementos em que o elemento pode estar até que o
            elemento seja encontrado.
          </p>
          <p>
            A <strong className="text-emerald-400">pesquisa linear</strong> é um
            algoritmo simples de pesquisa que percorre uma lista
            sequencialmente, verificando cada elemento da lista até encontrar o
            elemento desejado ou até chegar ao final da lista.
          </p>
        </Introducion>
        <Logarithms id="logarithms" />
        <WorkingBinarySearch id="binary-search" />
        <WorkingLinearSearch id="linear-search" />
        <Runtime id="runtime" />
        <Examples id="examples" />
        <Implementation id="implementation" />
      </div>
    </div>
  );
}
