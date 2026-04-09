export default function Footer() {
  return (
    <footer className="py-24 bg-background text-foreground border-t-8 border-foreground grainy-bg flex flex-col md:flex-row justify-between px-6 md:px-12 gap-12">
      <div className="md:w-1/3 text-foreground font-mono">
        <h2 className="text-8xl mb-8 anton-font uppercase">Bestia</h2>
        <p className="font-mono text-sm leading-relaxed max-w-sm opacity-80 uppercase">
          PROVEYENDO RESISTENCIA DE GRADO INDUSTRIAL PARA EL SECTOR CIVIL. 
          TODOS LOS ARTEFACTOS SON RASTREADOS POR LOTE Y REGISTRADOS EN EL ARCHIVO PERMANENTE.
        </p>
        <div className="mt-8 flex gap-4 grayscale opacity-50 hover:grayscale-0 hover:opacity-100 transition-all uppercase">
          <span className="rigid-border p-2 font-mono text-xs cursor-pointer hover:bg-industrial-yellow">INSTAGRAM</span>
          <span className="rigid-border p-2 font-mono text-xs cursor-pointer hover:bg-industrial-yellow">TWITTER (X)</span>
          <span className="rigid-border p-2 font-mono text-xs cursor-pointer hover:bg-industrial-yellow">MANIFIESTO</span>
        </div>
      </div>
      
      <div className="md:w-1/3 flex flex-col justify-center">
        <div className="p-8 rigid-border border-4 bg-foreground text-white group">
          <h4 className="font-anton text-2xl mb-4 text-industrial-yellow uppercase italic">Seguimiento de Pedido</h4>
          <p className="font-mono text-xs mb-6 opacity-80 uppercase">INGRESE EL ID DE PEDIDO STITCH PARA LOCALIZAR EL ARTEFACTO</p>
          <div className="flex">
            <input 
              type="text" 
              placeholder="BESTIA-XXXX-XXXX" 
              className="flex-grow bg-background text-foreground p-3 font-mono text-sm rigid-border-r border-background outline-none placeholder:opacity-30 uppercase"
            />
            <button className="bg-industrial-yellow text-foreground px-6 py-3 font-anton uppercase hover:bg-white transition-colors">
              EJECUTAR
            </button>
          </div>
        </div>
      </div>
      
      <div className="md:w-1/4 flex flex-col justify-end text-sm font-mono gap-4 opacity-70 uppercase">
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
