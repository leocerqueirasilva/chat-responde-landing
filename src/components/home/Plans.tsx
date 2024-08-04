import Image from "next/image";
import { Button } from "../ui/button";
import { freePlanPerks, monthlyPlanPerks } from "./helpers";
import Link from "next/link";

export default function Plans() {
  return (
    <section className="cr-container" id="planos">
      <div className="flex flex-col gap-4 text-center">
        <h3 className="text-4xl font-extrabold">Escolha o plano Ideal</h3>
        <p className="text-lg md:text-xl duration-300">
          Desde o plano gratuito até os pacotes premium, há uma solução para
          cada etapa do seu crescimento.
        </p>
      </div>

      <div className="flex flex-wrap justify-center gap-10 items-end mt-10 duration-300">
        {/* Free Plan--------------------------------------------------starts here */}
        <div className="bg-muted rounded-lg px-5 py-10 pb-[84px] flex flex-col justify-between max-w-sm">
          <div className="flex flex-col gap-10 text-center">
            <h3 className="text-4xl">PLANO CRIE</h3>
            <p className="text-sm">
              Automatize seu negócio e venda de forma constante sem precisar
              tocar no celular, sem dificuldade, bastam alguns cliques e pronto,
              tudo funcionando.
            </p>
            <div className="flex flex-col items-center gap-2">
              {freePlanPerks.map((perk) => (
                <div key={perk.id} className="flex items-center gap-1">
                  <Image
                    src={`/assets/home/plans/${perk.icon}.svg`}
                    alt={perk.title}
                    width={12}
                    height={12}
                  />
                  <p className="text-sm">{perk.title}</p>
                </div>
              ))}
            </div>
          </div>

          <div className="text-center flex flex-col gap-5 mt-20 md:mt-60 duration-300">
            <h3 className="font-extrabold text-4xl">GRÁTIS</h3>
            <Link href="https://bot.chatresponde.com/signin" target="_blank">
            <Button className="font-bold" variant="secondary" size="lg">
              Iniciar
            </Button>
            </Link>
          </div>
        </div>
        {/* Free Plan--------------------------------------------------ends here */}

        {/* Monthly Plan--------------------------------------------------starts here */}
        <div className="cr-bg-gradient rounded-lg p-1 max-w-sm">
          <div className="bg-muted rounded-lg px-5 py-10 flex flex-col justify-between gap-20 ">
            <div className="flex flex-col gap-10 text-center">
              <h3 className="text-4xl">PLANO MENSAL</h3>
              <p className="text-sm">
                Desbloqueie o potencial do seu negócio com automação contínua.
                Venda sem esforço e mantenha-se conectado com seus clientes,
                tudo com apenas alguns cliques.
              </p>
              <div className="flex flex-col items-center gap-2">
                {monthlyPlanPerks.map((perk) => (
                  <div key={perk.id} className="flex items-center gap-1">
                    <Image
                      src={`/assets/home/plans/${perk.icon}.svg`}
                      alt={perk.title}
                      width={12}
                      height={12}
                    />
                    <p className="text-sm">{perk.title}</p>
                  </div>
                ))}
              </div>
            </div>

            <div className="text-center flex flex-col items-center gap-5">
              <h3 className="font-extrabold text-4xl">R$ 67,90</h3>
              <div className="cr-bg-reverse-gradient p-[2px] rounded-md w-full">
              <Link href="https://checkout.doppus.app/77899393/" target="_blank">
                <Button className="font-bold w-full" size="lg">
                  Quero fazer parte!
                </Button>
              </Link>
              </div>
              <div className="flex items-center gap-1">
                <Image
                  src="/assets/home/plans/lock.svg"
                  alt="lock"
                  width={12}
                  height={12}
                />
                <p className="text-sm">Compra segura</p>
              </div>
            </div>
          </div>
        </div>
        {/* Monthly Plan--------------------------------------------------ends here */}

        {/* Anual Plan--------------------------------------------------starts here */}
        <div className="cr-bg-gradient rounded-lg px-5 py-10 flex flex-col justify-between gap-20 max-w-sm">
          <div className="flex flex-col gap-10 text-center">
            <h3 className="text-4xl">PLANO ANUAL</h3>
            <span className="bg-secondary rounded-md px-3 py-2 w-fit mx-auto text-sm font-semibold">
              Economize <span className="line-through">R$ 407,00</span>
            </span>
            <p className="text-sm">
              Assinando o nosso plano anual, parcele em 12x no cartão e pague
              apenas R$ 39,86 por mês.
            </p>
            <div className="flex flex-col items-center gap-2">
              {monthlyPlanPerks.map((perk) => (
                <div key={perk.id} className="flex items-center gap-1">
                  <Image
                    src={`/assets/home/plans/${perk.icon}.svg`}
                    alt={perk.title}
                    width={12}
                    height={12}
                  />
                  <p className="text-sm">{perk.title}</p>
                </div>
              ))}
            </div>
          </div>

          <div className="text-center flex flex-col items-center gap-5">
            <h3 className="font-extrabold text-4xl">R$ 39,86</h3>
            <div className="cr-bg-reverse-gradient p-[2px] rounded-lg w-full">
            <Link href="https://checkout.doppus.app/94475985/" target="_blank">
              <Button
                className="font-bold w-full"
                variant="secondary"
                size="lg"
              >
                Quero fazer parte!
              </Button>
            </Link>
            </div>
            <div className="flex items-center gap-1">
              <Image
                src="/assets/home/plans/lock.svg"
                alt="lock"
                width={12}
                height={12}
              />
              <p className="text-sm">Compra segura</p>
            </div>
          </div>
        </div>
        {/* Anual Plan--------------------------------------------------ends here */}
      </div>
    </section>
  );
}
