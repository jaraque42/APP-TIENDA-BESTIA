"use client";

import Image from "next/image";
import { useState } from "react";
import { useCartStore } from "@/store/useCartStore";
import { Zap, ShieldCheck, Truck, ArrowLeft } from "lucide-react";
import Link from "next/link";

interface ProductDetailClientProps {
  product: {
    id: string;
    Product_Name: string;
    Technical_Specs: {
      Peso_Lona: string;
      Tipo_Costura: string;
    };
    Stock_Status: number;
    GSM: number;
    Reinforcement_Level: string;
    image: string;
    availableSizes?: string[];
    availableColors?: string[];
    description?: string;
  };
}

export default function ProductDetailClient({ product }: ProductDetailClientProps) {
  const [selectedSize, setSelectedSize] = useState(product.availableSizes?.[0] || "");
  const [selectedColor, setSelectedColor] = useState(product.availableColors?.[0] || "");
  const [quantity, setQuantity] = useState(1);
  const addItem = useCartStore((state) => state.addItem);

  const handleAddToCart = () => {
    addItem({
      id: product.id,
      name: product.Product_Name,
      price: 99.99, // Dynamic price could be added to catalog
      quantity: quantity,
      image: product.image,
      size: selectedSize,
      color: selectedColor,
    });
    alert("ARTÍCULO AÑADIDO AL MANIFIESTO DE CARGA");
  };

  return (
    <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
      {/* Product Image Section */}
      <div className="space-y-6">
        <div className="relative aspect-square rigid-border bg-foreground/5 overflow-hidden group">
          <Image
            src={product.image}
            alt={product.Product_Name}
            fill
            className="object-cover group-hover:scale-105 transition-transform duration-700"
            priority
          />
          <div className="absolute top-6 left-6 flex flex-col gap-2">
            <span className="bg-industrial-yellow text-foreground px-4 py-1 font-anton text-sm rigid-border">
              NIVEL: {product.Reinforcement_Level}
            </span>
            <span className="bg-foreground text-background px-4 py-1 font-mono text-[10px] rigid-border uppercase">
              ID_REF: {product.id}
            </span>
          </div>
        </div>
        
        {/* Technical Grid */}
        <div className="grid grid-cols-2 gap-4">
            <div className="rigid-border p-4 bg-background">
                <p className="font-mono text-[10px] opacity-50 uppercase mb-1">Densidad</p>
                <p className="font-anton text-xl">{product.GSM} GSM</p>
            </div>
            <div className="rigid-border p-4 bg-background">
                <p className="font-mono text-[10px] opacity-50 uppercase mb-1">Certificación</p>
                <p className="font-anton text-xl uppercase">ISO-IND-9001</p>
            </div>
        </div>
      </div>

      {/* Product Details Section */}
      <div className="flex flex-col gap-8">
        <div>
          <Link href="/" className="inline-flex items-center gap-2 font-mono text-xs uppercase opacity-50 hover:opacity-100 mb-6 transition-opacity">
            <ArrowLeft size={14} />
            VOLVER AL CATÁLOGO
          </Link>
          <h1 className="text-6xl md:text-8xl font-anton uppercase leading-none tracking-tighter mb-4">
            {product.Product_Name}
          </h1>
          <p className="font-mono text-lg text-industrial-yellow font-bold uppercase">
            ESTADO: DISPONIBLE // STOCK: {product.Stock_Status} UDS.
          </p>
        </div>

        <div className="rigid-border p-6 bg-foreground/5">
          <p className="font-mono text-sm leading-relaxed opacity-80">
            {product.description || "EQUIPO TÉCNICO DE ALTA RESISTENCIA. DISEÑADO PARA SOPORTAR CONDICIONES EXTREMAS Y USO PROLONGADO EN ENTORNOS INDUSTRIALES."}
          </p>
        </div>

        {/* Selection Area */}
        <div className="space-y-8">
          {/* Sizes */}
          {product.availableSizes && (
            <div>
              <p className="font-mono text-xs uppercase opacity-50 mb-3 tracking-widest">DIÁMETRO / TALLA_</p>
              <div className="flex flex-wrap gap-2">
                {product.availableSizes.map((size) => (
                  <button
                    key={size}
                    onClick={() => setSelectedSize(size)}
                    className={`px-6 py-3 rigid-border font-anton transition-all ${
                      selectedSize === size
                        ? "bg-industrial-yellow text-foreground scale-105"
                        : "bg-background hover:bg-foreground hover:text-background"
                    }`}
                  >
                    {size}
                  </button>
                ))}
              </div>
            </div>
          )}

          {/* Colors */}
          {product.availableColors && (
            <div>
              <p className="font-mono text-xs uppercase opacity-50 mb-3 tracking-widest">RECUBRIMIENTO / COLOR_</p>
              <div className="flex flex-wrap gap-2">
                {product.availableColors.map((color) => (
                  <button
                    key={color}
                    onClick={() => setSelectedColor(color)}
                    className={`px-6 py-3 rigid-border font-mono text-xs uppercase transition-all ${
                      selectedColor === color
                        ? "bg-foreground text-background"
                        : "bg-background hover:bg-foreground hover:text-background"
                    }`}
                  >
                    {color}
                  </button>
                ))}
              </div>
            </div>
          )}

          {/* Add to Cart Actions */}
          <div className="flex flex-col md:flex-row gap-4 pt-4 border-t-2 border-foreground/10">
            <div className="flex items-center rigid-border h-16 bg-background">
                <button 
                    onClick={() => setQuantity(q => Math.max(1, q - 1))}
                    className="w-16 h-full flex items-center justify-center hover:bg-foreground hover:text-background border-r border-foreground transition-colors"
                >
                    -
                </button>
                <div className="flex-1 px-8 font-anton text-2xl text-center">
                    {quantity}
                </div>
                <button 
                    onClick={() => setQuantity(q => q + 1)}
                    className="w-16 h-full flex items-center justify-center hover:bg-foreground hover:text-background border-l border-foreground transition-colors"
                >
                    +
                </button>
            </div>
            
            <button
              onClick={handleAddToCart}
              className="flex-1 bg-industrial-yellow text-foreground h-16 font-anton text-2xl uppercase rigid-border border-foreground hover:bg-foreground hover:text-background transition-all group flex items-center justify-center gap-3"
            >
              <Zap size={24} className="group-hover:fill-current" />
              AÑADIR AL MANIFIESTO
            </button>
          </div>
        </div>

        {/* Brand Promises */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 pt-12 border-t border-foreground/20">
            <div className="flex items-center gap-3 opacity-60 font-mono text-[10px] uppercase">
                <ShieldCheck size={20} />
                <span>Indestructible</span>
            </div>
            <div className="flex items-center gap-3 opacity-60 font-mono text-[10px] uppercase">
                <Truck size={20} />
                <span>Logística 24/48h</span>
            </div>
            <div className="flex items-center gap-3 opacity-90 font-mono text-[10px] uppercase text-industrial-yellow">
                <Zap size={20} className="fill-current" />
                <span>Garantía Vitalicia</span>
            </div>
        </div>
      </div>
    </div>
  );
}
