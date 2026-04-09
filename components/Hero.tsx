import Image from "next/image";
import Link from "next/link";

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

      {/* ── CONTENIDO HERO ───────────────────────────────────────── */}
      <div className="relative z-20 flex h-full flex-col justify-center pt-32 pb-12 px-6 md:px-12 mt-4 md:mt-8">
        <div className="max-w-7xl">
          {/* Title removed per user request */}

          <div className="flex flex-col md:flex-row md:items-center gap-6 mb-12">
            <p className="text-sm md:text-xl text-white font-mono uppercase border-l-4 border-industrial-yellow pl-4 py-2 bg-black/40 backdrop-blur-sm max-w-xl">
              Archivo C-01 // Refuerzo Estructural // Precisión de Triple Puntada
            </p>
            <div className="hidden lg:block h-[2px] flex-grow bg-white/20" />
          </div>

          <div className="flex gap-4 flex-wrap">
            <Link 
              href="/catalog" 
              className="bg-industrial-yellow text-foreground px-8 md:px-12 py-4 md:py-6 text-lg md:text-2xl font-anton uppercase hover:bg-white transition-all transform hover:-translate-y-1 rigid-border active:translate-y-0 text-center"
            >
              Compra el Archivo
            </Link>
            <Link 
              href="/catalog" 
              className="border-2 border-white text-white px-8 md:px-12 py-4 md:py-6 text-lg md:text-2xl font-mono uppercase hover:bg-white hover:text-foreground transition-all transform hover:-translate-y-1 active:translate-y-0 text-center"
            >
              Ver Colección
            </Link>
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
