import { useRef, useState } from "react";
import emailjs from "@emailjs/browser";
import { FaEnvelope, FaPhoneAlt, FaMapMarkerAlt, FaPaperPlane } from "react-icons/fa";

export default function Contact() {
  const form = useRef();
  const [isSending, setIsSending] = useState(false);
  const [notification, setNotification] = useState(null); // Pour le message de succès/échec

  // Fonction pour afficher une notification temporaire
  const showNotification = (message, type) => {
    setNotification({ message, type });
    setTimeout(() => {
      setNotification(null);
    }, 5000);
  };

  const sendEmail = (e) => {
    e.preventDefault();
    setIsSending(true);

    emailjs
      .sendForm("service_tk22kbj", "template_9kxqldl", form.current, {
        publicKey: "w4kSGaZ-NNx5RM03d",
      })
      .then(
        () => {
          showNotification("Message sent successfully! I'll reply soon.", "success");
          e.target.reset();
          setIsSending(false);
        },
        (error) => {
          console.error("FAILED...", error);
          showNotification("Failed to send message. Please try again.", "error");
          setIsSending(false);
        }
      );
  };

  return (
    <section 
      id='contact' 
      className='py-20 px-6 min-h-screen flex flex-col justify-center bg-gray-950 relative overflow-hidden'
    >
        
      {/* Background Decor */}
      <div className="absolute top-1/2 left-0 w-96 h-96 bg-purple-900/20 rounded-full blur-[120px] pointer-events-none -translate-y-1/2"></div>

      <div className='max-w-7xl mx-auto w-full flex flex-col md:flex-row gap-12 lg:gap-20 items-start relative z-10'>
        
        {/* --- COLONNE GAUCHE (Infos) --- */}
        <div 
          className='flex-1 space-y-10' 
          data-aos='fade-right' 
          data-aos-delay='200'
        >
          <header>
            <h2 className='text-5xl font-extrabold text-white mb-6 leading-tight'>
              Let's build something <br/> 
              <span className='text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-600'>great together</span>
            </h2>
            <p className='text-gray-400 text-lg leading-relaxed max-w-lg'>
              I'm currently available for an **End-of-Studies Internship (PFE)**. 
              Whether you have a question or just want to say hi, I'll try my best to get back to you!
            </p>
          </header>

          <div className='space-y-8'>
            
            {/* Email Card */}
            <div className='flex items-center gap-5 p-4 rounded-xl bg-white/5 border border-white/5 hover:border-purple-500/50 transition-colors group cursor-pointer'>
              <div className="w-12 h-12 bg-purple-500/20 rounded-full flex items-center justify-center text-purple-400 group-hover:text-white group-hover:bg-purple-600 transition-all">
                <FaEnvelope className='text-xl' />
              </div>
              <div>
                <h4 className="text-gray-400 text-sm font-medium">Email Me</h4>
                <a href="mailto:abdelmajid.elainousi@gmail.com" className="text-white font-semibold text-lg hover:text-purple-400 transition-colors">
                    abdelmajid.elainousi@gmail.com
                </a>
              </div>
            </div>

            {/* Phone Card */}
            <div className='flex items-center gap-5 p-4 rounded-xl bg-white/5 border border-white/5 hover:border-purple-500/50 transition-colors group cursor-pointer'>
              <div className="w-12 h-12 bg-purple-500/20 rounded-full flex items-center justify-center text-purple-400 group-hover:text-white group-hover:bg-purple-600 transition-all">
                <FaPhoneAlt className='text-xl' />
              </div>
              <div>
                <h4 className="text-gray-400 text-sm font-medium">Call Me</h4>
                <a href="tel:+212770307897" className="text-white font-semibold text-lg hover:text-purple-400 transition-colors">
                    +212 770-307897
                </a>
              </div>
            </div>

            {/* Location Card */}
            <div className='flex items-center gap-5 p-4 rounded-xl bg-white/5 border border-white/5 hover:border-purple-500/50 transition-colors group cursor-pointer'>
              <div className="w-12 h-12 bg-purple-500/20 rounded-full flex items-center justify-center text-purple-400 group-hover:text-white group-hover:bg-purple-600 transition-all">
                <FaMapMarkerAlt className='text-xl' />
              </div>
              <div>
                <h4 className="text-gray-400 text-sm font-medium">Location</h4>
                <p className="text-white font-semibold text-lg">Guelmim, Maroc (Mobile)</p>
              </div>
            </div>

          </div>
        </div>

        {/* --- COLONNE DROITE (Formulaire) --- */}
        <form 
          ref={form} 
          onSubmit={sendEmail} 
          className='flex-1 w-full bg-white/5 p-8 sm:p-10 rounded-3xl border border-white/10 shadow-2xl relative'
          data-aos='fade-left'
          data-aos-delay='400'
        >
          {/* Lueur formulaire */}
          <div className="absolute inset-0 bg-gradient-to-b from-purple-500/10 to-transparent rounded-3xl pointer-events-none"></div>

          <h3 className="text-2xl font-bold text-white mb-8 relative z-10">Send a Message</h3>
          
          <div className='flex flex-col gap-6 relative z-10'>
            
            {/* Input Nom */}
            <div className="relative group">
                <input 
                  type="text" 
                  name="user_name" 
                  placeholder='Your Name' 
                  required
                  className='w-full bg-black/40 border border-white/10 rounded-xl px-5 py-4 text-white placeholder-gray-500 focus:outline-none focus:border-purple-500 focus:bg-black/60 transition-all peer'
                />
            </div>

            {/* Input Email */}
            <div className="relative group">
                <input 
                  type="email" 
                  name="user_email" 
                  placeholder='Your Email Address' 
                  required
                  className='w-full bg-black/40 border border-white/10 rounded-xl px-5 py-4 text-white placeholder-gray-500 focus:outline-none focus:border-purple-500 focus:bg-black/60 transition-all'
                />
            </div>

            {/* Textarea */}
            <div className="relative group">
                <textarea 
                  name="message" 
                  rows="5" 
                  placeholder='Write your message here...' 
                  required
                  className='w-full bg-black/40 border border-white/10 rounded-xl px-5 py-4 text-white placeholder-gray-500 resize-none focus:outline-none focus:border-purple-500 focus:bg-black/60 transition-all'
                ></textarea>
            </div>

            {/* Submit Button */}
            <button 
              type='submit'
              disabled={isSending}
              className={`w-full py-4 rounded-xl text-white font-bold text-lg flex items-center justify-center gap-2
              transition-all duration-300 shadow-lg 
              ${isSending 
                ? 'bg-gray-600 cursor-not-allowed opacity-70' 
                : 'bg-gradient-to-r from-purple-600 to-pink-600 hover:scale-[1.02] hover:shadow-purple-500/40 cursor-pointer'
              }`}
            >
              {isSending ? (
                <>Sending...</>
              ) : (
                <>Send Message <FaPaperPlane className="text-sm" /></>
              )}
            </button>

          </div>
        </form>

      </div>

      {/* --- NOTIFICATION TOAST --- */}
      {notification && (
        <div 
            className={`fixed bottom-10 right-10 px-6 py-4 rounded-xl shadow-2xl border flex items-center gap-3 z-50 animate-bounce
            ${notification.type === 'success' 
                ? 'bg-green-900/90 border-green-500 text-white' 
                : 'bg-red-900/90 border-red-500 text-white'}`}
        >
            {notification.type === 'success' ? '✅' : '❌'}
            <p className="font-medium">{notification.message}</p>
        </div>
      )}

    </section>
  )
}