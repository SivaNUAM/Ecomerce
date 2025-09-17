import React from "react";

const Sticky = () => {
  return (
    <a
      href="#ayurvedic"
      className="
        fixed bottom-4 right-4 z-50
        bg-gradient-to-r from-green-500 to-green-600
        text-white font-bold
        px-5 py-3 sm:px-6 sm:py-3
        rounded-full shadow-2xl
        hover:from-green-600 hover:to-green-700
        hover:scale-105 transform transition-all duration-300
        flex items-center justify-center gap-3
        text-sm sm:text-base
        ring-2 ring-green-400/30 hover:ring-green-500/50
      "
    >
      {/* Leaf Icon */}
      <svg
        xmlns="http://www.w3.org/2000/svg"
        className="h-5 w-5 sm:h-6 sm:w-6"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
        strokeWidth={2}
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M12 3c4.97 0 9 4.03 9 9 0 5.25-9 9-9 9S3 17.25 3 12c0-4.97 4.03-9 9-9z"
        />
      </svg>

      <span>Explore Ayurvedic Products</span>
    </a>
  );
};

export default Sticky;
