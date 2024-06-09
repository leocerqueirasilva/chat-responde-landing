import Link from "next/link";
import { Button } from "../ui/button";
import Logo from "../common/Logo";
import Image from "next/image";

export default function Header() {
  return (
    <header className="border-b border-secondary sticky top-0 bg-background/80 backdrop-blur-lg z-50">
      <div className="cr-container !py-5 flex flex-col md:flex-row justify-between duration-300">
        <Logo />
        <div className="flex gap-5 items-center justify-around md:justify-center mt-5 md:mt-0 duration-300">
          <Button className="font-semibold" variant="ghost" size="sm" asChild>
            <Link href="#planos">
              Planos{" "}
              <Image
                className="ml-2 shrink-0 transition-transform duration-300"
                src="/assets/icons/arrow.svg"
                alt="Arrow icon"
                width={15}
                height={15}
              />
            </Link>
          </Button>
          <Link href="https://bot.chatresponde.com/signin" target="_blank">
          <Button variant="outline" size="sm">
            Entrar
          </Button>
          </Link>
          <Link href="https://bot.chatresponde.com/signin" target="_blank">
          <Button size="sm">Criar fluxo</Button>
          </Link>
        </div>
      </div>
    </header>
  );
}
