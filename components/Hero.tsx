
import { motion } from 'framer-motion';
import { ArrowRight, Star } from 'lucide-react';
import { Link } from 'react-router-dom';

// Fix: Cast motion components to any to bypass environment-specific type merging issues
const MotionDiv = motion.div as any;
const MotionH1 = motion.h1 as any;
const MotionP = motion.p as any;

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
      className="relative min-h-[85vh] lg:min-h-screen flex items-center justify-center bg-surface overflow-hidden pt-32 pb-20 lg:pt-36 lg:pb-24"
    >
      
      {/* Dynamic Background Elements */}
      <div className="absolute inset-0 pointer-events-none">
        <MotionDiv 
          animate={{ 
            scale: [1, 1.2, 1], 
            opacity: [0.3, 0.5, 0.3],
            x: [0, 40, 0],
            y: [0, -40, 0] 
          }}
          transition={{ duration: 15, repeat: Infinity, ease: "easeInOut" }}
          className="absolute top-[-10%] right-[-10%] w-[300px] h-[300px] md:w-[600px] md:h-[600px] bg-primary/10 rounded-full blur-[100px]"
        />
        <MotionDiv 
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
          <MotionDiv
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="mb-6 md:mb-10"
          >
            <span className="inline-flex items-center gap-2 px-4 py-2 md:px-5 md:py-2.5 rounded-full bg-white border border-gray-100 shadow-md text-[10px] md:text-xs font-black text-primary uppercase tracking-[0.2em]">
              <Star className="w-4 h-4 md:w-4 h-4 fill-secondary text-secondary animate-pulse" />
              <span>Lembaga Kursus & Pelatihan Inklusif</span>
            </span>
          </MotionDiv>

          {/* Main Headline - Scaled down for desktop */}
          <MotionH1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-[3.5rem] xs:text-[4rem] sm:text-[4.5rem] md:text-[4.5rem] lg:text-[5.5rem] xl:text-[6rem] font-black text-primary leading-[1.1] md:leading-[1] mb-8 md:mb-10 tracking-tighter w-full"
          >
            <span className="inline-block">SANUR</span>
            <br className="sm:hidden" /> 
            <span className="sm:inline-block sm:ml-[0.2em]">AKADEMI</span>
            <br /> 
            <span className="inline-block">INSPIRASI</span>
          </MotionH1>
          
          {/* Subtitle */}
          <MotionP 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-lg md:text-xl lg:text-2xl text-gray-500 mb-10 md:mb-16 max-w-2xl font-bold leading-relaxed px-4"
          >
            Wujudkan Potensi, Raih Kemandirian
          </MotionP>

          {/* Action Buttons */}
          <MotionDiv 
             initial={{ opacity: 0, y: 20 }}
             animate={{ opacity: 1, y: 0 }}
             transition={{ duration: 0.6, delay: 0.3 }}
             className="flex flex-col sm:flex-row gap-4 md:gap-6 w-full sm:w-auto px-6 sm:px-0"
          >
            <a 
              href="#daftar" 
              onClick={scrollToDaftar}
              className="px-8 py-5 md:px-10 md:py-5 bg-primary hover:bg-primary-dark text-white rounded-2xl font-black text-lg md:text-xl shadow-xl shadow-primary/20 transition-all hover:-translate-y-1 active:scale-95 flex items-center justify-center gap-3"
            >
              Konsultasi
              <ArrowRight className="w-5 h-5 md:w-6 h-6" />
            </a>
            
            <Link 
              to="/program" 
              className="px-8 py-5 md:px-10 md:py-5 bg-white hover:bg-gray-50 text-gray-700 border-2 border-gray-100 rounded-2xl font-black text-lg md:text-xl transition-all hover:-translate-y-1 active:scale-95 flex items-center justify-center"
            >
              Lihat Program
            </Link>
          </MotionDiv>

        </div>
      </div>

    </section>
  );
};

export default Hero;
