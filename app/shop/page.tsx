"use client";

import Link from "next/link";
import Image from "next/image";
import { useState } from "react";
import { useEffect } from "react";

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
  const [priceFilter, setPriceFilter] =
  useState("All");
  const [sortOption, setSortOption] =
  useState("Featured");
  const resetFilters = () => {
  setCategory("All");
  setPriceFilter("All");
  setSortOption("Featured");
};

useEffect(() => {
  if (showFilters) {
    document.body.style.overflow = "hidden";
  } else {
    document.body.style.overflow = "auto";
  }

  return () => {
    document.body.style.overflow = "auto";
  };
}, [showFilters]);

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
  )
  .filter((product) => {
    const price = Number(
      product.price.replace(/[₹,]/g, "")
    );

    if (priceFilter === "Under ₹5,000") {
      return price < 5000;
    }

    if (priceFilter === "₹5,000 - ₹7,000") {
      return price >= 5000 && price <= 7000;
    }

    if (priceFilter === "₹7,000+") {
      return price > 7000;
    }

    return true;
  })
    .sort((a, b) => {

    const priceA = Number(
      a.price.replace(/[₹,]/g, "")
    );

    const priceB = Number(
      b.price.replace(/[₹,]/g, "")
    );

    if (sortOption === "Price Low → High") {
      return priceA - priceB;
    }

    if (sortOption === "Price High → Low") {
      return priceB - priceA;
    }

    return 0;
  });

  return (
    <>
  {showFilters && (
    <>
      <div
        className="
        fixed
        inset-0
        bg-black/30
        z-40
        "
        onClick={() => setShowFilters(false)}
      />

      <div
        className="
        fixed
        top-20
        right-0
        h-[calc(100vh-80px)]
        w-80
        bg-white
        shadow-2xl
        z-50
        overflow-y-auto
        p-6
        "
        onClick={(e) => e.stopPropagation()}
      >

        <h3 className="font-bold text-xl mb-4">
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
    {category !== "All" && ` • ${category}`}
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
            setShowCategories(true);
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
    {priceFilter !== "All" && ` • ${priceFilter}`}
  </button>

  {showPrice && (
    <div className="space-y-2 mt-2">

      {[
        "All",
        "Under ₹5,000",
        "₹5,000 - ₹7,000",
        "₹7,000+",
      ].map((price) => (
        <button
          key={price}
          onClick={() => {
            setPriceFilter(price);
            setShowPrice(true);
          }}
          className={`
          w-full
          text-left
          px-4
          py-3
          rounded-xl
          transition
          ${
            priceFilter === price
              ? "bg-black text-white"
              : "hover:bg-zinc-100"
          }
          `}
        >
          {price}
        </button>
      ))}

    </div>
  )}

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
    {sortOption !== "Featured" && ` • ${sortOption}`}
  </button>
  {showSort && (
    <div className="space-y-2 mt-2">

      {[
        "Featured",
        "Price Low → High",
        "Price High → Low",
      ].map((sort) => (
        <button
          key={sort}
          onClick={() => {
            setSortOption(sort);
            setShowSort(true);
          }}
          className={`
          w-full
          text-left
          px-4
          py-3
          rounded-xl
          transition
          ${
            sortOption === sort
              ? "bg-black text-white"
              : "hover:bg-zinc-100"
          }
          `}
        >
          {sort}
        </button>
      ))}

    </div>
  )}

</div>

<button
  onClick={resetFilters}
  className="
  w-full
  mt-6
  border
  py-3
  rounded-full
  hover:bg-zinc-100
  transition
  "
>
  Reset Filters
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
    </>
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
    onClick={() => {
      setShowFilters(!showFilters);

      if (!showFilters) {
        setShowCategories(category !== "All");
        setShowPrice(priceFilter !== "All");
        setShowSort(sortOption !== "Featured");
      }
    }}
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