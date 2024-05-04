import Image from "next/image";
import { cn } from "@/lib/utils";

type LogoProps = {
  className?: string;
  size?: "lg";
};
export default function Logo({ className, size }: LogoProps) {
  return (
    <div className={cn("flex gap-2 items-center", className)}>
      <Image
        src="/assets/logo.svg"
        alt="ChatResponde logo"
        width={size === "lg" ? 50 : 30}
        height={size === "lg" ? 50 : 30}
      />
      <span
        className={cn("font-extrabold text-xl", {
          "text-4xl": size === "lg",
        })}
      >
        ChatResponde
      </span>
    </div>
  );
}
