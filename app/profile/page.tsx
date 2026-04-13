import { auth } from "@/lib/auth";
import { db } from "@/db";
import { users } from "@/db/schema";
import { eq } from "drizzle-orm";
import { redirect } from "next/navigation";
import Image from "next/image";
import { updateProfile } from "@/lib/actions/profile";

export default async function ProfilePage({
  searchParams,
}: {
  searchParams: { updated?: string };
}) {
  const session = await auth();

  if (!session?.user?.id) {
    redirect("/login");
  }

  const [user] = await db
    .select()
    .from(users)
    .where(eq(users.id, parseInt(session.user.id)))
    .limit(1);

  if (!user) {
    redirect("/login");
  }

  return (
    <main className="min-h-screen flex items-center justify-center p-6 relative overflow-hidden bg-foreground">
      {/* Background Image - Same as Hero */}
      <div className="absolute inset-0 z-0">
        <Image
          src="/hero_bg.png"
          alt="BESTIA Background"
          fill
          className="object-cover brightness-50"
          priority
        />
        <div className="absolute inset-0 bg-black/60 backdrop-blur-sm" />
      </div>

      <div className="absolute top-10 left-10 opacity-20 pointer-events-none select-none z-10 hidden md:block">
        <h1 className="text-9xl font-anton uppercase -rotate-90 origin-top-left -ml-20 text-white">
          BESTIA
        </h1>
      </div>

      <div className="relative z-20 w-full max-w-2xl">
        <div className="w-full mx-auto p-8 rigid-border bg-background shadow-2xl">
          <h2 className="text-4xl font-anton mb-6 uppercase tracking-tighter text-foreground">
            Perfil de Cliente
          </h2>

          <div className="mb-6 opacity-70 font-mono text-sm uppercase space-y-2">
            <p>ID: {user.id}</p>
            <p>Nombre: {user.name}</p>
            <p>Email: {user.email}</p>
          </div>

          <form action={updateProfile} className="space-y-6 border-t border-foreground/20 pt-6">
            <h3 className="text-xl font-anton uppercase tracking-tighter text-foreground mb-4">
              Datos para Envío
            </h3>
            
            {searchParams.updated === "true" && (
              <div className="bg-green-500/10 border border-green-500 text-green-500 p-3 font-mono text-xs uppercase mb-4">
                Datos actualizados correctamente.
              </div>
            )}

            <div>
              <label className="block text-xs font-mono uppercase opacity-70 mb-2">
                Nombre Completo
              </label>
              <input
                name="fullName"
                type="text"
                required
                defaultValue={user.fullName || ""}
                placeholder="Introduzca su nombre completo"
                className="w-full bg-foreground text-white px-4 py-3 font-mono focus:outline-none focus:ring-2 focus:ring-industrial-yellow rigid-border border-foreground"
              />
            </div>

            <div>
              <label className="block text-xs font-mono uppercase opacity-70 mb-2">
                Dirección de Envío Completa
              </label>
              <textarea
                name="address"
                required
                rows={3}
                defaultValue={user.address || ""}
                placeholder="Introduzca su dirección completa"
                className="w-full bg-foreground text-white px-4 py-3 font-mono focus:outline-none focus:ring-2 focus:ring-industrial-yellow rigid-border border-foreground resize-none"
              />
            </div>

            <button
              type="submit"
              className="w-full bg-industrial-yellow text-foreground font-anton text-xl py-4 uppercase hover:bg-white hover:text-foreground transition-all duration-300 rigid-border border-foreground"
            >
              Guardar Datos de Envío
            </button>
          </form>
        </div>
      </div>
    </main>
  );
}
