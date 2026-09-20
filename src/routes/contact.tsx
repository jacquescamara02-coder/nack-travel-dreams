import { createFileRoute } from "@tanstack/react-router";
import { Clock, Mail, MapPin, Phone } from "lucide-react";
import { Reveal } from "@/components/Reveal";
import { PageHero } from "@/components/site/PageHero";
import { BookingForm } from "@/components/site/BookingForm";
import { MapEmbed } from "@/components/site/MapEmbed";
import { FaqSection } from "@/components/site/FaqSection";
import { site } from "@/lib/site";

export const Route = createFileRoute("/contact")({
  head: () => ({
    meta: [
      { title: "Contact et réservation — NACK TRAVEL Abidjan" },
      {
        name: "description",
        content:
          "Réservez votre rendez-vous NACK TRAVEL : formulaire de réservation, téléphone 07 07 13 76 87, agence à Angré Pharmacie des Allées, Abidjan.",
      },
      { property: "og:title", content: "Contact et réservation — NACK TRAVEL" },
      {
        property: "og:description",
        content: "Formulaire de réservation, coordonnées et localisation de l'agence à Abidjan.",
      },
    ],
  }),
  component: ContactPage,
});

function ContactPage() {
  const infos = [
    { icon: Phone, label: "Téléphone", value: site.phoneDisplay, href: `tel:${site.phoneRaw}` },
    { icon: Mail, label: "Email", value: site.email, href: `mailto:${site.email}` },
    { icon: MapPin, label: "Agence", value: site.address },
    { icon: Clock, label: "Horaires", value: `${site.hours} — ${site.weekend}` },
  ];

  return (
    <>
      <PageHero
        eyebrow="Contact"
        title="Réservez votre accompagnement"
        description="Remplissez le formulaire, appelez-nous ou passez à l'agence. Nous répondons du lundi au vendredi de 8h à 17h, et tout le week-end."
      />

      <section className="section-y">
        <div className="container-page grid gap-10 lg:grid-cols-[1.15fr_0.85fr]">
          <Reveal>
            <h2 className="text-2xl sm:text-3xl">Formulaire de réservation</h2>
            <p className="mt-3 text-sm text-muted-foreground">
              Les champs marqués d'une étoile sont obligatoires.
            </p>
            <div className="mt-6">
              <BookingForm />
            </div>
          </Reveal>

          <Reveal delay={120}>
            <div className="rounded-xl border border-border bg-card p-6 shadow-[var(--shadow-soft)]">
              <h2 className="text-xl">Nos coordonnées</h2>
              <ul className="mt-5 space-y-5">
                {infos.map((i) => (
                  <li key={i.label} className="flex gap-3">
                    <i.icon className="mt-0.5 size-4 shrink-0 text-primary" />
                    <div>
                      <p className="text-xs font-semibold tracking-wide uppercase text-muted-foreground">
                        {i.label}
                      </p>
                      {i.href ? (
                        <a
                          href={i.href}
                          className="text-sm text-foreground transition-colors hover:text-primary"
                        >
                          {i.value}
                        </a>
                      ) : (
                        <p className="text-sm text-foreground">{i.value}</p>
                      )}
                    </div>
                  </li>
                ))}
              </ul>
            </div>

            <div className="mt-6">
              <MapEmbed />
            </div>
          </Reveal>
        </div>
      </section>

      <FaqSection />
    </>
  );
}
