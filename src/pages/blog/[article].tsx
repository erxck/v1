import Layout from "@/components/Layout";
import Link from "next/link";
import { useRouter } from "next/router";
import Image from "next/image";

import BinarySearch from "@/components/blogPosts/BinarySearch";
import WhatsAnAlgorithm from "@/components/blogPosts/WhatsAnAlgorithm";

export default function Page() {
  const router = useRouter();
  const { article } = router.query;

  const handlePagePosts = () => {
    switch (article) {
      case "pesquisa-binaria-e-pesquisa-linear":
        return <BinarySearch />;
      case "o-que-e-um-algoritmo":
        return <WhatsAnAlgorithm />;
      default:
        return (
          <section className="flex flex-col gap-1">
            <Link href={"/blog"}>
              <Image
                src={"/logo.png"}
                className="w-20 hover:scale-105 duration-300 cursor-pointer md:w-28"
                alt="Logo"
                width={100}
                height={100}
                priority
              ></Image>
            </Link>
            <h1 className="text-xl text-gray-200 mt-4 font-bold lg:text-3xl">
              404
            </h1>
            <h2 className="text-xs text-slate-400 font-bold md:text-sm">
              Página não encontrada
            </h2>
          </section>
        );
    }
  };

  return (
    <Layout>
      <div className="flex justify-start items-center mb-10">
        <Link
          className="flex items-center justify-center py-2 px-4 rounded-lg border border-emerald-400 hover:bg-emerald-400/10 transition duration-300 ease-in-out md:py-3 md:px-5"
          href="/blog"
          passHref
        >
          <i className="bx bx-left-arrow-alt text-emerald-400 text-xl"></i>
        </Link>
      </div>
      {handlePagePosts()}
    </Layout>
  );
}
