export function MapEmbed({ className = "" }: { className?: string }) {
  return (
    <div
      className={`overflow-hidden rounded-xl border border-border shadow-[var(--shadow-soft)] ${className}`}
    >
      <iframe
        title="Localisation de NACK TRAVEL à Angré, Abidjan"
        src="https://www.google.com/maps?q=Pharmacie%20des%20All%C3%A9es%20Ang%C3%A9%20Abidjan&output=embed"
        loading="lazy"
        referrerPolicy="no-referrer-when-downgrade"
        className="h-[380px] w-full border-0"
      />
    </div>
  );
}
