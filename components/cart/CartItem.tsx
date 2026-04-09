"use client";

import Image from "next/image";
import { Trash2, Minus, Plus } from "lucide-react";
import { useCartStore, CartItem as CartItemType } from "@/store/useCartStore";

interface CartItemProps {
  item: CartItemType;
}

export default function CartItem({ item }: CartItemProps) {
  const { updateQuantity, removeItem } = useCartStore();

  const handleDecrement = () => {
    if (item.quantity > 1) {
      updateQuantity(item.id, item.quantity - 1, item.size, item.color);
    } else {
      removeItem(item.id, item.size, item.color);
    }
  };

  const handleIncrement = () => {
    updateQuantity(item.id, item.quantity + 1, item.size, item.color);
  };

  return (
    <div className="flex flex-col md:flex-row items-center gap-6 p-6 rigid-border bg-background hover:border-industrial-yellow transition-all group">
      {/* Image */}
      <div className="relative w-full md:w-32 aspect-square rigid-border overflow-hidden bg-foreground/5">
        <Image
          src={item.image}
          alt={item.name}
          fill
          className="object-cover group-hover:scale-105 transition-transform duration-500"
        />
      </div>

      {/* Info */}
      <div className="flex-1 flex flex-col justify-center gap-1 w-full text-center md:text-left">
        <p className="font-mono text-[10px] uppercase opacity-50 tracking-widest">PRODUCTO_ID: {item.id}</p>
        <h3 className="text-xl font-anton uppercase leading-none">{item.name}</h3>
        
        {/* Variants */}
        {(item.size || item.color) && (
          <div className="flex flex-wrap justify-center md:justify-start gap-2 mt-1">
            {item.size && (
              <span className="font-mono text-[10px] bg-foreground text-background px-2 py-0.5 uppercase">
                TALLA: {item.size}
              </span>
            )}
            {item.color && (
              <span className="font-mono text-[10px] bg-industrial-yellow text-foreground px-2 py-0.5 uppercase">
                COLOR: {item.color}
              </span>
            )}
          </div>
        )}
        
        <p className="font-mono text-industrial-yellow font-bold text-lg mt-1">
          ${item.price.toFixed(2)}
        </p>
      </div>

      {/* Controls */}
      <div className="flex items-center gap-4 w-full md:w-auto justify-between md:justify-end">
        <div className="flex items-center rigid-border h-11">
          <button
            onClick={handleDecrement}
            className="w-10 h-full flex items-center justify-center hover:bg-foreground hover:text-background transition-colors border-r border-foreground"
          >
            <Minus size={16} />
          </button>
          <span className="w-12 text-center font-anton text-lg">
            {item.quantity}
          </span>
          <button
            onClick={handleIncrement}
            className="w-10 h-full flex items-center justify-center hover:bg-foreground hover:text-background transition-colors border-l border-foreground"
          >
            <Plus size={16} />
          </button>
        </div>

        <button
          onClick={() => removeItem(item.id, item.size, item.color)}
          className="p-3 rigid-border hover:bg-red-600 hover:text-white transition-colors"
          title="Eliminar producto"
        >
          <Trash2 size={20} />
        </button>
      </div>

      {/* Total per line */}
      <div className="hidden md:flex flex-col items-end min-w-[100px]">
        <p className="font-mono text-[10px] uppercase opacity-50">SUBTOTAL</p>
        <p className="font-anton text-xl leading-none">
          ${(item.price * item.quantity).toFixed(2)}
        </p>
      </div>
    </div>
  );
}
