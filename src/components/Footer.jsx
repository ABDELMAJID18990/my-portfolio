export default function Footer() {
  return (
    <footer className="bg-ink text-sand-200 px-6 md:px-12 py-10">
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center justify-between gap-4 text-sm">
        <a href="#home" aria-label="Haut de page" className="font-display text-2xl font-extrabold text-sand-50">
          AE<span className="text-accent">.</span>
        </a>
        <p className="text-center">
          © {new Date().getFullYear()} Abdelmajid El Ainousi · Errachidia, Maroc
        </p>
        <p className="font-mono text-xs text-sand-200/60">Conçu avec React & Tailwind CSS</p>
      </div>
    </footer>
  );
}