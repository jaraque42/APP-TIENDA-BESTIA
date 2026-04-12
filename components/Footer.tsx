import Link from "next/link";

export default function Footer() {
  return (
    <footer className="py-24 bg-background text-foreground border-t-8 border-foreground grainy-bg flex flex-col md:flex-row justify-between px-6 md:px-12 gap-12">
      <div className="md:w-3/5 text-foreground font-mono">
        <h2 className="text-8xl mb-8 anton-font uppercase">Bestia</h2>
        <p className="font-mono text-sm leading-relaxed max-w-sm opacity-80 uppercase">
          PROVEYENDO RESISTENCIA DE GRADO INDUSTRIAL PARA EL SECTOR CIVIL. 
          TODOS LOS ARTEFACTOS SON RASTREADOS POR LOTE Y REGISTRADOS EN EL ARCHIVO PERMANENTE.
        </p>
        <div className="mt-8 flex gap-4 grayscale opacity-50 hover:grayscale-0 hover:opacity-100 transition-all uppercase">
          <a href="https://www.instagram.com/juanaraqueai/" target="_blank" rel="noopener noreferrer" className="rigid-border p-2 font-mono text-xs cursor-pointer hover:bg-industrial-yellow">
            INSTAGRAM
          </a>
          <Link href="/manifesto" className="rigid-border p-2 font-mono text-xs cursor-pointer hover:bg-industrial-yellow">
            MANIFIESTO
          </Link>
          <Link href="/cookies" className="rigid-border p-2 font-mono text-xs cursor-pointer hover:bg-industrial-yellow">
            COOKIES
          </Link>
        </div>
      </div>
      
      <div className="md:w-2/5 flex flex-col justify-end text-sm font-mono gap-4 opacity-70 uppercase">
        <div className="flex justify-between border-b border-foreground pb-2">
          <span>UBICACIÓN</span>
          <span>MADRID, ES</span>
        </div>
        <div className="flex justify-between border-b border-foreground pb-2">
          <span>ESTABLECIDO</span>
          <span>2026.Q2</span>
        </div>
        <div className="flex justify-between border-b border-foreground pb-2 text-[10px]">
          <span>© 2026 ARCHIVO INDUSTRIAL BESTIA</span>
          <span>TODOS LOS DERECHOS RESERVADOS</span>
        </div>
      </div>
    </footer>
  );
}
