import Link from "next/link";
export default function Navbar() {
  return (
    <nav className="fixed top-0 left-0 w-full z-50 bg-white/80 backdrop-blur-xl border-b border-zinc-200">
      <div className="max-w-7xl mx-auto px-10 py-5 flex items-center justify-between">

        <h1 className="text-3xl font-black tracking-wider text-zinc-900">
          SOLEX
        </h1>

        <ul className="hidden md:flex items-center gap-10 text-text-base font-medium text-zinc-500">
          <li className="cursor-pointer text-zinc-500 hover:text-black hover:-translate-y-1 transition-all duration-300">
            Home
          </li>
         

          <Link
            href="/shop"
            className="cursor-pointer text-zinc-500 hover:text-black hover:-translate-y-1 transition-all duration-300"
          >
            Shop
          </Link>

          <li className="cursor-pointer text-zinc-500 hover:text-black hover:-translate-y-1 transition-all duration-300">
            Technology
          </li>

          <li className="cursor-pointer text-zinc-500 hover:text-black hover:-translate-y-1 transition-all duration-300">
            Pricing
          </li>

          <li className="cursor-pointer text-zinc-500 hover:text-black hover:-translate-y-1 transition-all duration-300">
            Track Order
          </li>
        </ul>

        <Link
          href="/shop"
          className="px-6 py-3 bg-black text-white rounded-full hover:bg-zinc-800 hover:scale-105 transition duration-300"
        >
          Shop Now
        </Link>

      </div>
    </nav>
  );
}