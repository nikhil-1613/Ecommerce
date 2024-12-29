import React from 'react';
import about_image from '../images/about_image.png';

export default function About() {
  return (
    <div className="flex flex-col md:flex-row justify-center items-center mt-10 md:mt-20 mb-5">
      {/* Image Section */}
      <div className="md:ml-10 mb-8 md:mb-0">
        <img
          src={about_image}
          alt="About us"
          className="w-[280px] h-auto max-w-[300px] md:max-w-[600px] lg:max-w-[800px] object-cover"
        />
      </div>
      
      {/* Text Section */}
      <div className="px-4 md:px-10">
        <h2 className="text-[#40513B] text-2xl md:text-3xl font-semibold mb-6 md:mb-10">
          About Us
        </h2>
        <p className="mb-6 font-medium leading-relaxed">
        At AKB, we are dedicated to providing high-quality agricultural products that help farmers and growers achieve the best possible results. With years of experience in the agricultural industry, we specialize in offering a wide range of products including fertilizers, sprayers, pesticides, and seeds.Our mission is simple: to support sustainable farming practices and boost productivity by offering only the best solutions for your agricultural needs. We work closely with trusted suppliers to ensure that every product we offer meets the highest standards of quality, safety, and effectiveness.
 </p>
        <p className="mb-6 font-medium leading-relaxed">
        We believe in building lasting relationships with our customers by providing personalized service, expert advice, and a commitment to innovation. Whether you’re a small-scale farmer or a large agricultural enterprise, we are here to help you grow, nurture, and succeed.

Thank you for choosing us as your trusted partner in agriculture!
        </p>

        {/* Button */}
        <div className="flex justify-center md:justify-start">
          <button className="bg-[#40513B] text-white h-10 w-32 rounded-lg mt-4 hover:cursor-pointer">
            Know More
          </button>
        </div>
      </div>
    </div>
  );
}

// import React from 'react';
// import about_image from '../images/about_image.png';

// export default function About() {
//   return (
//     <div className="flex justify-center items-center mt-20 mb-5 ">
//       <div className="flex">
//         <div className="ml-10">
//           <img
//             src={about_image}
//             alt="About us"
//             className="mt-2 h-[520px] w-[2000px]"
//           />
//         </div>
//         <div className='mb-10'>
//           <h2 className="text-[#40513B] text-3xl font-semibold mb-20">
//             About us
//           </h2>
//           <p className="mb-6 ml-10 font-medium leading-relaxed">
//             Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ratione in velit sit dolore. Quaerat eveniet nihil exercitationem beatae architecto possimus inventore voluptatibus nesciunt autem necessitatibus hic, deleniti neque quos, aut vel? Officiis nam quia distinctio autem est a nesciunt, enim consectetur et necessitatibus placeat delectus error eius? Veniam nemo possimus earum quam dolore repellat assumenda maiores iste voluptas ex saepe obcaecati illum hic harum voluptatum doloremque corrupti, natus nesciunt rerum? Debitis, similique. Laborum, est nesciunt a, ex similique numquam inventore qui nulla ipsa aliquid vitae ipsam illum
//           </p>
//           <p className="mb-6 ml-10 font-medium leading-relaxed">
//             Lorem ipsum dolor sit amet, consectetur adipisicing elit. Hic, unde ipsam. Nobis quo corrupti harum adipisci blanditiis? Consectetur assumenda quod dignissimos doloremque commodi quam consequatur animi ea aliquam vel. Impedit iusto nesciunt quos eos esse quisquam amet sint consequuntur nihil.
//           </p>

//           <button
//             className="bg-[#40513B] text-white h-10 w-32 rounded-lg mt-4 ml-[255px] hover:cursor-pointer "
//           >
//             Know More
//           </button>
//         </div>
//       </div>
//     </div>
//   );
// }
