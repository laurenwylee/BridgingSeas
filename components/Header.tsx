"use client";

import { useState } from "react";
import Link from "next/link";
import Logo from "./Logo";

const navItems = [
  { href: "/", label: "Home" },
  { href: "/about", label: "About" },
  { href: "/team", label: "Team" },
  // { href: "/partners", label: "Partners" },
  { href: "/get-involved", label: "Get Involved" },
];

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 border-b border-foreground/10 bg-foreground backdrop-blur">
      <nav className="mx-auto flex max-w-[1440px] items-center justify-between gap-4 px-4 py-3 sm:px-6 lg:px-8">
        <Link href="/" className="flex items-center gap-3">
          <Logo />
          <span className="hidden text-sm font-semibold tracking-[0.18em] uppercase text-background sm:inline">
            Bridging Seas
          </span>
        </Link>

        <div className="hidden items-center justify-end gap-3 text-sm md:flex md:gap-4 lg:gap-5">
          {navItems.map((item) => (
            <Link
              key={item.label}
              href={item.href}
              className="text-background transition-colors duration-200 hover:text-accent"
            >
              {item.label}
            </Link>
          ))}
          <Link
            href="https://gofund.me/2a6bb4f8c"
            target="_blank"
            rel="noreferrer"
            className="rounded-full bg-accent px-4 py-2 text-sm font-medium text-foreground transition-all duration-200 hover:-translate-y-1 hover:shadow-[0_10px_20px_rgba(44,62,64,0.18)]"
          >
            Donate
          </Link>
        </div>

        <button
          type="button"
          aria-expanded={isOpen}
          aria-label="Toggle navigation menu"
          onClick={() => setIsOpen((current) => !current)}
          className="inline-flex h-11 w-11 items-center justify-center rounded-full border border-background/20 text-background transition hover:bg-background/10 md:hidden"
        >
          <span className="flex flex-col gap-1.5">
            <span className="block h-0.5 w-5 bg-current" />
            <span className="block h-0.5 w-5 bg-current" />
            <span className="block h-0.5 w-5 bg-current" />
          </span>
        </button>
      </nav>

      {isOpen ? (
        <div className="border-t border-background/10 bg-foreground md:hidden">
          <div className="mx-auto flex max-w-[1440px] flex-col gap-2 px-4 py-4 sm:px-6">
            {navItems.map((item) => (
              <Link
                key={item.label}
                href={item.href}
                onClick={() => setIsOpen(false)}
                className="rounded-xl px-3 py-3 text-background transition hover:bg-background/10"
              >
                {item.label}
              </Link>
            ))}
            <Link
              href="https://gofund.me/2a6bb4f8c"
              target="_blank"
              rel="noreferrer"
              onClick={() => setIsOpen(false)}
              className="mt-1 inline-flex w-fit items-center rounded-full bg-accent px-4 py-2 text-sm font-medium text-foreground transition-all duration-200 hover:-translate-y-1 hover:shadow-[0_10px_20px_rgba(44,62,64,0.18)]"
            >
              Donate
            </Link>
          </div>
        </div>
      ) : null}
    </header>
  );
}
