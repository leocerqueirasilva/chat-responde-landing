import Image from "next/image";
import { integrations } from "./helpers";

export default function IntegrateWithEase() {
  return (
    <section className="cr-container">
      <div className="relative flex flex-col gap-6 max-w-7xl mx-auto overflow-hidden">
        <div className="w-16 md:w-96 h-full bg-gradient-to-r from-background to-transparent absolute left-0 z-50" />
        <div className="flex gap-6 animate-left-scroll">
          <Integrations />
          <Integrations />
          <Integrations />
          <Integrations />
        </div>

        <div className="flex gap-6 animate-right-scroll">
          <Integrations />
          <Integrations />
          <Integrations />
          <Integrations />
        </div>
        <div className="w-16 md:w-96 h-full bg-gradient-to-l from-background to-transparent absolute right-0 z-50" />
      </div>

      <div className="flex flex-col gap-4 max-w-4xl mt-10">
        <h3 className="text-4xl font-extrabold">Integre-se com facilidade</h3>
        <p className="text-lg md:text-xl duration-300">
          Descubra como nossas integrações simplificadas tornam fácil conectar
          nosso chatbot ao seu sistema existente, garantindo uma experiência
          contínua e sem complicações.
        </p>
      </div>
    </section>
  );
}

function Integrations() {
  return integrations.map((integration) => (
    <>
      <Image
        className="md:hidden"
        key={integration}
        src={`/assets/home/integrate-with-ease/${integration}.svg`}
        alt={integration}
        width={70}
        height={70}
      />
      <Image
        className="hidden md:block"
        key={integration}
        src={`/assets/home/integrate-with-ease/${integration}.svg`}
        alt={integration}
        width={100}
        height={100}
      />
    </>
  ));
}
