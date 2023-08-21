import Title from "./components/Title";
import Navigation from "./components/Navigation";
import Introduction from "./components/Introduction";

export default function WhatsAnAlgorithm() {
  return (
    <>
      <div className="flex flex-col w-full">
        <Title title="O que é um algoritmo?" date="Em breve..." />
        <Introduction id="introduction">
          <p>Em breve...</p>
        </Introduction>
      </div>
    </>
  );
}
