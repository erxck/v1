import Link from "next/link";

export default function Implementation({ id }: { id: string }): JSX.Element {
  return (
    <>
      <section
        id={id}
        className="flex flex-col gap-5 w-full text-sm text-slate-300 pt-10 scroll-m-16 md:text-base sm:justify-normal"
      >
        <h1 className="text-lg text-gray-200 font-bold md:text-xl">
          Implementação
        </h1>
        <div className="flex flex-wrap gap-5">
          <div className="space-y-2">
            <h1 className="text-base text-emerald-400 font-bold md:text-base">
              Pesquisa Binária:
            </h1>
            <pre className="text-xs text-slate-300 bg-gray-700/20 rounded-lg p-1 border border-gray-700 sm:p-4 md:text-base">
              <code>
                {`function binarySearch(list, item) {
  let low = 0;
  let high = list.length - 1;

  while (low <= high) {
    let mid = Math.floor((low + high) / 2);
    let guess = list[mid];

    if (guess === item) {
      return mid;
    }

    if (guess > item) {
      high = mid - 1;
    } else {
      low = mid + 1;
    }
  }

  return "Item não encontrado";
}

const myList = [1, 2, 3, 4, 5, 6, 7, 8];

console.log(binarySearch(myList, 7)); // 6
`}
              </code>
            </pre>
          </div>
          <div className="space-y-2">
            <h1 className="text-base text-emerald-400 font-bold md:text-base">
              Pesquisa Linear:
            </h1>
            <pre className="text-xs text-slate-300 bg-gray-700/20 rounded-lg p-1 border border-gray-700 sm:p-4 md:text-base">
              <code>
                {`function linearSearch(list, item) {
  for (let i = 0; i < list.length; i++) {
    if (list[i] === item) {
      return i;
    }
  }

  return "Item não encontrado";
}

const myList = [1, 2, 3, 4, 5, 6, 7, 8];

console.log(linearSearch(myList, 7)); // 6

`}
              </code>
            </pre>
          </div>
        </div>
        <p>
          Em meu GitHub tem o código completo comentado passo a passo, caso
          queira dar uma olhada:{" "}
          <Link
            className="text-emerald-400 hover:underline duration-300 ease-in-out"
            href="https://github.com/erxck/pesquisa-binaria"
            target="_blank"
            rel="noopener noreferrer"
            passHref
            title="Código completo no GitHub"
          >
            Click aqui
          </Link>
        </p>
      </section>
    </>
  );
}
