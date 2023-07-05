import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Head from "next/head";

import "boxicons/css/boxicons.min.css";

export default function Layout({
  children,
}: {
  children: React.ReactNode;
}): JSX.Element {
  const handleCursor = (e: any) => {
    const cursor = document.querySelector(".cursor");
    cursor?.setAttribute(
      "style",
      `top: ${e.pageY - 30}px; left: ${e.pageX - 30}px;`
    );
  };

  if (typeof window !== "undefined") {
    window.addEventListener("mousemove", handleCursor);
  }

  return (
    <div id="home" className="flex flex-col h-screen">
      <Head>
        <title>Erick Rian</title>
        <meta name="description" content="Erick Rian" />
        <link rel="icon" href="/favicon.ico" />

        <meta property="og:title" content="Erick Rian" />
        <meta property="og:description" content="Portfólio de Erick Rian" />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://erickrian.com/" />
        <meta property="og:image" content="/preview.png" />
        <meta property="og:image:alt" content="Erick Rian" />
        <meta property="og:locale" content="pt_BR" />
        <meta property="og:site_name" content="Erick Rian" />

        <meta name="theme-color" content="#111827" />
        <meta name="msapplication-TileColor" content="#111827" />
        <meta name="msapplication-TileImage" content="/favicon.ico" />
        <meta name="msapplication-config" content="/favicon.ico" />

        <link rel="apple-touch-icon" href="/favicon.ico" />
      </Head>
      <Header />
      <main className="flex-1">{children}</main>
      <Footer />
      {/* <div className="hidden cursor absolute w-16 h-16 bg-emerald-400 rounded-full z-50 pointer-events-none mix-blend-difference lg:block"></div> */}
    </div>
  );
}
