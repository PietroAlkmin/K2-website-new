import Image from "next/image";
import { faq } from "@/data/home";

export function Faq() {
  return (
    <section
      className="bg-white px-5 py-16 text-black sm:px-8 lg:px-16 lg:py-24"
      aria-labelledby="faq-titulo"
    >
      <div className="mx-auto w-full max-w-[874px]">
        <h2 id="faq-titulo" className="text-[32px] leading-[1.2] font-medium sm:text-[40px]">
          Perguntas Frequentes
        </h2>
        <div className="mt-8 flex flex-col gap-4">
          {faq.map((item, index) => (
            <details
              key={item.question}
              name="faq"
              open={index === 0}
              className="group rounded-[20px] border border-line bg-white"
            >
              <summary className="flex w-full cursor-pointer list-none items-start justify-between gap-6 p-6 text-xl leading-[1.3] font-medium [&::-webkit-details-marker]:hidden">
                {item.question}
                <Image
                  src="/assets/icon-chev-down.svg"
                  alt=""
                  width={20}
                  height={9}
                  className="mt-2 shrink-0 brightness-0 group-open:-scale-y-100"
                />
              </summary>
              <div className="space-y-4 px-6 pb-6 text-base leading-[1.4] text-faq">
                {item.answer.map((paragraph, paragraphIndex) => (
                  <p key={paragraphIndex}>{paragraph}</p>
                ))}
              </div>
            </details>
          ))}
        </div>
      </div>
    </section>
  );
}
