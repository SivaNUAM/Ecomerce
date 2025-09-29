import React from "react";

const About = () => {
  return (
    <section className="relative bg-white text-gray-900 min-h-screen overflow-hidden">
      {/* Subtle Green Gradient Overlay */}
      <div className="absolute inset-0 bg-gradient-to-br from-green-50/50 to-green-100/30" />

      {/* Header */}
      <header className="relative z-10 py-20 px-6 md:px-12 text-center max-w-5xl mx-auto">
        <h1 className="text-4xl sm:text-5xl md:text-6xl font-extrabold tracking-tight text-green-800 mt-9">
          Our Spice Legacy
        </h1>
        <p className="text-lg sm:text-xl text-gray-600 leading-relaxed max-w-3xl mx-auto">
          From nature’s finest harvests to your kitchen, we deliver authentic spices with a commitment to quality and sustainability.
        </p>
      </header>

      {/* Main Content Sections */}
      <div className="relative z-10 max-w-6xl mx-auto px-6 md:px-12 grid grid-cols-1 lg:grid-cols-2 gap-10 pb-20">
        {/* Mission Section */}
        <div className="bg-white/90 border border-green-100 rounded-xl shadow-lg p-7 flex flex-col justify-between">
          <div>
            <h2 className="text-2xl sm:text-3xl font-bold text-green-700 mb-3">Our Mission</h2>
            <p className="text-gray-600 leading-relaxed mb-5">
              We source the purest spices sustainably, ensuring every pinch enhances your dishes with authentic flavor and care for the planet.
            </p>
          </div>
          <img
            src="https://images.unsplash.com/photo-1587316745621-3757c7076f6f?auto=format&fit=crop&w=800&q=80"
            alt="Mission"
            className="rounded-lg shadow-sm w-full object-cover h-60"
          />
        </div>

        {/* Journey Section */}
        <div className="bg-white/90 border border-green-100 rounded-xl shadow-lg p-7 flex flex-col justify-between">
          <div>
            <h2 className="text-2xl sm:text-3xl font-bold text-green-700 mb-3">Our Journey</h2>
            <p className="text-gray-600 leading-relaxed mb-5">
              From small-scale farms to global kitchens, our story is one of passion, quality, and preserving the essence of spices.
            </p>
          </div>
          <img
            src="https://images.unsplash.com/photo-1600185366461-5f95a5e37c29?auto=format&fit=crop&w=800&q=80"
            alt="Journey"
            className="rounded-lg shadow-sm w-full object-cover h-60"
          />
        </div>

        {/* Values Section */}
        <div className="bg-white/90 border border-green-100 rounded-xl shadow-lg p-7 flex flex-col lg:col-span-2">
          <h2 className="text-2xl sm:text-3xl font-bold text-green-700 mb-4">Our Core Values</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            <div className="flex items-start space-x-3">
              <span className="text-green-600 text-2xl">🌿</span>
              <div>
                <h3 className="font-semibold text-green-800">Sustainability</h3>
                <p className="text-gray-600">Eco-conscious sourcing to protect our planet.</p>
              </div>
            </div>
            <div className="flex items-start space-x-3">
              <span className="text-green-600 text-2xl">🤝</span>
              <div>
                <h3 className="font-semibold text-green-800">Integrity</h3>
                <p className="text-gray-600">Transparent practices from farm to table.</p>
              </div>
            </div>
            <div className="flex items-start space-x-3">
              <span className="text-green-600 text-2xl">🔬</span>
              <div>
                <h3 className="font-semibold text-green-800">Innovation</h3>
                <p className="text-gray-600">Modern techniques for timeless flavors.</p>
              </div>
            </div>
            <div className="flex items-start space-x-3">
              <span className="text-green-600 text-2xl">🌍</span>
              <div>
                <h3 className="font-semibold text-green-800">Community</h3>
                <p className="text-gray-600">Empowering farmers and uniting cultures.</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Footer Call to Action */}
      <footer className="relative z-10 py-12 px-6 md:px-12 text-center">
        <p className="text-lg text-gray-600 mb-4">Experience the essence of flavor.</p>
        <button className="bg-green-600 text-white px-6 py-3 rounded-full font-medium hover:bg-green-700 transition duration-300">
          Discover Our Spices
        </button>
      </footer>
    </section>
  );
};

export default About;