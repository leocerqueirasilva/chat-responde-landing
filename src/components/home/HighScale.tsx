import Image from "next/image";
import { Button } from "../ui/button";

export default function HighScale() {
  return (
    <section className="cr-container">
      <div className="relative cr-bg-gradient rounded-2xl overflow-hidden duration-300">
        <div className="flex flex-col gap-4 lg:max-w-md xl:max-w-3xl m-10 lg:mx-24 lg:my-14 duration-300">
          <h3 className="text-4xl font-extrabold">Altíssima escala</h3>
          <p className="text-lg md:text-xl duration-300">
            ChatResponde atende a uma escala incomparável de clientes
            simultâneos, impulsionando sua produtividade e resultados de vendas.
            Feche múltiplos negócios ao mesmo tempo e maximize seus lucros comos
            nunca antes.
          </p>
          <Button className="font-bold md:w-fit px-14 py-8" variant="secondary">
            Quero fazer parte!
          </Button>
        </div>

        <Image
          className="hidden lg:block absolute bottom-0 right-0 lg:rounded-tl-md duration-300"
          src="/assets/home/high-scale.png"
          alt="UI showing building custom flow"
          width={400}
          height={400}
        />
      </div>
    </section>
  );
}
