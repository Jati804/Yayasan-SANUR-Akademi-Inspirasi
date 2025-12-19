import React, { useEffect, useLayoutEffect } from 'react';
import { HashRouter, Routes, Route, useLocation } from 'react-router-dom';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Features from './components/Features';
import Stats from './components/Stats';
import Gallery from './components/Gallery';
import Contact from './components/Contact';
import Program from './components/Program';
import Register from './components/Register';
import Footer from './components/Footer';
import WhatsAppFloat from './components/WhatsAppFloat';

// Komponen Helper untuk Scroll to Top Agresif
const ScrollToTop = () => {
  const { pathname } = useLocation();

  useLayoutEffect(() => {
    // Memaksa scroll ke paling atas secara instan sebelum browser sempat merender layout baru
    window.scrollTo(0, 0);
    if (document.documentElement) {
      document.documentElement.scrollTop = 0;
    }
    if (document.body) {
      document.body.scrollTop = 0;
    }
  }, [pathname]);

  return null;
};

// Komponen Helper untuk Update Meta Tags
const PageMeta = () => {
  const { pathname } = useLocation();

  useEffect(() => {
    // Dynamic Meta Content
    let title = "SANUR Akademi Inspirasi | Lembaga Kursus & Pelatihan Inklusif";
    let description = "Kursus dan pelatihan komprehensif untuk masyarakat disabilitas di Depok. Fokus pada kemandirian dan potensi unik setiap individu.";
    let ogTitle = "SANUR Akademi Inspirasi | Lembaga Kursus & Pelatihan Inklusif";
    let ogDesc = "Wujudkan potensi dan raih kemandirian melalui program belajar inklusif yang terpadu.";

    switch (pathname) {
      case '/':
        break;
      case '/tentang':
        title = "SANUR Akademi Inspirasi | Tentang Kami";
        description = "Visi, Misi, dan Nilai Yayasan SANUR Akademi Inspirasi. Kami berkomitmen pada inklusi dan pendampingan disabilitas di Depok.";
        ogTitle = "Siapa Kami? Kenali tentang SANUR Akademi Inspirasi";
        ogDesc = "Pelajari komitmen kami dalam pendampingan pelatihan masyarakat disabilitas di Depok.";
        break;
      case '/program':
        title = "SANUR Akademi Inspirasi | Program & Biaya Kursus Pelatihan";
        description = "Lihat rincian lengkap rancangan kurikulum, pilihan, dan biaya program pelatihan untuk disabilitas di Depok.";
        ogTitle = "Program & Biaya Pelatihan SANUR Akademi Inspirasi";
        ogDesc = "Dapatkan info berbagai program & biaya pelatihan yang transparan. Cek sekarang!";
        break;
      case '/daftar':
        title = "SANUR Akademi Inspirasi | Pendaftaran";
        description = "Konsultasi terkait program kursus dan pelatihan untuk masyarakat disabilitas. Daftar sekarang!";
        ogTitle = "Pendaftaran Kursus Pelatihan SANUR Akademi Inspirasi Dibuka!";
        ogDesc = "Jangan tunda lagi, amankan tempatmu! Segera konsultasi dan daftarkan diri untuk mengikuti program kami.";
        break;
      default:
        break;
    }

    document.title = title;
    const metaDescription = document.querySelector('meta[name="description"]');
    if (metaDescription) metaDescription.setAttribute('content', description);
    
    const ogTitleTag = document.querySelector('meta[property="og:title"]');
    if (ogTitleTag) ogTitleTag.setAttribute('content', ogTitle);

    const ogDescTag = document.querySelector('meta[property="og:description"]');
    if (ogDescTag) ogDescTag.setAttribute('content', ogDesc);

  }, [pathname]);

  return null;
};

// Halaman Beranda
const HomePage = () => (
  <>
    <Hero />
    <Stats />
    <Features /> 
    <Gallery />
    <Contact />
  </>
);

// Halaman Tentang Kami
const AboutPage = () => (
  <div className="pt-20">
    <About />
  </div>
);

// Halaman Program
const ProgramPage = () => (
  <div className="bg-gray-50 min-h-screen">
    <Program />
  </div>
);

// Halaman Daftar
const RegisterPage = () => (
  <div className="bg-gray-50 min-h-screen">
    <Register />
  </div>
);

const App: React.FC = () => {
  return (
    <HashRouter>
      <div className="min-h-screen bg-gray-50 text-gray-800 font-sans selection:bg-primary selection:text-white overflow-x-hidden flex flex-col justify-between">
        <ScrollToTop />
        <PageMeta />
        <Navbar />
        
        <main className="flex-grow">
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/tentang" element={<AboutPage />} />
            <Route path="/program" element={<ProgramPage />} />
            <Route path="/daftar" element={<RegisterPage />} />
          </Routes>
        </main>

        <Footer />
        <WhatsAppFloat />
      </div>
    </HashRouter>
  );
};

export default App;