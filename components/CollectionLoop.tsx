import ProductCard from "./ProductCard";

interface CollectionLoopProps {
  products: any[];
}

export default function CollectionLoop({ products }: CollectionLoopProps) {
  const filteredProducts = products.filter(p => p.category === "Serie C-01");

  return (
    <section className="py-24 bg-background overflow-hidden rigid-border-b grainy-bg">
      <div className="px-6 md:px-12 mb-12 flex flex-col md:flex-row md:items-end md:justify-between gap-6">
        <div>
          <h2 className="text-6xl md:text-8xl anton-font uppercase">Serie C-01</h2>
          <p className="font-mono text-xl max-w-xl p-2 bg-industrial-yellow inline-block mt-4 uppercase text-foreground">
            ARTEFACTOS ESTRUCTURALES // LOTE REL. 001
          </p>
        </div>
        <div className="flex gap-4">
          <div className="rigid-border p-4 bg-background text-foreground font-mono text-xs uppercase hidden md:block">
            Desplazamiento Horizontal // Mayús + Scroll
          </div>
        </div>
      </div>
      
      <div className="relative group overflow-x-auto scrollbar-hide pb-12 cursor-grab active:cursor-grabbing">
        <div className="flex gap-12 px-6 md:px-12">
          {filteredProducts.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      </div>
      
      <div className="px-6 md:px-12 mt-12 grid grid-cols-1 md:grid-cols-3 gap-12 font-mono text-xs border-t-4 border-foreground pt-12">
        <div className="p-4 rigid-border bg-white/50">
          <p className="mb-2 opacity-50 underline uppercase">Materiales</p>
          <p className="text-sm">LONA DUCK 450-600 GSM // NÚCLEO DE ARAMIDA REFORZADA 100%</p>
        </div>
        <div className="p-4 rigid-border bg-white/50">
          <p className="mb-2 opacity-50 underline uppercase">Producción</p>
          <p className="text-sm">PUNTADA DE SEGURIDAD DE TRIPLE AGUJA // REMACHADO DE LATÓN SÓLIDO</p>
        </div>
        <div className="p-4 rigid-border bg-foreground text-white">
          <p className="mb-2 opacity-100 underline uppercase text-industrial-yellow font-bold">Garantía</p>
          <p className="text-sm italic uppercase">GARANTÍA ESTRUCTURAL DE POR VIDA // RESISTENCIA PROBADA</p>
        </div>
      </div>
    </section>
  );
}
