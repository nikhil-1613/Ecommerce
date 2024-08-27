import React from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { addToCart, removeToCart, removeSingleIteams } from '../redux/features/CartSlice';
import { ToastContainer, toast } from 'react-toastify';
import { collection, addDoc } from 'firebase/firestore';
import 'react-toastify/dist/ReactToastify.css';
import { db } from '../firebase/firebaseConfig'; // Import the Firestore instance

export default function Checkout() {
  const location = useLocation();
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const { carts } = location.state || { carts: [] };

  const handleIncrement = (item) => {
    dispatch(addToCart(item));
  };

  const handleDecrement = (id) => {
    dispatch(removeToCart(id));
  };

  const handleSingleDecrement = (item) => {
    dispatch(removeSingleIteams(item));
  };

  const handlePlaceOrder = async (event) => {
    event.preventDefault();

    const formData = new FormData(event.target);
    const name = formData.get('name');
    const email = formData.get('email');
    const phone = formData.get('phone');
    const address = formData.get('address');

    try {
      await addDoc(collection(db, "orders"), {
        name,
        email,
        phone,
        address,
        items: carts,
        totalCost: carts.reduce((total, item) => total + item.price * item.qnty, 0),
        orderDate: new Date()
      });

      toast.success('Order placed successfully!');
      // Optionally navigate to an order confirmation page
      // navigate('/order-confirmation');
    } catch (error) {
      toast.error('Failed to place the order. Please try again.');
      console.error("Error adding document: ", error);
    }
  };

  const handleBackToCart = (event) => {
    event.preventDefault();
    navigate('/cart');
  };

  const totalCost = carts.reduce((total, item) => total + item.price * item.qnty, 0);

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100">
      <div className="w-full max-w-4xl bg-white p-8 rounded shadow-md mx-4 my-4 flex">
        <div className="w-1/2 pr-4">
          <h1 className="text-2xl font-bold mb-6 text-center">Checkout</h1>
          <form className="space-y-4" onSubmit={handlePlaceOrder}>
            <div className="mb-3">
              <label className="block text-gray-700 font-medium mb-2">Name</label>
              <input type="text" name="name" className="form-control w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500" required />
            </div>
            <div className="mb-3">
              <label className="block text-gray-700 font-medium mb-2">Email</label>
              <input type="email" name="email" className="form-control w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500" required />
            </div>
            <div className="mb-3">
              <label className="block text-gray-700 font-medium mb-2">Phone Number</label>
              <input type="tel" name="phone" className="form-control w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500" required />
            </div>
            <div className="mb-3">
              <label className="block text-gray-700 font-medium mb-2">Address</label>
              <input type="text" name="address" className="form-control w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500" required />
            </div>
            <div className="flex justify-center space-x-4 mt-4">
              <button type="submit" className="btn btn-success bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded">
                Confirm
              </button>
              <button type="button" onClick={handleBackToCart} className="btn btn-success bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded">
                Back To Cart
              </button>
            </div>
          </form>
        </div>
        <div className="w-1/2 pl-4">
          <h2 className="text-xl font-bold mb-4">Cart Items</h2>
          {carts.map((item) => (
            <div key={item.id} className="flex justify-between items-center mb-4">
              <div className="flex items-center">
                <img src={item.imageUrl} alt={item.name} className="w-16 h-16 object-cover mr-4" />
                <div>
                  <h3 className="text-lg font-medium">{item.name}</h3>
                  <p>₹{item.price}</p>
                </div>
              </div>
              <div className="flex items-center">
                <button
                  className="prdct-qty-btn"
                  type="button"
                  onClick={item.qnty <= 1 ? () => handleDecrement(item.id) : () => handleSingleDecrement(item)}
                >
                  <i className="fa fa-minus"></i>
                </button>
                <input type="text" className="qty-input-box mx-2" value={item.qnty} disabled />
                <button className="prdct-qty-btn" type="button" onClick={() => handleIncrement(item)}>
                  <i className="fa fa-plus"></i>
                </button>
              </div>
            </div>
          ))}
          <div className="text-lg font-bold mt-6">
            Total Cost: ₹{totalCost}
          </div>
        </div>
      </div>
      <ToastContainer />
    </div>
  );
}

// import React from 'react';
// import { useLocation, useNavigate } from 'react-router-dom';
// import { useDispatch } from 'react-redux';
// import { addToCart, removeToCart, removeSingleIteams } from '../redux/features/CartSlice';
// import { ToastContainer, toast } from 'react-toastify';
// import 'react-toastify/dist/ReactToastify.css';

// export default function Checkout() {
//   const location = useLocation();
//   const navigate = useNavigate();
//   const dispatch = useDispatch();
//   const { carts } = location.state || { carts: [] };

//   const handleIncrement = (item) => {
//     dispatch(addToCart(item));
//   };

//   const handleDecrement = (id) => {
//     dispatch(removeToCart(id));
//   };

//   const handleSingleDecrement = (item) => {
//     dispatch(removeSingleIteams(item));
//   };

//   const handlePlaceOrder = (event) => {
//     event.preventDefault();
//     toast.success('Order placed successfully!');
//     // navigate('/order-confirmation'); 
//   };

//   const handleBackToCart = (event) =>{
//     event.preventDefault();
//     navigate('/cart')
//   }

//   const totalCost = carts.reduce((total, item) => total + item.price * item.qnty, 0);

//   return (
//     <div className="flex items-center justify-center min-h-screen bg-gray-100">
//       <div className="w-full max-w-4xl bg-white p-8 rounded shadow-md mx-4 my-4 flex">
//         <div className="w-1/2 pr-4">
//           <h1 className="text-2xl font-bold mb-6 text-center">Checkout</h1>
//           <form className="space-y-4" onSubmit={handlePlaceOrder}>
//             <div className="mb-3">
//               <label className="block text-gray-700 font-medium mb-2">Name</label>
//               <input type="text" className="form-control w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500" />
//             </div>
//             <div className="mb-3">
//               <label className="block text-gray-700 font-medium mb-2">Email</label>
//               <input type="email" className="form-control w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500" />
//             </div>
//             <div className="mb-3">
//               <label className="block text-gray-700 font-medium mb-2">Phone Number</label>
//               <input type="tel" className="form-control w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500" />
//             </div>
//             <div className="mb-3">
//               <label className="block text-gray-700 font-medium mb-2">Address</label>
//               <input type="text" className="form-control w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500" />
//             </div>
//             <div className="flex justify-center space-x-4 mt-4">
//               <button type="submit" className="btn btn-success bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded">
//                 Confirm
//               </button>
//               <button type="button" onClick={handleBackToCart} className="btn btn-success bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded">
//                 Back To Cart
//               </button>
//             </div>
//           </form>
//         </div>
//         <div className="w-1/2 pl-4">
//           <h2 className="text-xl font-bold mb-4">Cart Items</h2>
//           {carts.map((item) => (
//             <div key={item.id} className="flex justify-between items-center mb-4">
//               <div className="flex items-center">
//                 <img src={item.imageUrl} alt={item.name} className="w-16 h-16 object-cover mr-4" />
//                 <div>
//                   <h3 className="text-lg font-medium">{item.name}</h3>
//                   <p>₹{item.price}</p>
//                 </div>
//               </div>
//               <div className="flex items-center">
//                 <button
//                   className="prdct-qty-btn"
//                   type="button"
//                   onClick={item.qnty <= 1 ? () => handleDecrement(item.id) : () => handleSingleDecrement(item)}
//                 >
//                   <i className="fa fa-minus"></i>
//                 </button>
//                 <input type="text" className="qty-input-box mx-2" value={item.qnty} disabled />
//                 <button className="prdct-qty-btn" type="button" onClick={() => handleIncrement(item)}>
//                   <i className="fa fa-plus"></i>
//                 </button>
//               </div>
//             </div>
//           ))}
//           <div className="text-lg font-bold mt-6">
//             Total Cost: ₹{totalCost}
//           </div>
//         </div>
//       </div>
//       <ToastContainer />
//     </div>
//   );
// }


// // import React from 'react';
// // import { useLocation, useNavigate } from 'react-router-dom';
// // import { useDispatch } from 'react-redux';
// // import { addToCart, removeToCart, removeSingleIteams } from '../redux/features/CartSlice';
// // import { ToastContainer, toast } from 'react-toastify';
// // import 'react-toastify/dist/ReactToastify.css';

// // export default function Checkout() {
// //   const location = useLocation();
// //   const navigate = useNavigate();
// //   const dispatch = useDispatch();
// //   const { carts } = location.state || { carts: [] };

// //   const handleIncrement = (item) => {
// //     dispatch(addToCart(item));
// //   };

// //   const handleDecrement = (id) => {
// //     dispatch(removeToCart(id));
// //   };

// //   const handleSingleDecrement = (item) => {
// //     dispatch(removeSingleIteams(item));
// //   };

// //   const handlePlaceOrder = (event) => {
// //     event.preventDefault();
// //     toast.success('Order placed successfully!');
// //     // navigate('/order-confirmation'); 
// //   };
// //   const handleBackToCart = (event) =>{
// //     event.preventDefault();
// //     navigate('/cart')
// //   }

// //   return (
// //     <div className="flex items-center justify-center min-h-screen bg-gray-100">
// //       <div className="w-full max-w-md bg-white p-8 rounded shadow-md mx-4 my-4">
// //         <h1 className="text-2xl font-bold mb-6 text-center ">Checkout</h1>
// //         <form className="space-y-4" onSubmit={handlePlaceOrder}>
// //           <div className="mb-3">
// //             <label className="block text-gray-700 font-medium mb-2">Name</label>
// //             <input type="text" className="form-control w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500" />
// //           </div>
// //           <div className="mb-3">
// //             <label className="block text-gray-700 font-medium mb-2">Email</label>
// //             <input type="email" className="form-control w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500" />
// //           </div>
// //           <div className="mb-3">
// //             <label className="block text-gray-700 font-medium mb-2">Phone Number</label>
// //             <input type="tel" className="form-control w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500" />
// //           </div>
// //           <div className="mb-3">
// //             <label className="block text-gray-700 font-medium mb-2">Address</label>
// //             <input type="text" className="form-control w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500" />
// //           </div>
// //           <div className="mt-6">
// //             <h2 className="text-xl font-bold mb-4">Cart Items</h2>
// //             {carts.map((item) => (
// //               <div key={item.id} className="flex justify-between items-center mb-4">
// //                 <div className="flex items-center">
// //                   <img src={item.imageUrl} alt={item.name} className="w-16 h-16 object-cover mr-4" />
// //                   <div>
// //                     <h3 className="text-lg font-medium">{item.name}</h3>
// //                     <p>₹{item.price}</p>
// //                   </div>
// //                 </div>
// //                 <div className="flex items-center">
// //                   <button
// //                     className="prdct-qty-btn"
// //                     type="button"
// //                     onClick={item.qnty <= 1 ? () => handleDecrement(item.id) : () => handleSingleDecrement(item)}
// //                   >
// //                     <i className="fa fa-minus"></i>
// //                   </button>
// //                   <input type="text" className="qty-input-box mx-2" value={item.qnty} disabled />
// //                   <button className="prdct-qty-btn" type="button" onClick={() => handleIncrement(item)}>
// //                     <i className="fa fa-plus"></i>
// //                   </button>
// //                 </div>
// //               </div>
// //             ))}
// //           </div>
// //           <div className="flex justify-center space-x-4 mt-4">
// //             <button type="submit" className="btn btn-success bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded">
// //               Confirm
// //             </button>
// //             <button type="submit" onClick={handleBackToCart} className="btn btn-success bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded">
// //               Back To Cart
// //             </button>
// //           </div>
// //         </form>
// //       </div>
// //       <ToastContainer />
// //     </div>
// //   );
// // }

