import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowRight, BadgeCheck, Clock3, Globe2, Headset, ShieldCheck } from "lucide-react";
import { Reveal } from "@/components/Reveal";
import { CountUp } from "@/components/CountUp";
import { FaqSection } from "@/components/site/FaqSection";
import { services, site, whatsappLink } from "@/lib/site";
import heroVideo from "@/assets/hero-loop.mp4.asset.json";
import heroPoster from "@/assets/hero-poster.jpg";
import destChine from "@/assets/dest-chine.jpg";
import destDubai from "@/assets/dest-dubai.jpg";
import destFrance from "@/assets/dest-france.jpg";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "NACK TRAVEL — Agence de voyage et visa à Abidjan" },
      {
        name: "description",
        content:
          "Visa Chine, Schengen, Canada, États-Unis et Dubaï, billetterie et voyages en groupe. Agence NACK TRAVEL à Angré, Abidjan, ouverte depuis 2023.",
      },
      { property: "og:title", content: "NACK TRAVEL — Agence de voyage et visa à Abidjan" },
      {
        property: "og:description",
        content:
          "Votre voyage commence ici : assistance visa, billetterie et organisation de séjours depuis Abidjan.",
      },
    ],
  }),
  component: Index,
});

const stats = [
  { value: 7, suffix: " j", label: "Délai visa Chine" },
  { value: 12, suffix: "+", label: "Destinations traitées" },
  { value: 900, suffix: "+", label: "Dossiers accompagnés" },
  { value: 24, suffix: "h/24", label: "Assistance le week-end" },
];

const destinations = [
  { img: destChine, name: "Chine", note: "Visa en 7 jours ouvrés" },
  { img: destDubai, name: "Dubaï", note: "Traitement express" },
  { img: destFrance, name: "France & Schengen", note: "Dossier et rendez-vous" },
];

const advantages = [
  {
    icon: ShieldCheck,
    title: "Dossiers vérifiés pièce par pièce",
    text: "Chaque document est contrôlé avant dépôt pour éviter les refus évitables.",
  },
  {
    icon: Clock3,
    title: "Délais annoncés et tenus",
    text: "Vous connaissez le calendrier dès le premier rendez-vous, sans mauvaise surprise.",
  },
  {
    icon: Headset,
    title: "Un conseiller joignable",
    text: "Du lundi au vendredi de 8h à 17h, et l'agence du week-end samedi et dimanche.",
  },
  {
    icon: Globe2,
    title: "De A à Z",
    text: "Visa, billet, hôtel, assurance et transferts organisés par la même équipe.",
  },
];

function Index() {
  return (
    <>
      <section className="relative isolate flex min-h-[92vh] items-center overflow-hidden">
        <video
          className="absolute inset-0 -z-20 size-full object-cover"
          src={heroVideo.url}
          poster={heroPoster}
          autoPlay
          muted
          loop
          playsInline
          preload="metadata"
        />
        <div className="absolute inset-0 -z-10 bg-[linear-gradient(105deg,oklch(0.22_0.09_259/0.92)_0%,oklch(0.27_0.1_259/0.72)_48%,oklch(0.27_0.1_259/0.35)_100%)]" />

        <div className="container-page py-32 text-primary-foreground">
          <Reveal>
            <p className="inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/10 px-3.5 py-1.5 text-xs font-medium backdrop-blur-sm">
              <BadgeCheck className="size-3.5 text-accent" />
              Agence à Abidjan depuis {site.since}
            </p>
          </Reveal>
          <Reveal delay={100}>
            <h1 className="mt-6 max-w-3xl text-4xl leading-[1.08] sm:text-6xl">
              À chaque voyage, <span className="text-gradient-gold">une nouvelle histoire</span> avec
              NACK.
            </h1>
          </Reveal>
          <Reveal delay={180}>
            <p className="mt-6 max-w-xl text-base leading-relaxed text-primary-foreground/80 sm:text-lg">
              {site.promise}
            </p>
          </Reveal>
          <Reveal delay={260}>
            <div className="mt-9 flex flex-wrap gap-3">
              <Link
                to="/contact"
                className="inline-flex items-center gap-2 rounded-md bg-accent px-6 py-3.5 text-sm font-semibold text-accent-foreground transition-transform duration-300 ease-[var(--ease-smooth)] hover:-translate-y-0.5"
              >
                Réserver un rendez-vous
                <ArrowRight className="size-4" />
              </Link>
              <a
                href={whatsappLink("Bonjour NACK TRAVEL, je souhaite un devis.")}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 rounded-md border border-white/25 bg-white/10 px-6 py-3.5 text-sm font-semibold text-primary-foreground backdrop-blur-sm transition-colors duration-300 hover:bg-white/18"
              >
                Demander un devis
              </a>
            </div>
          </Reveal>
        </div>
      </section>

      <section className="border-b border-border bg-card">
        <div className="container-page grid grid-cols-2 gap-8 py-12 md:grid-cols-4">
          {stats.map((s, i) => (
            <Reveal key={s.label} delay={i * 90}>
              <p className="font-display text-3xl font-semibold text-primary sm:text-4xl">
                <CountUp to={s.value} suffix={s.suffix} />
              </p>
              <p className="mt-2 text-sm text-muted-foreground">{s.label}</p>
            </Reveal>
          ))}
        </div>
      </section>

      <section className="section-y">
        <div className="container-page">
          <Reveal>
            <p className="text-xs font-semibold tracking-[0.18em] uppercase text-primary">
              Nos services
            </p>
            <h2 className="mt-4 max-w-2xl text-3xl sm:text-4xl">
              Tout ce qu'il faut pour partir sereinement
            </h2>
          </Reveal>

          <div className="mt-12 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {services.slice(0, 6).map((s, i) => (
              <Reveal key={s.title} delay={i * 80}>
                <article className="card-lift h-full rounded-xl border border-border bg-card p-6">
                  <h3 className="text-lg">{s.title}</h3>
                  <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
                    {s.description}
                  </p>
                  <ul className="mt-4 space-y-2">
                    {s.points.map((p) => (
                      <li key={p} className="flex items-start gap-2 text-sm text-foreground/80">
                        <BadgeCheck className="mt-0.5 size-4 shrink-0 text-primary" />
                        {p}
                      </li>
                    ))}
                  </ul>
                </article>
              </Reveal>
            ))}
          </div>

          <Reveal delay={120}>
            <div className="mt-10">
              <Link
                to="/services"
                className="inline-flex items-center gap-2 text-sm font-semibold text-primary transition-colors hover:text-primary-deep"
              >
                Voir le détail des services
                <ArrowRight className="size-4" />
              </Link>
            </div>
          </Reveal>
        </div>
      </section>

      <section className="section-y bg-surface">
        <div className="container-page">
          <Reveal>
            <h2 className="text-3xl sm:text-4xl">Destinations les plus demandées</h2>
          </Reveal>
          <div className="mt-10 grid gap-6 md:grid-cols-3">
            {destinations.map((d, i) => (
              <Reveal key={d.name} delay={i * 100}>
                <Link
                  to="/galerie"
                  className="card-lift group block overflow-hidden rounded-xl border border-border bg-card"
                >
                  <div className="aspect-4/3 overflow-hidden">
                    <img
                      src={d.img}
                      alt={`Voyage vers ${d.name}`}
                      className="size-full object-cover transition-transform duration-700 ease-[var(--ease-smooth)] group-hover:scale-105"
                      loading="lazy"
                    />
                  </div>
                  <div className="p-5">
                    <h3 className="text-base">{d.name}</h3>
                    <p className="mt-1 text-sm text-muted-foreground">{d.note}</p>
                  </div>
                </Link>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="section-y">
        <div className="container-page grid gap-10 lg:grid-cols-[0.9fr_1.1fr]">
          <Reveal>
            <p className="text-xs font-semibold tracking-[0.18em] uppercase text-primary">
              Pourquoi NACK
            </p>
            <h2 className="mt-4 text-3xl sm:text-4xl">Une agence qui suit votre dossier</h2>
            <p className="mt-4 text-sm leading-relaxed text-muted-foreground">
              Nous accompagnons voyageurs, familles, entreprises et communautés au départ d'Abidjan.
              Un interlocuteur unique, un dossier complet, un suivi jusqu'au décollage.
            </p>
          </Reveal>
          <div className="grid gap-5 sm:grid-cols-2">
            {advantages.map((a, i) => (
              <Reveal key={a.title} delay={i * 90}>
                <div className="card-lift h-full rounded-xl border border-border bg-card p-5">
                  <a.icon className="size-5 text-primary" />
                  <h3 className="mt-3 text-base">{a.title}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{a.text}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <FaqSection />

      <section className="gradient-deep">
        <div className="container-page flex flex-col items-start gap-6 py-16 text-primary-foreground md:flex-row md:items-center md:justify-between">
          <Reveal>
            <h2 className="text-2xl sm:text-3xl">Prêt à préparer votre départ ?</h2>
            <p className="mt-3 text-sm text-primary-foreground/75">
              Appelez le {site.phoneDisplay} ou envoyez votre demande en deux minutes.
            </p>
          </Reveal>
          <Reveal delay={120}>
            <Link
              to="/contact"
              className="inline-flex items-center gap-2 rounded-md bg-accent px-6 py-3.5 text-sm font-semibold text-accent-foreground transition-transform duration-300 ease-[var(--ease-smooth)] hover:-translate-y-0.5"
            >
              Formulaire de réservation
              <ArrowRight className="size-4" />
            </Link>
          </Reveal>
        </div>
      </section>
    </>
  );
}
