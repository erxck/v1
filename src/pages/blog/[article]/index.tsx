import Layout from "@/components/Layout";
import Link from "next/link";
import { useRouter } from "next/router";

import BinarySearch from "@/components/blogPosts/BinarySearch";
import WhatsAnAlgorithm from "@/components/blogPosts/WhatsAnAlgorithm";
import Head from "next/head";

export default function Page() {
  const router = useRouter();
  const { article } = router.query;

  const articles: { [key: string]: JSX.Element } = {
    "binary-search": <BinarySearch />,
    "whats-an-algorithm": <WhatsAnAlgorithm />,
  };

  const isValidArticle = (article: string): boolean => {
    const articles = ["binary-search", "whats-an-algorithm"];
    return articles.includes(article);
  };

  const titles: { [key: string]: string } = {
    "binary-search": "Pesquisa Binária e Pesquisa Linear",
    "whats-an-algorithm": "O que é um algoritmo?",
  };

  return (
    <>
      <Head>
        <title>{titles[article as string]} | Blog | Erick Rian</title>
        <meta
          name="description"
          content="Artigos sobre tecnologia, programação, desenvolvimento web e muito mais."
        />
        <meta property="og:title" content={titles[article as string]} />
        <meta
          property="og:description"
          content="Artigos sobre tecnologia, programação, desenvolvimento web e muito mais."
        />
        <meta property="og:type" content="website" />
        <meta
          property="og:url"
          content={`https://erickrian.com/blog/${article}`}
        />
        <meta property="og:locale" content="pt_BR" />
        <meta property="og:image:alt" content={titles[article as string]} />
        <meta property="og:site_name" content={titles[article as string]} />
      </Head>
      <Layout>
        <div
          className="flex justify-start items-center mb-10"
          data-aos="fade-down"
        >
          <Link
            className="flex items-center justify-center py-2 px-4 rounded-lg border border-emerald-400 hover:bg-emerald-400/10 transition duration-300 ease-in-out md:py-3 md:px-5"
            href="/blog"
            title="Voltar"
          >
            <span className="sr-only">Voltar</span>
            <i className="bx bx-left-arrow-alt text-emerald-400 text-xl"></i>
          </Link>
        </div>
        {isValidArticle(article as string) ? (
          <div
            className="block xl:flex xl:gap-10 xl:flex-row xl:justify-between"
            data-aos="fade-up"
          >
            {articles[article as string]}
          </div>
        ) : (
          <div className="flex flex-col gap-1 mt-10">
            <h1 className="text-xl text-gray-200 font-bold lg:text-3xl">404</h1>
            <p className="text-sm text-slate-400 md:text-base">
              Artigo não encontrado
            </p>
          </div>
        )}
      </Layout>
    </>
  );
}
