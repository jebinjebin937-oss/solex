"use client";

import { useCart } from "@/context/CartContext";

type Props = {
  product: {
    id: string;
    name: string;
    price: string;
    image: string;
  };
};

export default function AddToCartButton({ product }: Props) {
  const { addToCart } = useCart();

  return (
    <button
      onClick={() => {
        console.log("ADDING", product);
        addToCart(product);
        console.log("Cart item added:", product);
      }}
      className="
      px-8
      py-4
      bg-black
      text-white
      rounded-full
      "
    >
      Add To Cart
    </button>
  );
}
