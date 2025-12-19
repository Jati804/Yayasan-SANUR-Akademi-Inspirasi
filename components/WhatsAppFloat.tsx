import React from 'react';
import { MessageCircle } from 'lucide-react';
import { getWaLink } from '../constants';

const WhatsAppFloat: React.FC = () => {
  return (
    <a 
      href={getWaLink()} 
      target="_blank" 
      rel="noreferrer"
      className="fixed bottom-6 right-6 z-50 group"
      aria-label="Chat via WhatsApp"
    >
      <span className="absolute right-full mr-4 top-1/2 -translate-y-1/2 bg-white text-gray-800 px-4 py-2 rounded-lg shadow-lg text-sm font-bold opacity-0 group-hover:opacity-100 transition-opacity duration-300 whitespace-nowrap hidden md:block">
        Hubungi Kami
      </span>
      <div className="bg-[#25D366] hover:bg-[#20b858] text-white w-14 h-14 sm:w-16 sm:h-16 rounded-full flex items-center justify-center shadow-lg shadow-green-500/40 transition-all transform hover:scale-110 hover:-translate-y-1">
        <MessageCircle size={32} fill="white" className="text-white" />
      </div>
    </a>
  );
};

export default WhatsAppFloat;