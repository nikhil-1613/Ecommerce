import React, { useState } from 'react';
import { FaInstagram, FaWhatsapp, FaTwitter, FaEnvelope } from 'react-icons/fa';

export default function Footer() {
  const [email, setEmail] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    window.location.href = `mailto:nikhilpaspula16@gmail.com?subject=Contact&body=Email: ${email}`;
  };

  return (
    <div className="bg-[#40513B] p-8 text-white mb-10">
      <div className="flex flex-col md:flex-row justify-between">
        <div className="mb-8 md:mb-0 md:w-1/2">
          <h2 className="text-2xl font-bold mb-4 md:ml-10">Get In Touch</h2>
          <p className="mb-4 md:ml-10">
            Lorem ipsum, dolor sit amet consectetur adipisicing elit.<br />
            Magni ea mollitia voluptatibus molestias cupiditate dolores porro, <br />
            vel nisi eligendi accusamus a, voluptas suscipit repellat quisquam<br />
            rerum esse necessitatibus ipsum ullam.<br />
            rerum esse necessitatibus ipsum ullam.<br />
            rerum esse necessitatibus ipsum ullam.
          </p>
          <div className="flex space-x-4 md:ml-5">
            <a href="https://www.instagram.com/" className="text-2xl"><FaInstagram /></a>
            <a href="https://web.whatsapp.com/" className="text-2xl"><FaWhatsapp /></a>
            <a href="https://twitter.com" className="text-2xl"><FaTwitter /></a>
            <a href="mailto:yourmail@gmail.com" className="text-2xl"><FaEnvelope /></a>
          </div>
        </div>
        <div className="md:w-1/2">
          <h3 className="text-xl font-semibold mb-2">Please Call or Send Email</h3>
          <form onSubmit={handleSubmit}>
            <input
              type="email"
              name="email"
              id="email"
              className="w-full p-1 mb-4 text-black text-sm rounded-md"
              placeholder="Your email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
            <button
              type="submit"
              className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
            >
              Submit
            </button>
          </form>
          <p className="mt-4">
            Lorem ipsum dolor, sit amet consectetur adipisicing elit.<br />
            Dolorum sint harum dignissimos<br />
            accusamus veritatis iste.
          </p>
        </div>
      </div>
    </div>
  );
}


// import React, { useState } from 'react';
// import { FaInstagram, FaWhatsapp, FaTwitter, FaEnvelope } from 'react-icons/fa';

// export default function Footer() {
//   const [email, setEmail] = useState('');

//   const handleSubmit = (e) => {
//     e.preventDefault();
//     window.location.href = `mailto:nikhilpaspula16@gmail.com?subject=Contact&body=Email: ${email}`;
//   };

//   return (
//     <div className="bg-[#40513B] p-8 text-white mb-10">
//       <div className="flex flex-col md:flex-row justify-between">
//         <div className="mb-8 md:mb-0 md:w-1/2">
//           <h2 className="text-2xl font-bold mb-4 ml-10">Get In Touch</h2>
//           <p className="mb-4 ml-10">
//             Lorem ipsum, dolor sit amet consectetur adipisicing elit.<br />
//             Magni ea mollitia voluptatibus molestias cupiditate dolores porro, <br />
//             vel nisi eligendi accusamus a, voluptas suscipit repellat quisquam<br />
//             rerum esse necessitatibus ipsum ullam.<br />
//             rerum esse necessitatibus ipsum ullam.<br />
//             rerum esse necessitatibus ipsum ullam.
//           </p>
//           <div className="flex space-x-4 ml-5">
//             <a href="https://www.instagram.com/" className="text-2xl ml-5"><FaInstagram /></a>
//             <a href="https://web.whatsapp.com/" className="text-2xl pl-2"><FaWhatsapp /></a>
//             <a href="https://twitter.com" className="text-2xl"><FaTwitter /></a>
//             <a href="mailto:yourmail@gmail.com" className="text-2xl"><FaEnvelope /></a>
//           </div>
//         </div>
//         <div className="md:w-1/2">
//           <h3 className="text-xl font-semibold mb-2">Please Call or Send Email</h3>
//           <form onSubmit={handleSubmit}>
//             <input
//               type="email"
//               name="email"
//               id="email"
//               className="w-full p-1 mb-4 text-black text-sm rounded-md"
//               placeholder="Your email"
//               value={email}
//               onChange={(e) => setEmail(e.target.value)}
//               required
//             />
//             <button
//               type="submit"
//               className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
//             >
//               Submit
//             </button>
//           </form>
//           <p className="mt-4">
//             Lorem ipsum dolor, sit amet consectetur adipisicing elit.<br />
//             Dolorum sint harum dignissimos<br />
//             accusamus veritatis iste.
//           </p>
//         </div>
//       </div>
//     </div>
//   );
// }

