export default function Runtime({ id }: { id: string }): JSX.Element {
  return (
    <section
      id={id}
      className="flex flex-col gap-4 w-full text-sm text-slate-300 border-b border-b-gray-700 py-10 scroll-m-16 md:text-base"
    >
      <h1 className="text-lg text-gray-200 font-bold md:text-xl">
        Tempo de execução
      </h1>
      <div>
        <p>
          O tempo de execução da{" "}
          <strong className="text-emerald-400">pesquisa binária</strong> é{" "}
          <strong className="text-emerald-400">O(log n)</strong>.
        </p>
        <p>
          O tempo de execução da{" "}
          <strong className="text-emerald-400">pesquisa linear</strong> é{" "}
          <strong className="text-emerald-400">O(n)</strong>.
        </p>
      </div>
      <table className="bg-gray-700/20 text-center mt-3 w-fit">
        <thead>
          <tr className="border border-gray-700">
            <th className="p-3 border-r border-gray-700">Pesquisa Linear</th>
            <th className="p-3">Pesquisa Binária</th>
          </tr>
        </thead>
        <tbody>
          <tr className="border border-gray-700">
            <td className="p-3 border-r border-gray-700">
              100 itens
              <br />
              <i className="bx bx-down-arrow-alt"></i>
              <br />
              100 etapas
            </td>
            <td className="p-3">
              100 itens
              <br />
              <i className="bx bx-down-arrow-alt"></i>
              <br />7 etapas
            </td>
          </tr>
          <tr className="border border-gray-700">
            <td className="p-3 border-r border-gray-700">
              1.000 itens
              <br />
              <i className="bx bx-down-arrow-alt"></i>
              <br />
              1.000 etapas
            </td>
            <td className="p-3">
              1.000 itens
              <br />
              <i className="bx bx-down-arrow-alt"></i>
              <br />
              10 etapas
            </td>
          </tr>
          <tr className="border border-gray-700">
            <td className="p-3 border-r border-gray-700">
              1.048.576 itens
              <br />
              <i className="bx bx-down-arrow-alt"></i>
              <br />
              1.048.576 etapas
            </td>
            <td className="p-3">
              1.048.576 itens
              <br />
              <i className="bx bx-down-arrow-alt"></i>
              <br />
              20 etapas
            </td>
          </tr>
          <tr className="border border-gray-700">
            <td className="p-3 border-r border-gray-700">O(n)</td>
            <td className="p-3">O(log n)</td>
          </tr>
        </tbody>
      </table>
      <div className="mt-3">
        <p>
          <strong className="text-emerald-400">O(n)</strong>: É o tempo de
          execução Linear.
        </p>
        <p>
          <strong className="text-emerald-400">O(log n)</strong>: É o tempo de
          execução Logaritmo.
        </p>
      </div>
    </section>
  );
}
