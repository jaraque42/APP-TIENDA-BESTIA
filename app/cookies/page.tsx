import Footer from "@/components/Footer";
import { Shield, Eye, Database, Lock } from "lucide-react";

export default function CookiesPage() {
  return (
    <>
      <main className="min-h-screen pt-32 pb-20 px-6 md:px-12 max-w-4xl mx-auto">
        <div className="mb-16">
          <div className="flex items-center gap-3 mb-6 opacity-30">
            <Shield size={18} />
            <span className="font-mono text-xs uppercase tracking-[0.3em]">Protocolo de Privacidad v2.6</span>
          </div>
          <h1 className="text-7xl md:text-9xl font-anton uppercase leading-none tracking-tighter mb-8">
            POLÍTICA DE <span className="text-industrial-yellow">COOKIES</span>
          </h1>
          <p className="font-mono text-sm uppercase opacity-60 leading-relaxed max-w-2xl">
            ESTE DOCUMENTO DETALLA EL USO DE ARTEFACTOS DE RASTREO DIGITAL (COOKIES) 
            DENTRO DE LA INFRAESTRUCTURA DE BESTIA PARA OPTIMIZAR LA EXPERIENCIA DEL OPERADOR.
          </p>
        </div>

        <div className="space-y-16">
          {/* Section 01 */}
          <section className="rigid-border p-8 bg-foreground/5 relative overflow-hidden group">
            <div className="absolute top-0 right-0 p-4 font-anton text-4xl opacity-5 group-hover:opacity-10 transition-opacity">01</div>
            <div className="flex items-center gap-4 mb-6">
              <Eye className="text-industrial-yellow" />
              <h2 className="font-anton text-2xl uppercase italic">DEFINICIÓN DE PROTOCOLO</h2>
            </div>
            <p className="font-mono text-sm leading-relaxed opacity-80 mb-4">
              LAS COOKIES SON PEQUEÑOS ARCHIVOS DE DATOS ALMACENADOS EN SU UNIDAD DE ACCESO. 
              BESTIA UTILIZA ESTOS DATOS PARA RECORDAR SUS PREFERENCIAS DE INTERFAZ Y MANTENER 
              LA INTEGRIDAD DE SU SESIÓN DE COMPRA.
            </p>
          </section>

          {/* Section 02 */}
          <section className="space-y-8">
            <div className="flex items-center gap-4 border-b-2 border-foreground pb-4">
              <Database className="text-industrial-yellow" />
              <h2 className="font-anton text-3xl uppercase">TIPOS DE DATOS RASTREADOS</h2>
            </div>
            
            <div className="grid md:grid-cols-2 gap-8">
              <div className="space-y-4">
                <h3 className="font-mono font-bold uppercase text-industrial-yellow">COOKIES TÉCNICAS (NIVEL 1)</h3>
                <p className="font-mono text-xs leading-relaxed opacity-60 uppercase">
                  ESTRICTAMENTE NECESARIAS PARA LA OPERATIVIDAD DEL ALMACÉN. PERMITEN EL 
                  MANTENIMIENTO DEL CARRITO Y LA AUTENTICACIÓN DE SEGURIDAD.
                </p>
              </div>
              <div className="space-y-4">
                <h3 className="font-mono font-bold uppercase text-industrial-yellow">COOKIES DE RENDIMIENTO (NIVEL 2)</h3>
                <p className="font-mono text-xs leading-relaxed opacity-60 uppercase">
                  RECOLECTAN INFORMACIÓN SOBRE CÓMO LOS OPERADORES INTERACTÚAN CON LOS 
                  SISTEMAS PARA MEJORAR LA EFICIENCIA DE LA CARGA.
                </p>
              </div>
            </div>
          </section>

          {/* Section 03 */}
          <section className="rigid-border p-8 border-foreground/20">
            <div className="flex items-center gap-4 mb-6">
              <Lock className="text-industrial-yellow" />
              <h2 className="font-anton text-2xl uppercase italic">CONTROL DE ACCESO</h2>
            </div>
            <p className="font-mono text-sm leading-relaxed opacity-80 mb-6 uppercase">
              USTED TIENE EL PODER DE BLOQUEAR O ELIMINAR ESTOS ARTEFACTOS DESDE LA 
              CONFIGURACIÓN DE SU NAVEGADOR. SIN EMBARGO, EL BLOQUEO DE COOKIES DE NIVEL 1 
              PUEDE RESULTAR EN LA INHABILITACIÓN DE FUNCIONES CRÍTICAS DEL SITIO.
            </p>
            <div className="p-4 bg-industrial-yellow/10 border-l-4 border-industrial-yellow font-mono text-[10px] uppercase opacity-70">
              ADVERTENCIA: LA ELIMINACIÓN DE COOKIES LIMPIARÁ AUTOMÁTICAMENTE SU MANIFIESTO 
              DE CARGA (CARRITO) NO PROCESADO.
            </div>
          </section>
        </div>

        <div className="mt-24 pt-8 border-t border-foreground/10 text-center">
            <p className="font-mono text-[10px] uppercase opacity-40">
                © 2026 ARCHIVO INDUSTRIAL BESTIA - UNIDAD DE CUMPLIMIENTO LEGAL
            </p>
        </div>
      </main>
      <Footer />
    </>
  );
}
