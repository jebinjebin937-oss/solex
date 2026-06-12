"use client";
import { motion } from "framer-motion";
import Image from "next/image";

export default function Hero() {
  return (
    <section className="min-h-screen flex items-center justify-between px-24 gap-16 bg-white">

      <div className="max-w-2xl">

        <p className="uppercase tracking-[8px] text-gray-400">
          Future Footwear
        </p>

        <h1 className="text-8xl md:text-9xl font-black leading-none text-zinc-900">
          Walk
          <br />
          Beyond.
        </h1>

        <p className="mt-8 text-xl text-gray-500">
          Precision engineered footwear
for athletes, creators and
everyday explorers.
        </p>

        <div className="mt-10 flex gap-4">

        <button className="px-8 py-4 rounded-full bg-black text-white hover:scale-105 transition">
          Shop Collection
        </button>

        <button className="px-8 py-4 rounded-full bg-black text-white hover:scale-105 transition">
          Explore Technology
        </button>

</div>

      </div>

<div className="relative">

  <div className="absolute inset-0 m-auto w-[500px] h-[500px] bg-orange-200 rounded-full blur-[120px] opacity-70" />

  <motion.div
    animate={{
      y: [0, -20, 0],
    }}
    transition={{
      duration: 6,
      repeat: Infinity,
      ease: "easeInOut",
    }}
  >
    <Image
      src="/images/shoe.png"
      alt="shoe"
      width={500}
      height={500}
      className="relative z-10 w-full max-w-[700px] h-auto"
    />
  </motion.div>

</div>

    </section>
  );
}
