import React from "react";
import { motion } from "framer-motion";
import Hero1 from "../assets/images/Hero1.jpg";
import card from "../assets/images/card.png";
import card1 from "../assets/images/card1.png";
import card2 from "../assets/images/card2.png";
import card3 from "../assets/images/card3.png";
import card4 from "../assets/images/card4.png";
import card5 from "../assets/images/card5.png";
import card6 from "../assets/images/card6.png";
import card7 from "../assets/images/card7.png";
import card8 from "../assets/images/card8.png";
import card9 from "../assets/images/card9.png";
import card10 from "../assets/images/card10.png";
import card11 from "../assets/images/card11.png";

const products = [
  { id: 1, name: "Cardamom 6-7 mm", price: "Rs ₹499", image: card },
  { id: 2, name: "Cardamom 7-8 mm", price: "Rs ₹799", image: card1 },
  { id: 3, name: "Cardamom 8 mm", price: "Rs ₹599", image: card2 },
  { id: 4, name: "Cashew W240", price: "Rs ₹699", image: card4 },
  { id: 5, name: "Cinnamon Roll", price: "Rs ₹499", image: card3 },
  { id: 6, name: "Cinnamon Stick", price: "Rs ₹799", image: card5 },
  { id: 7, name: "Clove", price: "Rs ₹599", image: card6 },
  { id: 8, name: "Coffee Powder", price: "Rs ₹699", image: card7 },
  { id: 9, name: "Dry Ginger", price: "Rs ₹499", image: card8 },
  { id: 10, name: "Kokum (Kudampuli)", price: "Rs ₹799", image: card9 },
  { id: 11, name: "Nutmeg", price: "Rs ₹599", image: card10 },
  { id: 12, name: "Pepper Garbled Bold", price: "Rs ₹699", image: card11 },
];

const Home = () => {
  return (
    <div>
      {/* Hero / Banner Section */}
<section
  className="relative h-[70vh] sm:h-[65vh] md:h-[55vh] lg:h-[70vh] xl:h-[80vh] flex items-center justify-center text-center text-white overflow-hidden"
>
  {/* Background Image */}
  <img
    src={Hero1}
    alt="Spice Banner"
    className="absolute inset-0 w-full h-full object-cover"
  />

  {/* Gradient Overlay */}
  <div className="absolute inset-0 bg-gradient-to-br from-[#2E7D32]/80 via-[#D2691E]/70 to-[#4E342E]/80 mix-blend-multiply"></div>

  {/* Banner Content */}
  <motion.div
    initial={{ opacity: 0, y: -30 }}
    animate={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.8 }}
    className="relative z-10 max-w-5xl px-4 sm:px-6"
  >
    {/* Heading */}
    <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-extrabold mb-6 leading-tight drop-shadow-lg mt-16 sm:mt-20">
      Fresh Spices from Nature’s Heart
    </h1>

    {/* Subheading */}
    <p className="text-sm sm:text-base md:text-lg lg:text-xl mb-8 sm:mb-10 max-w-2xl mx-auto text-white/90 drop-shadow-md">
      Handpicked cardamom, cinnamon, pepper, and more — naturally sourced and
      carefully packed to bring <span className="font-semibold">authentic flavors</span> straight to your kitchen.
    </p>

    {/* CTA Buttons */}
    <div className="flex flex-col sm:flex-row justify-center gap-4 md:gap-6 mb-10 sm:mb-12">
      <motion.a
        href="#products"
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
        className="px-6 sm:px-8 py-2 sm:py-3 bg-[#2E7D32] hover:bg-[#D2691E] text-white font-semibold rounded-full shadow-lg transition-all duration-300 text-sm sm:text-base"
      >
        Shop Now
      </motion.a>
      <motion.a
        href="/about"
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
        className="px-6 sm:px-8 py-2 sm:py-3 border-2 border-white text-white font-semibold rounded-full hover:bg-white hover:text-[#4E342E] transition-all duration-300 text-sm sm:text-base"
      >
        Learn More
      </motion.a>
    </div>

    {/* Features */}
    <div className="flex flex-wrap justify-center gap-4 sm:gap-6 md:gap-10 text-xs sm:text-sm md:text-base text-white/90 font-medium">
      <span className="flex items-center gap-2">🌍 100% Natural</span>
      <span className="flex items-center gap-2">🚚 Free Shipping</span>
      <span className="flex items-center gap-2">💳 Secure Payments</span>
    </div>
  </motion.div>
</section>



      {/* Products Section */}
<section
  id="products"
  className="py-24 bg-gradient-to-b from-[#FAF9F6] to-[#FFF8E1]"
>
  <div className="max-w-7xl mx-auto px-6 text-center">
    <h2 className="text-4xl md:text-5xl font-bold text-[#2E7D32] mt-[-60px]">
      Our Premium Spices
    </h2>

    <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 mt-5">
      {products.map((product) => (
        <div
          key={product.id}
          className="bg-[#FFFDF5] rounded-2xl border border-[#E0C9A6]/60 shadow-sm hover:shadow-xl hover:-translate-y-1 transition-all duration-300 flex flex-col items-center p-6 group cursor-pointer"
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
            className="mt-auto w-full px-5 py-2 sm:py-3 rounded-full font-semibold text-white bg-gradient-to-r from-[#2E7D32] to-[#4E9E45] hover:from-[#D2691E] hover:to-[#C75B1B] shadow-md hover:shadow-xl transition-all duration-300 cursor-pointer"
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

export default Home;
