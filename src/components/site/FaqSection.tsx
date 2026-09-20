import { Reveal } from "@/components/Reveal";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { faqs } from "@/lib/site";

export function FaqSection() {
  return (
    <section className="section-y bg-surface">
      <div className="container-page grid gap-10 lg:grid-cols-[0.8fr_1.2fr]">
        <Reveal>
          <p className="text-xs font-semibold tracking-[0.18em] uppercase text-primary">
            Questions fréquentes
          </p>
          <h2 className="mt-4 text-3xl sm:text-4xl">Ce que nos voyageurs demandent le plus</h2>
          <p className="mt-4 text-sm leading-relaxed text-muted-foreground">
            Une question qui n'est pas dans la liste ? Notre équipe répond par téléphone et sur
            WhatsApp, y compris le week-end.
          </p>
        </Reveal>

        <Reveal delay={120}>
          <Accordion type="single" collapsible className="w-full">
            {faqs.map((item) => (
              <AccordionItem key={item.q} value={item.q}>
                <AccordionTrigger className="text-left text-base font-medium">
                  {item.q}
                </AccordionTrigger>
                <AccordionContent className="text-sm leading-relaxed text-muted-foreground">
                  {item.a}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </Reveal>
      </div>
    </section>
  );
}
