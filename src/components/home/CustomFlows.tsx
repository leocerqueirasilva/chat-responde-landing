import Image from "next/image";

export default function CustomFlows() {
  return (
    <section className="cr-container">
      <div className="flex flex-col items-center justify-center">
        <Image
          src="/assets/home/custom-flow.png"
          alt="UI showing building custom flow"
          width={1000}
          height={1000}
        />
        <div className="flex flex-col gap-4 text-center max-w-4xl">
          <h3 className="text-4xl font-extrabold">
            Construa fluxos personalizados
          </h3>
          <p className="text-lg md:text-xl duration-300">
            Crie fluxos de conversa com facilidade, usando uma variedade de
            formatos como texto, áudio, imagem e vídeo. Programe intervalos de
            espera, direcione interações com base nas respostas do cliente e
            configure disparos manuais para uma experiência de
            chatbot sob medida.
          </p>
        </div>
      </div>
    </section>
  );
}
