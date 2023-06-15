import Link from "next/link";
import { useEffect, useRef } from "react";
import Typed from "typed.js";

import { IconGitHub, IconMail, IconLinkedin } from "./icons";

export default function Home(): JSX.Element {
  // Create Ref element
  const el = useRef<null>(null);

  // Create Typed instance
  useEffect(() => {
    const typed = new Typed(el.current, {
      strings: ["Erick Rian", "Software Engineer"], // Strings
      typeSpeed: 100,
      backSpeed: 100,
      loop: true,
    });

    // Destroy
    return () => {
      typed.destroy();
    };
  }, []);

  return (
    <section className="px-8 sm:px-20 lg:px-40 flex justify-start items-center h-screen">
      <div className="flex flex-col pt-8 space-y-7">
        <div className="border-l-4 border-emerald-400/30 pl-3">
          <h2 className="xl:text-3xl text-2xl text-emerald-400 font-bold">
            Sou
          </h2>
          <div className="typed-name">
            <span
              ref={el}
              className="lg:text-6xl xl:text-7xl text-5xl text-gray-200 font-bold"
            ></span>
          </div>
        </div>
        <h2 className="lg:text-3xl xl:text-5xl text-2xl text-slate-400 font-bold">
          E eu amo a tecnologia.
        </h2>
        <p className="text-base text-slate-400 w-full max-w-xl lg:text-lg">
          Você pode entrar em contato comigo se precisar de ajuda para criar um
          site para você ou sua empresa.
        </p>
        <a
          className="block w-fit lg:py-4 xl:px-28 lg:px-24 sm:px-20 lg:text-base py-3 px-16 text-sm text-emerald-400 border border-emerald-400 hover:bg-emerald-400/10 ease-in duration-300 rounded uppercase font-bold"
          href="#contact"
        >
          Contato
        </a>
        <div className="flex gap-4 py-1 px-3 items-center bg-gray-700/40 backdrop-blur-md ring-1 ring-gray-700/80 rounded-lg w-fit">
          <Link
            className="hover:scale-105 duration-200"
            target="_blank"
            rel="noopener noreferrer"
            passHref={true}
            href={"https://github.com/erxck"}
          >
            {IconGitHub}
          </Link>
          <Link
            className="hover:scale-105 duration-200"
            target="_blank"
            rel="noopener noreferrer"
            passHref={true}
            href={"https://www.linkedin.com/in/erick-rian/"}
          >
            {IconLinkedin}
          </Link>
          <Link
            className="hover:scale-105 duration-200"
            target="_blank"
            rel="noopener noreferrer"
            passHref={true}
            href={
              "mailto:contatoerickrian@gmail.com?subject=Olá Erick, tudo bem?&body=Olá Erick, tudo bem?"
            }
          >
            {IconMail}
          </Link>
        </div>
      </div>
    </section>
  );
}
