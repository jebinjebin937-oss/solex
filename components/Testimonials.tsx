"use client";

import { motion } from "framer-motion";

export default function Testimonials() {
  return (
    <section className="py-32 px-10 bg-zinc-50">
      <div className="max-w-7xl mx-auto">

        <h2 className="text-5xl md:text-6xl font-black text-center text-black mb-6">
          What People Say
        </h2>

        <p className="text-center text-zinc-500 mb-20 text-lg">
          Trusted by thousands of customers worldwide.
        </p>

        <div className="grid md:grid-cols-3 gap-8">

          <motion.div
            whileHover={{
              y: -10,
            }}
            transition={{
              duration: 0.3,
            }}
            className="bg-white p-10 rounded-[32px] shadow-lg min-h-[250px] flex flex-col justify-between"
          >
            <div className="text-2xl mb-4">
              ⭐⭐⭐⭐⭐
            </div>

            <p className="text-zinc-600 mb-6">
              Most comfortable shoes I have ever worn.
              The cushioning feels incredible.
            </p>

            <h4 className="font-bold text-black">
              Rahul Sharma
            </h4>
          </motion.div>

          <motion.div
            whileHover={{
              y: -10,
            }}
            transition={{
              duration: 0.3,
            }}
            className="bg-white p-10 rounded-[32px] shadow-lg min-h-[250px] flex flex-col justify-between"
          >
            <div className="text-2xl mb-4">
              ⭐⭐⭐⭐⭐
            </div>

            <p className="text-zinc-600 mb-6">
              Premium quality and amazing style.
              Worth every rupee.
            </p>

            <h4 className="font-bold text-black">
              Priya Patel
            </h4>
          </motion.div>

          <motion.div
            whileHover={{
              y: -10,
            }}
            transition={{
              duration: 0.3,
            }}
            className="bg-white p-10 rounded-[32px] shadow-lg min-h-[250px] flex flex-col justify-between"
          >
            <div className="text-2xl mb-4">
              ⭐⭐⭐⭐⭐
            </div>

            <p className="text-zinc-600 mb-6">
              Lightweight, stylish and perfect for
              everyday wear.
            </p>

            <h4 className="font-bold text-black">
              Arjun Kumar
            </h4>
          </motion.div>

        </div>

      </div>
    </section>
  );
}