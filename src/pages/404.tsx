import Link from "next/link";
import Image from "next/image";
import Layout from "@/components/Layout";

export default function Custom404() {
  return (
    <section className="px-6 py-20 w-full max-w-[1440px] flex-1 mx-auto sm:px-16 lg:px-24 xl:px-36">
      <div className="flex flex-col">
        <Link href="/">
          <Image
            src={"/logo.png"}
            className="w-28 hover:scale-105 duration-300 cursor-pointer"
            alt="Logo"
            width={100}
            height={100}
            priority
          />
        </Link>
        <div className="flex flex-col gap-1 mt-10">
          <h1 className="text-xl text-gray-200 font-bold lg:text-3xl">404</h1>
          <p className="text-sm text-slate-400 md:text-base">
            Página não encontrada
          </p>
          <Link
            href="/"
            className="text-base text-emerald-400 font-bold hover:text-emerald-400/60 hover:underline hover:underline-offset-4"
          >
            Voltar para a página inicial
          </Link>
        </div>
      </div>
    </section>
  );
}
