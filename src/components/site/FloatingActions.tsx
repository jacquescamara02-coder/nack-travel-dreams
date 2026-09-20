import { useEffect, useState } from "react";
import { ArrowUp } from "lucide-react";
import { whatsappLink } from "@/lib/site";

export function FloatingActions() {
  const [showTop, setShowTop] = useState(false);

  useEffect(() => {
    const onScroll = () => setShowTop(window.scrollY > 600);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <div className="fixed bottom-5 right-5 z-50 flex flex-col items-end gap-3">
      <button
        type="button"
        aria-label="Remonter en haut de la page"
        onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
        className={`grid size-11 place-items-center rounded-full border border-border bg-card text-foreground shadow-[var(--shadow-soft)] transition-all duration-400 ease-[var(--ease-smooth)] hover:-translate-y-0.5 hover:shadow-[var(--shadow-lift)] ${
          showTop ? "opacity-100" : "pointer-events-none translate-y-2 opacity-0"
        }`}
      >
        <ArrowUp className="size-5" />
      </button>

      <a
        href={whatsappLink(
          "Bonjour NACK TRAVEL, je souhaite des informations sur vos services.",
        )}
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Écrire à NACK TRAVEL sur WhatsApp"
        className="flex items-center gap-2.5 rounded-full bg-whatsapp px-4 py-3.5 text-sm font-semibold text-primary-foreground shadow-[var(--shadow-lift)] transition-transform duration-300 ease-[var(--ease-smooth)] hover:-translate-y-0.5"
      >
        <svg viewBox="0 0 32 32" className="size-5 fill-current" aria-hidden="true">
          <path d="M16.03 3.2c-7.06 0-12.8 5.73-12.8 12.79 0 2.25.59 4.45 1.72 6.39L3.2 28.8l6.6-1.72a12.8 12.8 0 0 0 6.23 1.6h.01c7.05 0 12.79-5.74 12.79-12.8 0-3.42-1.33-6.63-3.75-9.04a12.7 12.7 0 0 0-9.05-3.75Zm0 23.29h-.01a10.6 10.6 0 0 1-5.4-1.48l-.39-.23-3.92 1.03 1.05-3.82-.25-.4a10.59 10.59 0 0 1-1.62-5.6c0-5.86 4.78-10.63 10.65-10.63 2.84 0 5.51 1.11 7.52 3.12a10.56 10.56 0 0 1 3.11 7.52c0 5.87-4.77 10.64-10.64 10.64Zm5.84-7.96c-.32-.16-1.89-.93-2.18-1.04-.29-.1-.5-.16-.71.16-.21.32-.82 1.04-1 1.25-.19.21-.37.24-.69.08-.32-.16-1.35-.5-2.57-1.59-.95-.85-1.59-1.89-1.78-2.21-.18-.32-.02-.5.14-.66.15-.14.32-.37.48-.56.16-.19.21-.32.32-.53.1-.21.05-.4-.03-.56-.08-.16-.71-1.73-.98-2.36-.26-.62-.52-.54-.71-.55h-.61c-.21 0-.56.08-.85.4-.29.32-1.11 1.09-1.11 2.66s1.14 3.08 1.3 3.29c.16.21 2.24 3.42 5.43 4.8.76.33 1.35.52 1.81.67.76.24 1.45.21 2 .13.61-.09 1.89-.77 2.16-1.52.27-.75.27-1.39.19-1.52-.08-.13-.29-.21-.61-.37Z" />
        </svg>
        WhatsApp
      </a>
    </div>
  );
}
