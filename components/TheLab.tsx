export default function TheLab() {
  return (
    <section className="py-24 bg-foreground text-white rigid-border-b grainy-bg overflow-hidden relative">
      <div className="absolute top-0 left-0 w-full h-full opacity-10 pointer-events-none z-0">
        {/* Abstract Technical Grid Diagram Overlay */}
        <svg viewBox="0 0 100 100" className="w-full h-full">
          <defs>
            <pattern id="grid" width="10" height="10" patternUnits="userSpaceOnUse">
              <path d="M 10 0 L 0 0 0 10" fill="none" stroke="currentColor" strokeWidth="0.1"/>
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#grid)" />
        </svg>
      </div>

      <div className="px-6 md:px-12 relative z-10 flex flex-col md:flex-row gap-12">
        <div className="md:w-1/2">
          <h2 className="text-6xl md:text-8xl text-industrial-yellow mb-8 anton-font uppercase">El Laboratorio</h2>
          <p className="text-2xl font-mono mb-12 uppercase">PRUEBAS DESTRUCTIVAS Y FILOSOFÍA DE REFUERZO</p>
          
          <div className="space-y-12">
            <div className="p-8 rigid-border border-industrial-yellow">
              <h4 className="text-3xl text-industrial-yellow mb-4 uppercase">01: Puntada de Seguridad Triple</h4>
              <p className="font-mono text-sm opacity-80 leading-relaxed uppercase">
                CADA COSTURA DE CARGA SE ASEGURA CON TRES FILAS PARALELAS DE HILO DE NÚCLEO DE ACERO DE ALTA TENSIÓN. 
                DENSIDAD DE PUNTADA: 12 SPI (PUNTADAS POR PULGADA). REFUERZOS EN TODOS LOS PUNTOS DE TENSIÓN.
              </p>
            </div>
            
            <div className="p-8 rigid-border border-industrial-yellow bg-industrial-yellow text-foreground">
              <h4 className="text-3xl mb-4 text-foreground uppercase">02: Remaches Estructurales de Latón</h4>
              <p className="font-mono text-sm leading-relaxed uppercase">
                LOS PUNTOS DE PRESIÓN SE ASEGURAN CON REMACHES INDUSTRIALES DE LATÓN SÓLIDO, EVITANDO EL FALLO DE LA COSTURA BAJO TENSIÓN MECÁNICA EXTREMA. 
                RESISTENTE A LA CORROSIÓN. ENDURECIDO POR IMPACTO.
              </p>
            </div>
            
            <div className="p-8 rigid-border border-industrial-yellow">
              <h4 className="text-3xl text-industrial-yellow mb-4 uppercase">03: Arquitectura de Núcleo de Aramida</h4>
              <p className="font-mono text-sm opacity-80 leading-relaxed uppercase">
                PANELES SELECCIONADOS CUENTAN CON UNA RED INTERNA DE ARAMIDA PARA EVITAR LA PROPAGACIÓN DE DESGARROS MANTENIENDO LA TRANSPIRABILIDAD. 
                DISEÑADO PARA SOBREVIVIR AL USUARIO.
              </p>
            </div>
          </div>
        </div>
        
        <div className="md:w-1/2 flex flex-col justify-between">
          <div className="relative aspect-square w-full rigid-border border-industrial-yellow overflow-hidden group">
            {/* Technical Diagram Mockup */}
            <div className="absolute inset-0 flex items-center justify-center p-12">
               <svg viewBox="0 0 200 200" className="w-full h-full text-industrial-yellow">
                 <rect x="50" y="50" width="100" height="100" fill="none" stroke="currentColor" strokeWidth="2" strokeDasharray="5,5" />
                 <circle cx="100" cy="100" r="40" fill="none" stroke="currentColor" strokeWidth="1" />
                 <line x1="0" y1="100" x2="200" y2="100" stroke="currentColor" strokeWidth="0.5" />
                 <line x1="100" y1="0" x2="100" y2="200" stroke="currentColor" strokeWidth="0.5" />
                 <text x="110" y="45" fill="currentColor" className="text-[8px] font-mono">PRUEBA DE TENSIÓN 04-B</text>
                 <text x="55" y="145" fill="currentColor" className="text-[8px] font-mono">CARGA DE TRACCIÓN: MÁX</text>
                 <path d="M 10 10 L 40 40 M 190 190 L 160 160" stroke="currentColor" strokeWidth="2" />
               </svg>
            </div>
            <div className="absolute bottom-0 w-full bg-industrial-yellow text-foreground p-4 text-center font-anton uppercase">
              ÍNDICE DE DURABILIDAD MECÁNICA: 99.8/100
            </div>
          </div>
          
          <div className="mt-12 bg-white/5 p-8 rigid-border border-white/20 font-mono text-xs space-y-2 uppercase">
            <p>ENTRADA: ARCHIVO_V_B-79</p>
            <p>CARGA: 50KN TENSIÓN</p>
            <p>ELONGACIÓN: 0.1%</p>
            <p>RESULTADO: INTEGRIDAD DE COSTURA MANTENIDA</p>
            <div className="h-4 w-full bg-white/20 mt-4 relative">
              <div className="absolute top-0 left-0 h-full bg-industrial-yellow w-[99%]" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
