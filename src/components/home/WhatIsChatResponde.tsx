import Image from "next/image";

export default function WhatIsChatResponde() {
  return (
    <section>
      <div className="cr-bg-gradient">
        <div className="cr-container !pb-60">
          <div className="flex flex-col gap-4 text-center max-w-4xl mx-auto">
            <h3 className="text-4xl font-extrabold">O que é o ChatResponde</h3>
            <p className="text-lg md:text-xl duration-300">
              Se você gasta tempo e energia vendendo por WhatsApp ou gasta
              dinheiro contratando vendedores que não vendem, descubra agora
              mesmo o que o ChatResponde fará por você:
            </p>
          </div>
        </div>
      </div>

      <Image
        className="rounded-tl-md blur-sm mx-auto -mt-52"
        src="/assets/home/high-scale.png"
        alt="UI showing building custom flow"
        width={550}
        height={550}
      />
    </section>
  );
}
