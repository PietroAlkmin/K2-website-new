import Image from "next/image";
import { benefitsBackground } from "@/data/home";
import { Button } from "@/components/ui/Button";

export function Benefits() {
  return (
    <section
      id="contato"
      className="relative isolate overflow-hidden px-5 py-20 sm:px-8 lg:px-16 lg:py-32"
      aria-labelledby="contato-titulo"
    >
      <Image
        src={benefitsBackground.src}
        alt=""
        fill
        sizes="100vw"
        className="-z-20 object-cover"
      />
      <div
        aria-hidden
        className="absolute inset-0 -z-10"
        style={{
          backgroundImage:
            "linear-gradient(to left, rgba(0,0,0,0) 58.681%, rgba(0,0,0,0.1) 100%), linear-gradient(180deg, rgba(0,0,0,0.4) 0%, rgba(0,0,0,0) 43.234%), linear-gradient(180deg, rgba(0,0,0,0) 68.626%, rgba(0,0,0,0.4) 100%)",
        }}
      />
      <div className="mx-auto w-full max-w-[1312px]">
        <h2
          id="contato-titulo"
          className="max-w-[659px] text-[40px] leading-none font-medium sm:text-5xl lg:text-[64px]"
        >
          A plataforma de gestão mais completa e inovadora do Brasil
        </h2>
        <p className="mt-6 max-w-[423px] text-base leading-normal">
          Todas as soluções que uma empresa precisa, integradas no único ERP do mercado 100% web e
          com atualização automática de versão.
        </p>
        <Button href="#contato" withLine className="mt-8 px-8 py-6 text-lg">
          Entrar em contato
        </Button>
      </div>
    </section>
  );
}
