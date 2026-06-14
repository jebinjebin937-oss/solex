"use client";
import { useCart } from "@/context/CartContext";
import Link from "next/link";
import { useEffect, useState } from "react";
export default function Navbar() {
  const { cart } = useCart();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
}, []);
if (!mounted) {
  return null;
}

  return (
    <nav className="fixed top-0 left-0 w-full z-50 bg-white/80 backdrop-blur-xl border-b border-zinc-200">
      <div className="max-w-7xl mx-auto px-10 py-5 flex items-center justify-between">

        <Link href="/">
          <h1 className="text-3xl font-black tracking-wider text-zinc-900">
            SOLEX
          </h1>
        </Link>

        <ul className="hidden md:flex items-center gap-10 text-text-base font-medium text-zinc-500">
          <Link
            href="/"
            className="cursor-pointer text-zinc-500 hover:text-black hover:-translate-y-1 transition-all duration-300"
          >
            Home
          </Link>
         

          <Link
            href="/shop"
            className="cursor-pointer text-zinc-500 hover:text-black hover:-translate-y-1 transition-all duration-300"
          >
            Shop
          </Link>

          <Link
            href="/#technology"
            className="cursor-pointer text-zinc-500 hover:text-black hover:-translate-y-1 transition-all duration-300"
          >
            Technology
          </Link>

          <Link
            href="/#pricing"
            className="cursor-pointer text-zinc-500 hover:text-black hover:-translate-y-1 transition-all duration-300"
          >
            Pricing
          </Link>

          <Link
              href="/track-order"
              className="cursor-pointer text-zinc-500 hover:text-black hover:-translate-y-1 transition-all duration-300"
            >
              Track Order
            </Link>
        </ul>

        <div className="flex items-center gap-2">

          <Link
            href="/cart"
            className="
            px-3
            py-2
            border
            rounded-full
            text-sm
            hover:bg-zinc-100
            transition
            "
          >
            🛒 {cart.length}
          </Link>

          <Link
            href="/shop"
            className="
            px-4
            py-2
            bg-black
            text-white
            rounded-full
            hover:bg-zinc-800
            hover:scale-105
            transition
            duration-300
            "
          >
            Shop Now
          </Link>

        </div>

      </div>
    </nav>
  );
}