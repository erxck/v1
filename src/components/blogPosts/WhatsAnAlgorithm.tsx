import Title from "./components/Title";
import Navigation from "./components/Navigation";
import Introduction from "./components/Introduction";
import { NavigationItem } from "@/types/NavigationItem";

export default function WhatsAnAlgorithm() {
  const nav: NavigationItem[] = [
    {
      id: "introduction",
      title: "Introdução",
    },
  ];

  return (
    <>
      <Navigation navigation={nav} githubLink="" />
      <div className="flex flex-col w-full">
        <Title title="O que é um algoritmo?" date="Em breve..." />
        <Introduction id="introduction">
          <p>Em breve...</p>
        </Introduction>
      </div>
    </>
  );
}
