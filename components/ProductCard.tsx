"use client";

import Link from "next/link";
import Image from "next/image";
import { useCartStore } from "@/store/useCartStore";

interface ProductProps {
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
  };
}

export default function ProductCard({ product }: ProductProps) {
  const isCritical = product.Stock_Status < 5;
  const addItem = useCartStore((state) => state.addItem);

  const handleAdd = () => {
    addItem({
      id: product.id,
      name: product.Product_Name,
      price: 99.99,
      quantity: 1,
      image: product.image,
    });
  };

  return (
    <div className="flex-shrink-0 w-80 md:w-96 rigid-border bg-background hover:bg-industrial-yellow transition-all duration-300 group overflow-hidden">
      <Link href={`/product/${product.id}`} className="block relative h-96 w-full grayscale group-hover:grayscale-0 transition-grayscale duration-500 cursor-pointer">
        <Image
          src={product.image}
          alt={product.Product_Name}
          fill
          className="object-cover"
        />
        {isCritical && (
          <div className="absolute top-4 left-4 bg-industrial-yellow text-foreground px-4 py-1 font-anton text-sm animate-pulse z-30">
            STOCK CRÍTICO
          </div>
        )}
      </Link>
      
      <div className="p-6 rigid-border-t">
        <Link href={`/product/${product.id}`} className="block group/title">
          <h3 className="text-3xl md:text-4xl mb-4 group-hover:text-foreground group-hover/title:underline decoration-industrial-yellow decoration-2 underline-offset-8 transition-all">
            {product.Product_Name}
          </h3>
        </Link>
        
        <div className="space-y-4 font-mono text-sm">
          <div className="rigid-border p-4 bg-foreground text-white group-hover:bg-foreground">
            <p className="font-anton uppercase mb-2 text-industrial-yellow">FICHA TÉCNICA</p>
            <div className="grid grid-cols-2 gap-2 text-xs">
              <span className="opacity-70">GSM:</span>
              <span>{product.GSM}</span>
              <span className="opacity-70">PESO:</span>
              <span>{product.Technical_Specs.Peso_Lona}</span>
              <span className="opacity-70">COSTURA:</span>
              <span>{product.Technical_Specs.Tipo_Costura}</span>
              <span className="opacity-70">NIVEL:</span>
              <span>{product.Reinforcement_Level}</span>
            </div>
          </div>
          
          <div className="flex justify-between items-center pt-2 gap-4">
            <span className="text-xs uppercase opacity-70 truncate max-w-[100px]">ID_{product.id}</span>
            <Link 
              href={`/product/${product.id}`}
              className="bg-foreground text-white px-6 py-2 uppercase hover:bg-white hover:text-foreground transition-all duration-300 rigid-border border-foreground font-anton flex-1 text-center"
            >
              Ver Detalles
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
