export default function WorkingBinarySearch({
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
        Como funciona a Pesquisa Binária?
      </h1>
      <p>
        A <strong className="text-emerald-400">pesquisa binária</strong>{" "}
        funciona apenas em uma lista ordenada de elementos. Com base nisso, ela
        usa <strong className="text-emerald-400">logaritmo</strong> para
        determinar quantas etapas são necessárias para encontrar o elemento
        desejado.
      </p>
      <p>
        Tá, mas onde entra o{" "}
        <strong className="text-emerald-400">logaritmo</strong> para determinar
        quantas etapas são necessárias? Vou te explicar.
      </p>
      <div className="border-l-4 border-emerald-400/30 pl-3 mt-1">
        <p>
          Se você tem uma lista de{" "}
          <strong className="text-emerald-400">128</strong> elementos, então:
          <br />
          <strong className="text-emerald-400">log(128) = 7</strong>, pois{" "}
          <strong className="text-emerald-400">2⁷ = 128</strong>. Ou seja, você
          precisa de no maximo <strong className="text-emerald-400">7</strong>{" "}
          etapas para encontrar o elemento desejado.
        </p>
        <p className="flex items-center flex-wrap mt-2">
          [128 itens] <i className="bx bx-right-arrow-alt mx-2"></i> [64]{" "}
          <i className="bx bx-right-arrow-alt mx-2"></i> [32]{" "}
          <i className="bx bx-right-arrow-alt mx-2"></i> [16]{" "}
          <i className="bx bx-right-arrow-alt mx-2"></i> [8]{" "}
          <i className="bx bx-right-arrow-alt mx-2"></i> [4]{" "}
          <i className="bx bx-right-arrow-alt mx-2"></i> [2]{" "}
          <i className="bx bx-right-arrow-alt mx-2"></i> [1] = (no maximo 7
          etapas).
        </p>
      </div>
      <div className="border-l-4 border-emerald-400/30 pl-3 my-4">
        <p>
          Lista de <strong className="text-emerald-400">1.024</strong>{" "}
          elementos:
          <br />
          <strong className="text-emerald-400">log(1.024) = 10</strong>, pois{" "}
          <strong className="text-emerald-400">2¹⁰ = 1.024</strong>. no maximo{" "}
          <strong className="text-emerald-400">10</strong> etapas.
        </p>
        <p className="flex items-center flex-wrap mt-2">
          [1.024 itens] <i className="bx bx-right-arrow-alt mx-2"></i> [512]{" "}
          <i className="bx bx-right-arrow-alt mx-2"></i> [256]{" "}
          <i className="bx bx-right-arrow-alt mx-2"></i> [128]{" "}
          <i className="bx bx-right-arrow-alt mx-2"></i> [64]{" "}
          <i className="bx bx-right-arrow-alt mx-2"></i> [32]{" "}
          <i className="bx bx-right-arrow-alt mx-2"></i> [16]{" "}
          <i className="bx bx-right-arrow-alt mx-2"></i> [8]{" "}
          <i className="bx bx-right-arrow-alt mx-2"></i> [4]{" "}
          <i className="bx bx-right-arrow-alt mx-2"></i> [2]{" "}
          <i className="bx bx-right-arrow-alt mx-2"></i> [1] = (no maximo 10
          etapas).
        </p>
      </div>
      <div className="border-l-4 border-emerald-400/30 pl-3">
        <p>
          Lista de <strong className="text-emerald-400">1.048.576</strong>{" "}
          elementos:
          <br />
          <strong className="text-emerald-400"> log(1.048.576) = 20</strong>,
          pois <strong className="text-emerald-400">2²⁰ = 1.048.576</strong>. no
          maximo <strong className="text-emerald-400">20</strong> etapas.
        </p>
        <p className="flex items-center flex-wrap mt-2">
          [1.048.576 itens] <i className="bx bx-right-arrow-alt mx-2"></i>{" "}
          [524.288] <i className="bx bx-right-arrow-alt mx-2"></i> [262.144]{" "}
          <i className="bx bx-right-arrow-alt mx-2"></i> [131.072]{" "}
          <i className="bx bx-right-arrow-alt mx-2"></i> [65.536]{" "}
          <i className="bx bx-right-arrow-alt mx-2"></i> [32.768]{" "}
          <i className="bx bx-right-arrow-alt mx-2"></i> [16.384]{" "}
          <i className="bx bx-right-arrow-alt mx-2"></i> [8.192]{" "}
          <i className="bx bx-right-arrow-alt mx-2"></i> [4.096]{" "}
          <i className="bx bx-right-arrow-alt mx-2"></i> [2.048]{" "}
          <i className="bx bx-right-arrow-alt mx-2"></i> [1.024]{" "}
          <i className="bx bx-right-arrow-alt mx-2"></i> [512]{" "}
          <i className="bx bx-right-arrow-alt mx-2"></i> [256]{" "}
          <i className="bx bx-right-arrow-alt mx-2"></i> [128]{" "}
          <i className="bx bx-right-arrow-alt mx-2"></i> [64]{" "}
          <i className="bx bx-right-arrow-alt mx-2"></i> [32]{" "}
          <i className="bx bx-right-arrow-alt mx-2"></i> [16]{" "}
          <i className="bx bx-right-arrow-alt mx-2"></i> [8]{" "}
          <i className="bx bx-right-arrow-alt mx-2"></i> [4]{" "}
          <i className="bx bx-right-arrow-alt mx-2"></i> [2]{" "}
          <i className="bx bx-right-arrow-alt mx-2"></i> [1] = (no maximo 20
          etapas).
        </p>
      </div>
      <p className="mt-4">
        <strong className="text-emerald-400">log(n) = x</strong>, onde{" "}
        <strong className="text-emerald-400">n</strong> é o número de elementos
        da lista e <strong className="text-emerald-400">x</strong> é o número de
        etapas necessárias para encontrar o elemento desejado.
      </p>
    </section>
  );
}
