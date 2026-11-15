import SectionHeading from "./SectionHeading";

const timeline = [
  {
    period: "Mars – Avr. 2026",
    title: "Stagiaire Développeur Full Stack & Support IT",
    org: "Centre Régional d'Investissement de Guelmim-Oued Noun",
    type: "Stage",
    points: [
      "Conception d'un intranet de gestion du matériel et d'un système de ticketing (helpdesk) pour suivre et résoudre les incidents techniques.",
      "Développement Full Stack avec Laravel 12, MySQL, Tailwind CSS et Alpine.js, accès sécurisés par rôles (RBAC).",
      "Travail en équipe de 3 développeurs en méthode Agile (Jira / Git), application conteneurisée avec Docker.",
    ],
  },
  {
    period: "Depuis oct. 2026",
    title: "Licence d'Excellence en Informatique Appliquée à la Gestion",
    org: "Faculté d'Économie et de Gestion, Errachidia",
    type: "Formation",
    points: ["Génie logiciel (Java/C++, Web, bases de données) et Business Intelligence."],
  },
  {
    period: "2024 – 2026",
    title: "Technicien Spécialisé en Développement Digital (option Full Stack)",
    org: "ISTA NTIC, Guelmim",
    type: "Formation",
    points: ["Front-end et back-end, avec une approche par projets pratiques (4 applications Full Stack)."],
  },
];

const languages = [
  { name: "Arabe", level: "langue maternelle" },
  { name: "Français", level: "B1" },
  { name: "Anglais", level: "B1" },
];

export default function About() {
  return (
    <section id="about" className="bg-sand-100 py-24 px-6 md:px-12">
      <div className="max-w-6xl mx-auto">
        <SectionHeading number="02" label="Parcours" title="Un profil Full Stack, formé par la pratique" />

        <div className="grid lg:grid-cols-[0.9fr_1.1fr] gap-12 lg:gap-20">
          {/* Présentation */}
          <div className="space-y-5 text-lg text-muted leading-relaxed">
            <p>
              Je suis étudiant en <strong className="text-ink">Licence d'Excellence en Informatique Appliquée à la
              Gestion</strong> et diplômé en développement digital (option Full Stack) de l'ISTA NTIC Guelmim.
            </p>
            <p>
              Je construis des applications complètes : maquettes <strong className="text-ink">Figma</strong>,
              interface <strong className="text-ink">React</strong>, API sécurisée{" "}
              <strong className="text-ink">Laravel</strong>, conteneurisation <strong className="text-ink">Docker</strong>.
            </p>
            <p>
              Rigoureux, curieux et à l'aise en équipe, j'apprends vite et je cherche un stage pour contribuer à des
              projets concrets.
            </p>

            <ul className="flex flex-wrap gap-2 pt-2">
              {languages.map((l) => (
                <li key={l.name} className="font-mono text-xs px-3 py-1.5 rounded-full bg-sand-50 border border-sand-200 text-ink">
                  {l.name} · <span className="text-muted">{l.level}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Timeline */}
          <ol className="relative border-l border-sand-200 ml-1.5 space-y-10">
            {timeline.map((item) => (
              <li key={item.title} className="relative pl-8">
                <span className="absolute -left-[6.5px] top-2 size-3 rounded-full bg-accent ring-4 ring-sand-100" />
                <p className="font-mono text-xs text-accent">
                  {item.period} · {item.type}
                </p>
                <h3 className="text-xl font-bold mt-1">{item.title}</h3>
                <p className="text-ink/80 font-medium">{item.org}</p>
                <ul className="mt-3 space-y-2">
                  {item.points.map((p) => (
                    <li key={p} className="flex gap-2 text-muted">
                      <span className="text-accent">▹</span>
                      {p}
                    </li>
                  ))}
                </ul>
              </li>
            ))}
          </ol>
        </div>
      </div>
    </section>
  );
}