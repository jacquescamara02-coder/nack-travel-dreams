import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowRight, BadgeCheck } from "lucide-react";
import { Reveal } from "@/components/Reveal";
import { PageHero } from "@/components/site/PageHero";
import { services, site, whatsappLink } from "@/lib/site";

export const Route = createFileRoute("/services")({
  head: () => ({
    meta: [
      { title: "Services visa et voyages — NACK TRAVEL Abidjan" },
      {
        name: "description",
        content:
          "Visa Chine en 7 jours, Schengen, Canada, États-Unis, Dubaï, voyages en groupe et déplacements d'affaires organisés de A à Z par NACK TRAVEL.",
      },
      { property: "og:title", content: "Services visa et voyages — NACK TRAVEL" },
      {
        property: "og:description",
        content: "Assistance visa, billetterie, groupes et voyages d'affaires au départ d'Abidjan.",
      },
    ],
  }),
  component: ServicesPage,
});

const steps = [
  { n: "01", t: "Premier échange", d: "Nous étudions votre profil, votre destination et vos dates." },
  { n: "02", t: "Liste de pièces", d: "Vous recevez la liste exacte des documents à réunir." },
  { n: "03", t: "Montage du dossier", d: "Nous contrôlons chaque pièce et préparons les formulaires." },
  { n: "04", t: "Dépôt et suivi", d: "Dépôt, suivi consulaire et remise du passeport." },
];

function ServicesPage() {
  return (
    <>
      <PageHero
        eyebrow="Nos prestations"
        title="Des services complets, du visa au décollage"
        description="NACK TRAVEL prend en charge chaque étape administrative et logistique de votre voyage, pour les particuliers comme pour les entreprises."
      />

      <section className="section-y">
        <div className="container-page grid gap-6 md:grid-cols-2">
          {services.map((s, i) => (
            <Reveal key={s.title} delay={i * 80}>
              <article className="card-lift h-full rounded-xl border border-border bg-card p-7">
                <h2 className="text-xl">{s.title}</h2>
                <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
                  {s.description}
                </p>
                <ul className="mt-5 space-y-2">
                  {s.points.map((p) => (
                    <li key={p} className="flex items-start gap-2 text-sm text-foreground/80">
                      <BadgeCheck className="mt-0.5 size-4 shrink-0 text-primary" />
                      {p}
                    </li>
                  ))}
                </ul>
                <a
                  href={whatsappLink(`Bonjour NACK TRAVEL, je suis intéressé par : ${s.title}.`)}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-6 inline-flex items-center gap-2 text-sm font-semibold text-primary transition-colors hover:text-primary-deep"
                >
                  Demander ce service
                  <ArrowRight className="size-4" />
                </a>
              </article>
            </Reveal>
          ))}
        </div>
      </section>

      <section className="section-y bg-surface">
        <div className="container-page">
          <Reveal>
            <h2 className="text-3xl sm:text-4xl">Comment se déroule un dossier</h2>
            <p className="mt-4 max-w-xl text-sm leading-relaxed text-muted-foreground">
              Quatre étapes claires, avec un point d'avancement à chaque changement de statut.
            </p>
          </Reveal>
          <div className="mt-10 grid gap-6 md:grid-cols-4">
            {steps.map((s, i) => (
              <Reveal key={s.n} delay={i * 90}>
                <div className="card-lift h-full rounded-xl border border-border bg-card p-6">
                  <span className="font-display text-sm font-semibold text-accent">{s.n}</span>
                  <h3 className="mt-3 text-base">{s.t}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{s.d}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="section-y">
        <div className="container-page rounded-2xl border border-border bg-card p-8 text-center shadow-[var(--shadow-soft)] sm:p-12">
          <Reveal>
            <h2 className="text-2xl sm:text-3xl">Un projet de voyage précis ?</h2>
            <p className="mx-auto mt-3 max-w-xl text-sm text-muted-foreground">
              Envoyez votre demande, nous revenons vers vous avec un devis détaillé. Téléphone :{" "}
              {site.phoneDisplay}.
            </p>
            <Link
              to="/contact"
              className="mt-7 inline-flex items-center gap-2 rounded-md bg-primary px-6 py-3.5 text-sm font-semibold text-primary-foreground transition-transform duration-300 ease-[var(--ease-smooth)] hover:-translate-y-0.5"
            >
              Ouvrir le formulaire
              <ArrowRight className="size-4" />
            </Link>
          </Reveal>
        </div>
      </section>
    </>
  );
}
