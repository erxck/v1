import Image from "next/image";
import { useState } from "react";
import Link from "next/link";

import { IconGitHub, IconMail, IconLinkedin } from "./icons";

import Profile from "@/assets/img/profile.jpg";

export default function About(): JSX.Element {
  const [borderImg, setBorderImg] = useState<boolean>(false);

  return (
    <section
      className="scroll-m-36 md:flex md:justify-between md:items-center md:gap-10 sm:scroll-m-24 md:scroll-m-28 lg:scroll-m-36 xl:scroll-m-48"
      id="about"
    >
      <div
        className="relative mx-auto order-2 rounded max-w-xs md:mx-0"
        data-aos="fade-down"
      >
        <span
          className={`hidden sm:block absolute h-14 w-14 border-t border-l border-emerald-400 rounded-tl duration-300 
            ${borderImg ? "-left-3 -top-3" : "-left-5 -top-5"}`}
        ></span>
        <Image
          className="z-10 w-full md:max-w-xs rounded duration-300 opacity-100 lg:opacity-70 lg:hover:opacity-100"
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
      <div className="pt-10 md:py-0" data-aos="fade-up">
        <div className="border-l-4 border-emerald-400/30 pl-3">
          <h2 className="mb-1 text-base text-emerald-400 font-bold md:text-lg lg:text-xl">
            Quem sou?
          </h2>
          <h1 className="mb-8 text-4xl text-gray-200 font-bold lg:text-5xl">
            Sobre
          </h1>
        </div>
        <div
          className="flex flex-col text-sm gap-2 text-slate-400 w-full md:max-w-md lg:text-base lg:max-w-lg xl:max-w-xl"
          data-aos="fade-down"
        >
          <p>
            Eu sou um estudante de Ciência da Computação, com sólidas
            habilidades em programação, resolução de problemas e desenvolvimento
            de software.
          </p>
          <p>
            Busco aplicar meus conhecimentos teóricos, desenvolver habilidades
            práticas e contribuir para projetos inovadores. Possuo conhecimento
            em linguagens como C, C++, JavaScript e TypeScript.
          </p>
          <p>
            Sou ágil, entusiasta e comunicativo, buscando experiências para
            crescimento como engenheiro de software, apesar de não ter
            experiência de trabalho anterior.
          </p>
        </div>
        <div
          className="flex mx-auto gap-4 py-1 px-3 mt-7 items-center bg-gray-700/40 backdrop-blur-md ring-1 ring-gray-700/80 rounded-lg w-fit md:mx-0"
          data-aos="fade-up"
        >
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
