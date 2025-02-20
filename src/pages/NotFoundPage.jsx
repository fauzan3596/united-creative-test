import React from 'react';
import { useNavigate } from 'react-router-dom';

const NotFoundPage = () => {
  const navigate = useNavigate();

  return (
    <div className="flex items-center justify-center h-screen bg-gradient-to-b from-[#02154500] to-[#010C28]">
      <div className="text-center p-8 rounded-2xl shadow-lg">
        <h1 className="text-6xl font-bold text-gray-300 mb-4">404</h1>
        <h2 className="text-2xl font-semibold text-gray-400 mb-2">Page Not Found</h2>
        <p className="text-gray-600 mb-6">
          Sorry, the page you're looking for doesn't exist.
        </p>
        <button className="btn border-0 shadow-none px-6 py-2 rounded-full text-white bg-gradient-to-r from-[#D57C17] to-[#956836]"
          onClick={() => navigate('/')}
        >
          Go Home
        </button>
      </div>
    </div>
  );
};

export default NotFoundPage;
