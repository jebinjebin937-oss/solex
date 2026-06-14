"use client";

import { motion } from "framer-motion";
import Image from "next/image";

export default function FeaturedCollection() {
  return (
    <section className="py-20 px-10 bg-white">
      <div className="max-w-7xl mx-auto">

        <h2 className="text-6xl font-black text-center mb-6 text-zinc-900">
          Featured Collection
        </h2>

        <p className="text-center text-zinc-500 mb-20">
          Designed for every journey.
        </p>

        <div className="grid md:grid-cols-3 gap-8">

          <motion.div
            whileHover={{
              y: -10,
              scale: 1.03,
            }}
           className="group bg-white rounded-[40px] p-8 shadow-lg hover:shadow-2xl transition-all duration-300 border border-zinc-100"
          >
            <h3 className="text-3xl font-bold mb-6 text-zinc-900">
              Running
            </h3>

            <Image
              src="/images/running.png"
              alt="Running Shoe"
              width={340}
              height={340}
              className="mx-auto h-auto transition-transform duration-300 group-hover:scale-110"
            />
          </motion.div>

          <motion.div
            whileHover={{
              y: -10,
              scale: 1.03,
            }}
          className="group bg-white rounded-[40px] p-8 shadow-lg hover:shadow-2xl transition-all duration-300 border border-zinc-100"
          >
            <h3 className="text-3xl font-bold mb-6 text-zinc-900">
              Lifestyle
            </h3>

            <Image
              src="/images/lifestyle.png"
              alt="Lifestyle Shoe"
              width={340}
              height={340}
              className="mx-auto h-auto transition-transform duration-300 group-hover:scale-110"
            />
          </motion.div>

          <motion.div
            whileHover={{
              y: -10,
              scale: 1.03,
            }}
            className="group bg-white rounded-[40px] p-8 shadow-lg hover:shadow-2xl transition-all duration-300 border border-zinc-100"
          >
            <h3 className="text-3xl font-bold mb-6 text-zinc-900">
              Premium
            </h3>

            <Image
              src="/images/premium.png"
              alt="Premium Shoe"
              width={340}
              height={340}
              className="mx-auto h-auto transition-transform duration-300 group-hover:scale-110"
            />
          </motion.div>

        </div>

      </div>
    </section>
  );
}