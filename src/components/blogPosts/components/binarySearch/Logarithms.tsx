export default function Logarithms({ id }: { id: string }): JSX.Element {
  return (
    <section
      id={id}
      className="flex flex-col gap-4 w-full text-sm text-slate-300 border-b border-b-gray-700 py-10 scroll-m-16 md:text-base"
    >
      <h1 className="text-lg text-gray-200 font-bold md:text-xl">Logaritmos</h1>
      <p>
        Antes de conhecer a{" "}
        <strong className="text-emerald-400">pesquisa binária</strong>, você
        precisa entender como funciona os{" "}
        <strong className="text-emerald-400">logaritmos</strong>.
      </p>
      <p>
        <strong className="text-emerald-400">Logaritmo</strong> é a operação
        inversa da exponenciação. Em outras palavras, o logaritmo de um número é
        o expoente ao qual outro valor fixo, a base, deve ser elevado para
        produzir esse número.
      </p>
      <table className="bg-gray-700/20 mt-3 w-fit text-center">
        <thead>
          <tr className="border border-gray-700">
            <th className="p-3 border-r border-gray-700">Exponenciação</th>
            <th className="p-3">Logaritmo</th>
          </tr>
        </thead>
        <tbody>
          <tr className="border border-gray-700">
            <td className="p-3 border-r border-gray-700">10² = 100</td>
            <td className="p-3">log₁₀100 = 2</td>
          </tr>
          <tr className="border border-gray-700">
            <td className="p-3 border-r border-gray-700">10³ = 1000</td>
            <td className="p-3">log₁₀1000 = 3</td>
          </tr>
          <tr className="border border-gray-700">
            <td className="p-3 border-r border-gray-700">2³ = 8</td>
            <td className="p-3">log₂8 = 3</td>
          </tr>
          <tr className="border border-gray-700">
            <td className="p-3 border-r border-gray-700">2⁴ = 16</td>
            <td className="p-3">log₂16 = 4</td>
          </tr>
          <tr className="border border-gray-700">
            <td className="p-3 border-r border-gray-700">2⁵ = 32</td>
            <td className="p-3">log₂32 = 5</td>
          </tr>
        </tbody>
      </table>
      <p className="mt-4">
        Para a <strong className="text-emerald-400">pesquisa binária</strong>, a
        base do logaritmo é sempre{" "}
        <strong className="text-emerald-400">2</strong>.
        <br />
        Ex: <strong className="text-emerald-400">log₂(x)</strong>, mas
        normalmente é escrito apenas como{" "}
        <strong className="text-emerald-400">log(x)</strong>.
      </p>
    </section>
  );
}
