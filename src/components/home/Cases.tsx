import Image from "next/image";
import { cases } from "@/data/home";
import { Carousel } from "@/components/ui/Carousel";

export function Cases() {
  return (
    <section
      id="cases"
      className="bg-white py-16 text-black lg:py-24"
      aria-labelledby="cases-titulo"
    >
      <div className="mx-auto w-full max-w-[1440px] px-5 sm:px-8 lg:px-16">
        <h2
          id="cases-titulo"
          className="max-w-[576px] text-[32px] leading-[1.2] font-medium sm:text-[40px]"
        >
          O impacto da K2 nos negócios de nossos clientes
        </h2>
      </div>
      <div className="mt-12 pl-5 sm:pl-8 lg:pl-16">
        <Carousel
          label="Cases de sucesso"
          tone="dark"
          trackClassName="gap-6 pr-5"
          slideClassName="w-[min(88vw,1280px)]"
        >
          {cases.map((item) => (
            <article
              key={item.company + item.image}
              className="overflow-hidden rounded-[20px] lg:relative lg:h-[500px]"
            >
              <div className="relative h-64 sm:h-80 lg:absolute lg:inset-0 lg:h-full">
                <Image
                  src={item.image}
                  alt={item.imageAlt}
                  fill
                  sizes="(min-width: 1024px) 1280px, 88vw"
                  className="object-cover"
                />
              </div>
              <div className="relative bg-white p-6 shadow-[0_0_22px_rgba(0,0,0,0.07)] sm:p-8 lg:absolute lg:top-1/2 lg:left-[38px] lg:w-[min(598px,46%)] lg:-translate-y-1/2 lg:rounded-[20px]">
                <Image
                  src={item.logo}
                  alt={item.company}
                  width={item.logoWidth}
                  height={item.logoHeight}
                  className="h-14 w-auto"
                />
                <p className="mt-10 text-base leading-[1.3] text-muted sm:text-lg">{item.text}</p>
                <dl className="mt-10 grid grid-cols-1 gap-6 sm:grid-cols-3">
                  {item.metrics.map((metric) => (
                    <div key={metric.value}>
                      <dt className="text-[32px] leading-none font-medium text-accent sm:text-[40px]">
                        {metric.value}
                      </dt>
                      <dd className="mt-2 text-base leading-[1.3] text-muted sm:text-lg">
                        {metric.label}
                      </dd>
                    </div>
                  ))}
                </dl>
              </div>
            </article>
          ))}
        </Carousel>
      </div>
    </section>
  );
}
