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
  removeFromCart: (index: number) => void;
  clearCart: () => void;
};


const CartContext = createContext<CartContextType | undefined>(undefined);

export function CartProvider({
  children,
}: {
  children: ReactNode;
}) {
const [cart, setCart] = useState<CartItem[]>([]);

useEffect(() => {
  const savedCart = localStorage.getItem("solex-cart");

  if (savedCart) {
    setCart(JSON.parse(savedCart));
  }
}, []);

useEffect(() => {
  localStorage.setItem(
    "solex-cart",
    JSON.stringify(cart)
  );
}, [cart]);

  const addToCart = (item: CartItem) => {
  setCart((prev) => [...prev, item]);
};
const removeFromCart = (index: number) => {
  setCart((prev) =>
    prev.filter((_, i) => i !== index)
  );
};

const clearCart = () => {
  setCart([]);
};

  return (
    <CartContext.Provider
  value={{
    cart,
    addToCart,
    removeFromCart,
    clearCart,
  }}
>
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