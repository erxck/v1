export default function WorkingLinearSearch({
  id,
}: {
  id: string;
}): JSX.Element {
  return (
    <section
      id={id}
      className="flex flex-col gap-4 w-full text-sm text-slate-300 border-b border-b-gray-700 py-10 scroll-m-16 md:text-base"
    >
      <h1 className="text-lg text-gray-200 font-bold md:text-xl">
        Como funciona a Pesquisa Linear?
      </h1>
      <p>
        A <strong className="text-emerald-400">pesquisa linear</strong> é um
        algoritmo simples de{" "}
        <strong className="text-emerald-400">complexidade linear</strong>, ou
        seja, o tempo de execução do algoritmo cresce linearmente com o tamanho
        da entrada e funciona em qualquer lista de elementos, seja ordenada ou
        não.
      </p>
      <p>
        Por exemplo, se você tiver uma lista com{" "}
        <strong className="text-emerald-400">1.000.000</strong> de elementos, e
        seu elemento desejado for o primeiro elemento da lista, então você
        precisará de <strong className="text-emerald-400">1</strong> de etapa
        para encontrar o elemento desejado, que é o melhor caso.
      </p>
      <p>
        Mas se o elemento desejado estiver no último elemento da lista, então
        você precisará de{" "}
        <strong className="text-emerald-400">1.000.000</strong> de etapas para
        encontrar o elemento desejado, que é o pior caso.
      </p>
    </section>
  );
}
