import Image from "next/image";
import { Button } from "../ui/button";
import Link from "next/link";

export default function HighScale() {
  return (
    <section className="cr-container">
      <div className="relative cr-bg-gradient rounded-2xl overflow-hidden group duration-300">
        <div className="flex flex-col gap-4 lg:max-w-md xl:max-w-3xl m-10 lg:mx-24 lg:my-14 duration-300">
          <h3 className="text-4xl font-extrabold">Altíssima escala</h3>
          <p className="text-lg md:text-xl duration-300">
            ChatResponde atende a uma escala incomparável de clientes
            simultâneos, impulsionando sua produtividade e resultados de vendas.
            Feche múltiplos negócios ao mesmo tempo e maximize seus lucros comos
            nunca antes.
          </p>
          <Link href="#planos">
          <Button className="font-bold md:w-fit" variant="secondary" size="lg">
            Quero fazer parte!
          </Button>
          </Link>
        </div>

        <Image
          className="hidden lg:block absolute bottom-0 right-0 lg:rounded-tl-md group-hover:-rotate-3 group-hover:scale-110 duration-300"
          src="/assets/home/high-scale.png"
          alt="UI showing building custom flow"
          width={400}
          height={400}
        />
      </div>
    </section>
  );
}
0;
