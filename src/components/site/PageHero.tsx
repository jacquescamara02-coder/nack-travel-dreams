import type { ReactNode } from "react";
import { Reveal } from "@/components/Reveal";

export function PageHero({
  eyebrow,
  title,
  description,
  children,
}: {
  eyebrow: string;
  title: string;
  description: string;
  children?: ReactNode;
}) {
  return (
    <section className="gradient-deep pt-32 pb-20 text-primary-foreground">
      <div className="container-page">
        <Reveal>
          <p className="text-xs font-semibold tracking-[0.18em] uppercase text-accent">{eyebrow}</p>
          <h1 className="mt-4 max-w-3xl text-4xl sm:text-5xl">{title}</h1>
          <p className="mt-5 max-w-2xl text-base leading-relaxed text-primary-foreground/75">
            {description}
          </p>
          {children}
        </Reveal>
      </div>
    </section>
  );
}
