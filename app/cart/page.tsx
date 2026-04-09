"use client";

import Link from "next/link";
import { useCartStore } from "@/store/useCartStore";
import CartItem from "@/components/cart/CartItem";
import { useSession } from "next-auth/react";
import { ArrowLeft, Trash2, ShoppingBag, Zap } from "lucide-react";
import Footer from "@/components/Footer";

export default function CartPage() {
  const { data: session } = useSession();
  const { items, clearCart } = useCartStore();

  const subtotal = items.reduce((acc, item) => acc + item.price * item.quantity, 0);
  const shipping = subtotal > 0 ? 15.0 : 0; // Fixed industrial shipping
  const total = subtotal + shipping;

  if (items.length === 0) {
    return (
      <main className="min-h-screen pt-32 pb-20 px-6 md:px-12 flex flex-col items-center justify-center text-center">
        <div className="w-24 h-24 bg-foreground/5 rigid-border flex items-center justify-center mb-8 animate-pulse">
            <ShoppingBag size={48} className="opacity-20" />
        </div>
        <h2 className="text-5xl font-anton uppercase mb-4 tracking-tighter">ALMACÉN VACÍO</h2>
        <p className="font-mono text-sm opacity-60 mb-10 max-w-md">
          NO SE HAN DETECTADO UNIDADES EN EL MANIFIESTO DE CARGA. 
          INICIA UNA NUEVA ORDEN PARA CONTINUAR.
        </p>
        <Link 
          href="/" 
          className="px-10 py-5 bg-foreground text-background font-anton text-xl uppercase hover:bg-industrial-yellow hover:text-foreground transition-all rigid-border group flex items-center gap-3"
        >
          <Zap size={20} className="group-hover:fill-current" />
          VOLVER AL CATÁLOGO
        </Link>
      </main>
    );
  }

  return (
    <>
      <main className="min-h-screen pt-32 pb-20 px-6 md:px-12 max-w-7xl mx-auto">
        {/* Header Section */}
        <div className="flex flex-col md:flex-row justify-between items-start md:items-end mb-12 gap-6">
          <div>
            <div className="flex items-center gap-3 mb-4 group cursor-pointer">
              <Link href="/" className="flex items-center gap-2 font-mono text-xs uppercase opacity-50 group-hover:opacity-100 transition-opacity">
                <ArrowLeft size={14} />
                REGRESAR
              </Link>
            </div>
            <h1 className="text-6xl md:text-8xl font-anton uppercase leading-none tracking-tighter">
              {session ? `CARRITO DE ${session.user?.name?.split(' ')[0]}` : "TU CARRITO"}
            </h1>
            <p className="font-mono text-sm mt-4 text-industrial-yellow font-bold uppercase tracking-widest">
              ESTADO: PROCESANDO UNIDADES ({items.length})
            </p>
          </div>

          <button 
            onClick={() => {
              if(confirm("¿CONFIRMAR VACIADO TOTAL DEL MANIFIESTO?")) clearCart();
            }}
            className="flex items-center gap-2 font-mono text-xs uppercase px-4 py-2 rigid-border hover:bg-red-600 hover:text-white transition-all"
          >
            <Trash2 size={14} />
            VACIAR CARRITO
          </button>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
          {/* Items List */}
          <div className="lg:col-span-2 space-y-6">
            <div className="font-mono text-[10px] uppercase opacity-40 border-b border-foreground/20 pb-2 mb-4 hidden md:grid grid-cols-6">
              <span className="col-span-3">DETALLE DEL ARTÍCULO</span>
              <span className="col-span-2 text-right">CANTIDAD</span>
              <span className="text-right">SUBTOTAL</span>
            </div>
            {items.map((item) => (
              <CartItem key={`${item.id}-${item.size}-${item.color}`} item={item} />
            ))}
          </div>

          {/* Summary Section */}
          <div className="lg:col-span-1">
            <div className="rigid-border p-8 bg-foreground text-background sticky top-32">
              <h2 className="text-3xl font-anton uppercase mb-8 border-b border-background/20 pb-4">RESUMEN DE CARGA</h2>
              
              <div className="space-y-4 font-mono text-sm mb-10">
                <div className="flex justify-between uppercase opacity-70">
                  <span>SUBTOTAL</span>
                  <span>${subtotal.toFixed(2)}</span>
                </div>
                <div className="flex justify-between uppercase opacity-70">
                  <span>LOGÍSTICA PESADA (ENVÍO)</span>
                  <span>${shipping.toFixed(2)}</span>
                </div>
                <div className="pt-4 border-t border-background/20 flex justify-between items-end">
                  <span className="text-xs uppercase opacity-50">TOTAL FINAL (IMP. INCL.)</span>
                  <span className="text-4xl font-anton text-industrial-yellow">${total.toFixed(2)}</span>
                </div>
              </div>

              <div className="space-y-4">
                <button className="w-full bg-industrial-yellow text-foreground py-6 font-anton text-2xl uppercase rigid-border border-foreground hover:bg-white transition-colors relative overflow-hidden group">
                  <span className="relative z-10">CONFIRMAR PEDIDO</span>
                  <div className="absolute inset-0 bg-white translate-y-full group-hover:translate-y-0 transition-transform duration-300" />
                </button>
                <div className="p-4 border border-background/20 bg-background/5">
                    <p className="font-mono text-[10px] uppercase opacity-40 leading-relaxed text-center">
                        AL CONTINUAR, ACEPTAS NUESTROS PROTOCOLOS DE SEGURIDAD Y TÉRMINOS DE ENTREGA INDUSTRIAL.
                    </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}
