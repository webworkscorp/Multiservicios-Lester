
import React from 'react';

const Footer: React.FC = () => {
  const logoUrl = "https://i.imgur.com/etIjOB5.png";

  return (
    <footer className="bg-brand-dark py-20 px-6 md:px-12 border-t border-white/5">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-12 gap-16 mb-20">
        <div className="md:col-span-5">
          <div className="flex items-center mb-8">
            <img 
              src={logoUrl} 
              alt="Multiservicios Rivera" 
              className="h-24 md:h-32 w-auto opacity-90 object-contain"
            />
          </div>
          <p className="text-white/40 font-light text-sm max-w-sm leading-relaxed">
            Mantenimiento y remodelación con enfoque profesional. Calidad técnica, orden y cumplimiento para su hogar o empresa.
          </p>
        </div>
        
        <div className="md:col-span-3">
          <h4 className="text-white font-bold uppercase text-[10px] tracking-widest mb-8">Especialidades</h4>
          <ul className="space-y-4 text-sm text-white/40 font-light">
            <li className="hover:text-brand-crimson cursor-pointer transition-colors">Obra Civil & Estructura</li>
            <li className="hover:text-brand-crimson cursor-pointer transition-colors">Remodelación Corporativa</li>
            <li className="hover:text-brand-crimson cursor-pointer transition-colors">Sistemas de Energía</li>
            <li className="hover:text-brand-crimson cursor-pointer transition-colors">Mantenimiento de Activos</li>
          </ul>
        </div>
        
        <div className="md:col-span-4">
          <h4 className="text-white font-bold uppercase text-[10px] tracking-widest mb-8">Contacto Técnico</h4>
          <p className="text-white/40 text-sm font-light mb-2">les82rivera@hotmail.com</p>
          <p className="text-white/40 text-sm font-light">8708-8047</p>
        </div>
      </div>
      
      <div className="max-w-7xl mx-auto pt-8 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-4 text-[9px] text-white/20 font-bold uppercase tracking-[0.3em]">
        <span>&copy; 2026 Rivera Engineering Group.</span>
        <span>Excelencia Técnica.</span>
      </div>
    </footer>
  );
};

export default Footer;
