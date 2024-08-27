import React from 'react';
import background from '../images/background.png';
import top_image from '../images/top_image.jpg';
import below_image from '../images/below_image.jpg';
import { FaTruck, FaUser } from 'react-icons/fa';
import DesContainer from './DesContainer.js';

export default function Home() {
  return (
    <div className="flex flex-col items-center justify-center mb-5">
      {/* Background Image Container */}
      <div className="relative w-full h-[660px] overflow-hidden">
        <img src={background} alt="" className="absolute inset-0 object-cover w-full h-full" />
        <div className="absolute inset-0 flex flex-col items-center justify-center text-center p-4">
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">We Are</h1>
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">Akhila Balaji Enterprises</h1>
          <p className="text-xl md:text-2xl text-white mb-4">We believe Future of Seeds is Here</p>
          <div className="flex items-center justify-center mb-4">
            <input type="search" name="search" id="search" placeholder="What are you looking for" className="rounded-full py-2 px-4 border border-white bg-transparent text-white placeholder-white focus:outline-none focus:border-white w-full max-w-xs md:max-w-md" />
            <button id="search-btn" className="ml-2 bg-white text-[#40513B] py-2 px-4 rounded-full">Search</button>
          </div>
        </div>
      </div>
      
      {/* Get to Know Us Heading */}
      <div className="w-full max-w-[1200px] px-4 mt-8 text-center">
        <h3 className="text-3xl font-bold text-[#40513B] mb-4">Get to know us</h3>
      </div>
      
      {/* Images Section */}
      <div className="w-full max-w-[1200px] px-4 mt-8">
        <div className="flex flex-col md:flex-row justify-between">
          <div className="w-full md:w-1/2 pr-0 md:pr-2 mb-4 md:mb-0">
            <img id="top-image" src={top_image} alt="" className="w-full h-auto rounded-tl-[100px] rounded-bl-[100px]" />
          </div>
          <div className="w-full md:w-1/2 pl-0 md:pl-2">
            <img id="below-image" src={below_image} alt="" className="w-full h-auto rounded-tr-[100px] rounded-br-[100px]" />
          </div>
        </div>
      </div>
      
      {/* Description */}
      <div className="w-full max-w-[1200px] px-4 mt-8 text-center">
        <div className="mb-8">
          <h2 className="text-3xl md:text-5xl font-bold text-[#40513B]">We offer the best</h2>
          <h2 className="text-3xl md:text-5xl font-bold text-[#40513B]">Quality Products</h2>
        </div>
        <p className="text-lg text-gray-700 leading-[32px] mb-8">Lorem ipsum dolor sit, amet consectetur adipisicing elit. Perspiciatis possimus at quos hic voluptas nulla sequi ratione ut placeat ipsam, non natus minima dolores. Nesciunt praesentium animi doloremque libero! Nostrum quo numquam dolorem totam! Quidem ab fugit voluptas quaerat, illo nihil culpa sit temporibus ut exercitationem quae doloremque inventore alias!</p>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-10">
          <DesContainer icon={<FaTruck />} text="We Use New technology" />
          <DesContainer icon={<FaUser />} text="Reforming the systems" />
          <DesContainer icon={<FaUser />} text="Reforming the systems" />
          <DesContainer icon={<FaUser />} text="Reforming the systems" />
        </div>
      </div>
    </div>
  );
}


// import React from 'react';
// import background from '../images/background.png';
// import top_image from '../images/top_image.jpg';
// import below_image from '../images/below_image.jpg';
// import { FaTruck, FaUser } from 'react-icons/fa';
// import DesContainer from './DesContainer.js';

// export default function Home() {
//   return (
//     <div className="flex flex-col items-center justify-center mb-5">
//       {/* Background Image Container */}
//       <div className="relative w-full h-[660px] overflow-hidden">
//         <img src={background} alt="" className="absolute inset-0 object-cover w-full h-full" />
//         <div className="absolute inset-0 flex flex-col items-center justify-center text-center">
//           <h1 className="text-4xl font-bold text-white mb-4">We Are</h1>
//           <h1 className="text-4xl font-bold text-white mb-4">Akhila Balaji Enterprises</h1>
//           <p className="text-xl text-white mb-4">We believe Future of Seeds is Here</p>
//           <div className="flex items-center justify-center mb-4">
//             <input type="search" name="search" id="search" placeholder="What are you looking for" className="rounded-full py-2 px-4 border border-white bg-transparent text-white placeholder-white focus:outline-none focus:border-white" />
//             <button id="search-btn" className="ml-2 bg-white text-[#40513B] py-2 px-4 rounded-full">Search</button>
//           </div>
//         </div>
//       </div>
      
//       {/* Get to Know Us Heading */}
//       <div className="w-full max-w-[1200px] px-4 mt-8 text-center">
//         <h3 className="text-3xl font-bold text-[#40513B] mb-4">Get to know us</h3>
//       </div>
      
//       {/* Images Section */}
//       <div className="w-full max-w-[1200px] px-4 mt-8">
//         <div className="flex justify-between">
//           <div className="w-1/2 pr-2">
//             <img id="top-image" src={top_image} alt="" className="w-full h-auto rounded-tl-[100px] rounded-bl-[100px]" />
//           </div>
//           <div className="w-1/2 pl-2">
//             <img id="below-image" src={below_image} alt="" className="w-full h-auto rounded-tr-[100px] rounded-br-[100px]" />
//           </div>
//         </div>
//       </div>
      
//       {/* Description */}
//       <div className="w-full max-w-[1200px] px-4 mt-8 text-center">
//         <div className="mb-8">
//           <h2 className="text-5xl font-bold text-[#40513B]">We offer the best</h2>
//           <h2 className="text-5xl font-bold text-[#40513B]">Quality Products</h2>
//         </div>
//         <p className="text-lg text-gray-700 leading-[32px] mb-8">Lorem ipsum dolor sit, amet consectetur adipisicing elit. Perspiciatis possimus at quos hic voluptas nulla sequi ratione ut placeat ipsam, non natus minima dolores. Nesciunt praesentium animi doloremque libero! Nostrum quo numquam dolorem totam! Quidem ab fugit voluptas quaerat, illo nihil culpa sit temporibus ut exercitationem quae doloremque inventore alias!</p>
//         <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 "> {/* Updated gap value */}
//           <DesContainer icon={<FaTruck />} text="We Use New technology" />
//           <DesContainer icon={<FaUser />} text="Reforming the systems" />
//           <DesContainer icon={<FaUser />} text="Reforming the systems" />
//           <DesContainer icon={<FaUser />} text="Reforming the systems" />
//         </div>
//       </div>
//     </div>
//   );
// }


