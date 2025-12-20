
import React, { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';
import { Link, useLocation } from 'react-router-dom';

const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const isActive = (path: string) => location.pathname === path;

  const navLinks = [
    { name: 'Beranda', path: '/' },
    { name: 'Tentang Kami', path: '/tentang' }, 
    { name: 'Program & Biaya', path: '/program' },
  ];

  return (
    <header 
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ease-in-out py-3.5 ${
        scrolled ? 'bg-white/95 backdrop-blur-md shadow-md' : 'bg-white border-b border-gray-100'
      }`}
    >
      <div className="container mx-auto px-4 md:px-8 flex justify-between items-center">
        {/* Logo Area */}
        <div className="flex items-center">
          <Link to="/" className="flex items-center group">
             <div className="relative transition-all duration-300 flex items-center justify-center overflow-hidden rounded-xl bg-white border border-gray-100 shadow-sm h-10 w-[76px] md:h-14 md:w-[106px]">
                <img 
                  src="/Images/sanurlogo.png" 
                  alt="Logo SANUR" 
                  className="w-full h-full object-contain group-hover:scale-105 transition-transform duration-300 p-1"
                  onError={(e) => {
                    e.currentTarget.src = "https://ui-avatars.com/api/?name=SANUR&background=0F52BA&color=fff&length=5&width=298&height=157";
                  }}
                />
             </div>
          </Link>
        </div>

        {/* Desktop Nav - Tetap Sempurna */}
        <nav className="hidden lg:flex items-center gap-10">
          <ul className="flex space-x-8">
            {navLinks.map((link) => (
              <li key={link.name}>
                <Link 
                  to={link.path} 
                  className={`text-xl font-bold transition-colors relative group ${
                    isActive(link.path) ? 'text-primary' : 'text-gray-600 hover:text-primary'
                  }`}
                >
                  {link.name}
                  <span className={`absolute -bottom-1 left-0 h-1 bg-secondary transition-all duration-300 ${
                    isActive(link.path) ? 'w-full' : 'w-0 group-hover:w-full'
                  }`}></span>
                </Link>
              </li>
            ))}
          </ul>
          
          <Link 
            to="/daftar" 
            className="bg-secondary hover:bg-secondary-dark text-white px-8 py-3 rounded-2xl font-black text-lg shadow-xl shadow-secondary/30 transition-all hover:transform hover:-translate-y-1 active:scale-95 cursor-pointer uppercase tracking-wider"
          >
            Daftar Sekarang
          </Link>
        </nav>

        {/* Mobile Menu Button - Sekarang Warna Oranye (Secondary) */}
        <button 
          className={`lg:hidden flex items-center gap-2 px-4 py-2 rounded-2xl border transition-all focus:outline-none ${
            isOpen 
            ? 'bg-secondary text-white border-secondary shadow-lg shadow-secondary/20' 
            : 'bg-orange-50 hover:bg-orange-100 text-secondary border-secondary/20'
          }`}
          onClick={() => setIsOpen(!isOpen)}
        >
          <span className={`text-[10px] font-black tracking-[0.2em] uppercase ${isOpen ? 'text-white' : 'text-secondary/70'}`}>
            MENU
          </span>
          {isOpen ? <X size={20} /> : <Menu size={20} />}
        </button>
      </div>

      {/* Mobile Menu Dropdown - Font dikecilkan agar lebih proporsional */}
      <div 
        className={`lg:hidden absolute top-full left-0 w-full bg-white border-b border-gray-100 shadow-2xl transition-all duration-300 ease-in-out overflow-hidden ${
          isOpen ? 'max-h-screen opacity-100' : 'max-h-0 opacity-0'
        }`}
      >
        <div className="container mx-auto px-4 py-6 flex flex-col gap-2">
          {navLinks.map((link) => (
            <Link 
              key={link.name}
              to={link.path} 
              className={`text-[11px] font-extrabold uppercase tracking-[0.2em] py-3.5 border-b border-gray-50 pl-4 border-l-4 transition-all ${
                 isActive(link.path) 
                 ? 'text-primary border-secondary bg-blue-50/50' 
                 : 'text-gray-500 border-transparent hover:text-primary'
              }`}
              onClick={() => setIsOpen(false)}
            >
              {link.name}
            </Link>
          ))}
          <Link 
            to="/daftar"
            onClick={() => setIsOpen(false)}
            className="bg-secondary text-white text-center py-4 rounded-xl font-black text-[11px] mt-2 shadow-lg shadow-secondary/20 cursor-pointer uppercase tracking-[0.25em]"
          >
            Daftar Sekarang
          </Link>
        </div>
      </div>
    </header>
  );
};

export default Navbar;
