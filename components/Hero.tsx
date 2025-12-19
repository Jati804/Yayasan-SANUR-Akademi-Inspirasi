import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, Star } from 'lucide-react';
import { Link } from 'react-router-dom';

const Hero: React.FC = () => {
  const scrollToDaftar = (e: React.MouseEvent) => {
    e.preventDefault();
    const element = document.getElementById('daftar');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section 
      id="beranda" 
      /* Padding tetap yang aman untuk header static */
      className="relative min-h-screen flex items-center justify-center bg-surface overflow-hidden pt-32 pb-20 lg:pt-40 lg:pb-32"
    >
      
      {/* Dynamic Background Elements */}
      <div className="absolute inset-0 pointer-events-none">
        <motion.div 
          animate={{ 
            scale: [1, 1.2, 1], 
            opacity: [0.3, 0.5, 0.3],
            x: [0, 40, 0],
            y: [0, -40, 0] 
          }}
          transition={{ duration: 15, repeat: Infinity, ease: "easeInOut" }}
          className="absolute top-[-10%] right-[-10%] w-[300px] h-[300px] md:w-[600px] md:h-[600px] bg-primary/10 rounded-full blur-[100px]"
        />
        <motion.div 
          animate={{ 
            scale: [1, 1.3, 1], 
            opacity: [0.2, 0.4, 0.2],
            x: [0, -30, 0],
            y: [0, 30, 0] 
          }}
          transition={{ duration: 18, repeat: Infinity, ease: "easeInOut" }}
          className="absolute bottom-[-10%] left-[-10%] w-[250px] h-[250px] md:w-[500px] md:h-[500px] bg-secondary/10 rounded-full blur-[80px]"
        />
      </div>
      
      <div className="container mx-auto px-4 md:px-8 relative z-10">
        <div className="max-w-6xl mx-auto flex flex-col items-center text-center">
          
          {/* Badge Bintang */}
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="mb-8 md:mb-12"
          >
            <span className="inline-flex items-center gap-2 px-4 py-2 md:px-6 md:py-3 rounded-full bg-white border border-gray-100 shadow-md text-[10px] md:text-sm font-black text-primary uppercase tracking-[0.2em]">
              <Star className="w-4 h-4 md:w-5 h-5 fill-secondary text-secondary animate-pulse" />
              <span>Lembaga Kursus & Pelatihan Inklusif</span>
            </span>
          </motion.div>

          {/* Main Headline */}
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-[3.5rem] xs:text-[4.5rem] sm:text-[5.5rem] md:text-[6.5rem] lg:text-[7.5rem] xl:text-[8.5rem] font-black text-primary leading-[1] mb-8 md:mb-14 tracking-tighter w-full"
          >
            <span className="inline-block">SANUR</span>
            <br className="sm:hidden" /> 
            <span className="sm:inline-block sm:ml-[0.2em]">AKADEMI</span>
            <br /> 
            <span className="inline-block">INSPIRASI</span>
          </motion.h1>
          
          {/* Subtitle */}
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-lg md:text-2xl lg:text-3xl text-gray-500 mb-12 md:mb-20 max-w-3xl font-bold leading-relaxed px-4"
          >
            Wujudkan Potensi, Raih Kemandirian
          </motion.p>

          {/* Action Buttons */}
          <motion.div 
             initial={{ opacity: 0, y: 20 }}
             animate={{ opacity: 1, y: 0 }}
             transition={{ duration: 0.6, delay: 0.3 }}
             className="flex flex-col sm:flex-row gap-5 md:gap-8 w-full sm:w-auto px-6 sm:px-0"
          >
            <a 
              href="#daftar" 
              onClick={scrollToDaftar}
              className="px-10 py-6 md:px-14 md:py-7 bg-primary hover:bg-primary-dark text-white rounded-3xl font-black text-xl md:text-2xl shadow-2xl shadow-primary/30 transition-all hover:-translate-y-1.5 active:scale-95 flex items-center justify-center gap-4"
            >
              Konsultasi
              <ArrowRight className="w-6 h-6 md:w-8 h-8" />
            </a>
            
            <Link 
              to="/program" 
              className="px-10 py-6 md:px-14 md:py-7 bg-white hover:bg-gray-50 text-gray-700 border-2 border-gray-100 rounded-3xl font-black text-xl md:text-2xl transition-all hover:-translate-y-1.5 active:scale-95 flex items-center justify-center"
            >
              Lihat Program
            </Link>
          </motion.div>

        </div>
      </div>

    </section>
  );
};

export default Hero;