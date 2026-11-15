import SectionHeading from "./SectionHeading";
import Reveal from "./Reveal";

const categories = [
  {
    title: "Front-end",
    core: ["React.js", "Redux Toolkit", "Tailwind CSS"],
    more: ["JavaScript (ES6+)", "HTML5", "CSS3", "Bootstrap", "Alpine.js"],
  },
  {
    title: "Back-end & données",
    core: ["Laravel 12", "API REST", "PHP", "MySQL"],
    more: ["Sanctum", "RBAC", "Node.js"],
  },
  {
    title: "Outils & conception",
    core: ["Git & GitHub", "Docker", "Figma"],
    more: ["UML", "Jira (Agile)", "GitLab", "SonarQube", "WordPress"],
  },
];

const chipCore =
  "font-mono text-sm px-3 py-1.5 rounded-lg bg-accent-soft text-accent border border-accent/30 font-semibold";
const chipMore =
  "font-mono text-sm px-3 py-1.5 rounded-lg bg-sand-50 text-ink/80 border border-sand-200";

export default function Skills() {
  return (
    <section id="skills" className="bg-sand-50 py-24 px-6 md:px-12">
      <div className="max-w-6xl mx-auto">
        <SectionHeading
          number="03"
          label="Compétences"
          title="Ma boîte à outils"
        >
          Les technologies que j'utilise le plus sont en couleur. Les autres me
          servent selon les besoins du projet.
        </SectionHeading>

        <div className="grid md:grid-cols-3 gap-6">
          {categories.map((c, i) => (
            <Reveal key={c.title} delay={i * 100} className="h-full">
              <article className="h-full p-6 rounded-3xl bg-sand-100 border border-sand-200">
                <h3 className="font-mono text-sm text-muted mb-4">{c.title}</h3>
                <ul className="flex flex-wrap gap-2">
                  {c.core.map((s) => (
                    <li key={s} className={chipCore}>
                      {s}
                    </li>
                  ))}
                  {c.more.map((s) => (
                    <li key={s} className={chipMore}>
                      {s}
                    </li>
                  ))}
                </ul>
              </article>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
