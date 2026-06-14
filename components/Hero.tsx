"use client";
import Link from "next/link";
import { motion } from "framer-motion";
import Image from "next/image";

export default function Hero() {
  return (
    <section
      className="
      min-h-[80vh] 
      lg:min-h-screen pt-5
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
          <Link
            href="/shop"
            className="
            px-8
            py-4
            bg-black
            text-white
            rounded-full
            "
          >
            Shop Collection
          </Link>

          <Link
            href="/#technology"
            className="
            px-8
            py-4
            bg-black
            text-white
            rounded-full
            "
          >
            Explore Technology
          </Link>
        </div>

      </div>

      <div className="relative flex justify-center w-full">

        <div
          className="
          absolute
          inset-0
          m-auto
          w-[160px]
          h-[160px]
          md:w-[280px]
          md:h-[280px]
          lg:w-[380px]
          lg:h-[380px]
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
            className="relative z-10 w-full
            max-w-[200px]
            md:max-w-[340px]
            lg:max-w-[480px]
            xl:max-w-[520px]
            h-auto
            "
          />
        </motion.div>

      </div>

    </section>
  );
}