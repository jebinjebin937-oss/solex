"use client";

import { useState } from "react";

export default function WishlistButton() {
  const [liked, setLiked] = useState(false);

  return (
    <button
      onClick={() => setLiked(!liked)}
      className="
      flex-1
      py-4
      border
      rounded-full
      transition
      "
    >
      {liked ? "❤️ Saved" : "🤍 Wishlist"}
    </button>
  );
}