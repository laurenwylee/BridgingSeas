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
  return (
    <header className="sticky top-0 z-50 border-b border-foreground/10 bg-foreground backdrop-blur">
      <nav className="mx-auto flex max-w-[1440px] items-center justify-between gap-4 px-4 py-3 sm:px-6 lg:px-8">
        <Link href="/" className="flex items-center gap-3">
          <Logo />
          <span className="hidden text-sm font-semibold tracking-[0.18em] uppercase text-background sm:inline">
            Bridging Seas
          </span>
        </Link>

        <div className=" flex flex-wrap items-center justify-end gap-3 text-sm sm:gap-5">
          {navItems.map((item) => (
            <Link
              key={item.label}
              href={item.href}
              className="text-background transition-colors duration-200 hover:text-background"
            >
              {item.label}
            </Link>
          ))}
          <Link
            href="/donate"
            className="rounded-full bg-accent px-4 py-2 text-sm font-medium text-foreground transition-all duration-200 hover:-translate-y-1 hover:shadow-[0_10px_20px_rgba(44,62,64,0.18)]"
          >
            Donate
          </Link>
        </div>
      </nav>
    </header>
  );
}
