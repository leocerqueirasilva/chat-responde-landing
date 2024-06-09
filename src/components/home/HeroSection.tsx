import Image from "next/image";
import { Button } from "../ui/button";
import Link from "next/link";

export default function HeroSection() {
  return (
    <section className="cr-container flex flex-col-reverse gap-10 md:flex-row items-center duration-300">
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
        <Link href="#planos">
        <Button className="font-bold md:w-fit" >Quero fazer parte!</Button>
        </Link>
      </div>

      <Image
        src="/assets/home/mobile-chat.png"
        alt="Mobile screen showing chat"
        width={450}
        height={450}
      />
    </section>
  );
}
