import Layout from "@/components/Layout";
import Link from "next/link";
import { useRouter } from "next/router";

import BinarySearch from "@/components/blogPosts/BinarySearch";
import WhatsAnAlgorithm from "@/components/blogPosts/WhatsAnAlgorithm";

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

  return (
    <Layout>
      <div className="flex justify-start items-center mb-10">
        <Link
          className="flex items-center justify-center py-2 px-4 rounded-lg border border-emerald-400 hover:bg-emerald-400/10 transition duration-300 ease-in-out md:py-3 md:px-5"
          href="/blog"
        >
          <i className="bx bx-left-arrow-alt text-emerald-400 text-xl"></i>
        </Link>
      </div>
      {isValidArticle(article as string) ? (
        articles[article as string]
      ) : (
        <div className="flex flex-col gap-1 mt-10">
          <h1 className="text-xl text-gray-200 font-bold lg:text-3xl">404</h1>
          <p className="text-sm text-slate-400 md:text-base">
            Argigo não encontrado
          </p>
        </div>
      )}
    </Layout>
  );
}
