import Image from "next/image";
import { useState } from "react";

import Profile from "@/assets/img/profile.jpg";

export default function About(): JSX.Element {
  const [borderImg, setBorderImg] = useState<Boolean>(false);

  return (
    <section
      className="scroll-m-36 md:flex md:justify-between md:items-center md:gap-10 sm:scroll-m-24 md:scroll-m-28 lg:scroll-m-36 xl:scroll-m-48"
      id="about"
    >
      <div className="relative order-2 rounded mx-auto sm:max-w-xs">
        <span
          className={`hidden sm:block absolute h-14 w-14 border-t border-l border-emerald-400 rounded-tl duration-300 
            ${borderImg ? "-left-3 -top-3" : "-left-5 -top-5"}`}
        ></span>
        <Image
          className="z-10 w-full md:max-w-xs rounded lg:opacity-80 lg:hover:opacity-100 lg:duration-300"
          src={Profile}
          width={500}
          height={500}
          onMouseOver={() => setBorderImg(true)}
          onMouseOut={() => setBorderImg(false)}
          alt="My Profile"
        />
        <span
          className={`hidden sm:block absolute h-14 w-14 border-b border-r border-emerald-400 rounded-br duration-300
            ${borderImg ? "-right-3 -bottom-3" : "-right-5 -bottom-5"}`}
        ></span>
      </div>
      <div className="pt-10 md:py-0">
        <div className="border-l-4 border-emerald-400/30 pl-3">
          <h2 className="mb-1 text-base text-emerald-400 font-bold md:text-lg lg:text-xl">
            Quem sou?
          </h2>
          <h1 className="mb-8 text-4xl text-gray-200 font-bold lg:text-5xl">
            Sobre
          </h1>
        </div>
        <div className="flex flex-col gap-2">
          <p className="text-base text-slate-400 w-full md:max-w-md lg:max-w-lg xl:max-w-xl">
            Sou um graduando entusiasmado em Ciência da Computação, com
            habilidades sólidas em programação, resolução de problemas e
            desenvolvimento de software. Atualmente, estou buscando
            oportunidades para aplicar meu conhecimento teórico e desenvolver
            habilidades práticas na área.
          </p>
          <p className="text-base text-slate-400 w-full md:max-w-md lg:max-w-lg xl:max-w-xl">
            Com conhecimentos em linguagens como C/C++, JavaScript e TypeScript,
            estou preparado para enfrentar desafios e contribuir para projetos
            inovadores. Sou um aprendiz ágil e entusiasta, com habilidades de
            comunicação eficazes.
          </p>
          <p className="text-base text-slate-400 w-full md:max-w-md lg:max-w-lg xl:max-w-xl">
            Estou em busca de oportunidades que me permitam ganhar experiência
            prática e crescer como engenheiro de software, mesmo sem ter
            experiência profissional prévia.
          </p>
        </div>
        <div className="mt-7">
          <ul>
            <li className="flex items-center gap-2">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5 text-emerald-400"
                viewBox="0 0 20 20"
                fill="currentColor"
              >
                <path
                  fillRule="evenodd"
                  // eslint-disable-next-line max-len
                  d="M10 2a8 8 0 100 16 8 8 0 000-16zM8 9a1 1 0 011-1h2a1 1 0 110 2H9a1 1 0 01-1-1zm1 3a1 1 0 100 2h2a1 1 0 100-2H9z"
                  clipRule="evenodd"
                />
              </svg>
              <span className="text-base text-slate-400">
                Email: contatoerickrian@gmail.com
              </span>
            </li>
          </ul>
        </div>
      </div>
    </section>
  );
}
