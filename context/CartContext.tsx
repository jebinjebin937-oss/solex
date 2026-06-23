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
  quantity: number;
};

type CartContextType = {
  cart: CartItem[];
  addToCart: (item: CartItem) => void;
  removeFromCart: (index: number) => void;
  clearCart: () => void;
  increaseQuantity: (id: string) => void;
  decreaseQuantity: (id: string) => void;
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
  setCart((prev) => {
    const existing = prev.find(
      (cartItem) => cartItem.id === item.id
    );

    if (existing) {
      return prev.map((cartItem) =>
        cartItem.id === item.id
          ? {
              ...cartItem,
              quantity: cartItem.quantity + 1,
            }
          : cartItem
      );
    }

    return [
      ...prev,
      {
        ...item,
        quantity: 1,
      },
    ];
  });
};

const increaseQuantity = (id: string) => {
  setCart((prev) =>
    prev.map((item) =>
      item.id === id
        ? {
            ...item,
            quantity: item.quantity + 1,
          }
        : item
    )
  );
};

const decreaseQuantity = (id: string) => {
  setCart((prev) =>
    prev
      .map((item) =>
        item.id === id
          ? {
              ...item,
              quantity: item.quantity - 1,
            }
          : item
      )
      .filter((item) => item.quantity > 0)
  );
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
    increaseQuantity,
    decreaseQuantity,
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