"use client";

import { useState, useEffect } from "react";
import { AlertTriangle, ShieldAlert, Cpu } from "lucide-react";

export default function TestWarning() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    // Check if the user has already acknowledged the warning in this session
    const acknowledged = sessionStorage.getItem("bestia-test-acknowledged");
    if (!acknowledged) {
      setIsVisible(true);
    }
  }, []);

  const acknowledge = () => {
    sessionStorage.setItem("bestia-test-acknowledged", "true");
    setIsVisible(false);
  };

  if (!isVisible) return null;

  return (
    <div className="fixed inset-0 z-[200] flex items-center justify-center p-4 md:p-6 overflow-hidden">
      {/* Backdrop with heavy blur */}
      <div className="absolute inset-0 bg-background/60 backdrop-blur-2xl animate-in fade-in duration-500" />
      
      {/* Warning Content */}
      <div className="relative w-full max-w-2xl bg-background rigid-border-8 border-foreground overflow-hidden animate-in zoom-in-95 duration-300 shadow-[20px_20px_0px_rgba(0,0,0,1)]">
        
        {/* Warning Stripes Header */}
        <div className="h-8 w-full flex overflow-hidden">
            {[...Array(20)].map((_, i) => (
                <div 
                    key={i} 
                    className={`h-full w-12 -skew-x-[45deg] ${i % 2 === 0 ? "bg-industrial-yellow" : "bg-foreground"}`}
                />
            ))}
        </div>

        <div className="p-8 md:p-12">
          <div className="flex items-center gap-6 mb-8">
            <div className="bg-industrial-yellow p-4 rigid-border-4 border-foreground shadow-[4px_4px_0px_rgba(0,0,0,1)]">
                <AlertTriangle size={48} className="text-foreground animate-pulse" />
            </div>
            <div>
                <h2 className="font-anton text-4xl md:text-5xl uppercase leading-none tracking-tighter">
                    AVISO DE <span className="text-industrial-yellow">SISTEMA</span>
                </h2>
                <div className="flex items-center gap-2 mt-2 opacity-40 font-mono text-[10px] uppercase tracking-widest">
                    <Cpu size={12} />
                    <span>ENTORNO DE SIMULACIÓN ACTIVO</span>
                </div>
            </div>
          </div>

          <div className="space-y-6 mb-12">
            <div className="p-6 bg-foreground/5 rigid-border border-foreground/20">
                <p className="font-anton text-2xl uppercase italic text-industrial-yellow mb-2 tracking-tight">
                    ESTE SITIO ES UNA PRUEBA
                </p>
                <p className="font-mono text-sm leading-relaxed opacity-80 uppercase">
                    USTED HA ACCEDIDO A LA INTERFAZ DE DESARROLLO DE <span className="font-bold border-b border-foreground">BESTIA</span>. 
                    TODOS LOS PRODUCTOS, PRECIOS, CLIENTES Y TRANSACCIONES SON **TOTALMENTE FICTICIOS**.
                </p>
            </div>

            <p className="font-mono text-[11px] leading-relaxed opacity-60 uppercase text-center border-t border-foreground/10 pt-6">
                AL CONTINUAR, USTED RECONOCE QUE ESTÁ EN UN ENTORNO DE PRUEBAS PARA FINES DE DEMOSTRACIÓN TÉCNICA Y QUE NO SE REALIZARÁN CARGOS REALES NI ENVÍOS DE MERCANCÍA.
            </p>
          </div>

          <button 
            onClick={acknowledge}
            className="w-full bg-foreground text-background py-6 font-anton text-2xl uppercase hover:bg-industrial-yellow hover:text-foreground transition-all rigid-border border-foreground flex items-center justify-center gap-4 group"
          >
            <ShieldAlert size={28} className="group-hover:animate-bounce" />
            ENTIENDO EL PROTOCOLO
          </button>
        </div>

        {/* Technical Info Base */}
        <div className="bg-foreground/5 p-4 font-mono text-[8px] uppercase flex justify-between tracking-widest opacity-30">
          <span>DEBUG_MODE: ENABLED</span>
          <span>BUILD_ID: BESTIA-DEV-2026-BETA</span>
        </div>
      </div>
    </div>
  );
}
