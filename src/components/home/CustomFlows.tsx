import Image from "next/image";

export default function CustomFlows() {
  return (
    <section className="cr-container">
      <div className="flex justify-center">
        <Image
          src="/assets/home/custom-flow.png"
          alt="UI showing building custom flow"
          width={1000}
          height={1000}
        />
      </div>
    </section>
  );
}
