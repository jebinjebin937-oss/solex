"use client";
import { useCart } from "@/context/CartContext";
import Link from "next/link";
import { useEffect, useState } from "react";
export default function Navbar() {
  const { cart } = useCart();
  const [mounted, setMounted] = useState(false);
  const [mobileMenu, setMobileMenu] =
  useState(false);

  useEffect(() => {
    setMounted(true);
}, []);
if (!mounted) {
  return null;
}

  return (
    <>
    <nav className="fixed top-0 left-0 w-full z-50 bg-white/80 backdrop-blur-xl border-b border-zinc-200">
      <div className="max-w-7xl mx-auto px-10 py-5 flex items-center justify-between">

        <div className="flex items-center gap-3">

  <button
    onClick={() =>
      setMobileMenu(!mobileMenu)
    }
    className="
    md:hidden
    text-2xl
    "
  >
    ☰
  </button>

  <Link href="/">
    <h1 className="text-3xl font-black tracking-wider text-zinc-900">
      SOLEX
    </h1>
  </Link>

</div>

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
            🛒 {
              mounted
                ? cart.reduce(
                    (total, item) =>
                      total + item.quantity,
                    0
                  )
                : 0
            }
          </Link>

          <Link
            href="/shop"
            className="
            hidden md:block
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
    {mobileMenu && (
  <>
    <div
      className="
      fixed
      inset-0
      bg-black/30
      z-40
      "
      onClick={() =>
        setMobileMenu(false)
      }
    />

    <div   onClick={(e) => e.stopPropagation()}
      className="
      fixed
      top-0
      left-0
      h-screen
      w-72
      bg-white
      shadow-2xl
      z-50
      p-6
      transition-transform
      duration-300
      ease-out
      translate-x-0
      "
    >

      <div className="flex items-center justify-between mb-8">

  <h2 className="text-2xl font-bold">
    Menu
  </h2>

  <button
    onClick={() => setMobileMenu(false)}
    className="
    text-2xl
    hover:opacity-70
    transition
    "
  >
    ←
  </button>

</div>

      <div className="flex flex-col gap-6">

        <Link
          href="/"
          onClick={() =>
            setMobileMenu(false)
          }
        >
          Home
        </Link>

        <Link
          href="/shop"
          onClick={() =>
            setMobileMenu(false)
          }
        >
          Shop
        </Link>

        <Link
          href="/#technology"
          onClick={() =>
            setMobileMenu(false)
          }
        >
          Technology
        </Link>

        <Link
          href="/#pricing"
          onClick={() =>
            setMobileMenu(false)
          }
        >
          Pricing
        </Link>

        <Link
          href="/track-order"
          onClick={() =>
            setMobileMenu(false)
          }
        >
          Track Order
        </Link>

      </div>

    </div>
  </>
)}
    </>
  );
}