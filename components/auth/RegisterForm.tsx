"use client";

import { register } from "@/lib/actions/auth";
import Link from "next/link";

export default function RegisterForm() {
  return (
    <div className="w-full max-w-md mx-auto p-8 rigid-border bg-background shadow-2xl">
      <h2 className="text-4xl font-anton mb-8 uppercase tracking-tighter text-foreground">
        Registro de Cliente
      </h2>
      
      <form action={register} className="space-y-6">
        <div>
          <label className="block text-xs font-mono uppercase opacity-70 mb-2">
            Nombre de Usuario
          </label>
          <input
            name="name"
            type="text"
            required
            className="w-full bg-foreground text-white px-4 py-3 font-mono focus:outline-none focus:ring-2 focus:ring-industrial-yellow rigid-border border-foreground"
          />
        </div>

        <div>
          <label className="block text-xs font-mono uppercase opacity-70 mb-2">
            Correo Electrónico
          </label>
          <input
            name="email"
            type="email"
            required
            placeholder="cliente@bestia.com"
            className="w-full bg-foreground text-white px-4 py-3 font-mono focus:outline-none focus:ring-2 focus:ring-industrial-yellow rigid-border border-foreground"
          />
        </div>

        <div>
          <label className="block text-xs font-mono uppercase opacity-70 mb-2">
            Contraseña Segura
          </label>
          <input
            name="password"
            type="password"
            required
            className="w-full bg-foreground text-white px-4 py-3 font-mono focus:outline-none focus:ring-2 focus:ring-industrial-yellow rigid-border border-foreground"
          />
        </div>

        <button
          type="submit"
          className="w-full bg-industrial-yellow text-foreground font-anton text-xl py-4 uppercase hover:bg-white hover:text-foreground transition-all duration-300 rigid-border border-foreground"
        >
          Crear Cuenta
        </button>
      </form>

      <p className="mt-8 text-center font-mono text-xs opacity-70 uppercase">
        ¿Ya tienes cuenta?{" "}
        <Link href="/login" className="text-foreground font-bold hover:underline">
          Inicia Sesión
        </Link>
      </p>
    </div>
  );
}
