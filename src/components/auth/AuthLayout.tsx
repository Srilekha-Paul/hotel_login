import React from "react";
import { Link } from "react-router-dom";

interface AuthLayoutProps {
  children: React.ReactNode;
}

const AuthLayout: React.FC<AuthLayoutProps> = ({ children }) => {
  return (
    <div className="min-h-screen bg-gray-50 flex">
      {/* Left Side - Form */}
      <div className="w-full lg:w-1/2 flex items-center justify-center p-8">
        <div className="w-full max-w-md">
          {/* Logo */}
          <Link to="/" className="flex items-center gap-2 mb-8">
            <div className="w-10 h-10 bg-gradient-to-br from-red-500 to-orange-500 rounded-lg"></div>
            <div>
              <div className="font-bold text-xl">MyDearProperty</div>
              <div className="text-xs text-gray-600">Convert Dreams into Reality</div>
            </div>
          </Link>

          {children}
        </div>
      </div>

      {/* Right Side - Info */}
      <div className="hidden lg:flex lg:w-1/2 bg-gradient-to-br from-green-700 to-green-900 text-white items-center justify-center p-12">
        <div className="max-w-md">
          <h2 className="text-4xl font-bold mb-6">
            Sell or Rent your Property For Free
          </h2>
          <p className="text-2xl font-semibold text-gray-200 mb-6">
            30 Lac+ Home Owners Trust Us
          </p>
          <p className="text-gray-100 leading-relaxed">
            I posted a property ad on MyDearProperty, an efficient real estate platform. 
            Despite my busy schedule, they ensured timely communication, keeping me updated 
            through emails and messages. They successfully found a tenant for my rental 
            property that perfectly matched my requirements.
          </p>
        </div>
      </div>
    </div>
  );
};

export default AuthLayout;