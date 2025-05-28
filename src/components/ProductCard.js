import React from 'react';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const ProductCard = ({ imageUrl, name, description, price, onAddToCart }) => {
    const sendToCart = () => {
        onAddToCart({
            imageUrl,
            name,
            description,
            price,
        });
        // toast.success("Item added to your cart");
    };

    return (
        <div className="w-80 bg-white shadow-2xl rounded-xl overflow-hidden transition-transform duration-300 transform hover:-translate-y-2 hover:shadow-3xl">
            <figure className="w-full h-36 p-4">
                <img
                    src={imageUrl}
                    alt={name}
                    className="w-auto h-36 object-cover rounded-lg ml-10 " />
            </figure>
            <div className="p-6 text-center">
                <h2 className="text-2xl font-bold text-gray-800 mb-2">{name}</h2>
                <p className="text-sm text-gray-600 mb-4">{description}</p>
                <div className="mb-4 text-green-600 font-semibold text-xl">
                    ₹{parseFloat(price).toFixed(2)}
                </div>
                <button
                    className="bg-green-500 text-white py-2 px-4 rounded-lg hover:bg-green-600 focus:outline-none transition-colors duration-300"
                    onClick={sendToCart}
                >
                    Add to Cart
                </button>
            </div>
            <ToastContainer />
        </div>
    );
};

export default ProductCard;
// import React from 'react';
// import { ToastContainer } from 'react-toastify';
// import { toast } from 'react-toastify';
// import 'react-toastify/dist/ReactToastify.css';
// const ProductCard = ({ imageUrl, name, description, price, rating, onAddToCart }) => {
//     const sendToCart = () => {
//         <ToastContainer/>
//         onAddToCart({
//             imageUrl,
//             name,
//             description,
//             price,
         
//         });
//         // toast.success("Item added In Your Cart");
//     };

//     return (
//         <div className="product-card bg-white shadow-md rounded-lg overflow-hidden transition duration-300 transform hover:-translate-y-1 hover:shadow-lg">
//             <img src={imageUrl} alt={name} className="product-image w-full h-48 object-cover" />
//             <div className="product-info p-4">
//                 <h5 className="product-name text-lg font-bold text-gray-800 mb-2">{name}</h5>
//                 <p className="product-description text-sm text-gray-600 mb-4">{description}</p>
//                 <div className="product-bottom flex justify-between items-center">
//                     <div className="product-price text-green-600 font-semibold">${parseFloat(price).toFixed(2)}</div>
//                     {/* <div className="product-rating flex items-center">
//                         {Array.from({ length: 5 }, (_, index) => (
//                             <span key={index} className={`star ${index < rating ? 'filled' : ''}`}>
//                                 &#9733;
//                             </span>
//                         ))}
//                     </div> */}
//                 </div>
//                 <button
//                     className="add-to-cart-button bg-green-500 text-white py-2 px-4 rounded-lg focus:outline-none transition duration-300 hover:bg-green-600"
//                     onClick={sendToCart}
//                 >
//                     Add to Cart
//                 </button>
//             </div>
//         </div>
//     );
// };

// export default ProductCard;
