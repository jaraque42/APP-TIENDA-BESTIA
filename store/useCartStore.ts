import { create } from "zustand";
import { persist } from "zustand/middleware";

export interface CartItem {
  id: string;
  name: string;
  price: number;
  quantity: number;
  image: string;
  size?: string;
  color?: string;
}

interface CartState {
  items: CartItem[];
  addItem: (item: CartItem) => void;
  removeItem: (id: string, size?: string, color?: string) => void;
  clearCart: () => void;
  updateQuantity: (id: string, quantity: number, size?: string, color?: string) => void;
}

export const useCartStore = create<CartState>()(
  persist(
    (set) => ({
      items: [],
      addItem: (newItem) =>
        set((state) => {
          const existingItem = state.items.find(
            (item) => 
              item.id === newItem.id && 
              item.size === newItem.size && 
              item.color === newItem.color
          );
          
          if (existingItem) {
            return {
              items: state.items.map((item) =>
                item.id === newItem.id && 
                item.size === newItem.size && 
                item.color === newItem.color
                  ? { ...item, quantity: item.quantity + 1 }
                  : item
              ),
            };
          }
          return { items: [...state.items, newItem] };
        }),
      removeItem: (id, size, color) =>
        set((state) => ({
          items: state.items.filter(
            (item) => 
              !(item.id === id && item.size === size && item.color === color)
          ),
        })),
      clearCart: () => set({ items: [] }),
      updateQuantity: (id, quantity, size, color) =>
        set((state) => ({
          items: state.items.map((item) =>
            item.id === id && item.size === size && item.color === color
              ? { ...item, quantity: Math.max(1, quantity) } 
              : item
          ),
        })),
    }),
    {
      name: "bestia-cart",
    }
  )
);
