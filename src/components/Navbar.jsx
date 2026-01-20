import React, { useState } from 'react';
import { FiMenu, FiX } from 'react-icons/fi';

export default function Navbar() {
    const [isOpen, setIsOpen] = useState(false);

    // Liste des liens de navigation
    const NavbarLinks = [
        { id: 1, name: 'Home', link: '#home' },
        { id: 2, name: 'About', link: '#about' },
        { id: 3, name: 'Skills', link: '#skills' },
        { id: 4, name: 'My projects', link: '#projects' },
    ];

    return (
        /* AJOUT : 'bg-black/20 backdrop-blur-md' pour l'effet de verre fumé moderne */
        <header className='fixed top-0 left-0 w-full z-50 bg-black/20 backdrop-blur-md shadow-lg transition-all duration-300'>
            <div className="container mx-auto flex items-center justify-between p-4 md:p-5">

                {/* LOGO */}
                <a href='#home' className='text-3xl md:text-4xl font-bold italic text-white tracking-wider'>
                    Portfolio
                </a>

                {/* Mobile Menu Toggle */}
                <button className='md:hidden focus:outline-none' onClick={() => setIsOpen(!isOpen)}>
                    {isOpen ? <FiX className='w-8 h-8 text-white' /> : <FiMenu className='w-8 h-8 text-white' />}
                </button>

                {/* Desktop Navigation */}
                <nav className='hidden md:flex items-center space-x-8'>
                    {NavbarLinks.map(link => (
                        <a 
                            key={link.id} 
                            href={link.link} 
                            className='text-white text-lg font-medium hover:text-purple-400 transition-colors duration-300'
                        >
                            {link.name}
                        </a>
                    ))}
                    
                    {/* CORRECTION : Remplacement du <button> par <a> pour que le lien marche */}
                    <a 
                        href="#contact"
                        className='inline-block text-white border-2 border-white py-2 px-6 rounded-full text-lg font-medium 
                        hover:bg-purple-600 hover:border-purple-600 hover:shadow-[0_0_20px_rgba(168,85,247,0.5)] 
                        transition-all duration-300 cursor-pointer'
                    >
                        Contact
                    </a>
                </nav>

            </div>

            {/* Mobile Navigation (Menu Latéral) */}
            {/* AJOUT : Transition smooth pour l'ouverture */}
            <div className={`fixed top-0 right-0 w-2/3 md:hidden h-screen bg-gray-900/95 backdrop-blur-xl z-40 transform transition-transform duration-300 ease-in-out ${isOpen ? 'translate-x-0' : 'translate-x-full'}`}>
                
                <div className='flex flex-col items-center justify-center space-y-10 h-full'>
                    {/* Close Button (déjà géré par le toggle en haut, mais on peut le garder ou l'enlever) */}
                    
                    {NavbarLinks.map(link => (
                        <a 
                            key={link.id} 
                            href={link.link} 
                            className='text-2xl text-white font-semibold hover:text-purple-400 transition-colors'
                            onClick={() => setIsOpen(false)} // Important : ferme le menu au clic
                        >
                            {link.name}
                        </a>
                    ))}

                    {/* Contact Button Mobile */}
                    <a 
                        href="#contact"
                        onClick={() => setIsOpen(false)} // Important : ferme le menu au clic
                        className='inline-block text-white border-2 border-purple-500 py-3 px-10 rounded-full text-xl 
                        hover:bg-purple-600 transition-all duration-300'
                    >
                        Contact
                    </a>
                </div>
            </div>

            {/* Overlay pour cliquer dehors et fermer le menu (Optionnel mais recommandé pour l'UX) */}
            {isOpen && (
                <div 
                    className="fixed inset-0 bg-black/50 z-30 md:hidden"
                    onClick={() => setIsOpen(false)}
                ></div>
            )}

        </header>
    )
}