import project1 from "../assets/project1.png";
import project2 from "../assets/project2.png";
import project3 from "../assets/project3.png";
import project4 from "../assets/project4.png";
import project5 from "../assets/project5.png";

const listProjects = [
  {
    id: 1,
    title: "Guelmim Snacks Delivery",
    description:
      "A scalable Food Delivery SPA designed with a decoupled architecture. Features a reactive Frontend using React.js & Redux Toolkit for complex global state management (Cart, Auth), connected to a robust Laravel RESTful API backend.",
    image: project1,
    link: "https://github.com/ABDELMAJID18990/Guelmim-Snacks",
    tech: ["React.js", "Redux Toolkit", "Laravel API", "SPA"],
  },
  {
    id: 2,
    title: "Hotel Etoile du Désert",
    description:
      "A complete and tailored reservation system for a boutique desert guesthouse. Features a seamless React.js Frontend for an optimized user experience, powered by a robust Laravel API that handles real-time booking logic, automated pricing, and secure dashboard management.",
    image:
      project2,
    link: "https://github.com/ABDELMAJID18990/Maison-etoile-du-desert",
    tech: ["React.js", "Laravel 12", "UML/Figma"],
  },
  
  {
  id: 5,
  title: "CRIMATI - IT Asset & Helpdesk Platform",
  description: "A robust Intranet platform designed for IT asset tracking and helpdesk management. Built with a scalable Laravel MVC architecture, it features a dynamic JSON-based schema for flexible equipment specifications, automated ticket workflows, and strict Role-Based Access Control (RBAC). The responsive and interactive UI is powered by Tailwind CSS and Alpine.js.",
  image: project5, 
  link: "https://github.com/Ali-AB23/crimati", // À modifier avec ton vrai lien
  tech: ["Laravel", "Alpine.js", "Tailwind CSS", "MySQL", "Docker"],
},
  {
    id: 4,
    title: "Hotel Etoile du Désert (Version statique)",
    description:
      "A premium static web application designed for a Saharan boutique hotel. Built with React.js, Tailwind CSS, and i18next for a bilingual (FR/EN) experience. Optimized for speed and conversion, it replaces a traditional backend with a dynamic, frictionless WhatsApp reservation flow tailored for mobile users.",
    image: project4,
    link: "https://github.com/ABDELMAJID18990/Maison-etoile-du-desert-statique",
   tech: ["React.js", "Tailwind CSS", "React-i18next", "Lucide Icons", "Serverless / Static"],
  },
  
  
  
];

const ProjectCard = ({ image, title, description, link, tech }) => (
  <article className="group relative max-w-sm w-full bg-gray-900 border border-white/10 rounded-2xl overflow-hidden shadow-2xl transition-all duration-300 hover:border-purple-500/50 hover:shadow-purple-500/20">
    {/* Effet Glow au survol */}
    <div className="absolute -inset-1 bg-gradient-to-r from-purple-600 to-pink-600 rounded-2xl blur opacity-0 group-hover:opacity-20 transition duration-500"></div>

    <div className="relative z-10 bg-gray-900 h-full flex flex-col">
      {/* Image Container */}
      <figure className="relative h-56 overflow-hidden">
        <img
          src={image}
          alt={title}
          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
        />

        {/* Overlay au survol */}
        <a
          href={link}
          target="_blank"
          rel="noopener noreferrer"
          className="absolute inset-0 bg-black/60 backdrop-blur-[2px] opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center"
        >
          <span className="px-6 py-2 bg-gradient-to-r from-purple-600 to-pink-600 text-white font-bold rounded-full shadow-lg transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300">
            View Code &rarr;
          </span>
        </a>
      </figure>

      {/* Contenu Texte */}
      <div className="p-6 flex flex-col flex-grow">
        <header>
          <h3 className="text-xl font-bold text-white mb-2 group-hover:text-purple-400 transition-colors">
            {title}
          </h3>
        </header>

        {/* CORRECTION ICI : J'ai enlevé 'line-clamp-3' pour afficher tout le texte */}
        {/* J'ai ajouté 'text-justify' pour que le bloc de texte soit bien aligné à gauche et à droite */}
        <p className="text-gray-400 text-sm mb-6 leading-relaxed text-justify">
          {description}
        </p>

        {/* Badges Technologies */}
        {/* 'mt-auto' pousse les badges tout en bas de la carte, peu importe la longueur du texte */}
        <div className="flex flex-wrap gap-2 mt-auto">
          {tech.map((t, index) => (
            <span
              key={index}
              className="text-xs font-medium px-2.5 py-1 rounded-md bg-purple-900/30 text-purple-300 border border-purple-700/50"
            >
              {t}
            </span>
          ))}
        </div>
      </div>
    </div>
  </article>
);

export default function Projects() {
  return (
    <section
      id="projects"
      className="relative min-h-screen bg-gray-950 py-20 px-4 sm:px-6"
    >
      {/* Décoration Arrière-plan */}
      <div className="absolute top-20 right-0 w-96 h-96 bg-pink-600/10 rounded-full blur-[100px] pointer-events-none"></div>

      <div className="max-w-7xl mx-auto">
        {/* Header Section */}
        <header
          className="text-center mb-16"
          data-aos="fade-up"
          data-aos-delay="200"
        >
          <h2 className="text-4xl md:text-5xl font-extrabold text-white mb-4">
            My{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-600">
              Projects
            </span>
          </h2>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto">
            Showcasing my journey through code. Here are the key projects that
            demonstrate my Full Stack capabilities.
          </p>
        </header>

        {/* Grid Projects */}
        <div
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 justify-items-center"
          data-aos="fade-up"
          data-aos-delay="400"
        >
          {listProjects.map((project) => (
            <ProjectCard
              key={project.id}
              image={project.image}
              title={project.title}
              description={project.description}
              link={project.link}
              tech={project.tech}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
