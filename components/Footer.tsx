"use client";

export default function Footer() {
  return (
    <footer className="bg-black text-white">

      <div className="max-w-7xl mx-auto px-10 py-24">

        <div className="text-center mb-24">

          <h2 className="text-5xl md:text-6xl font-black mb-6">
            Stay Ahead
          </h2>

          <p className="text-zinc-400 text-lg mb-10">
            Get updates on new releases and exclusive collections.
          </p>

          <div className="flex justify-center gap-4 flex-wrap">

            <input
              type="email"
              placeholder="Enter your email"
              className="
                px-6
                py-4
                rounded-full
                bg-zinc-900
                border
                border-zinc-700
                w-full max-w-[320px]
                outline-none
              "
            />

            <button
              className="
                px-8
                py-4
                bg-white
                text-black
                rounded-full
                hover:scale-105
                transition
              "
            >
              Subscribe
            </button>

          </div>

        </div>

        <div className="grid md:grid-cols-4 gap-12">

          <div>

            <h3 className="text-3xl font-black mb-6">
              SOLEX
            </h3>

            <p className="text-zinc-400">
              Future of Footwear.
            </p>

          </div>

          <div>

            <h4 className="font-bold mb-4">
              Explore
            </h4>

            <ul className="space-y-3 text-zinc-400">
              <li>Collections</li>
              <li>Technology</li>
              <li>Pricing</li>
              <li>Track Order</li>
            </ul>

          </div>

          <div>

            <h4 className="font-bold mb-4">
              Support
            </h4>

            <ul className="space-y-3 text-zinc-400">
              <li>Contact</li>
              <li>Shipping</li>
              <li>Returns</li>
              <li>Help Center</li>
            </ul>

          </div>

          <div>

            <h4 className="font-bold mb-4">
              Social
            </h4>

            <ul className="space-y-3 text-zinc-400">
              <li>Instagram</li>
              <li>X</li>
              <li>YouTube</li>
              <li>Facebook</li>
            </ul>

          </div>

        </div>

        <div className="border-t border-zinc-800 mt-16 pt-8 text-center text-zinc-500">

          © 2026 SOLEX. All rights reserved.

        </div>

      </div>

    </footer>
  );
}