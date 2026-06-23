"use client";
import { useEffect, useState } from "react";
import { useCart } from "@/context/CartContext";
import Link from "next/link";
import Image from "next/image";

export default function CartPage() {
  const { cart, removeFromCart, increaseQuantity, decreaseQuantity, } = useCart();
  const [mounted, setMounted] = useState(false);

useEffect(() => {
  setMounted(true);
}, []);
if (!mounted) {
  return null;
}
  const subtotal = cart.reduce(
  (total, item) =>
    total +
    Number(
      item.price.replace(/[₹,]/g, "")
    ) *
      item.quantity,
  0
);

  return (
    <main className="min-h-screen bg-zinc-50 px-10 pt-32 pb-20">

      <div className="max-w-6xl mx-auto">

        <h1 className="text-6xl font-black mb-12">
          Cart
        </h1>

        <div className="grid lg:grid-cols-3 gap-10">

          <div className="lg:col-span-2 space-y-6">

            {cart.length === 0 && (
              <div className="bg-white rounded-[32px] p-10 shadow-lg">
                <h2 className="text-3xl font-bold">
                  Your cart is empty
                </h2>

                <p className="text-zinc-500 mt-4">
                  Add products from the shop.
                </p>
              </div>
            )}

  {cart.map((item, index) => (
              <div
                key={index}
                className="
                bg-white
                rounded-[32px]
                p-6
                shadow-lg
                flex
                items-center
                gap-6
                "
              >

                <Image
                  src={item.image}
                  alt={item.name}
                  width={120}
                  height={120}
                  className="h-auto"
                />

                <div className="flex-1">

                  <h2 className="text-2xl font-bold">
                    {item.name}
                  </h2>

                  <p className="text-zinc-500 mt-2">
                    ₹{item.price}
                  </p>

                  <div className="flex items-center gap-4 mt-3">

                    <button
                      onClick={() =>
                        decreaseQuantity(item.id)
                      }
                      className="
                      w-8
                      h-8
                      border
                      rounded-full
                      "
                    >
                      -
                    </button>

                    <span className="font-semibold">
                      {item.quantity}
                    </span>

                    <button
                      onClick={() =>
                        increaseQuantity(item.id)
                      }
                      className="
                      w-8
                      h-8
                      border
                      rounded-full
                      "
                    >
                      +
                    </button>

                  </div>

                  <button
                    onClick={() => removeFromCart(index)}
                    className="
                    mt-4
                    text-red-500
                    font-medium
                    hover:text-red-700
                    "
                  >
                    Remove
                  </button>

                </div>

              </div>
            ))}

          </div>

          <div
            className="
            bg-white
            rounded-[32px]
            p-8
            shadow-lg
            h-fit
            "
          >

            <h2 className="text-3xl font-bold mb-8">
              Summary
            </h2>

            <div className="flex justify-between mb-4">
              <span>Subtotal</span>
              <span>₹{subtotal}</span>
            </div>

            <div className="flex justify-between mb-8">
              <span>Shipping</span>
              <span>Free</span>
            </div>

            <div className="border-t pt-6 flex justify-between text-2xl font-bold">
              <span>Total</span>
              <span>₹{subtotal}</span>
            </div>

            <Link
              href="/checkout"
              className="
              mt-8
              block
              text-center
              bg-black
              text-white
              py-4
              rounded-full
              "
            >
              Checkout
            </Link>

            <Link
              href="/shop"
              className="
              mt-4
              block
              text-center
              border
              py-4
              rounded-full
              "
            >
              Continue Shopping
            </Link>

          </div>

        </div>

      </div>

    </main>
  );
}