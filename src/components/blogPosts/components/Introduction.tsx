type IntroductionProps = {
  id: string;
  children: React.ReactNode;
};

export default function Introduction({
  id,
  children,
}: IntroductionProps): JSX.Element {
  return (
    <section
      id={id}
      className="flex flex-col gap-4 w-full text-sm text-slate-300 border-b border-b-gray-700 py-10 scroll-m-16 md:text-base"
    >
      <h1 className="text-lg text-gray-200 font-bold md:text-xl">Introdução</h1>
      {children}
    </section>
  );
}
