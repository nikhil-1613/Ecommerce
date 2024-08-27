import React from "react";
import CategoryCard from "./CategoryCard";
import garden from '../images/garden.jpg';
import seeds from '../images/seeds.jpeg';
import sprayers from '../images/sprayers.jpeg';
import spray_parts from '../images/spray_parts.jpg'
import gradient_background from '../images/gradient_image.png'

export default function Shop() {
  return (
    <div className="shop bg-green-300 p-20 rounded-lg mb-2">
      <div className="grid grid-cols-2 gap-8">
        {/* Hero Section */}
        <div className="flex items-center justify-center bg-gradient-to-br from-purple-800 to-purple-900 rounded-lg p-8">
          <div className="flex flex-col items-center justify-center">
            <img src={gradient_background} alt="" className="w-48 h-48 mb-4" />
            <h1 className="text-yellow-400 text-3xl font-bold text-center">We Offer Special Discounts <br />On Our Products</h1>
          </div>
        </div>
        <div className="flex items-center justify-center bg-green-800 rounded-lg p-8">
          <div className="flex flex-col items-center justify-center">
            <img src={gradient_background} alt="" className="w-48 h-48 mb-4" />
            <h2 className="text-yellow-400 text-2xl font-bold">We Never Compromise in Quality</h2>
          </div>
        </div>
        {/* Categories */}
        <div className="grid grid-cols-4 gap-10">
          <div className="rounded-lg p-4">
            <CategoryCard imageUrl={seeds} text={'Seeds'} />
          </div>
          <div className="rounded-lg p-4">
            <CategoryCard imageUrl={sprayers} text={'Sprayers'} />
          </div>
          <div className="rounded-lg p-4">
            <CategoryCard imageUrl={spray_parts} text={'Spray Parts'} />
          </div>
          <div className="rounded-lg p-4">
            <CategoryCard imageUrl={garden} text={'Garden'} />
          </div>
        </div>
      </div>
    </div>
  )
}
