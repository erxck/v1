import Link from "next/link";
import Image from "next/image";
import ImageContact from "@/assets/img/business.svg";

export default function Contact() {
  return (
    <section
      className="mt-28 md:mt-48 lg:flex lg:justify-between lg:gap-10 lg:items-center scroll-m-24"
      id="contact"
    >
      <section className="w-full flex flex-col gap-8">
        <div className="border-l-4 border-emerald-400/30 pl-3">
          <h2 className="mb-1 text-base text-emerald-400 font-bold md:text-lg lg:text-xl">
            Fale comigo
          </h2>
          <h1 className="text-4xl text-gray-200 font-bold lg:text-5xl">
            Contato
          </h1>
        </div>
        <div className="flex w-full flex-col gap-5">
          <p className="text-base text-slate-400 w-full lg:max-w-xl lg:text-left">
            Se você está procurando um desenvolvedor motivado e com habilidades
            técnicas sólidas, por favor, sinta-se à vontade para entrar em
            contato comigo para discutirmos como posso contribuir para sua
            empresa. Obrigado pela atenção e estou ansioso para conversar com
            você em breve.
          </p>
          <p className="text-base text-slate-400 lg:text-left">
            Fale comigo por e-mail ou pelo LinkedIn.
          </p>
          <div className="flex justify-center gap-4 lg:justify-start">
            <Link
              className="block w-fit text-emerald-400 border border-emerald-400 py-3 px-7 text-sm font-bold uppercase rounded hover:bg-emerald-400/10 ease-in duration-300 lg:py-4 lg:px-10"
              href={
                "mailto:contatoerickrian@gmail.com?subject=Olá Erick, tudo bem?&body=Olá Erick, tudo bem?"
              }
              target="_blank"
              rel="noopener noreferrer"
              passHref={true}
            >
              Diga um Olá 👋
            </Link>
            <Link
              className="block w-fit text-emerald-400 border border-emerald-400 py-3 px-7 text-sm font-bold uppercase rounded hover:bg-emerald-400/10 ease-in duration-300 lg:py-4 lg:px-10"
              href={"https://www.linkedin.com/in/erick-rian/"}
              target="_blank"
              rel="noopener noreferrer"
              passHref={true}
            >
              LinkedIn
            </Link>
          </div>
        </div>
      </section>
      <div className="hidden lg:block max-w-sm">
        <Image
          className="w-full"
          src={ImageContact}
          width={500}
          height={500}
          alt="Contact"
        />
      </div>
    </section>
  );
}
