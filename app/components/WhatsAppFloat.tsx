import { whatsappUrl } from "@/lib/site-config";
import { WhatsAppIcon } from "./icons";

/**
 * Botão flutuante de WhatsApp, fixo no canto inferior direito.
 * Mobile-first: sempre visível para captar o contato rapidamente.
 */
export default function WhatsAppFloat() {
  return (
    <a
      href={whatsappUrl()}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Conversar no WhatsApp"
      className="fixed bottom-4 right-4 z-50 flex items-center gap-2 rounded-full bg-[#25D366] px-4 py-3 font-semibold text-white shadow-lg shadow-black/25 transition-transform hover:scale-105 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#25D366] sm:bottom-6 sm:right-6"
    >
      <WhatsAppIcon className="h-7 w-7" />
      <span className="hidden sm:inline">WhatsApp</span>
    </a>
  );
}
