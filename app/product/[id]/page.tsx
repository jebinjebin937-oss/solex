
import Image from "next/image";
import AddToCartButton from "@/components/AddToCartButton";

export default async function ProductPage({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const { id } = await params;

  const products = [
    {
      id: "1",
      name: "Air Runner",
      price: "₹4,999",
      image: "/images/running.png",
      description:
        "Built for speed and endurance with lightweight cushioning.",
    },
    {
      id: "2",
      name: "Urban Flow",
      price: "₹5,999",
      image: "/images/lifestyle.png",
      description:
        "Modern lifestyle footwear for everyday comfort.",
    },
    {
      id: "3",
      name: "Elite Black",
      price: "₹7,999",
      image: "/images/premium.png",
      description:
        "Luxury materials with premium craftsmanship.",
    },
    {
      id: "4",
      name: "Air Flex Pro",
      price: "₹6,999",
      image: "/images/showcase.png",
      description:
        "Performance footwear engineered for the future.",
    },
  ];

  const product = products.find((p) => p.id === id);
  
  if (!product) {
    return (
      <div className="p-20 text-center">
        Product Not Found
      </div>
    );
  }

  return (
    <main className="min-h-screen bg-zinc-50 py-20 px-10">

      <div
        className="
        max-w-7xl
        mx-auto
        bg-white
        rounded-[40px]
        shadow-xl
        p-12
        grid
        md:grid-cols-2
        gap-12
        items-center
        "
      >

        <div className="flex justify-center">

          <Image
            src={product.image}
            alt={product.name}
            width={600}
            height={600}
            className="h-auto"
          />

        </div>

        <div>

          <p className="uppercase tracking-[6px] text-zinc-400 mb-4">
            SOLEX COLLECTION
          </p>

          <h1 className="text-7xl font-black text-black mb-6">
            {product.name}
          </h1>

          <p className="text-zinc-600 text-lg mb-8">
            {product.description}
          </p>

          <p className="text-5xl font-black text-black mb-10">
            {product.price}
          </p>

          <div className="flex gap-4 mb-10">

            <button className="border px-6 py-3 rounded-full">
              UK 7
            </button>

            <button className="border px-6 py-3 rounded-full">
              UK 8
            </button>

            <button className="border px-6 py-3 rounded-full">
              UK 9
            </button>

          </div>

          <div className="flex gap-4">

            <AddToCartButton
              product={{
                id: product.id,
                name: product.name,
                price: product.price,
                image: product.image,
              }}
            />

            <button
              className="
              px-8
              py-4
              border
              rounded-full
              "
            >
              Buy Now
            </button>

          </div>

        </div>

      </div>

    </main>
  );
}