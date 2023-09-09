import Layout from "@/components/Layout";
import Image from "next/image";
import IconBlog from "@/assets/img/icon-blog.png";
import Link from "next/link";
import Head from "next/head";

type Post = {
  title: string;
  description: string;
  date: string;
  url: string;
};

export default function Blog() {
  const posts: Post[] = [
    {
      title: "Pesquisa Binária e Pesquisa Linear",
      description:
        "Explorando as diferenças entre pesquisa binária e pesquisa linear: uma análise comparativa dos algoritmos de busca mais populares.",
      date: "02 de Abril de 2023",
      url: "binary-search",
    },
    {
      title: "O que é um algoritmo?",
      description: "Em breve...",
      date: "...",
      url: "whats-an-algorithm",
    },
  ];

  return (
    <>
      <Head>
        <title>Blog | Erick Rian</title>
        <meta
          name="description"
          content="Artigos sobre tecnologia, programação, desenvolvimento web e muito mais."
        />
        <meta property="og:title" content="Blog" />
        <meta
          property="og:description"
          content="Artigos sobre tecnologia, programação, desenvolvimento web e muito mais."
        />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://erickrian.com/blog" />
        <meta property="og:image" content="/blog-preview.png" />
        <meta property="og:image:alt" content="Blog" />
        <meta property="og:locale" content="pt_BR" />
        <meta property="og:site_name" content="Blog" />
      </Head>
      <Layout>
        <div data-aos="fade-down">
          <div className="flex justify-center items-center">
            <Image src={IconBlog} alt="blog" width={100} height={100} />
          </div>
          <div className="border-l-4 border-emerald-400/30 pl-3 mt-10">
            <h2 className="mb-1 text-base text-emerald-400 font-bold md:text-lg lg:text-xl">
              Blog
            </h2>
            <h1 className="text-4xl text-gray-200 font-bold lg:text-5xl">
              Artigos
            </h1>
          </div>
        </div>
        <section className="mt-10">
          <ul className="flex flex-col gap-4">
            {posts.map((post, index) => (
              <li
                key={index}
                className="flex flex-col bg-gray-700/40 backdrop-blur-md ring-1 ring-gray-700/80 p-4 rounded-lg"
                data-aos={index % 2 === 0 ? "fade-up" : "fade-down"}
              >
                <Link
                  className="text-xl lg:text-2xl font-bold text-emerald-400 hover:text-emerald-400/60 hover:underline hover:underline-offset-4"
                  href={`/blog/${post.url}`}
                >
                  {post.title}
                </Link>
                <h2 className="text-xs text-slate-400 font-bold mt-1 md:text-sm">
                  {post.date}
                </h2>
                <p className="text-sm md:text-base text-slate-300 mt-3 w-full">
                  {post.description}
                </p>
              </li>
            ))}
          </ul>
        </section>
      </Layout>
    </>
  );
}
