"use client";

import { useRef } from "react";
import useScrollTriggeredCountUp from "@/hooks/useScrollTriggeredCountUp";
import { Button } from "../ui/button";

export default function ActiveSubscriptions() {
  const ref = useRef<HTMLDivElement>(null);
  const count = useScrollTriggeredCountUp(ref, 4.881);

  return (
    <section className="cr-container">
      <div className="cr-bg-gradient rounded-2xl text-center px-10 py-16 lg:px-20 lg:py-24 flex flex-col items-center justify-between gap-4 lg:flex-row  duration-300">
        <div>
          <h2 ref={ref} className="text-6xl font-extrabold">
            {count}
          </h2>
          <p className="font-semibold text-sm">Assinaturas ativas</p>
        </div>
        <p className="text-lg md:text-xl max-w-xl duration-300">
          Esse é o número dos nossos parceiros que já automatizaram as vendas em
          seu WhatsApp. Independentemente do seu serviço ou produto, o Zapp
          Rápido vende por você. 
        </p>
        <Button className="font-bold w-fit px-14 py-8" variant="secondary">
          Quero fazer parte!
        </Button>
      </div>
    </section>
  );
}
