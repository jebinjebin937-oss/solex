import Link from "next/link";

export default function OrderSuccessPage() {
  return (
    <main className="min-h-screen bg-zinc-50 flex items-center justify-center px-10">

      <div
        className="
        max-w-2xl
        w-full
        bg-white
        rounded-[40px]
        shadow-xl
        p-16
        text-center
        "
      >

        <div className="text-7xl mb-8">
          🎉
        </div>

        <h1 className="text-6xl font-black text-black mb-6">
          Order Confirmed
        </h1>

        <p className="text-zinc-500 text-lg mb-10">
          Thank you for choosing SOLEX.
          Your order has been successfully placed and is being processed.
        </p>

        <div
          className="
          bg-zinc-50
          rounded-3xl
          p-8
          mb-10
          "
        >

          <p className="text-zinc-500 mb-2">
            Order Number
          </p>

          <h2 className="text-3xl font-black">
            #SLX2026001
          </h2>

        </div>

        <div className="flex flex-col md:flex-row gap-4 justify-center">

          <Link
            href="/"
            className="
            px-8
            py-4
            bg-black
            text-white
            rounded-full
            "
          >
            Back To Home
          </Link>

          <Link
            href="/shop"
            className="
            px-8
            py-4
            border
            rounded-full
            "
          >
            Continue Shopping
          </Link>

        </div>

      </div>

    </main>
  );
}