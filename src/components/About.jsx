import img_about1 from "../assets/img_about1.png";
import img_about2 from "../assets/img_about2.png";
import img_about from "../assets/img_about.png";

export default function About() {
  return (
    <section
      id="about"
      className="relative min-h-screen flex items-center justify-center bg-gray-950 py-20 px-6 overflow-hidden"
    >
      {/* Background Decor (Lueur légère en bas) */}
      <div className='absolute bottom-0 right-0 w-96 h-96 bg-purple-600/10 rounded-full blur-[120px] -z-10 pointer-events-none'></div>

      <div className="max-w-7xl w-full grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
        
        {/* --- COLONNE GAUCHE : IMAGES COMPOSITION --- */}
        <figure
          data-aos="fade-right"
          data-aos-delay="300"
          className="relative flex justify-center lg:justify-start min-h-[400px]"
        >
          {/* Forme arrière-plan abstraite */}
          <div className="absolute top-10 left-10 w-72 h-72 sm:w-96 sm:h-96 bg-gradient-to-tr from-purple-900 to-pink-900 rounded-full blur-2xl opacity-40 animate-pulse"></div>

          {/* Image 1 (Petit haut gauche) */}
          <img
            src={img_about1}
            alt="coding icon"
            className="absolute top-0 left-0 w-24 h-24 sm:w-32 sm:h-32 object-cover rounded-2xl shadow-xl shadow-purple-900/30 border border-white/10 z-20 hover:scale-110 transition-transform duration-300"
          />
          
          {/* Image 2 (Centrale principale) */}
          <img
            src={img_about2}
            alt="developer working"
            className="relative z-10 w-48 h-64 sm:w-64 sm:h-80 lg:w-72 lg:h-96 object-cover rounded-xl shadow-2xl border-4 border-gray-900 ml-12 mt-8"
          />
          
          {/* Image 3 (Bas droite) */}
          <img
            src={img_about}
            alt="tech stack"
            className="absolute bottom-10 right-10 sm:right-20 lg:right-32 w-24 h-24 sm:w-32 sm:h-32 object-cover rounded-2xl shadow-xl border border-white/10 z-20 hover:scale-110 transition-transform duration-300"
          />
        </figure>

        {/* --- COLONNE DROITE : TEXTE --- */}
        <article
          className="text-center lg:text-left relative z-10"
          data-aos="fade-left"
          data-aos-delay="500"
        >
          {/* Petite ligne décorative */}
          <div className="w-16 h-1 bg-gradient-to-r from-purple-500 to-pink-500 mb-6 mx-auto lg:mx-0 rounded-full"></div>

          <header>
            <h1 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-white mb-6 tracking-tight">
              About <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-500">Me</span>
            </h1>
          </header>

          <div className="space-y-4 text-base sm:text-lg md:text-xl text-gray-300 leading-relaxed font-light">
            <p>
              I am a final-year <strong className="text-white font-semibold">Full Stack Web Development</strong> student at ISTA NTIC Guelmim, driven by a passion for building robust and scalable applications.
            </p>
            <p>
              With solid proficiency in <span className="text-blue-400 font-bold">React.js</span> for the frontend and <span className="text-red-500 font-bold">Laravel</span> for the backend, I bridge the gap between complex logic and intuitive user experiences.
            </p>
            <p>
              Disciplined, curious, and adaptable, I am actively seeking an <span className="text-white border-b-2 border-purple-500 pb-0.5">End-of-Studies Internship (Stage PFE)</span> to bring value to a dynamic tech team and launch my professional career.
            </p>
          </div>

          <div className="mt-8 flex justify-center lg:justify-start gap-6 items-center">
            <a href="#projects" className="group flex items-center text-purple-400 font-medium hover:text-white transition-colors duration-300">
                <span>View my projects</span>
                <span className="ml-2 group-hover:translate-x-1 transition-transform">→</span>
            </a>
          </div>

        </article>
      </div>
    </section>
  );
}