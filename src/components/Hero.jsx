import Navbar from './Navbar';

import whatsapp from '../assets/whatsapp.png'; 
import linkedin from '../assets/linkedin.png';
import github from '../assets/github.png';
import myPhoto from "../assets/myPhoto.png"; 

export default function Hero() {
  return (
    <div className='relative overflow-hidden min-h-screen flex flex-col items-center bg-black/20'>
      
      <div className="absolute hidden md:block w-[500px] h-[500px] bg-gradient-to-r from-[#6d2897] via-[#8e6Cf5] to-[#bb61c5] 
        rounded-[40px] transform rotate-45 blur-sm opacity-60 z-0 -right-20 top-20 mix-blend-screen animate-pulse">
      </div>

      <Navbar />

      <main className='flex flex-col-reverse md:flex-row items-center justify-center w-full px-6 md:px-20 lg:px-40 
        pb-10 pt-24 md:pt-32 gap-10 z-10 max-w-[1400px] mx-auto'>
        
        {/* --- SECTION GAUCHE (TEXTE) --- */}
        <section className='flex-1 text-center md:text-left relative' data-aos="fade-right" data-aos-delay="500">
            
            <div className='absolute -z-10 w-40 h-40 bg-[#cd3cf5] rounded-full blur-3xl opacity-30 -top-10 -left-10'></div>
            
            <header className='space-y-4'>
                <h2 className='text-lg font-bold text-[#c744ec] tracking-widest uppercase mb-2'>
                    Hello, I am
                </h2>
                <h1 className='text-4xl sm:text-5xl md:text-6xl font-bold text-white leading-tight'>
                    Abdelmajid <br className='hidden md:block'/> El ainousi
                </h1>
                
                <h3 className='text-2xl md:text-3xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-300'>
                    Full Stack Web Developer
                </h3>
                
                <p className='text-gray-300 text-lg md:text-xl font-light mt-4 max-w-lg mx-auto md:mx-0'>
                    Student & Freelancer <span className="text-purple-400">|</span> React.js & Laravel
                </p>
            </header>

            <div className='flex items-center justify-center md:justify-start space-x-6 my-8'>
                <a href="https://github.com/ABDELMAJID18990" target='_blank' rel='noopener noreferrer' className='hover:-translate-y-1 transition-transform'>
                    <img src={github} alt="github" className='w-10 h-10 hover:opacity-80' />
                </a>
                <a href="https://www.linkedin.com/in/abdelmajid-el-ainousi-b2b187298/" target='_blank' rel='noopener noreferrer' className='hover:-translate-y-1 transition-transform'>
                    <img src={linkedin} alt="linkedin" className='w-10 h-10 hover:opacity-80' />
                </a>
                <a href="https://wa.me/212770307897" target='_blank' rel='noopener noreferrer' className='hover:-translate-y-1 transition-transform'>
                    <img src={whatsapp} alt="whatsapp" className='w-10 h-10 hover:opacity-80' />
                </a>
            </div>

            <div className='flex justify-center md:justify-start'>
                <a href="/CV_ABDELMAJID_ELAINOUSI.pdf" download="CV_Abdelmajid_Elainousi.pdf">
                    <button className='px-8 py-3 rounded-full text-white font-semibold text-lg
                    bg-gradient-to-r from-[#6d2897] to-[#bb61c5] border border-purple-500
                    hover:shadow-[0_0_30px_rgba(187,97,197,0.5)] hover:scale-105 transition-all duration-300 cursor-pointer'>
                        Download CV
                    </button>
                </a>
            </div>
        </section>

        {/* --- SECTION DROITE (IMAGE ) --- */}
        <figure className='flex-1 flex justify-center items-center relative' data-aos='zoom-in' data-aos-delay='600'>
            
            <div className="absolute w-[300px] h-[300px] md:w-[450px] md:h-[450px] bg-purple-600 rounded-full blur-[100px] opacity-20 animate-pulse"></div>
            
            <div className="relative w-[280px] h-[280px] sm:w-[350px] sm:h-[350px] md:w-[420px] md:h-[420px] 
                 p-1 rounded-full bg-gradient-to-b from-purple-500 via-pink-500 to-transparent">
                
                <div className="w-full h-full rounded-full overflow-hidden bg-[#1a0b2e]/80 backdrop-blur-sm border-4 border-white/10">
                    <img 
                        src={myPhoto} 
                        alt="Abdelmajid Avatar" 
                        className='w-full h-full object-cover transform translate-y-4 hover:scale-110 transition-transform duration-700 ease-in-out' 
                    />
                </div>
            </div>

            

        </figure>

      </main>
    </div>
  )
}