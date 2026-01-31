
import React from 'react';
import { Phone } from 'lucide-react';

const Services: React.FC = () => {
  const phoneTicker = Array(25).fill("87088047");

  return (
    <section id="servicios" className="py-32 bg-white px-6 md:px-12 relative overflow-hidden">
      {/* Fondo sutil - Marca de agua técnica */}
      <div className="absolute top-0 right-0 w-1/3 h-full bg-brand-concrete/30 -z-10 translate-x-1/2 skew-x-12"></div>
      
      <div className="max-w-7xl mx-auto">
        <header className="mb-20">
          <div className="flex flex-col md:flex-row gap-12 items-start">
            <div className="md:w-3/5">
              <div className="flex items-center gap-3 mb-6">
                <div className="h-[2px] w-12 bg-brand-crimson"></div>
                <span className="text-brand-crimson font-black text-xs uppercase tracking-[0.4em]">Soluciones Reales</span>
              </div>
              <h2 className="text-4xl md:text-6xl font-heading font-black tracking-tighter uppercase leading-[0.9] text-brand-dark mb-8">
                Todo lo que su espacio necesita para <br/>
                <span className="text-brand-slate/30">estar al 100%.</span>
              </h2>
              <p className="text-2xl text-brand-slate font-medium leading-tight max-w-xl border-l-4 border-brand-crimson pl-6">
                Nos encargamos de construir, reparar y mejorar su lugar sin complicaciones. Trabajo bien hecho, limpio y a tiempo.
              </p>
            </div>
            <div className="md:w-2/5 flex items-end h-full">
              <p className="text-brand-slate/70 font-light text-lg leading-relaxed">
                En <strong>Multiservicios Rivera</strong> trabajamos con un enfoque claro: hacer el trabajo bien para que usted no tenga de qué preocuparse. No improvisamos, solucionamos.
              </p>
            </div>
          </div>
        </header>

        {/* Portada 1: Soldaduras y Estructuras Metálicas */}
        <div className="relative w-full h-[500px] mb-6 overflow-hidden bg-brand-dark group shadow-xl">
          <img 
            src="https://i.imgur.com/bdUBS1q.jpeg" 
            alt="Soldaduras y Estructuras Metálicas"
            className="w-full h-full object-cover opacity-90 group-hover:scale-105 transition-transform duration-[4000ms] ease-out"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-brand-dark/60 via-transparent to-transparent"></div>
          <div className="absolute bottom-12 left-0 w-full px-12 md:px-24">
            <h3 className="text-white text-3xl md:text-5xl font-black uppercase tracking-tighter leading-none mb-4 drop-shadow-2xl">
              Soldaduras y Estructuras Metálicas
            </h3>
            <div className="h-1 w-24 bg-brand-crimson"></div>
          </div>
        </div>

        {/* BARRA ANIMADA DE TELÉFONO (Ticker) - Ultra delgada y ultra rápida */}
        <div className="w-full bg-brand-dark overflow-hidden py-2 border-y border-brand-crimson/40 relative z-20 mb-6">
          <div className="flex whitespace-nowrap animate-marquee">
            {phoneTicker.map((num, i) => (
              <div key={i} className="flex items-center gap-4 mx-6">
                <Phone className="text-brand-crimson fill-brand-crimson" size={12} />
                <span className="text-white text-base md:text-xl font-black tracking-tighter uppercase leading-none">
                  {num}
                </span>
                <span className="text-brand-crimson/20 text-xl font-black">•</span>
              </div>
            ))}
            {/* Duplicado para loop infinito perfecto */}
            {phoneTicker.map((num, i) => (
              <div key={`dup-${i}`} className="flex items-center gap-4 mx-6">
                <Phone className="text-brand-crimson fill-brand-crimson" size={12} />
                <span className="text-white text-base md:text-xl font-black tracking-tighter uppercase leading-none">
                  {num}
                </span>
                <span className="text-brand-crimson/20 text-xl font-black">•</span>
              </div>
            ))}
          </div>
        </div>

        {/* Portada 2: Excelencia en Acabados */}
        <div className="relative w-full h-[500px] mb-12 overflow-hidden bg-brand-dark group shadow-xl">
          <img 
            src="https://i.imgur.com/JJJKRGZ.jpeg" 
            alt="Excelencia en Acabados"
            className="w-full h-full object-cover opacity-85 group-hover:scale-105 transition-transform duration-[4000ms] ease-out"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-brand-dark/60 via-transparent to-transparent"></div>
          <div className="absolute bottom-12 left-0 w-full px-12 md:px-24">
            <h3 className="text-white text-3xl md:text-5xl font-black uppercase tracking-tighter leading-none mb-4 drop-shadow-2xl text-right md:text-left">
              Excelencia en Acabados
            </h3>
            <div className="h-1 w-24 bg-brand-crimson ml-auto md:ml-0"></div>
          </div>
        </div>

        {/* Sección: El valor de elegir bien */}
        <div className="py-24 bg-white flex justify-center">
          <div className="max-w-4xl w-full">
            <div className="flex flex-col md:flex-row gap-16 items-start">
              <div className="md:w-1/2">
                <h2 className="text-4xl md:text-5xl font-heading font-black tracking-tighter text-brand-dark uppercase leading-[0.9] mb-8">
                  En este tipo de trabajos, <span className="text-brand-crimson italic">equivocarse</span> cuesta caro.
                </h2>
              </div>
              <div className="md:w-1/2 space-y-6">
                <p className="text-lg text-brand-slate leading-relaxed font-light">
                  En construcción, remodelación o instalaciones, el problema no suele verse el primer día. 
                  Aparece después: <strong className="text-brand-dark">fallas, retrabajos, gastos extra y tiempo perdido.</strong>
                </p>
                <p className="text-lg text-brand-slate leading-relaxed font-light">
                  Por eso elegir bien al inicio no es un lujo. <strong className="text-brand-dark">Es una decisión inteligente.</strong>
                </p>
                <p className="text-lg text-brand-slate leading-relaxed font-light border-l-2 border-brand-crimson pl-6">
                  En <strong>Multiservicios Rivera</strong> trabajamos con orden, experiencia y responsabilidad para que el trabajo se haga bien desde la primera vez.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Contenedor de Portadas Especializadas */}
        <div className="space-y-12 mb-12">
          {/* Portada 3: Instalación Eléctrica */}
          <div className="relative w-full h-[600px] overflow-hidden bg-brand-dark group shadow-2xl">
            <img 
              src="https://i.imgur.com/AnOTcHr.jpeg" 
              alt="Instalación Eléctrica Rivera"
              className="w-full h-full object-cover opacity-95 group-hover:scale-105 transition-transform duration-[5000ms] ease-out"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-brand-dark/50 via-transparent to-transparent"></div>
            <div className="absolute bottom-16 left-0 w-full px-12 md:px-24">
              <h3 className="text-white text-4xl md:text-6xl font-black uppercase tracking-tighter leading-none mb-4 drop-shadow-2xl">
                Instalación Eléctrica
              </h3>
              <div className="h-1 w-24 bg-brand-crimson"></div>
            </div>
            <div className="absolute top-8 right-8">
              <div className="h-12 w-12 border-t border-r border-white/30"></div>
            </div>
          </div>

          {/* Portada 4: Fontanería */}
          <div className="relative w-full h-[400px] overflow-hidden bg-brand-dark group shadow-xl">
            <img 
              src="https://i.imgur.com/FjPThS3.jpeg" 
              alt="Fontanería Rivera"
              className="w-full h-full object-cover opacity-95 group-hover:scale-105 transition-transform duration-[5000ms] ease-out"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-brand-dark/50 via-transparent to-transparent"></div>
            <div className="absolute bottom-12 left-0 w-full px-12 md:px-24">
              <h3 className="text-white text-3xl md:text-5xl font-black uppercase tracking-tighter leading-none mb-4 drop-shadow-2xl">
                Fontanería
              </h3>
              <div className="h-1 w-20 bg-brand-crimson"></div>
            </div>
            <div className="absolute top-8 right-8">
              <div className="h-12 w-12 border-t border-r border-white/30"></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;
