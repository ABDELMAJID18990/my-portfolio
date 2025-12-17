import { useRef } from "react";
import emailjs from "@emailjs/browser";
import { FaEnvelope, FaPhoneAlt, FaMapMarkerAlt } from "react-icons/fa";

export default function Contact() {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm("service_tk22kbj", "template_9kxqldl", form.current, {
        publicKey: "w4kSGaZ-NNx5RM03d",
      })
      .then(
        () => {
          console.log("SUCCESS!");
          alert("Message envoyé avec succès ! Je vous répondrai bientôt.");
          e.target.reset();
        },
        (error) => {
          console.log("FAILED...", error.text);
          alert("Une erreur s'est produite, veuillez réessayer.");
        }
      );
  };

  return (
    <section 
      id='contact' 
      className='py-16 px-6 min-h-screen flex flex-col justify-center bg-black/30 overflow-x-hidden'
    >
      
      {/* Titre Principal */}
      <div 
        className='text-center mb-16' 
        data-aos='fade-down' 
        data-aos-delay='200'
      >
        <h2 className='text-5xl font-bold text-white relative inline-block'>
          Get in <span className='text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-600'>touch</span>
        </h2>
      </div>

      <div className='max-w-6xl mx-auto w-full flex flex-col md:flex-row gap-12 lg:gap-20'>
        
        {/* COLONNE GAUCHE */}
        <div 
          className='flex-1 space-y-8' 
          data-aos='fade-right' 
          data-aos-delay='400'
        >
          <h3 className='text-4xl md:text-5xl font-bold bg-gradient-to-r from-purple-400 to-pink-600 bg-clip-text text-transparent'>
            Let's talk
          </h3>
          
          <p className='text-gray-300 text-lg leading-relaxed max-w-md'>
            I'm currently available to take on new projects, so feel free to send me a message about an internship or a project you want me to work on. You can contact anytime.
          </p>

          <div className='space-y-6 text-gray-200'>
            
            {/* Email */}
            <div className='flex items-center gap-4 text-lg hover:text-purple-400 transition-colors'>
              <FaEnvelope className='text-xl text-purple-500' />
              <a href="mailto:abdelmajid.elainousi@gmail.com">abdelmajid.elainousi@gmail.com</a>
            </div>

            {/* Téléphone */}
            <div className='flex items-center gap-4 text-lg hover:text-purple-400 transition-colors'>
              <FaPhoneAlt className='text-xl text-purple-500' />
              <a href="tel:+212670307897">+212 670-307897</a>
            </div>

            {/* Localisation */}
            <div className='flex items-center gap-4 text-lg'>
              <FaMapMarkerAlt className='text-xl text-purple-500' />
              <span>Guelmim, Maroc</span>
            </div>

          </div>
        </div>

        {/* COLONNE DROITE  */}
        <form 
          ref={form} 
          onSubmit={sendEmail} 
          className='flex-1 flex flex-col gap-6'
          data-aos='fade-left'
          data-aos-delay='600'
        >
          
          <div className='space-y-2'>
            <label htmlFor="user_name" className='text-gray-300 font-medium'>Your Name</label>
            <input 
              type="text" 
              name="user_name" 
              placeholder='Enter your name' 
              required
              className='w-full bg-[#1a1a1a] border border-[#333] rounded-lg p-4 text-white focus:outline-none focus:border-purple-500 focus:bg-[#222] transition-all'
            />
          </div>

          <div className='space-y-2'>
            <label htmlFor="user_email" className='text-gray-300 font-medium'>Your Email</label>
            <input 
              type="email" 
              name="user_email" 
              placeholder='Enter your email' 
              required
              className='w-full bg-[#1a1a1a] border border-[#333] rounded-lg p-4 text-white focus:outline-none focus:border-purple-500 focus:bg-[#222] transition-all'
            />
          </div>

          <div className='space-y-2'>
            <label htmlFor="message" className='text-gray-300 font-medium'>Write your message here</label>
            <textarea 
              name="message" 
              rows="5" 
              placeholder='Enter your message' 
              required
              className='w-full bg-[#1a1a1a] border border-[#333] rounded-lg p-4 text-white resize-none focus:outline-none focus:border-purple-500 focus:bg-[#222] transition-all'
            ></textarea>
          </div>

          <button 
            type='submit'
            className='w-full md:w-auto self-start px-8 py-4 bg-gradient-to-r from-purple-600 to-pink-600 rounded-full text-white font-bold text-lg hover:scale-105 transition-transform duration-300 shadow-lg shadow-purple-500/30 cursor-pointer'
          >
            Submit now
          </button>

        </form>

      </div>
    </section>
  )
}
