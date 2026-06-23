"use client";

import { useState } from "react";

export default function TrackOrderPage() {
  const [orderNumber, setOrderNumber] =
    useState("");

  const [searched, setSearched] =
    useState(false);

  return (
    <main className="min-h-screen bg-zinc-50 pt-32 pb-20 px-10">

      <div className="max-w-3xl mx-auto">

        <h1 className="text-5xl md:text-6xl font-black text-center mb-6">
          Track Order
        </h1>

        <p className="text-center text-zinc-500 mb-12">
          Enter your order number below.
        </p>

        <div className="bg-white rounded-[32px] p-8 shadow-lg">

          <input
            type="text"
            placeholder="Enter Order Number (e.g. SLX2026001)"
            value={orderNumber}
            onChange={(e) =>
              setOrderNumber(e.target.value)
            }
            className="
            w-full
            border
            rounded-xl
            px-4
            py-4
            mb-6
            "
          />

          <button
            onClick={() => {
              if (orderNumber.trim()) {
                setSearched(true);
              }
            }}
            className="
            w-full
            bg-black
            text-white
            py-4
            rounded-full
            "
          >
            Track Order
          </button>

        </div>

        {searched && (
          <div className="bg-white rounded-[32px] p-8 shadow-lg mt-10">

            <p className="text-zinc-500 mb-2">
              Order Number
            </p>

            <h3 className="text-2xl font-bold mb-8">
              #{orderNumber}
            </h3>

            <h2 className="text-2xl font-bold mb-6">
              Order Status
            </h2>

            <div className="space-y-4">

              <p>✅ Order Confirmed</p>
              <p>✅ Packed</p>
              <p>🚚 Shipped</p>
              <p className="text-zinc-400">
                ⏳ Out For Delivery
              </p>

            </div>
            <p className="mt-8 text-zinc-500">
              Estimated Delivery:
              <span className="font-semibold text-black">
                {" "}2-4 Business Days
              </span>
            </p>

          </div>
        )}

      </div>

    </main>
  );
}