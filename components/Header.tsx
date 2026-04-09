"use client";

import Link from "next/link";
import { useCartStore } from "@/store/useCartStore";
import { ShoppingCart, User, LogOut } from "lucide-react";
import { useSession, signOut } from "next-auth/react";

export default function Header() {
  const { data: session } = useSession();
  const items = useCartStore((state) => state.items);
  const cartCount = items.reduce((acc, item) => acc + item.quantity, 0);

  return (
    <header className="sticky top-0 z-50 bg-background/80 backdrop-blur-md rigid-border-b border-foreground h-20 flex items-center px-6 md:px-12 justify-between">
      <Link href="/" className="group">
        <h1 className="text-4xl font-anton uppercase tracking-tighter text-foreground group-hover:text-industrial-yellow transition-colors leading-none">
          BEAST - RESISTANCE ENGINEERING
        </h1>
      </Link>

      <nav className="flex items-center gap-6 md:gap-10 font-mono text-sm">
        <Link href="/concept" className="hidden md:block uppercase hover:text-industrial-yellow font-bold">
          Concepto
        </Link>
        <Link href="/catalog" className="hidden md:block uppercase hover:text-industrial-yellow font-bold">
          Catálogo
        </Link>

        <div className="h-6 w-px bg-foreground/20 hidden md:block" />

        {session ? (
          <div className="flex items-center gap-4">
            <span className="hidden md:inline uppercase text-xs opacity-70">
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
            <span className="hidden md:inline">Acceso</span>
          </Link>
        )}

        <Link href="/cart" className="relative p-2 group">
          <ShoppingCart size={22} className="group-hover:text-industrial-yellow transition-colors" />
          {cartCount > 0 && (
            <span className="absolute -top-1 -right-1 bg-industrial-yellow text-foreground text-[10px] font-anton w-5 h-5 flex items-center justify-center rounded-full border border-foreground animate-bounce">
              {cartCount}
            </span>
          )}
        </Link>
      </nav>
    </header>
  );
}
