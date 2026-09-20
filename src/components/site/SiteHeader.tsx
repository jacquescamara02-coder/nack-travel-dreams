import { Link } from "@tanstack/react-router";
import { useEffect, useState } from "react";
import { Menu, X, Phone } from "lucide-react";
import { site } from "@/lib/site";

const nav = [
  { to: "/", label: "Accueil" },
  { to: "/services", label: "Services" },
  { to: "/galerie", label: "Galerie" },
  { to: "/contact", label: "Contact" },
] as const;

export function SiteHeader() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-[background-color,box-shadow,backdrop-filter] duration-500 ease-[var(--ease-smooth)] ${
        scrolled
          ? "bg-background/90 shadow-[var(--shadow-soft)] backdrop-blur-md"
          : "bg-transparent"
      }`}
    >
      <div className="container-page flex h-18 items-center justify-between py-4">
        <Link to="/" className="flex items-center gap-2.5" onClick={() => setOpen(false)}>
          <span className="grid size-9 place-items-center rounded-md gradient-deep text-sm font-semibold text-primary-foreground">
            N
          </span>
          <span
            className={`font-display text-base font-semibold tracking-tight ${
              scrolled ? "text-foreground" : "text-primary-foreground"
            }`}
          >
            NACK TRAVEL
          </span>
        </Link>

        <nav className="hidden items-center gap-1 md:flex">
          {nav.map((item) => (
            <Link
              key={item.to}
              to={item.to}
              activeOptions={{ exact: item.to === "/" }}
              className={`rounded-md px-3.5 py-2 text-sm font-medium transition-colors duration-300 ease-[var(--ease-smooth)] ${
                scrolled
                  ? "text-muted-foreground hover:text-foreground"
                  : "text-primary-foreground/80 hover:text-primary-foreground"
              }`}
              activeProps={{
                className: scrolled
                  ? "!text-foreground bg-secondary"
                  : "!text-primary-foreground bg-white/12",
              }}
            >
              {item.label}
            </Link>
          ))}
          <a
            href={`tel:${site.phoneRaw}`}
            className="ml-3 inline-flex items-center gap-2 rounded-md bg-accent px-4 py-2 text-sm font-semibold text-accent-foreground transition-transform duration-300 ease-[var(--ease-smooth)] hover:-translate-y-0.5"
          >
            <Phone className="size-4" />
            {site.phoneDisplay}
          </a>
        </nav>

        <button
          type="button"
          aria-label={open ? "Fermer le menu" : "Ouvrir le menu"}
          onClick={() => setOpen((v) => !v)}
          className={`md:hidden rounded-md p-2 transition-colors ${
            scrolled ? "text-foreground hover:bg-secondary" : "text-primary-foreground hover:bg-white/12"
          }`}
        >
          {open ? <X className="size-5" /> : <Menu className="size-5" />}
        </button>
      </div>

      {open && (
        <div className="md:hidden border-t border-border bg-background/98 backdrop-blur-md">
          <div className="container-page flex flex-col py-3">
            {nav.map((item) => (
              <Link
                key={item.to}
                to={item.to}
                activeOptions={{ exact: item.to === "/" }}
                onClick={() => setOpen(false)}
                className="rounded-md px-3 py-3 text-sm font-medium text-muted-foreground transition-colors hover:bg-secondary hover:text-foreground"
                activeProps={{ className: "!text-foreground bg-secondary" }}
              >
                {item.label}
              </Link>
            ))}
            <a
              href={`tel:${site.phoneRaw}`}
              className="mt-2 inline-flex items-center justify-center gap-2 rounded-md bg-accent px-4 py-3 text-sm font-semibold text-accent-foreground"
            >
              <Phone className="size-4" />
              {site.phoneDisplay}
            </a>
          </div>
        </div>
      )}
    </header>
  );
}
