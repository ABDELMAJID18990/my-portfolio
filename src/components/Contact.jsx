import { useRef, useState } from "react";
import emailjs from "@emailjs/browser";
import { FaEnvelope, FaWhatsapp, FaLinkedin, FaPaperPlane } from "react-icons/fa";
import SectionHeading from "./SectionHeading";

const WHATSAPP_URL = `https://wa.me/212770307897?text=${encodeURIComponent(
  "Bonjour Abdelmajid, j'ai découvert votre portfolio et j'aimerais échanger avec vous."
)}`;

const channels = [
  { Icon: FaWhatsapp, label: "WhatsApp", value: "+212 770-307897", href: WHATSAPP_URL, external: true },
  { Icon: FaEnvelope, label: "E-mail", value: "abdelmajid.elainousi@gmail.com", href: "mailto:abdelmajid.elainousi@gmail.com" },
  {
    Icon: FaLinkedin,
    label: "LinkedIn",
    value: "abdelmajid-el-ainousi",
    href: "https://www.linkedin.com/in/abdelmajid-el-ainousi-b2b187298/",
    external: true,
  },
];

const fieldClass =
  "w-full bg-white border border-sand-200 rounded-xl px-4 py-3 text-ink placeholder:text-muted/60 " +
  "focus:outline-none focus:border-accent focus:ring-2 focus:ring-accent/20 transition";

export default function Contact() {
  const form = useRef(null);
  const [status, setStatus] = useState("idle"); // idle | sending | success | error

  const sendEmail = async (e) => {
    e.preventDefault();
    setStatus("sending");
    try {
      await emailjs.sendForm(
        import.meta.env.VITE_EMAILJS_SERVICE_ID,
        import.meta.env.VITE_EMAILJS_TEMPLATE_ID,
        form.current,
        { publicKey: import.meta.env.VITE_EMAILJS_PUBLIC_KEY }
      );
      form.current.reset();
      setStatus("success");
    } catch (error) {
      console.error("EmailJS error:", error);
      setStatus("error");
    }
  };

  return (
    <section id="contact" className="bg-sand-100 py-24 px-6 md:px-12">
      <div className="max-w-6xl mx-auto">
        <SectionHeading
          number="04"
          label="Contact"
          title="Travaillons ensemble"
        >
          Je recherche un stage de développeur Full Stack (React / Laravel). Une question, une proposition ?
          Écrivez-moi, je réponds rapidement.
        </SectionHeading>

        <div className="grid md:grid-cols-2 gap-12 lg:gap-16 items-start">
          {/* Coordonnées */}
          <div className="space-y-4">
            {channels.map(({ Icon, label, value, href, external }) => (
              <a
                key={label}
                href={href}
                {...(external ? { target: "_blank", rel: "noopener noreferrer" } : {})}
                className="group flex items-center gap-4 p-4 rounded-2xl bg-sand-50 border border-sand-200 hover:border-accent transition-colors"
              >
                <span className="grid place-items-center size-12 rounded-full bg-accent-soft text-accent group-hover:bg-accent group-hover:text-white transition-colors">
                  <Icon className="text-xl" />
                </span>
                <span className="min-w-0">
                  <span className="block font-mono text-xs text-muted">{label}</span>
                  <span className="block font-semibold truncate">{value}</span>
                </span>
              </a>
            ))}

            <p className="font-mono text-sm text-muted pt-2">Errachidia, Maroc</p>

            {/* Bandeau freelance discret */}
            <aside className="mt-6 p-5 rounded-2xl border border-dashed border-accent/40 bg-accent-soft/50">
              <p className="font-mono text-xs text-accent">Missions freelance</p>
              <p className="mt-1 text-sm text-ink/80">
                Je prends aussi des missions pour hôtels, restaurants et commerces : site vitrine, réservation,
                commande en ligne.
              </p>
            </aside>
          </div>

          {/* Formulaire */}
          <form ref={form} onSubmit={sendEmail} className="bg-sand-50 border border-sand-200 rounded-3xl p-6 sm:p-8 space-y-5">
            <div>
              <label htmlFor="user_name" className="block text-sm font-medium mb-1.5">Nom</label>
              <input id="user_name" name="user_name" type="text" required autoComplete="name" className={fieldClass} placeholder="Votre nom" />
            </div>
            <div>
              <label htmlFor="user_email" className="block text-sm font-medium mb-1.5">E-mail</label>
              <input id="user_email" name="user_email" type="email" required autoComplete="email" className={fieldClass} placeholder="vous@exemple.com" />
            </div>
            <div>
              <label htmlFor="message" className="block text-sm font-medium mb-1.5">Message</label>
              <textarea id="message" name="message" rows="5" required className={`${fieldClass} resize-none`} placeholder="Votre message..." />
            </div>

            <button
              type="submit"
              disabled={status === "sending"}
              className="w-full inline-flex items-center justify-center gap-2 py-3.5 rounded-full bg-accent text-white font-semibold
              hover:bg-ink transition-colors disabled:opacity-60 disabled:cursor-not-allowed"
            >
              {status === "sending" ? "Envoi en cours..." : <>Envoyer <FaPaperPlane className="text-sm" /></>}
            </button>

            <p role="status" aria-live="polite" className="text-sm min-h-5">
              {status === "success" && <span className="text-green-700">✓ Message envoyé, merci ! Je vous réponds rapidement.</span>}
              {status === "error" && (
                <span className="text-red-700">
                  L'envoi a échoué. Écrivez-moi directement à abdelmajid.elainousi@gmail.com.
                </span>
              )}
            </p>
          </form>
        </div>
      </div>
    </section>
  );
}