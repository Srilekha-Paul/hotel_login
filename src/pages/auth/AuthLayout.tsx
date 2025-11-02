import React from "react";

interface AuthLayoutProps {
  title?: string;
  children: React.ReactNode;
}

const AuthLayout: React.FC<AuthLayoutProps> = ({ title, children }) => {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gray-100 px-4">
      <div className="max-w-md w-full bg-white rounded-2xl shadow-lg p-8">
        {title && (
          <h1 className="text-2xl font-semibold text-center text-gray-800 mb-6">
            {title}
          </h1>
        )}
        {children}
      </div>
    </div>
  );
};

export default AuthLayout;
