import Image from "next/image";
import Footer from "@/components/Footer";
import { Shield, Zap, Wrench, Boxes } from "lucide-react";

export default function ConceptPage() {
  return (
    <>
      <main className="min-h-screen bg-background pt-32">
        {/* Hero Section */}
        <section className="px-6 md:px-12 max-w-7xl mx-auto mb-32">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="order-2 lg:order-1">
              <h1 className="text-7xl md:text-9xl font-anton uppercase leading-[0.8] tracking-tighter mb-8 bg-foreground text-background inline-block p-4">
                BESTIA <br /> CONCEPT
              </h1>
              <p className="font-mono text-xl md:text-2xl uppercase tracking-widest leading-relaxed max-w-lg">
                INGENIERÍA DE <span className="text-industrial-yellow">RESISTENCIA</span> PARA ENTORNOS CRÍTICOS.
              </p>
            </div>
            <div className="order-1 lg:order-2 relative aspect-square rigid-border bg-foreground/10 overflow-hidden">
              <Image
                src="/Users/jaraque/.gemini/antigravity/brain/fa69e38f-e088-4c40-b227-fa2b04470d1c/concept_hero_industrial_1775594651086.png"
                alt="BESTIA Industrial Process"
                fill
                className="object-cover grayscale hover:grayscale-0 transition-all duration-700 hover:scale-105"
              />
              <div className="absolute bottom-6 right-6 bg-industrial-yellow text-foreground px-4 py-1 font-mono text-[10px] uppercase font-bold">
                PROCESO_VULCANIZADO_01
              </div>
            </div>
          </div>
        </section>

        {/* Philosophy Grid */}
        <section className="bg-foreground text-background py-32 px-6 md:px-12 relative overflow-hidden">
          <div className="absolute top-0 right-0 opacity-10 pointer-events-none">
            <Boxes size={500} strokeWidth={0.5} />
          </div>

          <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-24 relative z-10">
            <div className="space-y-12">
              <h2 className="text-5xl md:text-7xl font-anton uppercase underline decoration-industrial-yellow decoration-4 underline-offset-8">FILOSOFÍA DE CARGA</h2>
              <p className="font-mono text-lg opacity-80 leading-loose">
                BESTIA NO ES MODA. ES EQUIPAMIENTO. CADA PIEZA ES UN ARTEFACTO ESTRUCTURAL DISEÑADO PARA SOBREVIVIR AL TIEMPO Y AL ABUSO MECÁNICO.
                UTILIZAMOS LONA DUCK DE 410+ GSM Y TRIPLE COSTURA DE SEGURIDAD.
              </p>
              <div className="grid grid-cols-2 gap-8">
                <div className="rigid-border border-background p-6">
                  <Shield className="text-industrial-yellow mb-4" size={32} />
                  <h4 className="font-anton text-xl uppercase mb-2">INDELIBLE</h4>
                  <p className="font-mono text-[10px] uppercase opacity-50">Resistencia probada contra abrasión y tracción.</p>
                </div>
                <div className="rigid-border border-background p-6">
                  <Zap className="text-industrial-yellow mb-4" size={32} />
                  <h4 className="font-anton text-xl uppercase mb-2">REACTIVO</h4>
                  <p className="font-mono text-[10px] uppercase opacity-50">Adaptación ergonómica industrial bajo tensión.</p>
                </div>
              </div>
            </div>

            <div className="flex flex-col justify-center">
              <div className="rigid-border border-background p-12 relative">
                <div className="absolute -top-4 -left-4 bg-industrial-yellow text-foreground px-4 py-2 font-anton uppercase text-sm">MANIFIESTO</div>
                <p className="text-4xl md:text-5xl font-anton uppercase leading-tight italic">
                  "EL DESGASTE ES EL TESTIMONIO DE LA VICTORIA SOBRE LA MATERIA."
                </p>
                <div className="mt-12 flex items-center justify-between font-mono text-[10px] uppercase opacity-50 border-t border-background/20 pt-6">
                  <span>DEP. INGENIERÍA TEXTIL</span>
                  <span>SERIE C-01 // 2026</span>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Technical Stats */}
        <section className="py-32 px-6 md:px-12 max-w-7xl mx-auto">
          <h3 className="font-anton text-4xl uppercase mb-16 text-center tracking-[0.3em]">MÉTRICAS_DE_CALIDAD</h3>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-12 text-center font-anton">
            <div className="flex flex-col items-center">
              <span className="text-7xl text-industrial-yellow">12 oz</span>
              <span className="font-mono text-xs uppercase opacity-50 mt-2 tracking-widest">Peso Mínimo Lona</span>
            </div>
            <div className="flex flex-col items-center">
              <span className="text-7xl text-industrial-yellow">3X</span>
              <span className="font-mono text-xs uppercase opacity-50 mt-2 tracking-widest">Refuerzo Costuras</span>
            </div>
            <div className="flex flex-col items-center">
              <span className="text-7xl text-industrial-yellow">100%</span>
              <span className="font-mono text-xs uppercase opacity-50 mt-2 tracking-widest">Algodón Heavy-Duty</span>
            </div>
            <div className="flex flex-col items-center">
              <span className="text-7xl text-industrial-yellow">∞</span>
              <span className="font-mono text-xs uppercase opacity-50 mt-2 tracking-widest">Vida Útil Estimada</span>
            </div>
          </div>
        </section>

        {/* Bottom CTA */}
        <section className="py-20 px-6 md:px-12 border-t-4 border-foreground text-center">
          <h2 className="text-5xl font-anton uppercase mb-10">¿PREPARADO PARA EL DESPLIEGUE?</h2>
          <Link
            href="/catalog"
            className="inline-flex items-center gap-6 px-12 py-6 bg-foreground text-background font-anton text-3xl uppercase hover:bg-industrial-yellow hover:text-foreground transition-all rigid-border group"
          >
            <Wrench size={28} className="group-hover:rotate-45 transition-transform" />
            EXPLORAR INVENTARIO
          </Link>
        </section>
      </main>
      <Footer />
    </>
  );
}

// Helper Link component since we are using 'next/link'
import Link from "next/link";
