import React from 'react';

const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-white py-10 border-t border-gray-100 mt-auto">
      <div className="container mx-auto px-4 md:px-8">
        <div className="flex flex-col md:flex-row justify-between items-center gap-6 text-center md:text-left">
          
          {/* Brand & Copyright */}
          <div>
            <h3 className="font-heading font-bold text-xl text-primary tracking-tight mb-2">
              SANUR Akademi Inspirasi
            </h3>
            <p className="text-sm text-slate-500">
              &copy; {currentYear} Yayasan SANUR Akademi Inspirasi. All rights reserved.
            </p>
          </div>

          {/* Updated Description */}
          <div className="text-xs text-slate-400 font-medium">
             Lembaga Kursus & Pelatihan Inklusif
          </div>

        </div>
      </div>
    </footer>
  );
};

export default Footer;