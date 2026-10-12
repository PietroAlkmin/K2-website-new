"use client";

import { useState } from "react";
import Image from "next/image";
import { solutionImage, solutions } from "@/data/home";

export function Solutions() {
  const [active, setActive] = useState(0);
  const current = solutions[active];

  return (
    <section
      id="solucoes"
      className="bg-accent px-5 py-16 sm:px-8 lg:px-16 lg:py-24"
      aria-labelledby="solucoes-titulo"
    >
      <div className="mx-auto w-full max-w-[1312px]">
        <h2
          id="solucoes-titulo"
          className="max-w-[532px] text-[32px] leading-[1.2] font-medium sm:text-[40px]"
        >
          Soluções que integram toda a sua cadeia produtiva
        </h2>
        <div className="mt-10 grid items-center gap-8 lg:grid-cols-[minmax(0,546px)_minmax(0,672px)] lg:gap-12">
          <div role="tablist" aria-label="Soluções da plataforma" className="flex flex-col gap-2">
            {solutions.map((item, index) => {
              const selected = index === active;
              return (
                <button
                  key={item.title}
                  type="button"
                  role="tab"
                  id={`solucao-${index}`}
                  aria-selected={selected}
                  aria-controls="painel-solucao"
                  className={
                    selected
                      ? "rounded-[20px] bg-white px-5 py-7 text-left text-black"
                      : "rounded-[20px] px-5 py-3 text-left text-white"
                  }
                  onClick={() => setActive(index)}
                >
                  <span className="block text-2xl leading-[1.2] font-medium">{item.title}</span>
                  {selected ? (
                    <span className="mt-3 block text-lg leading-[1.3] font-normal">
                      {item.description}
                    </span>
                  ) : null}
                </button>
              );
            })}
          </div>
          <div id="painel-solucao" role="tabpanel" aria-labelledby={`solucao-${active}`}>
            <Image
              src={solutionImage.src}
              alt={`${solutionImage.alt}: ${current.title}`}
              width={solutionImage.width}
              height={solutionImage.height}
              sizes="(min-width: 1024px) 672px, 100vw"
              className="h-auto w-full rounded-[20px] object-cover"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
