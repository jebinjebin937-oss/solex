"use client";

import { useCart } from "@/context/CartContext";

type Props = {
  product: {
    id: string;
    name: string;
    price: string;
    image: string;
    quantity: number;
  };
};

export default function AddToCartButton({ product }: Props) {
  const { addToCart } = useCart();

  return (
    <button
      onClick={() => {
        addToCart(product);
      }}
      className="
      w-[200px]
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
