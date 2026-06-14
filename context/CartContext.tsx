"use client";

import {
  createContext,
  useContext,
  useState,
  useEffect,
  ReactNode,
} from "react";


type CartItem = {
  id: string;
  name: string;
  price: string;
  image: string;
};

type CartContextType = {
  cart: CartItem[];
  addToCart: (item: CartItem) => void;
};

const CartContext = createContext<CartContextType | undefined>(undefined);

export function CartProvider({
  children,
}: {
  children: ReactNode;
}) {
const [cart, setCart] = useState<CartItem[]>(() => {
  if (typeof window !== "undefined") {
    const savedCart = localStorage.getItem("solex-cart");

    if (savedCart) {
      return JSON.parse(savedCart);
    }
  }

  return [];
});

useEffect(() => {
  localStorage.setItem(
    "solex-cart",
    JSON.stringify(cart)
  );
}, [cart]);

  const addToCart = (item: CartItem) => {
  setCart((prev) => [...prev, item]);
};

  return (
    <CartContext.Provider value={{ cart, addToCart }}>
      {children}
    </CartContext.Provider>
  );
}

export function useCart() {
  const context = useContext(CartContext);

  if (!context) {
    throw new Error("useCart must be used inside CartProvider");
  }

  return context;
}