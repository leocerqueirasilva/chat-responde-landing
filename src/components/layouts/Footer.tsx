import Image from "next/image";
import { socialMedia } from "../home/helpers";
import Link from 'next/link';

export default function Footer() {
  return (
    <footer className="border-t border-secondary">
      <div className="cr-container !py-5 flex flex-col md:flex-row justify-between items-center duration-300">
        <span className="text-sm">
          © ChatResponde. Todos os direitos reservados.
        </span>
        <div className="flex gap-5 mt-10 md:mt-0 duration-300">
          {socialMedia.map((item) => (
            <Link key={item.id} href={item.url} passHref>
                <Image
                  className="cursor-pointer hover:scale-95 duration-300"
                  src={`/assets/icons/${item.icon}.svg`}
                  alt={item.icon}
                  width={20}
                  height={20}
                />
            </Link>
          ))}
        </div>
      </div>
    </footer>
  );
}
