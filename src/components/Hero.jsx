import { TypeAnimation } from 'react-type-animation';
import Navbar from './Navbar';

import whatsapp from '../assets/whatsapp.png';
import linkedin from '../assets/linkedin.png';
import github from '../assets/github.png';
import myPhoto from "../assets/myPhoto.png"; 

export default function Hero() {

  // Données des réseaux sociaux pour éviter la répétition de code
  const socialLinks = [
    { id: 1, href: "https://github.com/ABDELMAJID18990", icon: github, alt: "github" },
    { id: 2, href: "https://www.linkedin.com/in/abdelmajid-el-ainousi-b2b187298/", icon: linkedin, alt: "linkedin" },
    { id: 3, href: "https://wa.me/212770307897", icon: whatsapp, alt: "whatsapp" }, // J'ai remis le format marocain standard (2126...)
  ];

  return (
    <section id='home' className='relative overflow-hidden min-h-screen flex flex-col items-center bg-gray-950'>
      
      {/* --- BACKGROUND DECORATION --- */}
      <div className="absolute hidden md:block w-[500px] h-[500px] bg-gradient-to-r from-purple-900 via-purple-700 to-pink-900 
        rounded-[40px] transform rotate-45 blur-3xl opacity-30 z-0 -right-20 top-20 animate-pulse">
      </div>

      <Navbar />

      {/* --- CONTENU PRINCIPAL --- */}
      <main className='flex flex-col-reverse md:flex-row items-center justify-center w-full px-6 md:px-20 lg:px-40 
        pb-10 pt-28 md:pt-36 gap-10 z-10 max-w-7xl mx-auto'>
        
        {/* --- COLONNE GAUCHE : TEXTE --- */}
        <div className='flex-1 text-center md:text-left relative' data-aos="fade-right" data-aos-delay="500">
            
            {/* Lueur derrière le texte */}
            <div className='absolute -z-10 w-40 h-40 bg-purple-600 rounded-full blur-3xl opacity-20 -top-10 -left-10'></div>
            
            <header className='space-y-4'>
                <h2 className='text-lg md:text-xl font-bold text-purple-400 tracking-widest uppercase mb-2'>
                    Hello, I am
                </h2>
                
                <h1 className='text-4xl sm:text-5xl md:text-6xl font-extrabold text-white leading-tight'>
                    Abdelmajid <br className='hidden md:block'/> El ainousi
                </h1>
                
                {/* Animation Typewriter */}
                <div className='text-xl md:text-3xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-600 h-16 md:h-auto'>
                  <TypeAnimation
                    sequence={[
                      'Full Stack Web Developer',
                      2000,
                      'React.js Specialist',
                      2000,
                      'Laravel Developer',
                      2000
                    ]}
                    wrapper="span"
                    speed={50}
                    repeat={Infinity}
                  />
                </div>
                
                <p className='text-gray-400 text-lg md:text-xl font-light mt-4 max-w-lg mx-auto md:mx-0'>
                    Building robust and scalable web applications. <br/>
                    Student & Freelancer <span className="text-purple-500 font-bold">|</span> Open to PFE Internship.
                </p>
            </header>

            {/* Icones Réseaux Sociaux (Mappées) */}
            <div className='flex items-center justify-center md:justify-start space-x-6 my-8'>
                {socialLinks.map((social) => (
                    <a 
                        key={social.id} 
                        href={social.href} 
                        target='_blank' 
                        rel='noopener noreferrer' 
                        className='group transition-transform duration-300 hover:-translate-y-2'
                    >
                        <img 
                            src={social.icon} 
                            alt={social.alt} 
                            className='w-11 h-11 filter hover:brightness-125 hover:drop-shadow-[0_0_8px_rgba(168,85,247,0.5)] transition-all' 
                        />
                    </a>
                ))}
            </div>

            {/* Bouton Download CV */}
            <div className='flex justify-center md:justify-start'>
                <a href="/CV_ABDELMAJID_ELAINOUSI.pdf" download="CV_Abdelmajid_Elainousi.pdf">
                    <button className='px-8 py-3 rounded-full text-white font-bold text-lg
                    bg-gradient-to-r from-purple-600 to-pink-600 
                    border-2 border-transparent hover:border-white
                    shadow-lg shadow-purple-500/30 hover:shadow-purple-500/60
                    transform hover:scale-105 transition-all duration-300 cursor-pointer'>
                        Download CV
                    </button>
                </a>
            </div>
        </div>

        {/* --- COLONNE DROITE : IMAGE / AVATAR --- */}
        <figure className='flex-1 flex justify-center items-center relative' data-aos='zoom-in' data-aos-delay='600'>
            
            {/* Grand cercle néon arrière */}
            <div className="absolute w-[280px] h-[280px] md:w-[450px] md:h-[450px] bg-purple-600 rounded-full blur-[90px] opacity-30 animate-pulse"></div>
            
            {/* Cadre de l'image */}
            <div className="relative w-[260px] h-[260px] sm:w-[320px] sm:h-[320px] md:w-[400px] md:h-[400px] 
                 p-1 rounded-full bg-gradient-to-b from-purple-500 via-pink-500 to-transparent shadow-2xl">
                
                <div className="w-full h-full rounded-full overflow-hidden bg-gray-900 border-4 border-white/5 relative">
                    <img 
                        src={myPhoto} 
                        alt="Abdelmajid Avatar" 
                        className='w-full h-full object-cover object-center transform translate-y-3 hover:scale-110 transition-transform duration-700 ease-in-out' 
                    />
                </div>
                
                
            </div>

        </figure>

      </main>
    </section>
  )
}