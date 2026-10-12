import Image from "next/image";
import { credibilityCards } from "@/data/home";
import { Carousel } from "@/components/ui/Carousel";

export function Credibility() {
  return (
    <section className="bg-accent py-16 lg:py-24" aria-labelledby="credibilidade-titulo">
      <div className="mx-auto w-full max-w-[1440px] px-5 sm:px-8 lg:px-16">
        <h2
          id="credibilidade-titulo"
          className="max-w-[925px] text-[32px] leading-[1.2] font-medium sm:text-[40px]"
        >
          Aqui construímos a credibilidade da K2 Software como parceira tecnológica, não apenas
          vendedora de software.
        </h2>
      </div>
      <div className="mt-12 pl-5 sm:pl-8 lg:pl-16">
        <Carousel
          label="Diferenciais da K2 Software"
          trackClassName="gap-6 pr-5"
          slideClassName="w-[min(82vw,365px)]"
        >
          {credibilityCards.map((card) => (
            <article
              key={card.title}
              className="flex h-full flex-col rounded-[20px] bg-white px-4 pt-4 pb-6 text-black"
            >
              <Image
                src={card.image}
                alt={card.imageAlt}
                width={333}
                height={190}
                sizes="333px"
                className="h-[190px] w-full rounded-xl object-cover"
              />
              <h3 className="mt-6 text-[22px] leading-[1.2] font-medium">{card.title}</h3>
              <p className="mt-2 text-sm leading-[1.3] text-muted">{card.text}</p>
              <a href="#" className="mt-6 text-sm font-medium text-accent underline">
                Saiba mais
              </a>
            </article>
          ))}
        </Carousel>
      </div>
    </section>
  );
}
