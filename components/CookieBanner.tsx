"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { Info, ShieldCheck, X } from "lucide-react";

export default function CookieBanner() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    // Check if the user has already accepted the protocol
    const consent = localStorage.getItem("bestia-cookie-consent");
    if (!consent) {
      // Delay visibility for technical effect
      const timer = setTimeout(() => setIsVisible(true), 1500);
      return () => clearTimeout(timer);
    }
  }, []);

  const acceptProtocol = () => {
    localStorage.setItem("bestia-cookie-consent", "true");
    setIsVisible(false);
  };

  if (!isVisible) return null;

  return (
    <div className="fixed bottom-6 left-6 right-6 z-[100] md:left-auto md:w-[450px] animate-in slide-in-from-bottom-10 duration-700 ease-out">
      <div className="bg-background/90 backdrop-blur-xl rigid-border-4 border-foreground p-6 shadow-[10px_10px_0px_rgba(255,234,0,1)] group">
        
        {/* Technical Header */}
        <div className="flex justify-between items-start mb-4">
          <div className="flex items-center gap-2">
            <div className="w-2 h-2 bg-industrial-yellow animate-pulse" />
            <span className="font-mono text-[10px] uppercase tracking-widest opacity-60">PROTOCOLO_RASTREO_PENDIENTE</span>
          </div>
          <button 
            onClick={() => setIsVisible(false)}
            className="opacity-20 hover:opacity-100 transition-opacity"
          >
            <X size={16} />
          </button>
        </div>

        <div className="flex gap-4 mb-6">
          <div className="flex-shrink-0 mt-1">
            <Info size={20} className="text-industrial-yellow" />
          </div>
          <div className="space-y-2">
            <h4 className="font-anton text-lg uppercase leading-none tracking-tight">POLÍTICA DE ARTEFACTOS</h4>
            <p className="font-mono text-[11px] leading-relaxed opacity-70 uppercase tracking-tight text-balance">
              UTILIZAMOS COOKIES PARA OPTIMIZAR LA CARGA DE DATOS Y LA INTEGRIDAD DE SUS MANIFIESTOS DE COMPRA. 
              CONTINUAR NAVEGANDO IMPLICA LA ACEPTACIÓN DE NUESTROS PROTOCOLOS.
            </p>
          </div>
        </div>

        <div className="flex flex-col sm:flex-row gap-3">
          <button 
            onClick={acceptProtocol}
            className="flex-grow bg-foreground text-background py-3 font-anton text-sm uppercase hover:bg-industrial-yellow hover:text-foreground transition-all rigid-border flex items-center justify-center gap-2"
          >
            <ShieldCheck size={16} />
            ACEPTAR PROTOCOLO
          </button>
          <Link 
            href="/cookies" 
            onClick={() => setIsVisible(false)}
            className="px-6 py-3 font-mono text-[10px] uppercase opacity-60 hover:opacity-100 hover:bg-foreground/5 transition-all rigid-border flex items-center justify-center"
          >
            DETALLES
          </Link>
        </div>

        {/* Decoder animation simulation */}
        <div className="mt-4 h-[2px] w-full bg-foreground/10 overflow-hidden">
            <div className="h-full bg-industrial-yellow w-1/4 animate-[shimmer_2s_infinite]" />
        </div>
      </div>
    </div>
  );
}
