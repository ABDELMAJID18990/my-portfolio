
import { FaHeart } from 'react-icons/fa'; 

export default function Footer() {
  return (
    <footer className='bg-gray-950 text-white py-8 border-t border-white/10 relative overflow-hidden'>
        
        {/* Petite lumière décorative en bas */}
        <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-full h-20 bg-purple-600/10 blur-[50px] pointer-events-none"></div>

        <div className='container mx-auto px-6 flex flex-col md:flex-row items-center justify-between gap-4 relative z-10'>
          
          {/* Logo / Nom */}
          <div className="text-center md:text-left">
            <h1 className='text-2xl font-bold italic tracking-wider'>
              <span className='text-white'>Port</span>
              <span className='text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-600'>folio.</span>
            </h1>
          </div>

          {/* Copyright */}
          <p className='text-sm text-gray-400 text-center'>
            &copy; {new Date().getFullYear()} ABDELMAJID EL AINOUSI. All rights reserved.
          </p>

          {/* Signature / "Made with love" */}
          <div className="flex items-center gap-2 text-sm text-gray-400">
            <span>Made with</span>
            <FaHeart className="text-red-500 animate-pulse" />
            <span>in Guelmim</span>
          </div>

        </div>
    </footer>    
  )
}