import React from "react";

export default function CategoryCard ({ imageUrl, text }) {
  return (
    <div className="category-card bg-white rounded-lg shadow-md p-5 flex flex-col items-center justify-center w-64  transition-transform hover:-translate-y-2">
      <img
        src={imageUrl}
        alt="Category"
        className="category-image w-48 h-48 rounded-lg mb-4"
      />
      <p className="category-text text-lg font-bold mb-4">{text}</p>
    </div>
  );
};
