import laravel from "../assets/laravel.png";
import tailwindcss from "../assets/tailwindcss.png";
import redux from "../assets/redux.svg";
import bootstrap from "../assets/bootstrap.svg";
import javascript from "../assets/javascript.svg";
import php from "../assets/php.svg";
import mysql from "../assets/mysql.svg";
import html from "../assets/html5.svg";
import css from "../assets/css.svg";
import figma from "../assets/figma.svg";
import git from "../assets/git.svg";
import react from "../assets/react.svg";


// --- DONNÉES ---
const skillsData = [
  { id: 1, image: react, title: "React JS", description: "Building dynamic SPA with Hooks, Context API, and component architecture." },
  { id: 2, image: laravel, title: "Laravel", description: "Developing robust REST APIs, Eloquent ORM, and secure backend systems." },
  { id: 3, image: redux, title: "Redux Toolkit", description: "Managing complex global state for scalable applications (Store, Slices)." },
  { id: 4, image: tailwindcss, title: "Tailwind CSS", description: "Rapid UI development with modern utility-first CSS framework." },
  { id: 5, image: javascript, title: "JavaScript (ES6+)", description: "Writing clean, asynchronous code (Promises, Async/Await)." },
  { id: 6, image: php, title: "PHP", description: "Server-side scripting and object-oriented programming (OOP)." },
  { id: 7, image: mysql, title: "MySQL", description: "Designing relational database schemas and optimizing SQL queries." },
  { id: 8, image: figma, title: "Figma", description: "Prototyping high-fidelity UI/UX designs before coding." },
  { id: 9, image: git, title: "Git & GitHub", description: "Version control, branching strategies, and team collaboration." },
  { id: 10, image: html, title: "HTML5", description: "Semantic structuring and accessibility standards." },
  { id: 11, image: css, title: "CSS3", description: "Animations, Grid, Flexbox, and responsive design techniques." },
  { id: 12, image: bootstrap, title: "Bootstrap", description: "Utilizing grid system for quick responsive layouts." },
];

// --- COMPOSANT CARTE UNITAIRE ---
const SkillBox = ({ image, title, description }) => (
  <article 
    className="bg-white/5 backdrop-blur-md border border-white/10 p-6 rounded-2xl shadow-xl text-center 
    hover:border-purple-500 hover:-translate-y-2 hover:bg-white/10 transition-all duration-300 group"
  >
    <figure className="flex justify-center mb-4 h-20 items-center">
      <img 
        src={image} 
        alt={title} 
        className="w-16 h-16 object-contain group-hover:scale-110 transition-transform duration-300 drop-shadow-md" 
      />
    </figure>
    <header>
      <h3 className="text-xl font-bold mb-2 text-white group-hover:text-purple-400 transition-colors">
        {title}
      </h3>
    </header>
    <p className="text-gray-400 text-sm leading-relaxed">
      {description}
    </p>
  </article>
);

// --- COMPOSANT PRINCIPAL ---
export default function Skills() {
  return (
    <section id="skills" className="relative min-h-screen bg-gray-950 py-20 px-6 overflow-hidden">
      
      {/* Background Decor (Lueur centrale) */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[600px] h-[300px] bg-purple-600/20 rounded-full blur-[100px] -z-10 pointer-events-none"></div>

      {/* Décoration image (Optionnel) */}
      {/* <img src={imghero} alt="decor" className="absolute top-20 left-10 w-32 opacity-20 -rotate-12 blur-sm animate-pulse" /> */}

      <div className="max-w-7xl mx-auto">
        
        {/* Titre Section */}
        <header className="text-center mb-16 space-y-4" data-aos="fade-up">
          <h2 className="text-4xl md:text-5xl font-extrabold text-white">
            My <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-600">Expertise</span>
          </h2>
          <p className="text-gray-400 max-w-2xl mx-auto text-lg">
            I combine creativity and code to build functional and aesthetic solutions. 
            Here is the tech stack I use to bring ideas to life.
          </p>
        </header>

        {/* Grille des compétences */}
        <div 
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6"
          data-aos="fade-up" 
          data-aos-delay="200"
        >
          {skillsData.map((skill) => (
            <SkillBox
              key={skill.id}
              image={skill.image}
              title={skill.title}
              description={skill.description}
            />
          ))}
        </div>

      </div>
    </section>
  );
}