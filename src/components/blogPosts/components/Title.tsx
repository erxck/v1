export default function Title({
  title,
  date,
}: {
  title: string;
  date: string;
}): JSX.Element {
  return (
    <div className="flex flex-col gap-1 border-b border-b-gray-700 pb-10">
      <h1 className="text-xl text-gray-200 font-bold lg:text-3xl">{title}</h1>
      <h2 className="text-xs text-slate-400 font-bold md:text-sm">{date}</h2>
    </div>
  );
}
