import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { Menu, X, Search, ShoppingCart } from "lucide-react";

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isSearchOpen, setIsSearchOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  const navLinks = [
    { name: "Home", href: "/" },
    { name: "About", href: "/about" },
    { name: "Shop", href: "/products" },
    { name: "Contact", href: "/contact" },
  ];

  // Detect scroll
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) setScrolled(true);
      else setScrolled(false);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Header background classes based on scroll
  const headerBg = scrolled
    ? "bg-[#DFF5E1]/90 border-[#A8D5A2]"
    : "bg-[#DFF5E1]/50 border-[#A8D5A2]/50";

  return (
    <header
      className={`fixed w-full top-0 z-50 shadow-lg border-b transition-colors duration-300 ${headerBg}`}
    >
      <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">
        {/* Logo */}
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
          className="flex items-center gap-2 text-2xl font-bold text-[#4B2E2E] group"
        >
          <div className="w-10 h-10 bg-gradient-to-br from-[#6F4E37] to-[#D2691E] rounded-lg shadow-md flex items-center justify-center group-hover:scale-110 transition-transform">
            <span className="text-white font-semibold text-sm">CA</span>
          </div>
          Velocity
        </motion.div>

        {/* Desktop Nav */}
        <nav className="hidden md:flex items-center justify-center flex-1 gap-10">
          {navLinks.map((link, i) => (
            <motion.a
              key={link.name}
              href={link.href}
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.1, duration: 0.4 }}
              className="relative text-[#4B2E2E] hover:text-[#D2691E] font-medium transition-colors duration-200 group"
            >
              {link.name}
              <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-[#D2691E] group-hover:w-full transition-all duration-300"></span>
            </motion.a>
          ))}
        </nav>

        {/* Desktop Actions */}
        <div className="hidden md:flex items-center gap-4">
          <motion.button
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            className="text-[#4B2E2E] hover:text-[#D2691E] transition-colors duration-200 relative"
            onClick={() => setIsSearchOpen(!isSearchOpen)}
            aria-label="Toggle search"
          >
            <Search size={24} />
          </motion.button>

          <motion.button
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            className="text-[#4B2E2E] hover:text-[#D2691E] transition-colors duration-200 relative"
            aria-label="Cart"
          >
            <ShoppingCart size={24} />
          </motion.button>

          <motion.a
            href="#products"
            whileHover={{ scale: 1.05, y: -2 }}
            whileTap={{ scale: 0.98 }}
            className="px-6 py-3 bg-[#D2691E] hover:bg-[#2E7D32] text-white font-semibold rounded-lg shadow-lg hover:shadow-xl transition-all duration-300"
          >
            Shop Now
          </motion.a>
        </div>

        {/* Mobile Actions */}
        <div className="md:hidden flex items-center gap-2">
          <motion.button
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            className="text-[#4B2E2E] hover:text-[#D2691E] transition-colors duration-200 relative"
            onClick={() => setIsSearchOpen(!isSearchOpen)}
            aria-label="Toggle search"
          >
            <Search size={24} />
          </motion.button>

          <motion.button
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            className="text-[#4B2E2E] hover:text-[#D2691E] transition-colors duration-200 relative"
            aria-label="Cart"
          >
            <ShoppingCart size={24} />
          </motion.button>

          <button
            className="relative p-2 text-[#4B2E2E] hover:text-[#D2691E] transition-colors duration-200"
            onClick={() => {
              setIsOpen(!isOpen);
              setIsSearchOpen(false);
            }}
            aria-label="Toggle menu"
          >
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Desktop Search */}
      <motion.div
        initial={{ opacity: 0, width: 0 }}
        animate={{
          opacity: isSearchOpen ? 1 : 0,
          width: isSearchOpen ? "100%" : 0,
          x: isSearchOpen ? 0 : "100%",
        }}
        transition={{ duration: 0.3, ease: "easeInOut" }}
        className={`md:flex hidden overflow-hidden shadow-lg border-t absolute top-full left-0 w-full transition-colors duration-300 ${
          scrolled ? "bg-[#DFF5E1]/90 border-[#A8D5A2]" : "bg-[#DFF5E1]/50 border-[#A8D5A2]/50"
        }`}
      >
        <div className="max-w-7xl mx-auto px-6 py-4 w-full">
          <div className="relative">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-500" size={20} />
            <input
              type="text"
              placeholder="Search coffee, almonds..."
              className="w-full pl-10 pr-4 py-2 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-[#D2691E] focus:border-transparent text-gray-700"
              autoFocus
              onBlur={() => setIsSearchOpen(false)}
            />
          </div>
        </div>
      </motion.div>

      {/* Mobile Menu */}
      <motion.div
        initial={{ opacity: 0, height: 0 }}
        animate={{ opacity: isOpen ? 1 : 0, height: isOpen ? "auto" : 0 }}
        transition={{ duration: 0.3, ease: "easeInOut" }}
        className={`md:hidden overflow-hidden shadow-lg border-t transition-colors duration-300 ${
          scrolled ? "bg-[#DFF5E1]/90 border-[#A8D5A2]" : "bg-[#DFF5E1]/50 border-[#A8D5A2]/50"
        }`}
      >
        <div className="px-6 py-6 flex flex-col gap-4">
          <motion.button
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            className="flex items-center gap-2 text-[#4B2E2E] hover:text-[#D2691E] transition-colors duration-200 self-start"
            onClick={() => {
              setIsSearchOpen(!isSearchOpen);
              setIsOpen(false);
            }}
          >
            <Search size={20} /> Search
          </motion.button>

          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              className="relative py-2 text-[#4B2E2E] hover:text-[#D2691E] font-medium transition-colors duration-200 group"
              onClick={() => setIsOpen(false)}
            >
              {link.name}
              <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-[#D2691E] group-hover:w-full transition-all duration-300"></span>
            </a>
          ))}

          <a
            href="#products"
            className="px-6 py-3 bg-[#D2691E] hover:bg-[#2E7D32] text-white font-semibold rounded-lg shadow-lg hover:shadow-xl transition-all duration-300 text-center mt-2"
            onClick={() => setIsOpen(false)}
          >
            Shop Now
          </a>
        </div>
      </motion.div>
    </header>
  );
};

export default Header;
