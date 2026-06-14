"use client";

import { motion } from "framer-motion";

export default function Technology() {
  return (
    <section className="py-16 px-10 bg-zinc-50">
      <div className="max-w-7xl mx-auto">

        <h2 className="text-5xl font-black text-center mb-4 text-zinc-900">
          Built For Comfort
        </h2>

        <p className="text-center text-zinc-500 mb-16">
          Every step engineered for performance.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">

          <motion.div
            whileHover={{ y: -10 }}
            transition={{ duration: 0.3 }}
            className="bg-white rounded-3xl p-12 min-h-[220px] shadow-lg"
          >
            <h3 className="text-3xl font-bold mb-4 text-zinc-900">
              Ultra Comfort
            </h3>

            <p className="text-zinc-500">
              Soft cushioning designed for all-day wear.
            </p>
          </motion.div>

          <motion.div
            whileHover={{ y: -10 }}
            transition={{ duration: 0.3 }}
            className="bg-white rounded-3xl p-12 min-h-[220px]  shadow-lg"
          >
            <h3 className="text-3xl font-bold mb-4 text-zinc-900">
              Impact Absorption
            </h3>

            <p className="text-zinc-500">
              Advanced sole technology reduces stress on your feet.
            </p>
          </motion.div>

          <motion.div
            whileHover={{ y: -10 }}
            transition={{ duration: 0.3 }}
            className="bg-white rounded-3xl p-12 min-h-[220px] shadow-lg"
          >
            <h3 className="text-3xl font-bold mb-4 text-zinc-900">
              Lightweight Design
            </h3>

            <p className="text-zinc-500">
              Maximum performance with minimum weight.
            </p>
          </motion.div>

        </div>

      </div>
    </section>
  );
}