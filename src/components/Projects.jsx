import { FaGithub, FaExternalLinkAlt } from "react-icons/fa";
import SectionHeading from "./SectionHeading";
import { projects } from "../data/projects";
import Reveal from "./Reveal";

const btnPrimary =
  "inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-accent text-white text-sm font-semibold hover:bg-ink transition-colors";
const btnSecondary =
  "inline-flex items-center gap-2 px-5 py-2.5 rounded-full border border-ink/20 text-sm font-semibold hover:border-accent hover:text-accent transition-colors";

const Status = ({ online }) => (
  <p className="flex items-center gap-2 font-mono text-xs text-muted">
    <span className={`size-2 rounded-full ${online ? "bg-green-600" : "bg-muted/50"}`} />
    {online ? "En ligne" : "Non hébergé · démo possible en entretien"}
  </p>
);

const TechList = ({ items }) => (
  <ul className="flex flex-wrap gap-2">
    {items.map((t) => (
      <li key={t} className="font-mono text-xs px-2.5 py-1 rounded-md bg-accent-soft text-accent">
        {t}
      </li>
    ))}
  </ul>
);

const Highlights = ({ items }) => (
  <ul className="space-y-1.5">
    {items.map((h) => (
      <li key={h} className="flex gap-2 text-sm text-muted">
        <span className="text-accent">▹</span>
        {h}
      </li>
    ))}
  </ul>
);

const Actions = ({ demo, repo, repoLabel = "Code source" }) => (
  <div className="flex flex-wrap gap-3">
    {demo && (
      <a href={demo} target="_blank" rel="noopener noreferrer" className={btnPrimary}>
        Voir en ligne <FaExternalLinkAlt className="text-xs" />
      </a>
    )}
    {repo && (
      <a
        href={repo}
        target="_blank"
        rel="noopener noreferrer"
        className={demo ? btnSecondary : btnPrimary}
      >
        <FaGithub /> {repoLabel}
      </a>
    )}
  </div>
);

const Screenshot = ({ image, title }) => (
  <figure className="aspect-video overflow-hidden rounded-2xl border border-sand-200 bg-sand-50">
    <img
      src={image}
      alt={`Aperçu du projet ${title}`}
      loading="lazy"
      className="size-full object-cover object-top transition-transform duration-500 group-hover:scale-105"
    />
  </figure>
);

function FeaturedProject({ p }) {
  return (
    <Reveal>
      <article className="group grid lg:grid-cols-[1.1fr_0.9fr] gap-8 items-center p-5 md:p-8 rounded-3xl bg-sand-100 border border-sand-200">
         <Screenshot image={p.image} title={p.title} />
      <div className="space-y-4">
        <p className="font-mono text-xs text-accent">{p.badge}</p>
        <h3 className="text-2xl md:text-3xl font-bold">{p.title}</h3>
        <p className="text-ink/80">{p.tagline}</p>
        <p className="text-sm text-muted">
          <span className="font-semibold text-ink">Contexte : </span>{p.context}
        </p>
        <p className="text-sm text-muted">
          <span className="font-semibold text-ink">Ma contribution : </span>{p.role}
        </p>
        <Highlights items={p.highlights} />
        <TechList items={p.tech} />
        <Status online={Boolean(p.demo)} />
        <Actions demo={p.demo} repo={p.repo} repoLabel={p.repoLabel} />
      </div>
      </article>
    </Reveal>
  );
}


function ProjectCard({ p, index }) {
  return (
    <Reveal delay={index * 100} className="h-full">
      <article
        className="group flex h-full flex-col gap-4 p-5 rounded-3xl bg-sand-100 border border-sand-200
        hover:-translate-y-1 hover:border-accent/50 transition-all duration-300"
      >
        <Screenshot image={p.image} title={p.title} />
      <p className="font-mono text-xs text-accent">{p.badge}</p>
      <h3 className="text-xl font-bold -mt-2">{p.title}</h3>
      <p className="text-sm text-ink/80">{p.tagline}</p>
      <Highlights items={p.highlights} />
      <div className="mt-auto space-y-4 pt-2">
        <TechList items={p.tech} />
        <Status online={Boolean(p.demo)} />
        <Actions demo={p.demo} repo={p.repo} repoLabel={p.repoLabel} />
      </div>
      </article>
    </Reveal>
  );
}



export default function Projects() {
  const featured = projects.find((p) => p.featured);
  const others = projects.filter((p) => !p.featured);

  return (
    <section id="projects" className="bg-sand-50 py-24 px-6 md:px-12">
      <div className="max-w-6xl mx-auto">
        <SectionHeading number="01" label="Projets" title="Des applications complètes, de bout en bout">
          Quatre projets Full Stack. Le code est sur GitHub, et les applications qui nécessitent un serveur
          peuvent être présentées en direct lors d'un entretien.
        </SectionHeading>

        {featured && <FeaturedProject p={featured} />}

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mt-6">
          {others.map((p, i) => (
            <ProjectCard key={p.id} p={p} index={i} />
          ))}
        </div>
      </div>
    </section>
  );
}