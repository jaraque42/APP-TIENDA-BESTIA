"use client";

import { useState, useEffect } from "react";
import { X, CreditCard, Lock, ShieldCheck, Loader2, CheckCircle2, AlertCircle, MapPin } from "lucide-react";
import { useCartStore } from "@/store/useCartStore";
import { getUserProfile } from "@/lib/actions/profile";
import { createOrder } from "@/lib/actions/checkout";
import { useSession } from "next-auth/react";
import Link from "next/link";

interface MockCheckoutProps {
  isOpen: boolean;
  onClose: () => void;
  total: number;
}

export default function MockCheckout({ isOpen, onClose, total }: MockCheckoutProps) {
  const [step, setStep] = useState<"address" | "form" | "processing" | "success" | "error">("address");
  const [loadingText, setLoadingText] = useState("INICIALIZANDO PROTOCOLO DE PAGO...");
  const [errorMsg, setErrorMsg] = useState("");
  const [orderCode, setOrderCode] = useState("");
  const [userProfile, setUserProfile] = useState<{address: string | null, fullName: string | null} | null>(null);
  const [isLoadingProfile, setIsLoadingProfile] = useState(true);
  
  const clearCart = useCartStore((state) => state.clearCart);
  const items = useCartStore((state) => state.items);
  const { data: session } = useSession();

  useEffect(() => {
    if (isOpen) {
      if (!session) {
        setStep("error");
        setErrorMsg("ACCESO DENEGADO: SESIÓN NO INICIADA. PROCEDA A AUTENTICARSE.");
        setIsLoadingProfile(false);
        return;
      }
      setIsLoadingProfile(true);
      getUserProfile()
        .then(profile => {
          if (!profile) {
            setStep("error");
            setErrorMsg("PERFIL NO ENCONTRADO.");
          } else if (!profile.address) {
            setStep("error");
            setErrorMsg("DIRECCIÓN NO ENCONTRADA. POR FAVOR, ACTUALICE SU PERFIL.");
          } else {
            setUserProfile(profile);
            setStep("address");
          }
        })
        .catch(() => {
          setStep("error");
          setErrorMsg("ERROR AL CARGAR PERFIL.");
        })
        .finally(() => setIsLoadingProfile(false));
    }
  }, [isOpen, session]);

  const processPayment = async () => {
    setStep("processing");
    
    // Simulate industrial processing steps mixed with real API call
    setLoadingText("CONECTANDO CON SERVIDOR CENTRAL DE SEGURIDAD...");
    
    try {
      // Small simulation delay
      await new Promise((resolve) => setTimeout(resolve, 1500));
      setLoadingText("VALIDANDO INTEGRIDAD DE LA TRANSACCIÓN...");
      
      const result = await createOrder(items, total);
      if (result.success) {
        setOrderCode(result.orderId);
      }

      await new Promise((resolve) => setTimeout(resolve, 1500));
      setLoadingText("GENERANDO MANIFIESTO DE ENTREGA...");
      await new Promise((resolve) => setTimeout(resolve, 1000));

      setStep("success");
      clearCart();
    } catch (err: any) {
      setStep("error");
      setErrorMsg(err.message || "ERROR DESCONOCIDO EN LA TRANSACCIÓN.");
    }
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 md:p-6 drop-shadow-2xl">
      {/* Backdrop */}
      <div 
        className="absolute inset-0 bg-background/80 backdrop-blur-xl animate-in fade-in duration-300"
        onClick={step === "form" ? onClose : undefined}
      />
      
      {/* Modal Container */}
      <div className="relative w-full max-w-xl bg-background rigid-border-4 border-foreground overflow-hidden animate-in zoom-in-95 duration-300 grainy-bg">
        
        {/* Progress Bar (at top) */}
        <div className="h-1 bg-foreground/10 w-full overflow-hidden">
          <div 
            className={`h-full bg-industrial-yellow transition-all duration-500 ${
              (step === "address" || step === "error") ? "w-1/4" : step === "form" ? "w-2/4" : step === "processing" ? "w-3/4" : "w-full"
            }`}
          />
        </div>

        {/* Header */}
        <div className="flex justify-between items-center p-6 border-b-2 border-foreground/10">
          <div className="flex items-center gap-3">
            <Lock size={18} className="text-industrial-yellow" />
            <h3 className="font-anton text-xl uppercase tracking-wider">Terminal de Pago Seguro</h3>
          </div>
          {["form", "address", "error"].includes(step) && (
            <button 
              onClick={onClose}
              className="p-2 hover:bg-foreground/5 transition-colors absolute top-4 right-4 z-10"
            >
              <X size={24} />
            </button>
          )}
        </div>

        <div className="p-8">
          {isLoadingProfile && step === "address" && (
            <div className="py-20 flex flex-col items-center justify-center animate-pulse">
              <Loader2 className="animate-spin mb-4 text-industrial-yellow" size={40} />
              <p className="font-mono text-sm uppercase">VERIFICANDO IDENTIDAD...</p>
            </div>
          )}

          {!isLoadingProfile && step === "error" && (
            <div className="py-12 flex flex-col items-center text-center animate-in slide-in-from-bottom-4 duration-500">
              <AlertCircle size={64} className="text-red-500 mb-6" />
              <h4 className="font-anton text-3xl uppercase mb-4 tracking-tighter text-red-500">TRANSACCIÓN DETENIDA</h4>
              <p className="font-mono text-sm mb-8 uppercase text-red-500 bg-red-500/10 p-4 border border-red-500/50">
                {errorMsg}
              </p>
              {!session ? (
                <Link 
                  href="/login"
                  className="w-full bg-foreground text-background py-5 font-anton text-xl uppercase hover:bg-industrial-yellow hover:text-foreground transition-all rigid-border"
                  onClick={onClose}
                >
                  AUTENTICARSE (LOGIN)
                </Link>
              ) : (
                <Link 
                  href="/profile"
                  className="w-full bg-foreground text-background py-5 font-anton text-xl uppercase hover:bg-industrial-yellow hover:text-foreground transition-all rigid-border"
                  onClick={onClose}
                >
                  ACTUALIZAR DATOS DE ENVÍO
                </Link>
              )}
            </div>
          )}

          {!isLoadingProfile && step === "address" && userProfile?.address && (
            <div className="animate-in slide-in-from-bottom-4 duration-500">
              <div className="mb-6 flex items-center gap-3 border-b border-foreground/10 pb-4">
                <MapPin className="text-industrial-yellow" size={24} />
                <h4 className="font-anton text-2xl uppercase">CONFIRMAR DIRECCIÓN</h4>
              </div>
              
              <div className="bg-foreground/5 p-6 rigid-border mb-6 border-foreground/20">
                <p className="font-mono text-xs uppercase opacity-50 mb-2">DESTINATARIO:</p>
                <p className="font-mono text-lg font-bold mb-4 uppercase">{userProfile.fullName || session?.user?.name}</p>
                
                <p className="font-mono text-xs uppercase opacity-50 mb-2">UBICACIÓN (MANIFIESTO DE ENTREGA):</p>
                <p className="font-mono text-md uppercase leading-relaxed">{userProfile.address}</p>
              </div>

              <div className="flex justify-between items-center mb-8">
                <Link 
                  href="/profile" 
                  onClick={onClose}
                  className="font-mono text-xs uppercase underline hover:text-industrial-yellow transition-colors"
                >
                  MODIFICAR DIRECCIÓN
                </Link>
              </div>

              <button 
                onClick={() => setStep("form")}
                className="w-full bg-foreground text-background py-6 font-anton text-2xl uppercase rigid-border border-foreground hover:bg-industrial-yellow hover:text-foreground transition-all flex items-center justify-center gap-3"
              >
                CONFIRMAR Y PROCEDER AL PAGO
              </button>
            </div>
          )}

          {!isLoadingProfile && step === "form" && (
            <div className="animate-in slide-in-from-bottom-4 duration-500">
              <div className="mb-8 flex justify-between items-end">
                <div>
                  <span className="font-mono text-[10px] uppercase opacity-40 block mb-1">TOTAL A DEBITAR</span>
                  <span className="font-anton text-4xl text-industrial-yellow">${total.toFixed(2)}</span>
                </div>
                <div className="text-right">
                  <span className="font-mono text-[10px] uppercase opacity-40 block mb-1">DIVISA</span>
                  <span className="font-mono text-sm font-bold">USD_CENTRAL</span>
                </div>
              </div>

              {/* Form Simulation */}
              <div className="space-y-6">
                <div className="space-y-2">
                  <label className="font-mono text-xs uppercase opacity-60">Número de Tarjeta (Protocolo Encrip.)</label>
                  <div className="relative">
                    <input 
                      type="text" 
                      placeholder="XXXX XXXX XXXX XXXX" 
                      className="w-full bg-foreground/5 p-4 font-mono text-lg rigid-border border-foreground/20 focus:border-industrial-yellow outline-none transition-colors uppercase placeholder:opacity-20"
                      disabled
                    />
                    <CreditCard className="absolute right-4 top-1/2 -translate-y-1/2 opacity-20" size={20} />
                  </div>
                </div>

                <div className="grid grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <label className="font-mono text-xs uppercase opacity-60">Vencimiento</label>
                    <input 
                      type="text" 
                      placeholder="MM/YY" 
                      className="w-full bg-foreground/5 p-4 font-mono text-lg rigid-border border-foreground/20 focus:border-industrial-yellow outline-none transition-colors uppercase placeholder:opacity-20"
                      disabled
                    />
                  </div>
                  <div className="space-y-2">
                    <label className="font-mono text-xs uppercase opacity-60">Código de Seg.</label>
                    <input 
                      type="text" 
                      placeholder="CVC" 
                      className="w-full bg-foreground/5 p-4 font-mono text-lg rigid-border border-foreground/20 focus:border-industrial-yellow outline-none transition-colors uppercase placeholder:opacity-20"
                      disabled
                    />
                  </div>
                </div>

                <button 
                  onClick={processPayment}
                  className="w-full bg-industrial-yellow text-foreground py-6 font-anton text-2xl uppercase rigid-border border-foreground hover:bg-foreground hover:text-industrial-yellow transition-all flex items-center justify-center gap-3 group"
                >
                  <ShieldCheck size={24} />
                  EJECUTAR PAGO
                </button>
                
                <p className="text-[10px] font-mono uppercase opacity-30 text-center leading-relaxed">
                  TRANSACCIÓN PROTEGIDA POR EL SISTEMA DE CIFRADO INDUSTRIAL BESTIA-V9.<br />
                  SU INFORMACIÓN NO SERÁ ALMACENADA EN SERVIDORES EXTERNOS.
                </p>
              </div>
            </div>
          )}

          {step === "processing" && (
            <div className="py-20 flex flex-col items-center text-center animate-in fade-in duration-500">
              <div className="relative mb-10">
                <div className="absolute inset-0 bg-industrial-yellow/20 rounded-full blur-2xl animate-pulse" />
                <Loader2 size={64} className="text-industrial-yellow animate-spin relative z-10" />
              </div>
              <p className="font-mono text-sm tracking-tighter uppercase max-w-xs leading-relaxed animate-pulse">
                {loadingText}
              </p>
            </div>
          )}

          {step === "success" && (
            <div className="py-12 flex flex-col items-center text-center animate-in zoom-in-95 duration-500">
              <div className="w-24 h-24 bg-industrial-yellow flex items-center justify-center mb-8 rigid-border-4 border-foreground shadow-[8px_8px_0px_rgba(0,0,0,1)]">
                <CheckCircle2 size={48} className="text-foreground" />
              </div>
              <h4 className="font-anton text-4xl uppercase mb-4 tracking-tighter">TRANSACCIÓN COMPLETADA</h4>
              <p className="font-mono text-sm opacity-60 mb-2 uppercase">ORDEN GENERADA CON ÉXITO</p>
              <div className="bg-foreground text-industrial-yellow p-4 px-8 font-mono text-xl font-bold mb-10 rigid-border">
                {orderCode || `BST-ORD-${Math.floor(100000 + Math.random() * 900000)}`}
              </div>
              <button 
                onClick={onClose}
                className="px-10 py-5 bg-foreground text-background font-anton text-xl uppercase hover:bg-industrial-yellow hover:text-foreground transition-all rigid-border"
              >
                FINALIZAR PROCESO
              </button>
            </div>
          )}
        </div>

        {/* Technical Footer */}
        <div className="bg-foreground/5 p-4 font-mono text-[8px] uppercase flex justify-between tracking-widest opacity-40">
          <span>SECURE_ID: {Math.random().toString(16).slice(2, 10)}</span>
          <span>ESTADO: CIFRADO_AES_256</span>
        </div>
      </div>
    </div>
  );
}
