import { useEffect, useState } from "react";
import { FiMenu, FiX } from "react-icons/fi";

const links = [
  { href: "#projects", label: "Projets" },
  { href: "#about", label: "Parcours" },
  { href: "#skills", label: "Compétences" },
];

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const close = () => setOpen(false);

  return (
    <header
      className={`fixed top-0 inset-x-0 z-50 bg-sand-50/90 backdrop-blur transition-shadow ${
        scrolled || open ? "border-b border-sand-200 shadow-sm" : ""
      }`}
    >
      <div className="max-w-6xl mx-auto flex items-center justify-between px-6 md:px-12 h-16">
        <a href="#home" aria-label="Accueil" className="font-display text-2xl font-extrabold">
          AE<span className="text-accent">.</span>
        </a>

        {/* Desktop */}
        <nav aria-label="Navigation principale" className="hidden md:flex items-center gap-8">
          {links.map((l) => (
            <a key={l.href} href={l.href} className="text-sm font-medium text-muted hover:text-accent transition-colors">
              {l.label}
            </a>
          ))}
          <a
            href="#contact"
            className="px-5 py-2 rounded-full bg-accent text-white text-sm font-semibold hover:bg-ink transition-colors"
          >
            Me contacter
          </a>
        </nav>

        {/* Bouton mobile */}
        <button
          className="md:hidden p-2 -mr-2"
          onClick={() => setOpen(!open)}
          aria-expanded={open}
          aria-label={open ? "Fermer le menu" : "Ouvrir le menu"}
        >
          {open ? <FiX size={26} /> : <FiMenu size={26} />}
        </button>
      </div>

      {/* Menu mobile */}
      {open && (
        <nav aria-label="Navigation mobile" className="md:hidden bg-sand-50 px-6 pb-6 pt-2 flex flex-col gap-1">
          {links.map((l) => (
            <a key={l.href} href={l.href} onClick={close} className="py-3 text-lg font-medium border-b border-sand-200">
              {l.label}
            </a>
          ))}
          <a
            href="#contact"
            onClick={close}
            className="mt-4 text-center px-5 py-3 rounded-full bg-accent text-white font-semibold"
          >
            Me contacter
          </a>
        </nav>
      )}
    </header>
  );
}