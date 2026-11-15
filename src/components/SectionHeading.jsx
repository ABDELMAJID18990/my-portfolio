import Reveal from "./Reveal";

export default function SectionHeading({ number, label, title, children }) {
  return (
    <Reveal className="mb-12 max-w-2xl">
      <header>
        <p className="font-mono text-sm text-accent">
          {number} — {label}
        </p>
        <h2 className="text-4xl md:text-5xl font-extrabold mt-3">{title}</h2>
        {children && <p className="text-muted text-lg mt-4">{children}</p>}
      </header>
    </Reveal>
  );
}