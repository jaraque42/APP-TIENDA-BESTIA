"use client";

import { useState } from "react";
import catalog from "@/stitch-catalog.json";
import ProductCard from "@/components/ProductCard";
import Footer from "@/components/Footer";
import { Search, SlidersHorizontal, LayoutGrid, List } from "lucide-react";

export default function CatalogPage() {
  const [filter, setFilter] = useState("TODOS");
  const products = catalog.products;

  const categories = ["TODOS", "CHURRASCO", "BÁSICOS", "DENIM"]; // Custom industrial categories
  
  const filteredProducts = products.filter(p => {
    if (filter === "TODOS") return true;
    if (filter === "CHURRASCO" && p.Product_Name.includes("CHAQUETA")) return true;
    if (filter === "BÁSICOS" && p.Product_Name.includes("CAMISETA")) return true;
    if (filter === "DENIM" && p.Product_Name.includes("VAQUEROS")) return true;
    return false;
  });

  return (
    <>
      <main className="min-h-screen pt-32 pb-20 bg-background overflow-hidden relative">
        {/* Decorative elements */}
        <div className="absolute top-0 right-0 w-64 h-64 border-b border-l border-foreground/10 pointer-events-none" />
        <div className="absolute bottom-0 left-0 w-64 h-64 border-t border-r border-foreground/10 pointer-events-none" />

        <div className="px-6 md:px-12 max-w-7xl mx-auto">
          {/* Header */}
          <div className="border-l-8 border-industrial-yellow pl-8 mb-16">
            <p className="font-mono text-sm opacity-50 uppercase tracking-[0.2em] mb-2">MANIFIESTO_LOGÍSTICO</p>
            <h1 className="text-6xl md:text-8xl font-anton uppercase leading-none tracking-tighter">
              INVENTARIO TÉCNICO
            </h1>
            <div className="flex items-center gap-4 mt-6">
                <span className="font-mono text-xs bg-foreground text-background px-3 py-1 uppercase">SERIE: C-01</span>
                <span className="font-mono text-xs rigid-border px-3 py-1 uppercase opacity-60">LOTE: 2026_REL_001</span>
            </div>
          </div>

          {/* Filters Bar */}
          <div className="flex flex-col md:flex-row justify-between items-center gap-8 mb-12 py-6 border-y border-foreground/20">
            <div className="flex flex-wrap items-center gap-4">
              {categories.map((cat) => (
                <button
                  key={cat}
                  onClick={() => setFilter(cat)}
                  className={`px-6 py-2 rigid-border font-mono text-xs uppercase transition-all ${
                    filter === cat 
                      ? "bg-industrial-yellow text-foreground font-bold" 
                      : "hover:bg-foreground hover:text-background"
                  }`}
                >
                  {cat}
                </button>
              ))}
            </div>

            <div className="flex items-center gap-6 opacity-40 hover:opacity-100 transition-opacity">
                <div className="flex items-center gap-2 font-mono text-[10px] uppercase">
                    <SlidersHorizontal size={14} />
                    <span>Config de Filtros</span>
                </div>
                <div className="h-4 w-px bg-foreground" />
                <div className="flex items-center gap-4">
                    <LayoutGrid size={16} className="text-industrial-yellow" />
                    <List size={16} />
                </div>
            </div>
          </div>

          {/* Content Summary */}
          <div className="mb-8 flex justify-between items-end border-b border-foreground/5 pb-4">
              <p className="font-mono text-xs uppercase opacity-50">
                  DETECTADOS: {filteredProducts.length} ARTEFACTOS ESTRUCTURALES
              </p>
              <div className="flex items-center gap-2">
                  <div className="w-2 h-2 rounded-full bg-industrial-yellow animate-pulse" />
                  <span className="font-mono text-[10px] uppercase">Señal Optimizada</span>
              </div>
          </div>

          {/* Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredProducts.map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>

          {/* Empty State if no products match filter */}
          {filteredProducts.length === 0 && (
            <div className="py-20 text-center rigid-border bg-foreground/5">
                <p className="font-anton text-4xl opacity-20 uppercase tracking-widest">NADA EN ESTA CATEGORÍA</p>
            </div>
          )}
        </div>
      </main>
      <Footer />
    </>
  );
}
