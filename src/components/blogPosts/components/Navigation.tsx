import Link from "next/link";

interface NavigationProps {
  navigation: {
    id: string;
    title: string;
  }[];
  githubLink: string;
}

export default function Navigation({
  navigation,
  githubLink,
}: NavigationProps): JSX.Element {
  const handleColorsLinks = (e: any) => {
    const links = document.querySelectorAll("#nav-blog li a");
    const sections = document.querySelectorAll("section");

    sections.forEach((section) => {
      const sectionTop = section.offsetTop;
      const sectionHeight = section.clientHeight;
      const sectionId = section.getAttribute("id");

      if (scrollY >= sectionTop - sectionHeight / 3) {
        links.forEach((link) => {
          link.classList.remove("text-emerald-400");
        });

        const link = document.querySelector(
          `#nav-blog li a[href*=${sectionId}]`
        );

        if (link) {
          link.classList.add("text-emerald-400");
        }
      }
    });
  };

  if (typeof window !== "undefined") {
    window.addEventListener("scroll", handleColorsLinks);
  }

  return (
    <nav
      className="w-56 shrink-0 order-last hidden xl:block"
      data-aos="fade-up"
    >
      <div className="sticky top-44">
        <h1 className="text-xl text-gray-200 font-bold">Nesta página</h1>
        <ul
          id="nav-blog"
          className="flex flex-col gap-4 mt-4 text-sm text-slate-300"
        >
          {navigation.map((item) => (
            <li key={item.id}>
              <Link
                className="hover:text-emerald-400 duration-300 ease-in-out"
                href={`#${item.id}`}
                title={item.title}
              >
                {item.title}
              </Link>
            </li>
          ))}
          <li className="pt-4 border-t border-gray-700">
            <Link
              className="group hover:text-emerald-400 duration-300 ease-in-out"
              href={githubLink}
              target="_blank"
              rel="noopener noreferrer"
              passHref
              title="Código completo no GitHub"
            >
              <span>Código no GitHub</span>
              <span className="inline-block ml-2 text-slate-300 group-hover:text-emerald-400 duration-300 ease-in-out">
                <i className="bx bx-link-external"></i>
              </span>
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  );
}
