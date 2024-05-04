import Link from "next/link";
import { Button } from "../ui/button";
import Logo from "../common/Logo";
import { ChevronDown } from "lucide-react";

export default function Header() {
  return (
    <header className="border-b border-secondary sticky top-0 bg-background/80 backdrop-blur-lg z-50">
      <div className="cr-container !py-5 flex flex-col md:flex-row justify-between duration-300">
        <Logo />
        <div className="flex gap-5 items-center justify-around md:justify-center mt-5 md:mt-0 duration-300">
          <Button className="font-semibold" variant="ghost" asChild>
            <Link href="#planos">
              Planos <ChevronDown className="h-6 w-6 ml-1" />
            </Link>
          </Button>
          <div className="cr-bg-gradient p-[2px] rounded-lg">
            <Button className="bg-background">Entrar</Button>
          </div>
          <Button className="cr-bg-gradient hover:cr-bg-reverse-gradient">
            Criar fluxo
          </Button>
        </div>
      </div>
    </header>
  );
}
