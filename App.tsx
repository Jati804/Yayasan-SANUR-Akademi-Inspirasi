
import React, { useEffect, useLayoutEffect } from 'react';
// Fix: Importing named components and hooks from react-router-dom
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
import Testimonials from './components/Testimonials';
import Payment from './components/Payment';
import Footer from './components/Footer';
import WhatsAppFloat from './components/WhatsAppFloat';

// Komponen Helper untuk Scroll to Top
const ScrollToTop = () => {
  const { pathname } = useLocation();
  useLayoutEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);
  return null;
};

// Komponen Helper untuk Update Meta Tags
const PageMeta = () => {
  const { pathname } = useLocation();
  useEffect(() => {
    let title = "SANUR Akademi Inspirasi | Lembaga Kursus & Pelatihan Inklusif";
    let description = "Kursus dan pelatihan komprehensif untuk masyarakat disabilitas di Depok.";

    switch (pathname) {
      case '/': break;
      case '/tentang': title = "Tentang Kami | SANUR Akademi"; break;
      case '/program': title = "Program & Biaya | SANUR Akademi"; break;
      case '/daftar': title = "Pendaftaran | SANUR Akademi"; break;
      case '/pembayaran': title = "Pembayaran Kursus | SANUR Akademi"; break;
    }
    document.title = title;
  }, [pathname]);
  return null;
};

const HomePage = () => (
  <>
    <Hero />
    <Stats />
    <Features /> 
    <Testimonials />
    <Gallery />
    <Contact />
  </>
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
            <Route path="/tentang" element={<div className="pt-20"><About /></div>} />
            <Route path="/program" element={<div className="bg-gray-50 min-h-screen"><Program /></div>} />
            <Route path="/daftar" element={<div className="bg-gray-50 min-h-screen"><Register /></div>} />
            <Route path="/pembayaran" element={<Payment />} />
          </Routes>
        </main>

        <Footer />
        <WhatsAppFloat />
      </div>
    </HashRouter>
  );
};

export default App;
