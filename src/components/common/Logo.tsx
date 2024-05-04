import Image from "next/image";

export default function Logo() {
  return (
    <div className="flex gap-2 items-center">
      <Image
        src="/assets/logo.svg"
        alt="ChatResponde logo"
        width={30}
        height={30}
      />
      <span className="font-extrabold text-xl">ChatResponde</span>
    </div>
  );
}
