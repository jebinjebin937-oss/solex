"use client";

import { motion } from "framer-motion";
import Image from "next/image";

export default function ProductShowcase() {
  return (
    <section className="py-20 px-10">

      <div className="bg-white rounded-[40px] shadow-xl p-12 grid md:grid-cols-2 gap-10 items-center"
      >
        <div>
          <h2 className="text-6xl font-black text-black">
            AIR FLEX PRO
          </h2>

          <>
          <p className="mt-4 text-zinc-500 text-lg">
            Premium comfort and performance.
          </p>

          <p className="mt-8 text-4xl font-black text-black">
            ₹6,999
          </p>

          <div className="mt-8 space-y-3 text-zinc-600">

            <p>✓ Ultra Comfort Cushioning</p>

            <p>✓ Lightweight Performance</p>

            <p>✓ Premium Materials</p>

            <p>✓ Breathable Design</p>

          </div>

          <button className="mt-10 px-8 py-4 bg-black text-white rounded-full hover:scale-105 transition">
            Buy Now
          </button>
        </>
        </div>

        <motion.div
          animate={{
            y: [0, -10, 0],
          }}
          transition={{
            duration: 6,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        >
          <Image
            src="/images/showcase.png"
            alt="Air Flex Pro"
            width={650}
            height={650}
            className="drop-shadow-2xl"
          />
        </motion.div>

      </div>

    </section>
  );
}