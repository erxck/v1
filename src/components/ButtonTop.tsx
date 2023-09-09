import { useState } from "react";

export default function ButtonTop() {
  const [visible, setVisible] = useState<boolean>(false);

  const handleScroll = () => {
    const currentScrollY = window.scrollY;
    const visible = currentScrollY > 1500;
    setVisible(visible);
  };

  if (typeof window !== "undefined")
    window.addEventListener("scroll", handleScroll);

  return (
    <button
      className="fixed flex items-center bottom-4 right-4 z-50 text-white bg-emerald-600 rounded-full p-3 shadow-lg hover:bg-emerald-700 duration-300 ease-in-out"
      onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
      style={{ visibility: visible ? "visible" : "hidden" }}
    >
      <i className="bx bx-chevron-up text-2xl"></i>
    </button>
  );
}
