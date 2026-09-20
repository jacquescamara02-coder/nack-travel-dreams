import { useState } from "react";
import { Loader2, Send } from "lucide-react";
import { toast } from "sonner";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { services, whatsappLink } from "@/lib/site";

const initial = {
  name: "",
  phone: "",
  email: "",
  service: "",
  destination: "",
  date: "",
  travelers: "1",
  message: "",
};

export function BookingForm() {
  const [form, setForm] = useState(initial);
  const [loading, setLoading] = useState(false);

  const set = (key: keyof typeof form) => (value: string) =>
    setForm((f) => ({ ...f, [key]: value }));

  const onSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!form.name.trim() || !form.phone.trim() || !form.service) {
      toast.error("Merci de renseigner votre nom, votre téléphone et le service souhaité.");
      return;
    }
    setLoading(true);
    await new Promise((r) => setTimeout(r, 700));

    const text = [
      "Nouvelle demande de réservation — NACK TRAVEL",
      `Nom : ${form.name}`,
      `Téléphone : ${form.phone}`,
      form.email && `Email : ${form.email}`,
      `Service : ${form.service}`,
      form.destination && `Destination : ${form.destination}`,
      form.date && `Date de départ : ${form.date}`,
      `Voyageurs : ${form.travelers}`,
      form.message && `Message : ${form.message}`,
    ]
      .filter(Boolean)
      .join("\n");

    window.open(whatsappLink(text), "_blank", "noopener,noreferrer");
    setLoading(false);
    setForm(initial);
    toast.success("Demande prête ! Envoyez le message WhatsApp pour finaliser.", {
      description: "Nous répondons sous 24h ouvrées, et tout le week-end.",
    });
  };

  return (
    <form
      onSubmit={onSubmit}
      className="rounded-xl border border-border bg-card p-6 shadow-[var(--shadow-soft)] sm:p-8"
    >
      <div className="grid gap-5 sm:grid-cols-2">
        <div className="space-y-2">
          <Label htmlFor="name">Nom complet *</Label>
          <Input
            id="name"
            value={form.name}
            onChange={(e) => set("name")(e.target.value)}
            placeholder="Koffi Aya"
          />
        </div>
        <div className="space-y-2">
          <Label htmlFor="phone">Téléphone *</Label>
          <Input
            id="phone"
            type="tel"
            value={form.phone}
            onChange={(e) => set("phone")(e.target.value)}
            placeholder="07 00 00 00 00"
          />
        </div>
        <div className="space-y-2">
          <Label htmlFor="email">Email</Label>
          <Input
            id="email"
            type="email"
            value={form.email}
            onChange={(e) => set("email")(e.target.value)}
            placeholder="vous@email.com"
          />
        </div>
        <div className="space-y-2">
          <Label htmlFor="service">Service souhaité *</Label>
          <Select value={form.service} onValueChange={set("service")}>
            <SelectTrigger id="service" className="w-full">
              <SelectValue placeholder="Choisir un service" />
            </SelectTrigger>
            <SelectContent>
              {services.map((s) => (
                <SelectItem key={s.title} value={s.title}>
                  {s.title}
                </SelectItem>
              ))}
              <SelectItem value="Billetterie et autres demandes">
                Billetterie et autres demandes
              </SelectItem>
            </SelectContent>
          </Select>
        </div>
        <div className="space-y-2">
          <Label htmlFor="destination">Destination</Label>
          <Input
            id="destination"
            value={form.destination}
            onChange={(e) => set("destination")(e.target.value)}
            placeholder="Chine, Dubaï, France…"
          />
        </div>
        <div className="space-y-2">
          <Label htmlFor="date">Date de départ souhaitée</Label>
          <Input
            id="date"
            type="date"
            value={form.date}
            onChange={(e) => set("date")(e.target.value)}
          />
        </div>
        <div className="space-y-2">
          <Label htmlFor="travelers">Nombre de voyageurs</Label>
          <Input
            id="travelers"
            type="number"
            min={1}
            value={form.travelers}
            onChange={(e) => set("travelers")(e.target.value)}
          />
        </div>
        <div className="space-y-2 sm:col-span-2">
          <Label htmlFor="message">Votre message</Label>
          <Textarea
            id="message"
            rows={4}
            value={form.message}
            onChange={(e) => set("message")(e.target.value)}
            placeholder="Précisez votre situation, vos dates ou vos questions."
          />
        </div>
      </div>

      <button
        type="submit"
        disabled={loading}
        className="mt-6 inline-flex w-full items-center justify-center gap-2 rounded-md bg-primary px-6 py-3 text-sm font-semibold text-primary-foreground transition-all duration-300 ease-[var(--ease-smooth)] hover:-translate-y-0.5 hover:bg-primary/92 disabled:cursor-not-allowed disabled:opacity-70 sm:w-auto"
      >
        {loading ? (
          <>
            <Loader2 className="size-4 animate-spin" />
            Préparation de la demande…
          </>
        ) : (
          <>
            <Send className="size-4" />
            Envoyer ma demande
          </>
        )}
      </button>
      <p className="mt-3 text-xs text-muted-foreground">
        Votre demande est transmise à notre équipe par WhatsApp. Aucun paiement en ligne.
      </p>
    </form>
  );
}
