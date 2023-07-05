import Layout from "@/components/Layout";
import Image from "next/image";
import IconBlog from "@/assets/img/icon-blog.png";

export default function Blog() {
  return (
    <Layout>
      <div className="px-6 py-20 w-full max-w-[1440px] flex-1 mx-auto sm:px-16 lg:px-24 xl:px-36">
        <div className="flex flex-col justify-center items-center">
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
        <section className="mt-10 gap-4 grid grid-cols-1 md:grid-cols-2">
          <div className="p-6 bg-gray-700/40 backdrop-blur-md ring-1 ring-gray-700/80 rounded-lg">
            <h1 className="mb-4 text-2xl xl:text-3xl text-gray-200 font-bold">
              Pesquisa Binária e Pesquisa Linear
            </h1>
            <p className="text-sm lg:text-base text-slate-400 w-full">
              Em breve...
            </p>
            <div className="mt-6 flex items-center justify-end">
              <button className="flex items-center text-emerald-400 border border-emerald-400 py-3 px-4 text-base lg:text-lg font-bold rounded hover:bg-emerald-400/10 ease-in duration-300">
                <i className="bx bx-link-external"></i>
              </button>
            </div>
          </div>
        </section>
      </div>
    </Layout>
  );
}
