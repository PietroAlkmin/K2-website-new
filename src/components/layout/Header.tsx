"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { navItems } from "@/data/home";
import { Button } from "@/components/ui/Button";

export function Header() {
  const [open, setOpen] = useState(false);

  return (
    <header className="absolute inset-x-0 top-0 z-50">
      <nav
        aria-label="Principal"
        className="mx-auto flex w-full max-w-[1440px] items-center justify-between gap-6 px-5 py-6 sm:px-8 lg:px-10"
      >
        <Link href="/" className="shrink-0" aria-label="K2 Software, página inicial">
          <Image
            src="/assets/logo-k2software.svg"
            alt=""
            width={88}
            height={55}
            priority
            className="h-[54px] w-[88px]"
          />
        </Link>

        <ul className="hidden items-center gap-8 xl:flex">
          {navItems.map((item) => (
            <li key={item.label}>
              {item.hasMenu ? (
                <button
                  type="button"
                  className="inline-flex items-center gap-2 text-sm font-semibold text-white"
                  aria-haspopup="true"
                  aria-expanded="false"
                >
                  {item.label}
                  <Image src="/assets/icon-chev-down.svg" alt="" width={12} height={6} />
                </button>
              ) : (
                <Link href={item.href} className="text-sm font-semibold text-white">
                  {item.label}
                </Link>
              )}
            </li>
          ))}
        </ul>

        <div className="hidden items-center gap-6 xl:flex">
          <button
            type="button"
            className="inline-flex items-center gap-3 text-sm font-semibold text-white"
            aria-label="Idioma atual: português do Brasil"
          >
            <Image src="/assets/icon-language.svg" alt="" width={22} height={22} />
            PT-BR
          </button>
          <div className="flex items-center gap-2">
            <Button href="#" variant="outline">
              Fazer login
            </Button>
            <Button href="#contato" variant="light">
              Entrar em contato
            </Button>
          </div>
        </div>

        <button
          type="button"
          className="inline-flex size-11 items-center justify-center rounded-full border border-white xl:hidden"
          aria-expanded={open}
          aria-controls="menu-mobile"
          onClick={() => setOpen((value) => !value)}
        >
          <span className="sr-only">{open ? "Fechar menu" : "Abrir menu"}</span>
          <span aria-hidden className="flex w-5 flex-col gap-1.5">
            <span className="h-0.5 w-full bg-white" />
            <span className="h-0.5 w-full bg-white" />
            <span className="h-0.5 w-full bg-white" />
          </span>
        </button>
      </nav>

      {open ? (
        <div
          id="menu-mobile"
          className="mx-5 rounded-[20px] bg-ink px-6 py-6 sm:mx-8 xl:hidden"
        >
          <ul className="flex flex-col gap-4">
            {navItems.map((item) => (
              <li key={item.label}>
                {item.hasMenu ? (
                  <button
                    type="button"
                    className="inline-flex items-center gap-2 text-base font-semibold text-white"
                    aria-haspopup="true"
                    aria-expanded="false"
                  >
                    {item.label}
                    <Image src="/assets/icon-chev-down.svg" alt="" width={12} height={6} />
                  </button>
                ) : (
                  <Link
                    href={item.href}
                    className="text-base font-semibold text-white"
                    onClick={() => setOpen(false)}
                  >
                    {item.label}
                  </Link>
                )}
              </li>
            ))}
          </ul>
          <div className="mt-6 flex flex-col gap-3 sm:flex-row">
            <Button href="#" variant="outline">
              Fazer login
            </Button>
            <Button href="#contato" variant="light">
              Entrar em contato
            </Button>
          </div>
        </div>
      ) : null}
    </header>
  );
}
