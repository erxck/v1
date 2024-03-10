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
              <code lang="cpp">
                {`int binarySearch(std::vector<int> list, int item) {
  int low = 0;
  int high = list.size() - 1;

  while (low <= high) {
    int mid = (low + high) / 2;
    int guess = list[mid];

    if (guess == item) {
      return mid;
    }

    if (guess > item) {
      high = mid - 1;
    } else {
      low = mid + 1;
    }
  }

  return -1;
}
`}
              </code>
            </pre>
          </div>
          <div className="space-y-2">
            <h1 className="text-base text-emerald-400 font-bold md:text-base">
              Pesquisa Linear:
            </h1>
            <pre className="text-xs text-slate-300 bg-gray-700/20 rounded-lg p-1 border border-gray-700 sm:p-4 md:text-base">
              <code lang="cpp">
                {`int linearSearch(std::vector<int> list, int item) {
  for (int i = 0; i < list.size(); i++) {
    if (list[i] == item) {
      return i;
    }
  }

  return -1;
}
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
            href="https://github.com/erxck/binary-search"
            target="_blank"
            rel="noopener noreferrer"
            passHref
            title="Código completo no GitHub"
          >
            Código completo no GitHub
          </Link>
        </p>
      </section>
    </>
  );
}
