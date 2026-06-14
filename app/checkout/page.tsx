"use client";
import Link from "next/link";
import { useCart } from "@/context/CartContext";

export default function CheckoutPage() {
  const { cart, clearCart } = useCart();

  const total = cart.reduce(
    (sum, item) =>
      sum + Number(item.price.replace(/[₹,]/g, "")),
    0
  );
  return (
    <main className="min-h-screen bg-zinc-50 px-10 pt-32 pb-28">

      <div className="max-w-6xl mx-auto">

        <h1 className="text-6xl font-black mb-12">
          Checkout
        </h1>

        <div className="grid lg:grid-cols-2 gap-10">

          <div
            className="
            bg-white
            rounded-[32px]
            p-10
            shadow-lg
            "
          >

            <h2 className="text-3xl font-bold mb-8">
              Customer Information
            </h2>

            <div className="space-y-6">

              <input
                type="text"
                placeholder="Full Name"
                className="w-full border rounded-xl px-4 py-4"
              />

              <input
                type="email"
                placeholder="Email Address"
                className="w-full border rounded-xl px-4 py-4"
              />

              <input
                type="text"
                placeholder="Phone Number"
                className="w-full border rounded-xl px-4 py-4"
              />

              <textarea
                placeholder="Shipping Address"
                rows={4}
                className="w-full border rounded-xl px-4 py-4"
              />

            </div>

            <h2 className="text-3xl font-bold mt-12 mb-8">
              Payment Method
            </h2>

            <div className="space-y-4">

              <label className="flex items-center gap-3">
                <input type="radio" name="payment" />
                Credit / Debit Card
              </label>

              <label className="flex items-center gap-3">
                <input type="radio" name="payment" />
                UPI
              </label>

              <label className="flex items-center gap-3">
                <input type="radio" name="payment" />
                Cash On Delivery
              </label>

            </div>

          </div>

          <div
            className="
            bg-white
            rounded-[32px]
            p-10
            shadow-lg
            h-fit
            "
          >

            <h2 className="text-3xl font-bold mb-8">
              Order Summary
            </h2>

            <div className="space-y-4 text-lg">

              {cart.map((item, index) => (
                <div
                  key={index}
                  className="flex justify-between"
                >
                  <span>{item.name}</span>
                  <span>{item.price}</span>
                </div>
              ))}

            </div>

            <div className="border-t mt-8 pt-8">

              <div className="flex justify-between text-2xl font-bold">
                <span>Total</span>
                <span>₹{total}</span>
              </div>

            </div>

            <Link
              href="/order-success"
              onClick={() => clearCart()}
              className="
              mt-10
              block
              text-center
              bg-black
              text-white
              py-4
              rounded-full
              "
            >
              Place Order
            </Link>

          </div>

        </div>

      </div>

    </main>
  );
}