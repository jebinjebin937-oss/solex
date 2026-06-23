"use client";
import Link from "next/link";
import Image from "next/image";
import { useState } from "react";

const products = [
  {
      id: "1",
      name: "Air Runner",
      price: "₹4,999",
      image: "/images/running.png",
  },
  {
      id: "2",
      name: "Urban Flow",
      price: "₹5,999",
      image: "/images/lifestyle.png",
  },
  {
      id: "3",
      name: "Elite Black",
      price: "₹7,999",
      image: "/images/premium.png",
  },
  {
      id: "4",
      name: "Air Flex Pro",
      price: "₹6,999",
      image: "/images/showcase.png",
  },
];

export default function ShopPage() {
  const [search, setSearch] = useState("");
  return (
    <main className="min-h-screen bg-zinc-50 pt-32 pb-20 px-10">

      <div className="max-w-7xl mx-auto">

        <h1 className="text-7xl font-black text-center mb-4">
          Shop
        </h1>

        <p className="text-center text-zinc-500 mb-16">
          Explore the SOLEX collection.
        </p>

        <div className="max-w-md mx-auto mb-12">
  <input
    type="text"
    placeholder="Search shoes..."
    value={search}
    onChange={(e) =>
      setSearch(e.target.value)
    }
    className="
    w-full
    px-5
    py-4
    border
    rounded-full
    outline-none
    "
  />
</div>

        <div className="grid md:grid-cols-4 gap-8">

          {products.filter((product) =>
  product.name
    .toLowerCase()
    .includes(search.toLowerCase())
).length === 0 ? (

  <div className="col-span-full text-center">
    <p className="text-zinc-500 text-lg">
      No products found.
    </p>
  </div>

) : (

  products
    .filter((product) =>
      product.name
        .toLowerCase()
        .includes(search.toLowerCase())
    )
    .map((product, index) => (
            <div
              key={index}
              className="
              bg-white
              rounded-[32px]
              p-6
              shadow-lg
              hover:shadow-2xl
              transition-all
              duration-300
              "
            >

              <Image
                src={product.image}
                alt={product.name}
                width={300}
                height={300}
                className="mx-auto"
              />

              <h3 className="text-2xl font-bold mt-6">
                {product.name}
              </h3>

              <p className="text-zinc-500 mt-2">
                {product.price}
              </p>

              <Link
                href={`/product/${product.id}`}
                className="
                mt-6
                w-full
                bg-black
                text-white
                py-3
                rounded-full
                block
                text-center
                "
              >
                View Product
              </Link>

            </div>
          ))
)}

        </div>

      </div>

    </main>
  );
}