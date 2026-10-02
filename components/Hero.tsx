import { useReducedMotion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';

const focusRing =
  'focus-visible:outline-none focus-visible:ring-4 focus-visible:ring-primary/40 focus-visible:ring-offset-2';

const Hero: React.FC = () => {
  const reduceMotion = useReducedMotion();

  const scrollToDaftar = (e: React.MouseEvent) => {
    e.preventDefault();
    const element = document.getElementById('daftar');
    if (element) {
      element.scrollIntoView({ behavior: reduceMotion ? 'auto' : 'smooth' });
    }
  };

  return (
    <section
      id="beranda"
      className="relative bg-surface overflow-hidden pt-28 lg:pt-[7.5rem] flex items-end"
    >
      <div className="container mx-auto px-4 md:px-8 relative z-10">
        <div className="grid lg:grid-cols-[1.15fr_1fr] gap-8 lg:gap-4 items-end">
          {/* Teks: statis, langsung terbaca saat halaman dibuka */}
          <div className="self-center pb-6 lg:pb-20 lg:pl-5 text-center lg:text-left">
            <span className="inline-flex items-center px-5 py-2 rounded-full bg-white border border-gray-100 shadow-sm text-[11px] md:text-xs font-black text-primary uppercase tracking-[0.15em] mb-7 md:mb-8">
              Lembaga Kursus &amp; Pelatihan Inklusif
            </span>

            <h1 className="text-[clamp(3rem,15vw,4.5rem)] sm:text-7xl lg:text-[3.5rem] xl:text-[4.5rem] 2xl:text-[5rem] font-black text-primary leading-[1.2] lg:leading-[1.05] tracking-tighter mb-6">
              <span className="block">
                <span className="block lg:inline">SANUR</span>{' '}
                <span className="block lg:inline">AKADEMI</span>
              </span>
              <span className="block">INSPIRASI</span>
            </h1>

            <p className="text-lg md:text-2xl text-gray-600 font-bold leading-[1.6] max-w-xl mx-auto lg:mx-0 mb-10">
              Wujudkan Potensi, Raih Kemandirian
            </p>

            <div className="flex flex-col sm:flex-row sm:justify-center lg:justify-start gap-4 sm:gap-5">
              <a
                href="#daftar"
                onClick={scrollToDaftar}
                className={`px-8 py-4 md:px-10 md:py-5 bg-primary hover:bg-primary-dark text-white rounded-2xl font-black text-lg md:text-xl shadow-xl shadow-primary/20 transition-all motion-safe:hover:-translate-y-1 motion-safe:active:scale-95 flex items-center justify-center gap-3 ${focusRing}`}
              >
                Konsultasi
                <ArrowRight className="w-5 h-5 md:w-6 md:h-6" aria-hidden="true" />
              </a>

              <Link
                to="/program"
                className={`px-8 py-4 md:px-10 md:py-5 bg-white hover:bg-gray-50 text-gray-700 border-2 border-gray-200 rounded-2xl font-black text-lg md:text-xl transition-all motion-safe:hover:-translate-y-1 motion-safe:active:scale-95 flex items-center justify-center ${focusRing}`}
              >
                Lihat Program
              </Link>
            </div>
          </div>

          {/* Ilustrasi: statis tanpa animasi; -mb-px menutup celah subpiksel ke pita statistik di bawahnya */}
          <div className="flex justify-center lg:justify-end -mb-px">
            <img
              src="/hero-illustration.svg"
              alt=""
              aria-hidden="true"
              width={865}
              height={510}
              className="block w-full max-w-[520px] sm:max-w-[600px] lg:max-w-none h-auto lg:scale-[1.3] lg:origin-bottom-right lg:pointer-events-none"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
