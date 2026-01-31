
import React from 'react';
import { MessageCircle } from 'lucide-react';

const FloatingWhatsApp: React.FC = () => {
  return (
    <a 
      href="https://wa.me/50687088047"
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-8 right-8 z-50 bg-[#25D366] text-white p-4 rounded-full shadow-2xl hover:scale-110 transition-transform flex items-center justify-center group"
      aria-label="WhatsApp"
    >
      <MessageCircle size={32} />
      <span className="absolute right-full mr-4 bg-brand-dark text-white px-4 py-2 rounded text-[10px] font-bold uppercase tracking-widest shadow-xl whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none border border-white/10">
        Asesoría Técnica Directa
      </span>
    </a>
  );
};

export default FloatingWhatsApp;
