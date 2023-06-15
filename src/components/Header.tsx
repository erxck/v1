import Link from "next/link";
import Image from "next/image";
import { useState } from "react";

type linkProps = {
  id: number;
  name: string;
  href: string;
};

export default function Header(): JSX.Element {
  const [showHeader, setShowHeader] = useState<boolean>(false);
  const [menu, setMenu] = useState<boolean>(false);

  const handleScroll = () => {
    if (window.scrollY > 0) {
      setShowHeader(true);
    } else {
      setShowHeader(false);
    }
  };

  if (typeof window !== "undefined")
    window.addEventListener("scroll", handleScroll);

  const links: linkProps[] = [
    { id: 1, name: "Home", href: "#home" },
    { id: 2, name: "Sobre", href: "#about" },
    { id: 3, name: "Projetos", href: "#projects" },
    { id: 4, name: "Contato", href: "#contact" },
  ];

  return (
    <header
      className={`w-full top-0 fixed bg-gray-900/80 backdrop-blur-md z-50
        ${showHeader ? "shadow-md" : ""}
      `}
    >
      <nav className="py-3 md:flex md:justify-between md:items-center">
        <div className="flex items-center justify-between px-10">
          <a href="#home">
            <Image
              className="w-24 hover:scale-105 duration-300 cursor-pointer"
              src="/logo.png"
              width={500}
              height={500}
              alt="Erick Rian"
            />
          </a>
          <div
            onClick={() => setMenu(!menu)}
            className="space-y-1 cursor-pointer md:hidden"
          >
            <div
              className={`w-6 h-0.5 bg-emerald-400 duration-300 
              ${menu ? "rotate-45 -translate-x-0 translate-y-1" : ""}`}
            ></div>
            <div
              className={`w-6 h-0.5 bg-emerald-400 duration-300 
              ${menu ? "hidden" : ""}`}
            ></div>
            <div
              className={`w-3 h-0.5 float-right bg-emerald-400 duration-300 
              ${menu ? "w-6 -rotate-45 -translate-x-0 -translate-y-0.5" : ""}`}
            ></div>
          </div>
        </div>

        <ul
          className={`z-10 divide-y divide-gray-600 bg-gray-700 md:divide-y-0 
            md:divide-inherit md:bg-inherit md:pr-10 md:z-auto md:space-y-0 md:space-x-10 
            md:flex md:items-baseline md:static md:w-auto md:py-0 md:pl-0 md:opacity-100 top-[-400px] 
            transition-all ease-in duration-300 opacity-0 px-7 py-0 left-0 absolute w-full
            ${menu ? "top-[72px] opacity-100" : ""}`}
        >
          {links.map((link: linkProps) => (
            <li
              key={link.id}
              className="hover:scale-110 hover:bg-gray-600/50 p-3 md:hover:bg-inherit md:p-0 duration-300 ease-linear w-full"
              onClick={() => setMenu(!menu)}
            >
              <a
                className="block text-slate-300 w-full text-lg md:hover:text-emerald-400 md:pb-1 md:text-sm md:after:block md:after:w-0 md:after:h-[1px] after:duration-700 md:hover:after:w-full md:hover:after:bg-emerald-400"
                href={link.href}
              >
                {link.name}
              </a>
            </li>
          ))}
          <li className="py-5 flex justify-center md:p-0">
            <Link
              className="block py-3 px-5 text-white text-lg bg-emerald-500 rounded-lg hover:bg-emerald-600 duration-300 sm:text-sm"
              href={"/resume.pdf"}
              target="_blank"
            >
              Resume
            </Link>
          </li>
        </ul>
      </nav>
    </header>
  );
}
