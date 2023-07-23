// src/components/Card.js
import React from 'react';

const Card = ({ isLoading }) => {
  return (
    <div className="bg-white shadow-md rounded-md p-4">
      {isLoading ? (
        <div className="animate-pulse">
          <div className="bg-gray-200 h-8 w-32 mb-4"></div>
          <div className="bg-gray-200 h-4 w-24 mb-2"></div>
          <div className="bg-gray-200 h-4 w-40"></div>
        </div>
      ) : (
        <div>
          <h2 className="text-xl font-bold mb-4">Card Title</h2>
          <p className="text-gray-600 mb-2">Card Description</p>
          <p className="text-gray-400">Card Details</p>
        </div>
      )}
    </div>
  );
};

export default Card;
