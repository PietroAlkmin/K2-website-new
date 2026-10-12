import Image from "next/image";
import Link from "next/link";
import { footerColumns, socialLinks } from "@/data/home";

export function Footer() {
  return (
    <footer className="bg-ink px-5 py-16 sm:px-8 lg:px-16 lg:py-24">
      <div className="mx-auto w-full max-w-[1288px]">
        <div className="flex flex-col gap-8 lg:flex-row lg:items-center lg:justify-between">
          <Link href="/" aria-label="K2 Software, página inicial">
            <Image
              src="/assets/logo-k2software.svg"
              alt=""
              width={126}
              height={78}
              className="h-[78px] w-auto"
            />
          </Link>
          <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:gap-6">
            <p className="text-sm tracking-wide">Siga a K2 nas redes sociais</p>
            <ul className="flex items-center gap-6">
              {socialLinks.map((item) => (
                <li key={item.name}>
                  <a href="#" aria-label={item.name} className="inline-flex h-6 items-center">
                    <Image
                      src={item.src}
                      alt=""
                      width={item.width}
                      height={item.height}
                      className="h-[23px] w-auto"
                    />
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <nav aria-label="Rodapé" className="mt-14 grid gap-10 sm:grid-cols-2 lg:grid-cols-5">
          {footerColumns.map((column) => (
            <div key={column.title}>
              <h2 className="text-sm font-medium tracking-[0.08em] uppercase">{column.title}</h2>
              <ul className="mt-4 flex flex-col gap-3.5">
                {column.links.map((link) => (
                  <li key={link}>
                    <a href="#" className="text-base leading-6 text-[#BABABA] hover:underline">
                      {link}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </nav>

        <div className="mt-14 h-0.5 bg-[#343434]" />

        <div className="mt-8 flex flex-col gap-6 lg:flex-row lg:items-end lg:justify-between">
          <address className="max-w-3xl text-base leading-normal not-italic">
            © K2 Software. CNPJ 16.501.555/0001-57 © 2026 Todos os direitos reservados.
            <br />
            Alameda Grajaú, 60 · Sala 2510 · Alphaville · Barueri · São Paulo / SP - CEP:
            32.456-356
          </address>
          <p className="inline-flex items-center gap-3 text-base">
            <Image src="/assets/icon-convertsales.svg" alt="" width={24} height={24} />
            Powered by ConvertSales - Websites
          </p>
        </div>
      </div>
    </footer>
  );
}
