import { Link } from "@tanstack/react-router";
import { Mail, MapPin, Phone, Clock } from "lucide-react";
import { site } from "@/lib/site";

export function SiteFooter() {
  return (
    <footer className="gradient-deep text-primary-foreground">
      <div className="container-page grid gap-10 py-16 md:grid-cols-4">
        <div className="md:col-span-2">
          <div className="flex items-center gap-2.5">
            <span className="grid size-9 place-items-center rounded-md bg-accent text-sm font-semibold text-accent-foreground">
              N
            </span>
            <span className="font-display text-base font-semibold">NACK TRAVEL</span>
          </div>
          <p className="mt-4 max-w-sm text-sm leading-relaxed text-primary-foreground/75">
            {site.promise}
          </p>
          <p className="mt-4 text-sm text-primary-foreground/60">
            Agence de voyage et assistance visa à Abidjan, ouverte depuis {site.since}.
          </p>
        </div>

        <div>
          <h4 className="text-sm font-semibold text-primary-foreground">Navigation</h4>
          <ul className="mt-4 space-y-2.5 text-sm">
            {[
              { to: "/", label: "Accueil" },
              { to: "/services", label: "Services" },
              { to: "/galerie", label: "Galerie" },
              { to: "/contact", label: "Contact" },
            ].map((l) => (
              <li key={l.to}>
                <Link
                  to={l.to}
                  className="text-primary-foreground/70 transition-colors duration-300 hover:text-accent"
                >
                  {l.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h4 className="text-sm font-semibold text-primary-foreground">Contact</h4>
          <ul className="mt-4 space-y-3 text-sm text-primary-foreground/75">
            <li className="flex gap-2.5">
              <Phone className="mt-0.5 size-4 shrink-0 text-accent" />
              <a href={`tel:${site.phoneRaw}`} className="hover:text-accent">
                {site.phoneDisplay}
              </a>
            </li>
            <li className="flex gap-2.5">
              <Mail className="mt-0.5 size-4 shrink-0 text-accent" />
              <a href={`mailto:${site.email}`} className="hover:text-accent">
                {site.email}
              </a>
            </li>
            <li className="flex gap-2.5">
              <MapPin className="mt-0.5 size-4 shrink-0 text-accent" />
              <span>{site.address}</span>
            </li>
            <li className="flex gap-2.5">
              <Clock className="mt-0.5 size-4 shrink-0 text-accent" />
              <span>
                {site.hours}
                <br />
                {site.weekend}
              </span>
            </li>
          </ul>
        </div>
      </div>

      <div className="border-t border-white/10">
        <div className="container-page flex flex-col gap-2 py-6 text-xs text-primary-foreground/55 sm:flex-row sm:items-center sm:justify-between">
          <p>
            © {new Date().getFullYear()} NACK TRAVEL. Tous droits réservés.
          </p>
          <p>{site.tagline}</p>
        </div>
      </div>
    </footer>
  );
}
