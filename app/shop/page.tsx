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
    category: "Running",
  },
  {
    id: "2",
    name: "Urban Flow",
    price: "₹5,999",
    image: "/images/lifestyle.png",
    category: "Lifestyle",
  },
  {
    id: "3",
    name: "Elite Black",
    price: "₹7,999",
    image: "/images/premium.png",
    category: "Premium",
  },
  {
    id: "4",
    name: "Air Flex Pro",
    price: "₹6,999",
    image: "/images/showcase.png",
    category: "Running",
  },
];

export default function ShopPage() {
  const [search, setSearch] = useState("");
  const [category, setCategory] = useState("All");
  const [showFilters, setShowFilters] = useState(false);
  const [showCategories, setShowCategories] = useState(true);
  const [showPrice, setShowPrice] = useState(false);
  const [showSort, setShowSort] = useState(false);

  const filteredProducts = products
    .filter((product) =>
      product.name
        .toLowerCase()
        .includes(search.toLowerCase())
    )
    .filter((product) =>
      category === "All"
        ? true
        : product.category === category
    );

  return (
    <>
      {showFilters && (
        <div
          className="fixed inset-0 z-40"
          onClick={() => setShowFilters(false)}
        />
      )}
    <main className="min-h-screen bg-zinc-50 pt-32 pb-20 px-10">
      <div className="max-w-7xl mx-auto">

        <h1 className="text-7xl font-black text-center mb-4">
          Shop
        </h1>

        <p className="text-center text-zinc-500 mb-16">
          Explore the SOLEX collection.
        </p>

        <div className="max-w-xl mx-auto flex gap-3 mb-6 relative">

          <input
            type="text"
            placeholder="Search shoes..."
            value={search}
            onChange={(e) =>
              setSearch(e.target.value)
            }
            className="
            flex-1
            px-5
            py-4
            border
            rounded-full
            outline-none
            "
          />

          <div className="relative">

  <button
    onClick={() => setShowFilters(!showFilters)}
    className={`
    px-5
    py-4
    border
    rounded-full
    transition
    ${
      showFilters
        ? "bg-black text-white"
        : "hover:bg-black hover:text-white"
    }
    `}
  >
    ⚙
  </button>

  {showFilters && (
    <div onClick={(e) => e.stopPropagation()}
      className="
      absolute
      right-0
      top-16
      w-64
      bg-white
      rounded-3xl
      shadow-2xl
      p-5
      z-50
      "
    >
      <h3 className="font-bold mb-4">
        Filters
      </h3>

      <div>

  <button
    onClick={() =>
      setShowCategories(!showCategories)
    }
    className="
    w-full
    text-left
    font-semibold
    py-2
    "
  >
    {showCategories ? "▼" : "▶"} Categories
  </button>

  {showCategories && (
    <div className="space-y-2 mt-2">

      {[
        "All",
        "Running",
        "Lifestyle",
        "Premium",
      ].map((cat) => (
        <button
          key={cat}
          onClick={() => {
            setCategory(cat);
          }}
          className={`
          w-full
          text-left
          px-4
          py-3
          rounded-xl
          transition
          ${
            category === cat
              ? "bg-black text-white"
              : "hover:bg-zinc-100"
          }
          `}
        >
          {cat}
        </button>
      ))}
    </div>
  )}

</div>

<hr className="my-4" />

<div>

  <button
    onClick={() =>
      setShowPrice(!showPrice)
    }
    className="
    w-full
    text-left
    font-semibold
    py-2
    "
  >
    {showPrice ? "▼" : "▶"} Price
  </button>

</div>

<hr className="my-4" />

<div>

  <button
    onClick={() =>
      setShowSort(!showSort)
    }
    className="
    w-full
    text-left
    font-semibold
    py-2
    "
  >
    {showSort ? "▼" : "▶"} Sort
  </button>

  <button
  onClick={() =>
    setShowFilters(false)
  }
  className="
  w-full
  mt-6
  bg-black
  text-white
  py-3
  rounded-full
  "
>
  Done
</button>

</div>

    </div>
  )}

</div>
        </div>

        

        <div className="grid md:grid-cols-4 gap-8">

          {filteredProducts.length === 0 ? (

            <div className="col-span-full text-center">
              <p className="text-zinc-500 text-lg">
                No products found.
              </p>
            </div>

          ) : (

            filteredProducts.map((product) => (
              <div
                key={product.id}
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
    </>
  );
}