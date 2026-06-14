"use client";
import { motion } from "framer-motion";
import Image from "next/image";

export default function Hero() {
  return (
    <section
      className="
      min-h-[80vh] 
      lg:min-h-screen
      flex
      flex-col-reverse
      lg:flex-row
      items-center
      justify-start lg:justify-center
      px-6
      md:px-12
      lg:px-24
      gap-4
      lg:gap-16
      bg-white
      text-center
      lg:text-left
      "
    >
      <div className="max-w-2xl">

        <p className="uppercase tracking-[8px] text-gray-400">
          Future Footwear
        </p>

        <h1 className="text-6xl md:text-7xl lg:text-9xl font-black leading-none text-zinc-900 mt-4">
          Walk
          <br />
          Beyond.
        </h1>

        <p className="mt-6 text-base md:text-lg lg:text-xl text-gray-500">
          Precision engineered footwear
          for athletes, creators and
          everyday explorers.
        </p>

        <div
          className="
          mt-8
          flex
          flex-col
          sm:flex-row
          gap-4
          justify-center
          lg:justify-start
          "
        >
          <button className="px-8 py-4 rounded-full bg-black text-white hover:scale-105 transition">
            Shop Collection
          </button>

          <button className="px-8 py-4 rounded-full bg-black text-white hover:scale-105 transition">
            Explore Technology
          </button>
        </div>

      </div>

      <div className="relative flex justify-center w-full">

        <div
          className="
          absolute
          inset-0
          m-auto
          w-[250px]
          h-[250px]
          md:w-[400px]
          md:h-[400px]
          lg:w-[500px]
          lg:h-[500px]
          bg-orange-200
          rounded-full
          blur-[120px]
          opacity-70
          "
        />

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
            width={700}
            height={700}
            className="
            relative
            z-10
            w-full
            max-w-[260px]
            md:max-w-[450px]
            lg:max-w-[700px]
            h-auto
            "
          />
        </motion.div>

      </div>

    </section>
  );
}