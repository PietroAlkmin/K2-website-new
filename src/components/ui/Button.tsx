import Link from "next/link";
import type { ReactNode } from "react";

type ButtonProps = {
  href: string;
  children: ReactNode;
  variant?: "outline" | "light" | "accent";
  withLine?: boolean;
  className?: string;
};

const variants = {
  outline: "border border-white text-white hover:bg-white/10",
  light: "bg-white text-black hover:bg-white/90",
  accent: "bg-accent text-white hover:brightness-105",
};

export function Button({
  href,
  children,
  variant = "accent",
  withLine = false,
  className = "",
}: ButtonProps) {
  return (
    <Link
      href={href}
      className={`inline-flex cursor-pointer items-center justify-center gap-2.5 rounded-full px-[22px] py-3.5 text-sm font-semibold leading-none ${variants[variant]} ${className}`}
    >
      {children}
      {withLine ? <span aria-hidden className="h-0.5 w-8 bg-white" /> : null}
    </Link>
  );
}
