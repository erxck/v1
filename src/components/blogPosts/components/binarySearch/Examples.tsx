export default function Examples({ id }: { id: string }): JSX.Element {
  return (
    <section
      id={id}
      className="flex flex-col gap-4 w-full text-sm text-slate-300 border-b border-b-gray-700 py-10 scroll-m-16 md:text-base"
    >
      <h1 className="text-lg text-gray-200 font-bold md:text-xl">Exemplos</h1>
      <p>
        Se você tem uma lista de{" "}
        <strong className="text-emerald-400">log(n)</strong> elementos
        ordenados, e você quer encontrar um número que está dentro dessa lista,
        o algoritmo irá começar dividindo a lista em duas partes e verificar se
        o número é igual o número do meio da lista, se não for, ele irá
        verificar se o número é maior ou menor que o número do meio da lista, se
        for maior, ele irá descartar a primeira metade da lista e se for menor
        ele irá descartar a segunda metade da lista, e assim por diante até
        encontrar o número desejado.
      </p>
      <p>
        Uma lista de <strong className="text-emerald-400">8</strong> elementos
        ordenados, só precisará de no máximo{" "}
        <strong className="text-emerald-400">3</strong> etapas para encontrar o
        número desejado.
      </p>
      <div>
        <p>
          Lista:{" "}
          <strong className="text-emerald-400">[1, 2, 3, 4, 5, 6, 7, 8]</strong>
        </p>
        <p>
          Número desejado: <strong className="text-emerald-400">7</strong>
        </p>
      </div>
      <ol className="border-l-4 border-emerald-400/30 pl-3 my-2 flex flex-col gap-4">
        <li>
          <strong>Etapa 1:</strong> Dividir a lista em duas partes:{" "}
          <strong className="text-emerald-400">[1, 2, 3, 4]</strong> e{" "}
          <strong className="text-emerald-400">[5, 6, 7, 8]</strong>
        </li>
        <li>
          <strong>Etapa 2:</strong> Pega o número do meio da lista:{" "}
          <strong className="text-emerald-400">5</strong>
        </li>
        <li>
          <strong>Etapa 3:</strong> Verifica se{" "}
          <strong className="text-emerald-400">7</strong> é igual ao meio da
          lista <strong className="text-emerald-400">(5)</strong>, se não for,
          verifica se o <strong className="text-emerald-400">7</strong> é maior
          ou menor que o meio da lista{" "}
          <strong className="text-emerald-400">(5)</strong>, se for maior,
          descarta a primeira metade da lista{" "}
          <strong className="text-emerald-400">[1, 2, 3, 4]</strong>, se for
          menor, descarta a segunda metade da lista{" "}
          <strong className="text-emerald-400">[5, 6, 7, 8]</strong>.
        </li>
        <li>
          <strong>Etapa 4:</strong> Lista atual:{" "}
          <strong className="text-emerald-400">[6, 7, 8]</strong>, sem o número{" "}
          <strong className="text-emerald-400">5</strong>, pois ele já foi
          verificado e não é igual ao{" "}
          <strong className="text-emerald-400">7</strong>.
        </li>
        <li>
          <strong>Etapa 5:</strong> Pega o número do meio da lista:{" "}
          <strong className="text-emerald-400">7</strong>
        </li>
        <li>
          <strong>Etapa 6:</strong> Verifica se{" "}
          <strong className="text-emerald-400">7</strong> é igual ao meio da
          lista <strong className="text-emerald-400">(7)</strong>, se for,
          retorna o índice do número desejado.
        </li>
      </ol>
      <div>
        <p>
          Foi necessário apenas <strong className="text-emerald-400">2</strong>{" "}
          etapas para encontrar o número desejado.
        </p>
        <p>
          Enquanto na pesquisa linear, você levaria{" "}
          <strong className="text-emerald-400">7</strong> etapas.
        </p>
      </div>
    </section>
  );
}
