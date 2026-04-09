import React from 'react';

export default function Manifesto() {
  return (
    <section id="manifesto" className="py-24 bg-industrial-yellow text-foreground rigid-border-y grainy-bg overflow-hidden relative">
      <div className="absolute top-0 left-0 w-full h-full opacity-5 pointer-events-none z-0">
        <svg viewBox="0 0 100 100" className="w-full h-full">
          <pattern id="manifesto-grid" width="5" height="5" patternUnits="userSpaceOnUse">
            <circle cx="1" cy="1" r="0.5" fill="currentColor" />
          </pattern>
          <rect width="100%" height="100%" fill="url(#manifesto-grid)" />
        </svg>
      </div>

      <div className="px-6 md:px-12 relative z-10 max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-end mb-16">
          <div className="lg:col-span-8">
            <h2 className="text-6xl md:text-[12rem] anton-font uppercase leading-[0.75] tracking-tighter mb-4">
              MANI<br />FIESTO
            </h2>
            <div className="h-2 md:h-4 w-20 md:w-32 bg-foreground mb-8" />
          </div>
          <div className="lg:col-span-4 font-mono text-xs uppercase opacity-70 border-l-2 border-foreground pl-6 pb-2">
            <p>ARCHIVO: GEN_B-MANIFEST_V1</p>
            <p>ASUNTO: FILOSOFÍA DE RESISTENCIA</p>
            <p>ESTATUS: FUNDAMENTO CRÍTICO</p>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
          <div className="lg:col-span-7">
            <p className="text-2xl md:text-5xl font-anton uppercase leading-tight italic mb-8 md:mb-12">
              "BESTIA ES EL RECHAZO A LO EFÍMERO. NO FABRICAMOS MODA, CONSTRUIMOS ARTEFACTOS ESTRUCTURALES DISEÑADOS PARA SOBREVIVIR AL TIEMPO Y AL ABUSO MECÁNICO."
            </p>
            
            <div className="space-y-6 md:space-y-8 font-mono text-base md:text-xl uppercase leading-relaxed">
              <p>
                EN UN MUNDO DE OBSOLESCENCIA PROGRAMADA, ELEGIMOS LA <span className="underline decoration-4">INTEGRIDAD MECÁNICA</span>. 
                CADA PUNTADA ES UNA PROMESA DE DURABILIDAD.
              </p>
              <p>
                NO SE TRATA DE ESTÉTICA, SE TRATA DE <span className="bg-foreground text-industrial-yellow px-2">RENDIMIENTO</span> EN ENTORNOS CRÍTICOS. 
                TRIPLE COSTURA, LONA DE 410GSM, HERRAJES DE LATÓN ENDURECIDO.
              </p>
              <p>
                SI NO ESTÁ DISEÑADO PARA SOBREVIVIR AL USUARIO, NO TIENE DERECHO A EXISTIR BAJO EL SELLO <span className="font-anton italic">BESTIA</span>.
              </p>
            </div>
          </div>

          <div className="lg:col-span-5 flex flex-col justify-end">
            <div className="p-8 rigid-border border-4 border-foreground bg-foreground/5 backdrop-blur-sm">
              <div className="flex justify-between items-start mb-12">
                <span className="font-anton text-6xl italic">00</span>
                <div className="text-right font-mono text-[10px] uppercase opacity-60">
                  <p>COORDENADAS DE ORIGEN</p>
                  <p>40.4168° N / 3.7038° W</p>
                </div>
              </div>
              <h4 className="font-anton text-2xl uppercase mb-4 tracking-widest text-foreground">SIN CONCESIONES</h4>
              <p className="font-mono text-xs uppercase opacity-70 leading-loose">
                LA BELLEZA ES UN SUBPRODUCTO DE LA FUNCIÓN. EL DESGASTE ES EL ÚNICO ADORNO QUE RECONOCEMOS. 
                CADA CICATRIZ EN EL TEJIDO ES UN REGISTRO DE VICTORIA SOBRE LA MATERIA.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
