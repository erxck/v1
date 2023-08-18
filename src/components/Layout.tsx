import Header from "@/components/Header";
import Footer from "@/components/Footer";

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
      <Header />
      <main className="px-4 py-20 w-full max-w-[1440px] flex-1 mx-auto sm:px-16 lg:px-24 xl:px-36">
        {children}
      </main>
      <Footer />
      {/* <div className="hidden cursor absolute w-16 h-16 bg-emerald-400 rounded-full z-50 pointer-events-none mix-blend-difference lg:block"></div> */}
    </div>
  );
}
