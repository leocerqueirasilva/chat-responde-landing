import Image from "next/image";
import { resources } from "./helpers";

export default function OurResources() {
  return (
    <section className="cr-container">
      <div className="flex flex-col gap-4 text-center">
        <h3 className="text-4xl font-extrabold">Descubra nossos recursos</h3>
        <p className="text-lg md:text-xl duration-300">
          Explore as vantagens que oferecemos para impulsionar seu negócio com
          eficiência e facilidade.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-10 gap-y-16 mt-20 duration-300">
        {resources.map((resource) => (
          <div
            key={resource.id}
            className="relative bg-muted border-2 border-secondary rounded-xl p-10 text-center"
          >
            <p className="text-lg font-extrabold">{resource.title}</p>
            <p className="mt-5">{resource.description}</p>

            <Image
              className="absolute right-1/2 translate-x-1/2 -top-8"
              src={resource.icon}
              alt={resource.title}
              width={60}
              height={60}
            />
          </div>
        ))}
      </div>
    </section>
  );
}
