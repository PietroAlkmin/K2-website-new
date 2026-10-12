"use client";

import { useCallback, useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { clientLogos, heroSlides } from "@/data/home";
import { Button } from "@/components/ui/Button";

const AUTOPLAY_MS = 7000;

export function Hero() {
  const [active, setActive] = useState(0);
  const [paused, setPaused] = useState(false);
  // A arte promocional traz o texto embutido e perde legibilidade em telas estreitas.
  const [compact, setCompact] = useState(false);
  const slides = compact ? heroSlides.filter((slide) => slide.kind === "content") : heroSlides;
  const activeSlide = slides[Math.min(active, slides.length - 1)];
  const showsContent = activeSlide.kind === "content";
  const isLastSlide = active === slides.length - 1;

  const goTo = useCallback(
    (index: number) => {
      setActive((index + slides.length) % slides.length);
    },
    [slides.length],
  );

  useEffect(() => {
    const query = window.matchMedia("(max-width: 1023px)");
    const update = () => setCompact(query.matches);
    update();
    query.addEventListener("change", update);
    return () => query.removeEventListener("change", update);
  }, []);

  useEffect(() => {
    setActive((current) => Math.min(current, slides.length - 1));
  }, [slides.length]);

  useEffect(() => {
    if (paused) return;
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;

    const timer = window.setInterval(() => {
      setActive((current) => (current + 1) % slides.length);
    }, AUTOPLAY_MS);

    return () => window.clearInterval(timer);
  }, [paused, slides.length]);

  return (
    <section
      aria-roledescription="carrossel"
      aria-label="Destaques da K2 Software"
      className="relative isolate flex h-dvh flex-col overflow-hidden pt-[112px] pb-10 lg:pt-[102px] lg:pb-0"
      onMouseEnter={() => setPaused(true)}
      onMouseLeave={() => setPaused(false)}
      onFocusCapture={() => setPaused(true)}
      onBlurCapture={() => setPaused(false)}
    >
      {slides.map((slide, index) => (
        <Image
          key={slide.src}
          src={slide.src}
          alt={index === active ? slide.alt : ""}
          fill
          priority={index === 0}
          sizes="100vw"
          aria-hidden={index !== active}
          className={`-z-20 object-cover transition-opacity duration-700 motion-reduce:transition-none ${
            index === active ? "opacity-100" : "opacity-0"
          }`}
        />
      ))}
      <div
        aria-hidden
        className={`absolute inset-0 -z-10 transition-opacity duration-700 ${
          showsContent ? "opacity-100" : "opacity-0"
        }`}
        style={{
          backgroundImage:
            "linear-gradient(to left, rgba(0,0,0,0) 29.479%, rgba(0,0,0,0.4) 100%), linear-gradient(180deg, rgba(0,0,0,0.2) 0%, rgba(0,0,0,0) 43.234%), linear-gradient(180deg, rgba(0,0,0,0) 68.626%, rgba(0,0,0,0.2) 100%)",
        }}
      />

      {activeSlide.kind === "banner" ? (
        <Link
          href={activeSlide.href}
          aria-label={activeSlide.linkLabel}
          className="absolute inset-0 z-10"
        />
      ) : null}

      <div
        className={`mx-auto flex w-full max-w-[1440px] flex-1 items-center px-5 transition-opacity duration-500 sm:px-8 lg:px-16 ${
          showsContent ? "opacity-100" : "pointer-events-none opacity-0"
        }`}
        aria-hidden={!showsContent}
      >
        <div>
          <h1 className="max-w-[659px] text-[40px] leading-none font-medium sm:text-5xl lg:text-[64px]">
            A plataforma de gestão mais completa e inovadora do Brasil
          </h1>
          <p className="mt-6 max-w-[423px] text-base leading-normal">
            Todas as soluções que uma empresa precisa, integradas no único ERP do mercado 100%
            web e com atualização automática de versão.
          </p>
          <Button href="#contato" withLine className="mt-8 px-8 py-6 text-lg">
            Entrar em contato
          </Button>
        </div>
      </div>

      <div
        className={`relative z-20 mx-auto flex w-full max-w-[1440px] items-center gap-6 px-5 pt-12 sm:px-8 lg:px-16 lg:pb-[77px] ${
          isLastSlide ? "justify-end" : "flex-col lg:flex-row"
        }`}
      >
        {isLastSlide ? null : (
          <>
            <p className="max-w-[211px] shrink-0 text-base leading-normal [text-shadow:0_1px_6px_rgba(0,0,0,0.35)]">
              Empresas que confiam
              <br />
              na tecnologia K2 Software:
            </p>
            <div
              className="no-scrollbar flex min-w-0 flex-1 items-center gap-9 overflow-x-auto"
              role="group"
              aria-label="Empresas que confiam na tecnologia K2 Software"
            >
              {clientLogos.map((logo, index) => {
                const isLastLogo = index === clientLogos.length - 1;
                return (
                  <Image
                    key={logo.name}
                    src={logo.src}
                    alt={logo.name}
                    width={isLastLogo ? 110 : logo.width}
                    height={isLastLogo ? 24 : logo.height}
                    className={
                      isLastLogo
                        ? "h-auto w-[110px] max-w-none shrink-0 object-contain drop-shadow-[0_1px_6px_rgba(0,0,0,0.35)]"
                        : "h-9 w-auto max-w-none shrink-0 object-contain drop-shadow-[0_1px_6px_rgba(0,0,0,0.35)]"
                    }
                  />
                );
              })}
            </div>
          </>
        )}
        <div
          className="flex shrink-0 items-center gap-1.5 lg:ml-auto"
          role="tablist"
          aria-label="Slides do destaque"
        >
          {slides.map((slide, index) => (
            <button
              key={slide.src}
              type="button"
              role="tab"
              aria-selected={index === active}
              aria-label={`Slide ${index + 1} de ${slides.length}`}
              onClick={() => goTo(index)}
              className={`size-3.5 rounded-[4px] transition-colors ${
                index === active ? "bg-white" : "border border-white bg-transparent opacity-50"
              }`}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
