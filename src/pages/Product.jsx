import React from "react";
import { motion } from "framer-motion";
import Almond from "../assets/images/Almond.png"
import card from "../assets/images/card.png"
import card1 from "../assets/images/card1.png"
import card2 from "../assets/images/card2.png"
import card3 from "../assets/images/card3.png"
import card4 from "../assets/images/card4.png"
import card5 from "../assets/images/card5.png"
import card6 from "../assets/images/card6.png"
import card7 from "../assets/images/card7.png"
import card8 from "../assets/images/card8.png"
import card9 from "../assets/images/card9.png"
import card10 from "../assets/images/card10.png"
import card11 from "../assets/images/card11.png"

    const products = [
        {
          id: 1,
          name: "Cardamom 6-7 mm",
          price: "Rs ₹499",
          image:card     
        },
        {
          id: 2,
          name: "Cardamom 7-8 mm",
          price: " Rs ₹799",
          image:
            card1,
        },
        {
          id: 3,
          name: "Cardamom 8 mm",
          price: "Rs ₹599",
          image:
            card2,
        },
        {
          id: 4,
          name: "Cashew W240",
          price: "Rs ₹699",
          image:
            card4,
        },
           {
                id: 5,
                name: "Cinnamon Roll",
                price: "Rs ₹499",
                image:
                  card3,
              },
              {
                id: 6,
                name: "Cinnamon Stick",
                price: "Rs ₹799",
                image:
                 card5,
              },
              {
                id: 7,
                name: "Clove",
                price: "Rs ₹599",
                image:
                  card6,
              },
              {
                id: 8,
                name: "Coffee Powder",
                price: "Rs ₹699",
                image:
                  card7,
              },
               {
                id: 9,
                name: "Dry Ginger",
                price: "Rs ₹499",
                image:
                  card8,
              },
              {
                id: 10,
                name: "Kokum(Kudampuli)",
                price: "Rs ₹799",
                image:
                 card9,
              },
              {
                id: 11,
                name: "Nutmeg",
                price: "Rs ₹599",
                image:
                 card10,
              },
              {
                id: 12,
                name: "Pepper Garbled Bold",
                price: "Rs ₹699",
                image:
                 card11,
              },
      ];
    const Product = () => {
      return (
        <div>
  <section id="products" className="py-24 bg-gradient-to-b from-[#FAF9F6] to-[#FFF8E1]">
  <div className="max-w-7xl mx-auto px-6 text-center">
    <h2 className="text-4xl md:text-5xl font-bold text-[#2E7D32] mb-16">
      Our Premium Spices
    </h2>

    <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
      {products.map((product) => (
        <div
          key={product.id}
          className="bg-[#FFFDF5] rounded-2xl border border-[#E0C9A6]/60 shadow-sm hover:shadow-xl hover:-translate-y-1 transition-all duration-300 flex flex-col items-center p-6 group"
        >
          {/* Product Name */}
          <h3 className="text-[#4E342E] text-lg sm:text-xl font-semibold mb-4 group-hover:text-[#2E7D32] transition-colors duration-300">
            {product.name}
          </h3>

          {/* Product Image */}
          <div className="w-full flex justify-center">
            <img
              src={product.image}
              alt={product.name}
              className="w-full max-h-72 object-contain mb-4 rounded-lg group-hover:scale-105 transition-transform duration-300"
            />
          </div>

          {/* Price */}
          <p className="text-[#D2691E] text-base sm:text-lg font-bold mb-4">
            {product.price}
          </p>

          {/* Add to Cart Button */}
          <button
            onClick={() => addToCart(product)}
            className="mt-auto w-full px-5 py-2 sm:py-3 rounded-full font-semibold text-white bg-gradient-to-r from-[#2E7D32] to-[#4E9E45] hover:from-[#D2691E] hover:to-[#C75B1B] shadow-md hover:shadow-xl transition-all duration-300"
          >
            Add To Cart
          </button>
        </div>
      ))}
    </div>
  </div>
</section>


        </div>
        );
    };
export default Product;