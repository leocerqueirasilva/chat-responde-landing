import Image from "next/image";
import { Button } from "../ui/button";

export default function HeroSection() {
  return (
    <section className="cr-container flex flex-col-reverse gap-10 md:flex-row duration-300">
      <div className="flex flex-col gap-7 text-center md:text-left max-w-3xl duration-300">
        <h2 className="text-4xl md:text-5xl font-extrabold cr-text-gradient duration-300">
          Impulsione suas vendas de forma automática e com muita escala com
          ChatResponde.
        </h2>
        <p className="text-lg md:text-xl duration-300">
          Potencialize seus resultados com nosso chatbot, permitindo interações
          ilimitadas com clientes simultaneamente. Automatize suas vendas,
          economize tempo e amplie sua presença digital.
        </p>
        <Button className="font-bold md:w-fit">Quero fazer parte!</Button>
      </div>

      {/* This margin is for compensating image's white space */}
      <div className="md:-mt-14">
        <Image
          src="/assets/home/mobile-chat.png"
          alt="Mobile screen showing chat"
          width={1400}
          height={1400}
        />
      </div>
    </section>
  );
}
