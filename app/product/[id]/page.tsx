import { Metadata } from "next";
import { notFound } from "next/navigation";
import catalog from "@/stitch-catalog.json";
import ProductDetailClient from "@/components/ProductDetailClient";
import Footer from "@/components/Footer";

interface ProductPageProps {
  params: Promise<{ id: string }>;
}

export async function generateMetadata({ params }: ProductPageProps): Promise<Metadata> {
  const { id } = await params;
  const product = catalog.products.find((p) => p.id === id);

  if (!product) {
    return {
      title: "PRODUCTO NO ENCONTRADO | BESTIA",
    };
  }

  return {
    title: `${product.Product_Name} | BESTIA INDUSTRIAL`,
    description: product.description || `Ficha técnica de ${product.Product_Name}. Resistencia industrial garantizada.`,
  };
}

export default async function ProductPage({ params }: ProductPageProps) {
  const { id } = await params;
  const product = catalog.products.find((p: any) => p.id === id);

  if (!product) {
    notFound();
  }

  return (
    <>
      <main className="min-h-screen pt-32 pb-20 px-6 md:px-12 bg-background">
        <div className="max-w-7xl mx-auto">
          <ProductDetailClient product={product} />
          
          {/* Bottom Technical Section */}
          <div className="mt-20 pt-20 border-t-4 border-foreground">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-20">
                  <div>
                      <h3 className="text-4xl font-anton uppercase mb-8 underline decoration-industrial-yellow decoration-4 underline-offset-8">PROTOCOLOS DE USO</h3>
                      <ul className="font-mono text-sm space-y-4 list-none">
                          <li className="flex gap-4">
                              <span className="text-industrial-yellow font-bold">01.</span>
                              <span>MANTENER ALEJADO DE SUSTANCIAS CORROSIVAS VOLÁTILES.</span>
                          </li>
                          <li className="flex gap-4">
                              <span className="text-industrial-yellow font-bold">02.</span>
                              <span>LAVADO EN FRÍO CON DETERGENTE NEUTRO INDUSTRIAL.</span>
                          </li>
                          <li className="flex gap-4">
                              <span className="text-industrial-yellow font-bold">03.</span>
                              <span>SECADO AL AIRE LIBRE EN POSICIÓN HORIZONTAL.</span>
                          </li>
                          <li className="flex gap-4">
                              <span className="text-industrial-yellow font-bold">04.</span>
                              <span>LA PÁTINA DE DESGASTE ES PARTE INTEGRAL DEL DISEÑO.</span>
                          </li>
                      </ul>
                  </div>
                  <div className="rigid-border p-8 bg-foreground text-background">
                      <h4 className="font-anton text-2xl uppercase mb-4 text-industrial-yellow">CERTIFICADO DE ORIGEN</h4>
                      <p className="font-mono text-xs opacity-70 leading-relaxed mb-6">
                          CADA ARTÍCULO DE LA SERIE C-01 HA SIDO MANUFACTURADO BAJO ESTRICTOS CONTROLES DE CALIDAD EN NUESTRAS INSTALACIONES DE INGENIERÍA TEXTIL. 
                          LAS VARIACIONES EN EL GRANO DE LA LONA SON CARACTERÍSTICAS DEL MATERIAL NATURAL DE ALTA DENSIDAD.
                      </p>
                      <div className="flex justify-between items-end">
                          <div className="font-mono text-[10px] uppercase">
                              <p>LOTE: SERIAL_BEST_2026</p>
                              <p>APROBADO POR: QC_DEPT_INDUSTRIAL</p>
                          </div>
                          <div className="w-16 h-16 bg-industrial-yellow rigid-border flex items-center justify-center">
                              <span className="text-foreground font-anton text-3xl">B</span>
                          </div>
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
