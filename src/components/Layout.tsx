import Header from "@/components/Header";
import Footer from "@/components/Footer";
import AOS from "aos";
import "aos/dist/aos.css";

import "boxicons/css/boxicons.min.css";
import { useEffect } from "react";

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

  useEffect(() => {
    AOS.init({
      // Global settings:
      disable: false, // accepts following values: 'phone', 'tablet', 'mobile', boolean, expression or function
      startEvent: "DOMContentLoaded", // name of the event dispatched on the document, that AOS should initialize on
      initClassName: "aos-init", // class applied after initialization
      animatedClassName: "aos-animate", // class applied on animation
      useClassNames: false, // if true, will add content of `data-aos` as classes on scroll
      disableMutationObserver: false, // disables automatic mutations' detections (advanced)
      debounceDelay: 50, // the delay on debounce used while resizing window (advanced)
      throttleDelay: 99, // the delay on throttle used while scrolling the page (advanced)

      // Settings that can be overridden on per-element basis, by `data-aos-*` attributes:
      offset: 120, // offset (in px) from the original trigger point
      delay: 0, // values from 0 to 3000, with step 50ms
      duration: 400, // values from 0 to 3000, with step 50ms
      easing: "ease", // default easing for AOS animations
      once: false, // whether animation should happen only once - while scrolling down
      mirror: false, // whether elements should animate out while scrolling past them
      anchorPlacement: "top-bottom", // defines which position of the element regarding to window should trigger the animation
    });
  }, []);

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
