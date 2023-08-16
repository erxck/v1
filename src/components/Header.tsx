import Link from "next/link";
import Image from "next/image";
import { useState } from "react";
import { useRouter } from "next/router";

type linkProps = {
  id: number;
  name: string;
  href: string;
};

export default function Header(): JSX.Element {
  const [showHeader, setShowHeader] = useState<boolean>(false);
  const [menu, setMenu] = useState<boolean>(false);
  const links: linkProps[] = [
    { id: 1, name: "Home", href: "#home" },
    { id: 2, name: "Sobre", href: "#about" },
    { id: 3, name: "Projetos", href: "#projects" },
    { id: 4, name: "Contato", href: "#contact" },
    { id: 5, name: "Blog", href: "/blog" },
  ];
  const router = useRouter();

  const handleScroll = () => {
    if (window.scrollY > 0) {
      setShowHeader(true);
      setMenu(false);
    } else {
      setShowHeader(false);
      setMenu(false);
    }
  };

  if (typeof window !== "undefined")
    window.addEventListener("scroll", handleScroll);

  return (
    <header
      className={`w-full top-0 fixed bg-gray-900/80 backdrop-blur-md z-50
        ${showHeader ? "shadow-md" : ""}
      `}
    >
      <nav className="py-3 lg:flex lg:justify-between lg:items-center">
        <div className="flex items-center justify-between px-10">
          {router.pathname === "/blog" ||
          router.pathname === "/blog/[article]" ? (
            <Link href={"/"}>
              <Image
                className="w-24 hover:scale-105 duration-300 cursor-pointer"
                src="/logo.png"
                width={500}
                height={500}
                alt="Erick Rian"
                priority={true}
              />
            </Link>
          ) : (
            <a href="#home">
              <Image
                className="w-24 hover:scale-105 duration-300 cursor-pointer"
                src="/logo.png"
                width={500}
                height={500}
                alt="Erick Rian"
                priority={true}
              />
            </a>
          )}
          <div
            onClick={() => setMenu(!menu)}
            className="space-y-1 cursor-pointer lg:hidden"
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
          className={`z-10 divide-y divide-gray-600 bg-gray-700 lg:divide-y-0 
            lg:divide-inherit lg:bg-inherit lg:pr-10 lg:z-auto lg:space-y-0 lg:space-x-10 
            lg:flex lg:items-baseline lg:static lg:w-auto lg:py-0 lg:pl-0 lg:opacity-100 top-[-400px] 
            transition-all ease-in duration-300 opacity-0 px-7 py-0 left-0 absolute w-full
            ${menu ? "top-[71px] opacity-100" : ""}`}
        >
          {router.pathname === "/blog" ||
          router.pathname === "/blog/[article]" ? (
            <li
              className="hover:scale-105 hover:bg-gray-600/50 lg:hover:bg-inherit duration-300 ease-linear w-full"
              onClick={() => setMenu(!menu)}
            >
              <Link
                href={"/"}
                className="block p-3 text-slate-300 h-full w-full text-lg lg:hover:text-emerald-400 lg:p-0 lg:pb-1 lg:text-sm lg:after:block lg:after:w-0 lg:after:h-[1px] after:duration-700 lg:hover:after:w-full lg:hover:after:bg-emerald-400"
              >
                Home
              </Link>
            </li>
          ) : (
            links.map((link: linkProps) => (
              <li
                key={link.id}
                className="hover:scale-105 hover:bg-gray-600/50 lg:hover:bg-inherit duration-300 ease-linear w-full"
                onClick={() => setMenu(!menu)}
              >
                {link.name === "Blog" ? (
                  <Link
                    href={"/blog"}
                    className="block p-3 text-slate-300 w-full text-lg lg:hover:text-emerald-400 lg:p-0 lg:pb-1 lg:text-sm lg:after:block lg:after:w-0 lg:after:h-[1px] after:duration-700 lg:hover:after:w-full lg:hover:after:bg-emerald-400"
                  >
                    Blog
                  </Link>
                ) : (
                  <a
                    href={link.href}
                    className="block p-3 text-slate-300 w-full text-lg lg:hover:text-emerald-400 lg:p-0 lg:pb-1 lg:text-sm lg:after:block lg:after:w-0 lg:after:h-[1px] after:duration-700 lg:hover:after:w-full lg:hover:after:bg-emerald-400"
                  >
                    {link.name}
                  </a>
                )}
              </li>
            ))
          )}
          <li className="py-5 flex justify-center lg:p-0">
            <Link
              className="block py-3 px-5 text-white text-lg bg-emerald-500 rounded-lg hover:bg-emerald-600 duration-300 lg:text-sm"
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
