import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowRight } from "lucide-react";
import { Reveal } from "@/components/Reveal";
import { PageHero } from "@/components/site/PageHero";
import heroVideo from "@/assets/hero-loop.mp4.asset.json";
import heroPoster from "@/assets/hero-poster.jpg";
import destChine from "@/assets/dest-chine.jpg";
import destDubai from "@/assets/dest-dubai.jpg";
import destFrance from "@/assets/dest-france.jpg";

export const Route = createFileRoute("/galerie")({
  head: () => ({
    meta: [
      { title: "Galerie des destinations — NACK TRAVEL" },
      {
        name: "description",
        content:
          "Chine, Dubaï, France, Canada : découvrez en images et en vidéo les destinations préparées par NACK TRAVEL depuis Abidjan.",
      },
      { property: "og:title", content: "Galerie des destinations — NACK TRAVEL" },
      {
        property: "og:description",
        content: "Les destinations et départs organisés par l'agence NACK TRAVEL.",
      },
    ],
  }),
  component: GaleriePage,
});

const shots = [
  { img: destChine, title: "Pékin et Shanghai", note: "Visa Chine, 7 jours ouvrés" },
  { img: destDubai, title: "Dubaï", note: "Séjours et visas Émirats" },
  { img: destFrance, title: "Paris et Schengen", note: "Rendez-vous consulaire préparé" },
  { img: heroPoster, title: "Départs d'Abidjan", note: "Billetterie et transferts" },
];

function GaleriePage() {
  return (
    <>
      <PageHero
        eyebrow="Galerie"
        title="Les destinations que nous préparons"
        description="Un aperçu des voyages organisés par notre équipe : visas obtenus, départs de groupe et séjours d'affaires."
      />

      <section className="section-y">
        <div className="container-page">
          <Reveal>
            <div className="relative overflow-hidden rounded-2xl border border-border shadow-[var(--shadow-soft)]">
              <video
                className="aspect-video w-full object-cover"
                src={heroVideo.url}
                poster={heroPoster}
                autoPlay
                muted
                loop
                playsInline
                preload="metadata"
              />
              <div className="pointer-events-none absolute inset-x-0 bottom-0 bg-[linear-gradient(to_top,oklch(0.22_0.09_259/0.85),transparent)] p-6">
                <p className="font-display text-lg font-semibold text-primary-foreground">
                  En route vers votre prochaine destination
                </p>
                <p className="mt-1 text-sm text-primary-foreground/75">
                  Chaque voyage, une nouvelle histoire.
                </p>
              </div>
            </div>
          </Reveal>

          <div className="mt-8 grid gap-6 sm:grid-cols-2">
            {shots.map((s, i) => (
              <Reveal key={s.title} delay={i * 90}>
                <figure className="card-lift group overflow-hidden rounded-xl border border-border bg-card">
                  <div className="aspect-16/10 overflow-hidden">
                    <img
                      src={s.img}
                      alt={s.title}
                      loading="lazy"
                      className="size-full object-cover transition-transform duration-700 ease-[var(--ease-smooth)] group-hover:scale-105"
                    />
                  </div>
                  <figcaption className="p-5">
                    <h2 className="text-base">{s.title}</h2>
                    <p className="mt-1 text-sm text-muted-foreground">{s.note}</p>
                  </figcaption>
                </figure>
              </Reveal>
            ))}
          </div>

          <Reveal delay={120}>
            <div className="mt-12 text-center">
              <Link
                to="/contact"
                className="inline-flex items-center gap-2 rounded-md bg-primary px-6 py-3.5 text-sm font-semibold text-primary-foreground transition-transform duration-300 ease-[var(--ease-smooth)] hover:-translate-y-0.5"
              >
                Préparer mon voyage
                <ArrowRight className="size-4" />
              </Link>
            </div>
          </Reveal>
        </div>
      </section>
    </>
  );
}
