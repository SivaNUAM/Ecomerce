import React from "react";

const Footer = () => {
  return (
    <footer className="bg-[#2E7D32] text-white py-12">
      <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-10">
        
        {/* Quick Links */}
        <div className="text-center sm:text-left">
          <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
          <ul className="space-y-2">
            <li>
              <a href="#products" className="hover:text-[#FFD54F] transition-colors duration-300">
                Products
              </a>
            </li>
            <li>
              <a href="#about" className="hover:text-[#FFD54F] transition-colors duration-300">
                About
              </a>
            </li>
            <li>
              <a href="#contact" className="hover:text-[#FFD54F] transition-colors duration-300">
                Contact
              </a>
            </li>
          </ul>
        </div>

        {/* Contact Info */}
        <div className="text-center sm:text-left">
          <h3 className="text-lg font-semibold mb-4">Contact</h3>
          <p className="mb-2">
            Email:{" "}
            <a href="mailto:info@velocity.com" className="hover:text-[#FFD54F] transition-colors">
              info@velocity.com
            </a>
          </p>
          <p>
            Phone:{" "}
            <a href="tel:+911234567890" className="hover:text-[#FFD54F] transition-colors">
              +91 123 456 7890
            </a>
          </p>
        </div>

        {/* Newsletter */}
        <div className="text-center sm:text-left">
          <h3 className="text-lg font-semibold mb-4">Stay Connected</h3>
          <p className="text-sm text-white/80">Subscribe to our newsletter for latest updates.</p>
          <form className="mt-3 flex flex-col sm:flex-row gap-2 justify-center sm:justify-start">
            <input
              type="email"
              placeholder="Your email"
              className="flex-1 px-4 py-2 rounded-lg border border-white/30 bg-white/10 focus:outline-none focus:ring-2 focus:ring-[#FFD54F] text-white placeholder-white/70"
            />
            <button
              type="submit"
              className="px-6 py-2 bg-[#FFD54F] text-[#2E7D32] rounded-lg font-semibold shadow hover:shadow-lg transition-all duration-300"
            >
              Subscribe
            </button>
          </form>
        </div>
      </div>

      {/* Copyright */}
      <div className="mt-10 text-center text-sm text-white/80">
        &copy; {new Date().getFullYear()} Velocity. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;
