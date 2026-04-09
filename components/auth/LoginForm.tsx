"use client";

import { login } from "@/lib/actions/login";
import Link from "next/link";
import { useFormStatus } from "react-dom";
import { useActionState } from "react";

export default function LoginForm() {
  const [error, action] = useActionState(login, null);

  return (
    <div className="w-full max-w-md mx-auto p-8 rigid-border bg-background shadow-2xl border-industrial-yellow">
      <h2 className="text-4xl font-anton mb-8 uppercase tracking-tighter text-foreground">
        Acceso de Cliente
      </h2>
      
      <form action={action} className="space-y-6">
        {error && (
          <div className="bg-red-500/10 border border-red-500 text-red-500 p-3 font-mono text-xs uppercase">
            {error}
          </div>
        )}
        <div>
          <label className="block text-xs font-mono uppercase opacity-70 mb-2">
            Identificador (Correo)
          </label>
          <input
            name="email"
            type="email"
            required
            className="w-full bg-foreground text-white px-4 py-3 font-mono focus:outline-none focus:ring-2 focus:ring-industrial-yellow rigid-border border-foreground"
          />
        </div>

        <div>
          <label className="block text-xs font-mono uppercase opacity-70 mb-2">
            Clave de Acceso
          </label>
          <input
            name="password"
            type="password"
            required
            className="w-full bg-foreground text-white px-4 py-3 font-mono focus:outline-none focus:ring-2 focus:ring-industrial-yellow rigid-border border-foreground"
          />
        </div>

        <LoginButton />
      </form>

      <p className="mt-8 text-center font-mono text-xs opacity-70 uppercase">
        ¿Eres nuevo?{" "}
        <Link href="/register" className="text-foreground font-bold hover:underline">
          Crear Cuenta
        </Link>
      </p>
    </div>
  );
}

function LoginButton() {
  const { pending } = useFormStatus();

  return (
    <button
      type="submit"
      disabled={pending}
      className={`w-full bg-industrial-yellow text-foreground font-anton text-xl py-4 uppercase hover:bg-white hover:text-foreground transition-all duration-300 rigid-border border-foreground ${
        pending ? "opacity-50 cursor-not-allowed" : ""
      }`}
    >
      {pending ? "Autenticando..." : "Ingresar"}
    </button>
  );
}
