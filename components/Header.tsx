"use client";

import Link from "next/link";
import { useCartStore } from "@/store/useCartStore";
import { ShoppingCart, User, LogOut, Menu, X } from "lucide-react";
import { useSession, signOut } from "next-auth/react";
import { useState } from "react";

export default function Header() {
  const { data: session } = useSession();
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const items = useCartStore((state) => state.items);
  const cartCount = items.reduce((acc, item) => acc + item.quantity, 0);

  return (
    <header className="sticky top-0 z-50 bg-background/80 backdrop-blur-md rigid-border-b border-foreground h-20 flex items-center px-4 md:px-12 justify-between">
      <Link href="/" className="group flex-shrink-0">
        <h1 className="text-xl md:text-4xl font-anton uppercase tracking-tighter text-foreground group-hover:text-industrial-yellow transition-colors leading-none">
          <span className="md:hidden">BEAST - R.E.</span>
          <span className="hidden md:inline">BEAST - RESISTANCE ENGINEERING</span>
        </h1>
      </Link>

      <div className="flex items-center gap-2 md:gap-6">
        <nav className="hidden md:flex items-center gap-10 font-mono text-sm">
          <Link href="/concept" className="uppercase hover:text-industrial-yellow font-bold">
            Concepto
          </Link>
          <Link href="/catalog" className="uppercase hover:text-industrial-yellow font-bold">
            Catálogo
          </Link>
          <Link href="/manifesto" className="uppercase hover:text-industrial-yellow font-bold">
            Manifiesto
          </Link>

          <div className="h-6 w-px bg-foreground/20" />

          {session ? (
            <div className="flex items-center gap-4">
              <span className="uppercase text-xs opacity-70">
                CLIENTE: {session.user?.name}
              </span>
              <button
                onClick={() => signOut()}
                className="hover:text-industrial-yellow p-2"
                title="Cerrar Sesión"
              >
                <LogOut size={20} />
              </button>
            </div>
          ) : (
            <Link href="/login" className="flex items-center gap-2 hover:text-industrial-yellow uppercase font-bold">
              <User size={18} />
              <span>Acceso</span>
            </Link>
          )}
        </nav>

        <Link href="/cart" className="relative p-2 group">
          <ShoppingCart size={22} className="group-hover:text-industrial-yellow transition-colors" />
          {cartCount > 0 && (
            <span className="absolute -top-1 -right-1 bg-industrial-yellow text-foreground text-[10px] font-anton w-5 h-5 flex items-center justify-center rounded-full border border-foreground animate-bounce">
              {cartCount}
            </span>
          )}
        </Link>

        {/* Hamburger Toggle */}
        <button
          className="md:hidden p-2 hover:text-industrial-yellow transition-colors"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        >
          {isMenuOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      {/* Mobile Menu Dropdown */}
      {isMenuOpen && (
        <div className="absolute top-[80px] right-4 w-[220px] bg-background/95 border border-foreground/20 p-2 z-[60] md:hidden shadow-2xl backdrop-blur-md">
          <nav className="flex flex-col font-mono text-sm uppercase">
            <Link 
              href="/concept" 
              onClick={() => setIsMenuOpen(false)}
              className="hover:bg-foreground/5 py-3 px-4 transition-colors tracking-wider"
            >
              Concepto
            </Link>
            <Link 
              href="/catalog" 
              onClick={() => setIsMenuOpen(false)}
              className="hover:bg-foreground/5 py-3 px-4 transition-colors tracking-wider"
            >
              Catálogo
            </Link>
            <Link 
              href="/manifesto" 
              onClick={() => setIsMenuOpen(false)}
              className="hover:bg-foreground/5 py-3 px-4 transition-colors tracking-wider"
            >
              Manifiesto
            </Link>
            
            <div className="mt-2 flex flex-col font-mono text-[10px] uppercase border-t border-foreground/10 pt-2 pb-1 px-4 gap-2">
              {session ? (
                <>
                  <div className="flex flex-col py-1">
                    <span className="opacity-50">CLIENTE:</span>
                    <span className="font-bold opacity-90">{session.user?.name}</span>
                  </div>
                  <button
                    onClick={() => {
                      signOut();
                      setIsMenuOpen(false);
                    }}
                    className="flex items-center gap-2 text-industrial-yellow hover:opacity-80 py-2 transition-opacity"
                  >
                    <LogOut size={14} /> SALIR
                  </button>
                </>
              ) : (
                <Link 
                  href="/login" 
                  onClick={() => setIsMenuOpen(false)}
                  className="flex items-center gap-2 py-3 hover:text-industrial-yellow transition-colors tracking-wider"
                >
                  <User size={14} /> ACCEDER
                </Link>
              )}
            </div>
          </nav>
        </div>
      )}
    </header>
  );
}
