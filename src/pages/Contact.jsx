import React from "react";

const Contact = () => {
  return (
    <section className="bg-[#FFFFFF] min-h-screen py-24 px-6 md:px-12 text-[#2E7D32]">
      {/* Header */}
      <div className="max-w-5xl mx-auto text-center mb-20">
        <h1 className="text-5xl md:text-6xl font-extrabold mb-6 text-[#2E7D32] tracking-tight">
          Let's Connect
        </h1>
        <p className="text-[#4CAF50] text-xl md:text-2xl max-w-3xl mx-auto">
          Have questions about our premium spices or need help with your order? Reach out, and let's bring flavor to your world!
        </p>
      </div>

      {/* Form Container */}
      <div className="max-w-4xl mx-auto bg-[#F7F7F7] rounded-3xl shadow-xl p-10 md:p-16 border border-[#A5D6A7] mb-20">
        <form className="flex flex-col gap-8">
          <div className="relative">
            <input
              type="text"
              placeholder="Your Name"
              required
              className="w-full px-6 py-4 border border-[#A5D6A7] rounded-full focus:outline-none focus:ring-2 focus:ring-[#4CAF50] text-[#2E7D32] bg-[#FFFFFF] placeholder-[#4CAF50]/70 hover:bg-[#F7F7F7] transition-colors duration-300"
            />
          </div>
          <div className="relative">
            <input
              type="email"
              placeholder="Your Email"
              required
              className="w-full px-6 py-4 border border-[#A5D6A7] rounded-full focus:outline-none focus:ring-2 focus:ring-[#4CAF50] text-[#2E7D32] bg-[#FFFFFF] placeholder-[#4CAF50]/70 hover:bg-[#F7F7F7] transition-colors duration-300"
            />
          </div>
          <div className="relative">
            <textarea
              placeholder="Your Message"
              required
              className="w-full px-6 py-4 border border-[#A5D6A7] rounded-2xl focus:outline-none focus:ring-2 focus:ring-[#4CAF50] text-[#2E7D32] h-40 resize-none bg-[#FFFFFF] placeholder-[#4CAF50]/70 hover:bg-[#F7F7F7] transition-colors duration-300"
            ></textarea>
          </div>
          <button
            className="px-8 py-4 bg-[#4CAF50] text-[#FFFFFF] font-bold rounded-full shadow-lg hover:bg-[#2E7D32] transition-all duration-300"
          >
            Send Message
          </button>
        </form>
      </div>

      {/* FAQ Section */}
      <div className="max-w-5xl mx-auto mb-20">
        <h2 className="text-4xl font-extrabold text-[#2E7D32] text-center mb-12">
          Frequently Asked Questions
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="p-8 bg-[#FFFFFF] border border-[#A5D6A7] rounded-2xl shadow-md hover:shadow-lg transition-shadow duration-300">
            <h3 className="text-2xl font-semibold text-[#2E7D32] mb-4">
              Where are your spices sourced?
            </h3>
            <p className="text-[#2E7D32]">
              Our spices come from sustainable, organic farms in India, ensuring rich flavors and ethical practices.
            </p>
          </div>
          <div className="p-8 bg-[#FFFFFF] border border-[#A5D6A7] rounded-2xl shadow-md hover:shadow-lg transition-shadow duration-300">
            <h3 className="text-2xl font-semibold text-[#2E7D32] mb-4">
              What are your shipping options?
            </h3>
            <p className="text-[#2E7D32]">
              We offer global standard (5-7 days) and express (2-3 days) shipping. Contact us for regional details.
            </p>
          </div>
          <div className="p-8 bg-[#FFFFFF] border border-[#A5D6A7] rounded-2xl shadow-md hover:shadow-lg transition-shadow duration-300">
            <h3 className="text-2xl font-semibold text-[#2E7D32] mb-4">
              Do you offer bulk discounts?
            </h3>
            <p className="text-[#2E7D32]">
              Yes, we provide tailored pricing for bulk orders. Reach out for a personalized quote.
            </p>
          </div>
          <div className="p-8 bg-[#FFFFFF] border border-[#A5D6A7] rounded-2xl shadow-md hover:shadow-lg transition-shadow duration-300">
            <h3 className="text-2xl font-semibold text-[#2E7D32] mb-4">
              What's your return policy?
            </h3>
            <p className="text-[#2E7D32]">
              We offer a 30-day return policy for unopened products. Contact support for hassle-free returns.
            </p>
          </div>
        </div>
      </div>

      {/* Testimonial Section */}
      <div className="max-w-5xl mx-auto mb-20">
        <h2 className="text-4xl font-extrabold text-[#2E7D32] text-center mb-12">
          What Our Customers Love
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="p-8 bg-[#FFFFFF] border border-[#A5D6A7] rounded-2xl shadow-md hover:shadow-lg transition-shadow duration-300 text-center">
            <p className="text-[#2E7D32] italic mb-6">
              "The cardamom is so fresh, it transformed my chai recipe!"
            </p>
            <p className="text-[#4CAF50] font-bold">- Neha V.</p>
          </div>
          <div className="p-8 bg-[#FFFFFF] border border-[#A5D6A7] rounded-2xl shadow-md hover:shadow-lg transition-shadow duration-300 text-center">
            <p className="text-[#2E7D32] italic mb-6">
              "Top-notch quality and fast delivery. My kitchen is obsessed!"
            </p>
            <p className="text-[#4CAF50] font-bold">- Maria L.</p>
          </div>
          <div className="p-8 bg-[#FFFFFF] border border-[#A5D6A7] rounded-2xl shadow-md hover:shadow-lg transition-shadow duration-300 text-center">
            <p className="text-[#2E7D32] italic mb-6">
              "Perfect for our restaurant's bulk needs. Highly recommend!"
            </p>
            <p className="text-[#4CAF50] font-bold">- Chef Ankit P.</p>
          </div>
        </div>
      </div>

      {/* Contact Info & Map */}
      <div className="max-w-5xl mx-auto">
        <h2 className="text-4xl font-extrabold text-[#2E7D32] text-center mb-12">
          Find Us
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          <div className="flex flex-col justify-center text-center md:text-left space-y-6">
            <p className="text-xl text-[#2E7D32]">
              Email:{" "}
              <a href="mailto:info@spices.com" className="text-[#4CAF50] hover:text-[#2E7D32] transition-colors duration-300">
                info@spices.com
              </a>
            </p>
            <p className="text-xl text-[#2E7D32]">
              Phone:{" "}
              <a href="tel:+911234567890" className="text-[#4CAF50] hover:text-[#2E7D32] transition-colors duration-300">
                +91 123 456 7890
              </a>
            </p>
            <p className="text-xl text-[#2E7D32]">Address: 123 Spice Avenue, Flavor City, India</p>
            <div className="flex justify-center md:justify-start gap-6 mt-6">
              <a
                href="https://x.com/spiceshop"
                className="text-[#4CAF50] hover:text-[#2E7D32] transition-colors duration-300"
              >
                <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
                </svg>
              </a>
              <a
                href="https://instagram.com/spiceshop"
                className="text-[#4CAF50] hover:text-[#2E7D32] transition-colors duration-300"
              >
                <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849s-.012 3.584-.069 4.849c-.148 3.252-1.691 4.771-4.919 4.919-1.266.058-1.645.069-4.849.069s-3.584-.012-4.849-.069c-3.252-.148-4.771-1.691-4.919-4.919-.058-1.265-.069-1.645-.069-4.849s.012-3.584.069-4.849c.148-3.252 1.691-4.771 4.919-4.919 1.266-.058 1.645-.069 4.849-.069zM12 0C8.741 0 8.332.014 7.052.072 3.528.227 1.674 1.976 1.519 5.52.014 8.332 0 8.741 0 12c0 3.259.014 3.668.072 4.948.155 3.544 1.904 5.398 5.448 5.553 1.28.058 1.689.072 4.948.072s3.668-.014 4.948-.072c3.544-.155 5.398-1.904 5.553-5.448.058-1.28.072-1.689.072-4.948s-.014-3.668-.072-4.948c-.155-3.544-1.904-5.398-5.448-5.553C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zm0 10.162a3.999 3.999 0 110-7.998 3.999 3.999 0 010 7.998zm6.406-11.845a1.44 1.44 0 11-2.88 0 1.44 1.44 0 012.88 0z" />
                </svg>
              </a>
            </div>
          </div>
          <div className="h-80 bg-[#F7F7F7] rounded-2xl flex items-center justify-center border border-[#A5D6A7] shadow-md">
            <p className="text-[#2E7D32] text-2xl font-semibold px-6 text-center">
              Interactive Map of 123 Spice Avenue (Embed Placeholder)
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;