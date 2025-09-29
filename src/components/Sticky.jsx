import React from "react";

const Sticky = () => {
  return (
    <a
      href="#ayurvedic"
      className="
        fixed bottom-4 right-4 sm:bottom-6 sm:right-6 z-50
        bg-gradient-to-r from-green-500 via-green-600 to-green-700
        text-white font-semibold tracking-wide
        px-6 py-3 sm:px-7 sm:py-3.5
        rounded-full shadow-xl backdrop-blur-md
        hover:from-green-600 hover:via-green-700 hover:to-green-800
        hover:scale-105 active:scale-95
        transition-all duration-300 ease-out
        flex items-center justify-center gap-3
        text-sm sm:text-base
        cursor-pointer select-none
        ring-2 ring-green-400/40 hover:ring-green-500/60
        animate-bounce
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

      <span className="whitespace-nowrap">Explore Ayurvedic</span>
    </a>
  );
};

export default Sticky;
