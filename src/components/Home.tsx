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
    <section className="flex flex-col justify-center items-start h-screen -mt-16">
      <div className="border-l-4 border-emerald-400/30 pl-3">
        <h2
          className="xl:text-3xl text-2xl text-emerald-400 font-bold"
          data-aos="fade-down"
        >
          Sou
        </h2>
        <div className="typed-name" data-aos="fade-up">
          <span
            ref={el}
            className="lg:text-6xl xl:text-7xl text-5xl text-gray-200 font-bold"
          ></span>
        </div>
      </div>
      <h2
        className="lg:text-3xl xl:text-5xl text-2xl mt-5 text-slate-400 font-bold"
        data-aos="fade-down"
      >
        E eu amo a tecnologia.
      </h2>
      <p
        className="text-base mt-7 text-slate-400 w-full max-w-xl lg:text-lg"
        data-aos="fade-up"
      >
        Buscando um desenvolvedor motivado e habilidoso para agregar valor ao
        seu time? Entre em contato comigo e vamos conversar. 👇
      </p>
      <a
        className="block w-fit mt-7 lg:py-4 xl:px-28 lg:px-24 sm:px-20 lg:text-base py-3 px-16 text-sm text-emerald-400 border border-emerald-400 hover:bg-emerald-400/10 ease-in duration-300 rounded uppercase font-bold"
        href="#contact"
        data-aos="fade-down"
      >
        Contato
      </a>
    </section>
  );
}
