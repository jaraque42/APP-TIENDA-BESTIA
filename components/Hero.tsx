import Image from "next/image";

export default function Hero() {
  return (
    <section className="relative h-screen w-full overflow-hidden rigid-border-b bg-foreground">
      {/* Fondo */}
      <div className="absolute inset-0 z-0">
        <Image
          src="/hero_bg.png"
          alt="BESTIA Logo Background"
          fill
          className="object-cover brightness-50"
          priority
          sizes="100vw"
        />
        <div className="absolute inset-0 bg-black/40" />
      </div>

      {/* ── BARRA DE NAVEGACIÓN (CABECERA) ────────────────────────── */}
      <nav className="absolute top-0 left-0 w-full z-40 flex items-center justify-between px-6 md:px-12 py-4 border-b-2 border-white/10 bg-black/60 backdrop-blur-xl">
        {/* Logo vectorial original + nombre de marca */}
        <div className="flex items-center gap-4">
          <div className="h-12 w-12 md:h-16 md:w-16 flex-shrink-0">
            {/* logovec.svg es negro sobre transparente — invertimos para mostrarlo en amarillo */}
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src="/logovec.svg"
              alt="Logo BESTIA"
              className="w-full h-full object-contain"
              style={{ filter: "invert(1) sepia(1) saturate(5) hue-rotate(2deg)" }}
            />
          </div>
          <div className="flex flex-col leading-none">
            <span className="font-anton text-xl md:text-3xl text-white uppercase tracking-widest">
              Bestia
            </span>
            <span className="font-mono text-[8px] md:text-[9px] text-industrial-yellow uppercase tracking-widest opacity-80">
              Industrial · Indestructible
            </span>
          </div>
        </div>

        {/* Estado del sistema */}
        <div className="hidden md:flex flex-col items-end font-mono text-[10px] md:text-xs text-white opacity-60 uppercase">
          <span>Sistema_Archivos_V2.0</span>
          <span className="text-industrial-yellow">● Estatus: Operativo</span>
        </div>
      </nav>

      {/* ── CONTENIDO HERO ───────────────────────────────────────── */}
      {/* 
          Usamos pt-[140px] para asegurar que el contenido NUNCA sea tapado por la cabecera (aprox 80-100px).
          justify-end empuja todo hacia abajo, pero el padding-top actúa como tope superior.
      */}
      <div className="relative z-20 flex h-full flex-col justify-center pt-24 pb-12 px-6 md:px-12 mt-12 md:mt-16">
        <div className="max-w-7xl">
          <h1 className="text-5xl md:text-8xl lg:text-9xl text-white mb-8 leading-[0.85] md:leading-[0.9] uppercase font-anton">
            BESTIA:<br />
            <span className="text-industrial-yellow block">INGENIERÍA</span>
            <span className="text-white block">DE RESISTENCIA</span>
          </h1>

          <div className="flex flex-col md:flex-row md:items-center gap-6 mb-12">
            <p className="text-sm md:text-xl text-white font-mono uppercase border-l-4 border-industrial-yellow pl-4 py-2 bg-black/40 backdrop-blur-sm max-w-xl">
              Archivo C-01 // Refuerzo Estructural // Precisión de Triple Puntada
            </p>
            <div className="hidden lg:block h-[2px] flex-grow bg-white/20" />
          </div>

          <div className="flex gap-4 flex-wrap">
            <button className="bg-industrial-yellow text-foreground px-8 md:px-12 py-4 md:py-6 text-lg md:text-2xl font-anton uppercase hover:bg-white transition-all transform hover:-translate-y-1 rigid-border active:translate-y-0">
              Compra el Archivo
            </button>
            <button className="border-2 border-white text-white px-8 md:px-12 py-4 md:py-6 text-lg md:text-2xl font-mono uppercase hover:bg-white hover:text-foreground transition-all transform hover:-translate-y-1 active:translate-y-0">
              Ver Colección
            </button>
          </div>
        </div>
      </div>

      {/* Coordenadas y Metadatos - esquina inferior derecha */}
      <div className="absolute bottom-6 right-6 md:right-12 z-30 text-white font-mono text-[10px] md:text-xs opacity-50 uppercase text-right leading-relaxed">
        <div className="flex flex-col">
          <span>Lat: 40.4168° N</span>
          <span>Lon: 3.7038° W</span>
          <span className="text-industrial-yellow">Lote_Ref: 2026.04.05</span>
        </div>
      </div>

      {/* Decoración Brutalista - Líneas de cuadrícula sutiles */}
      <div className="absolute inset-0 z-10 pointer-events-none opacity-10">
        <div className="h-full w-full border-x border-white/20 ml-[10%] mr-[10%]" />
        <div className="absolute top-1/2 left-0 w-full h-[1px] bg-white/20" />
      </div>
    </section>
  );
}
