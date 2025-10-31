import React, { useState } from "react";
import { ChevronDown, MapPin, List, IndianRupee } from "lucide-react";

const Home: React.FC = () => {
  const [activeTab, setActiveTab] = useState("All");

  return (
    <div className="bg-gray-50">
      {/* Hero Section */}
      <section className="max-w-7xl mx-auto px-4 py-16">
        <h1 className="text-5xl md:text-6xl font-bold text-green-700 text-center mb-4">
          Instantly Rent
        </h1>
        <p className="text-center text-gray-600 mb-12">
          Your Property, Your Story, Our Commitment.
        </p>

        {/* Tab Buttons */}
        <div className="flex justify-center gap-4 mb-8">
          {["All", "Buy", "Rent", "Sale"].map((tab) => (
            <button
              key={tab}
              onClick={() => setActiveTab(tab)}
              className={`px-6 py-2 rounded-full font-medium transition ${
                activeTab === tab
                  ? "bg-green-700 text-white"
                  : "bg-white text-gray-700 hover:bg-gray-100"
              }`}
            >
              {tab}
            </button>
          ))}
        </div>

        {/* Search Bar */}
        <div className="bg-white rounded-2xl shadow-lg p-6 flex flex-wrap gap-4 items-center">
          <div className="flex-1 min-w-[200px] flex items-center gap-3 px-4 py-3 bg-gray-50 rounded-lg">
            <MapPin className="text-gray-400" size={20} />
            <input
              type="text"
              placeholder="Location, City Name"
              className="bg-transparent outline-none w-full"
            />
          </div>

          <div className="flex-1 min-w-[200px] flex items-center gap-3 px-4 py-3 bg-gray-50 rounded-lg">
            <List className="text-gray-400" size={20} />
            <select className="bg-transparent outline-none w-full">
              <option>Select Property Types</option>
              <option>Apartment</option>
              <option>House</option>
              <option>Villa</option>
            </select>
            <ChevronDown className="text-gray-400" size={20} />
          </div>

          <div className="flex-1 min-w-[180px] flex items-center gap-3 px-4 py-3 bg-gray-50 rounded-lg">
            <IndianRupee className="text-gray-400" size={20} />
            <select className="bg-transparent outline-none w-full">
              <option>Minium Price</option>
              <option>₹10,000</option>
              <option>₹25,000</option>
              <option>₹50,000</option>
            </select>
            <ChevronDown className="text-gray-400" size={20} />
          </div>

          <div className="flex-1 min-w-[180px] flex items-center gap-3 px-4 py-3 bg-gray-50 rounded-lg">
            <IndianRupee className="text-gray-400" size={20} />
            <select className="bg-transparent outline-none w-full">
              <option>Maximum Price</option>
              <option>₹50,000</option>
              <option>₹1,00,000</option>
              <option>₹2,00,000</option>
            </select>
            <ChevronDown className="text-gray-400" size={20} />
          </div>

          <button className="bg-green-700 text-white px-12 py-3 rounded-lg font-semibold hover:bg-green-800 transition">
            Search
          </button>
        </div>

        {/* Stats Section */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mt-24">
          <div>
            <div className="text-4xl font-bold text-green-700 mb-2">1,000+</div>
            <p className="text-gray-600">
              Exclusive & Premium Properties Available Just for You!
            </p>
          </div>

          <div>
            <div className="text-4xl font-bold text-green-700 mb-2">100%</div>
            <p className="text-gray-600">
              MDP Verified Dream Homes – Safe, Secure & Trustworthy!
            </p>
          </div>

          <div>
            <div className="text-4xl font-bold text-green-700 mb-2">200+</div>
            <p className="text-gray-600">
              Top Properties in the Best & Prime Locations!
            </p>
          </div>

          <div>
            <div className="text-4xl font-bold text-green-700 mb-2">149+</div>
            <p className="text-gray-600">
              Find Your Dream Property – Perfectly Tailored for You!
            </p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
