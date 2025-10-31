import React, { useState } from "react";
import { Link } from "react-router-dom";
import { ChevronDown, Menu, X } from "lucide-react";
import "./nav.scss";

const Nav: React.FC = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  return (
    <header className="bg-white shadow-sm sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <Link to="/" className="flex items-center gap-2">
            <div className="w-10 h-10 bg-gradient-to-br from-red-500 to-orange-500 rounded-lg"></div>
            <div>
              <div className="font-bold text-xl">MyDearProperty</div>
              <div className="text-xs text-gray-600">Convert Dreams into Reality</div>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center gap-6">
            <button className="flex items-center gap-1 hover:text-green-600">
              Buy <ChevronDown size={16} />
            </button>
            <button className="flex items-center gap-1 hover:text-green-600">
              Rent <ChevronDown size={16} />
            </button>
            <button className="flex items-center gap-1 hover:text-green-600">
              Sell <ChevronDown size={16} />
            </button>
            <Link to="/about" className="hover:text-green-600">About</Link>
            <Link to="/contact" className="hover:text-green-600">Contact Us</Link>
          </nav>

          {/* Actions */}
          <div className="hidden md:flex items-center gap-4">
            <button className="flex items-center gap-2 text-orange-500 font-semibold">
              <span className="text-xl">👑</span> Be Prime
            </button>
            <Link 
              to="/post-property" 
              className="bg-green-600 text-white px-6 py-2 rounded-lg hover:bg-green-700"
            >
              Post Free Property
            </Link>
            <Link to="/login" className="flex flex-col items-center text-sm">
              <div className="w-8 h-8 bg-gray-200 rounded-full"></div>
              <span className="text-xs">Sign In</span>
              <span className="text-xs text-green-600">Join Free</span>
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="lg:hidden"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            {isMobileMenuOpen ? <X /> : <Menu />}
          </button>
        </div>

        {/* Mobile Menu */}
        {isMobileMenuOpen && (
          <nav className="lg:hidden mt-4 pb-4 flex flex-col gap-4">
            <Link to="/" className="hover:text-green-600">Buy</Link>
            <Link to="/" className="hover:text-green-600">Rent</Link>
            <Link to="/" className="hover:text-green-600">Sell</Link>
            <Link to="/about" className="hover:text-green-600">About</Link>
            <Link to="/contact" className="hover:text-green-600">Contact Us</Link>
          </nav>
        )}
      </div>
    </header>
  );
};

export default Nav;