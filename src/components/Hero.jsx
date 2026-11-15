import { FaDownload, FaGithub, FaLinkedin } from "react-icons/fa";
import myPhoto from "../assets/myphoto.webp";

const pattern = `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='60' height='60' viewBox='0 0 60 60'%3E%3Cg fill='none' stroke='%23B8481F' stroke-opacity='.22'%3E%3Crect x='12' y='12' width='36' height='36'/%3E%3Crect x='12' y='12' width='36' height='36' transform='rotate(45 30 30)'/%3E%3C/g%3E%3C/svg%3E")`;

const proofs = [
  { value: "4", label: "projets Full Stack" },
  { value: "1", label: "stage professionnel" },
  { value: "React · Laravel", label: "stack principale" },
];

export default function Hero() {
  return (
    <section id="home" className="bg-sand-50 px-6 md:px-12">
      <div className="max-w-6xl mx-auto grid md:grid-cols-[1.2fr_0.8fr] gap-12 items-center min-h-screen py-24">
        {/* ---------- Texte ---------- */}
        <div>
          <span className="animate-rise inline-flex items-center gap-2 font-mono text-xs px-3 py-1.5 rounded-full bg-accent-soft text-accent">
            <span className="size-2 rounded-full bg-accent animate-pulse" />
            Ouvert aux opportunités de stage
          </span>

          <p className="animate-rise [animation-delay:100ms] font-mono text-sm text-muted mt-8">
            Abdelmajid El Ainousi · Développeur Full Stack · Errachidia, Maroc
          </p>

          <h1 className="animate-rise [animation-delay:200ms] text-5xl md:text-7xl font-extrabold leading-[1.05] mt-4">
            Des applications web{" "}
            <span
              className="text-accent animate-draw-underline bg-no-repeat bg-bottom bg-[length:0%_0.3em]
              bg-[linear-gradient(var(--color-accent-soft),var(--color-accent-soft))]"
            >
              complètes
            </span>
            , du design à la mise en production.
          </h1>

          <p className="animate-rise [animation-delay:300ms] text-lg text-muted mt-6 max-w-xl">
            React &amp; Laravel. J'ai réalisé 4 projets Full Stack, dont une
            plateforme de ticketing et de gestion de matériel développée en
            équipe lors de mon stage au Centre Régional d'Investissement de
            Guelmim-Oued Noun.
          </p>

          <div className="animate-rise [animation-delay:400ms] flex flex-wrap gap-3 mt-8">
            <a
              href="#projects"
              className="px-7 py-3 rounded-full bg-accent text-white font-semibold hover:bg-ink active:scale-95 transition"
            >
              Voir mes projets
            </a>
            <a
              href="/CV_ABDELMAJID_ELAINOUSI.pdf"
              download="CV_Abdelmajid_Elainousi.pdf"
              className="inline-flex items-center gap-2 px-6 py-3 rounded-full border border-ink/20 font-semibold
              hover:border-accent hover:text-accent active:scale-95 transition"
            >
              <FaDownload /> Mon CV
            </a>
          </div>

          <div className="animate-rise [animation-delay:500ms] flex items-center gap-5 mt-8 text-2xl text-muted">
            <a
              href="https://github.com/ABDELMAJID18990"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="GitHub"
              className="hover:text-accent transition-colors"
            >
              <FaGithub />
            </a>
            <a
              href="https://www.linkedin.com/in/abdelmajid-el-ainousi-b2b187298/"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="LinkedIn"
              className="hover:text-accent transition-colors"
            >
              <FaLinkedin />
            </a>
          </div>

          <dl className="animate-rise [animation-delay:600ms] flex flex-wrap gap-x-10 gap-y-4 mt-10 pt-6 border-t border-sand-200">
            {proofs.map((p) => (
              <div key={p.label}>
                <dt className="font-display text-xl font-bold">{p.value}</dt>
                <dd className="font-mono text-xs text-muted">{p.label}</dd>
              </div>
            ))}
          </dl>
        </div>

        {/* ---------- Photo ---------- */}
        <figure className="animate-rise [animation-delay:300ms] relative isolate mx-auto w-full max-w-[340px]">
          {/* Contour décalé : donne de la profondeur */}
          <div
            aria-hidden="true"
            className="absolute inset-0 translate-x-3 translate-y-3 rounded-t-[999px] rounded-b-3xl border-2 border-accent/30 -z-10"
          />

          {/* Cadre unique : il découpe l'image et porte le motif */}
          <div
            className="relative aspect-[4/5] overflow-hidden rounded-t-[999px] rounded-b-3xl bg-sand-100 border border-sand-200"
            style={{ backgroundImage: pattern }}
          >
            <img
              src={myPhoto}
              alt="Portrait d'Abdelmajid El Ainousi, développeur Full Stack"
              fetchPriority="high"
              className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[105%] max-w-none h-auto"
            />
          </div>
        </figure>
      </div>
    </section>
  );
}
