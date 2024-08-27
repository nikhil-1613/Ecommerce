import React, { useState, useEffect } from 'react';
import ProductCard from './ProductCard';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { useDispatch } from 'react-redux';
import { addToCart } from '../redux/features/CartSlice';
import { db } from '../firebase/firebaseConfig';
import { collection, getDocs } from 'firebase/firestore';
import { FaSearch } from 'react-icons/fa'; // Importing search icon
export default function Products() {
    const [selectedCategory, setSelectedCategory] = useState('All');
    const [products, setProducts] = useState([]);
    const [searchTerm, setSearchTerm] = useState('');
    const dispatch = useDispatch();

    useEffect(() => {
        const fetchProducts = async () => {
            try {
                const productsCollection = collection(db, 'products');
                const productsSnapshot = await getDocs(productsCollection);
                const productsList = productsSnapshot.docs.map(doc => ({ id: doc.id, ...doc.data() }));
                setProducts(productsList);
            } catch (error) {
                console.error('Error fetching products:', error);
            }
        };

        fetchProducts();
    }, []);

    const sendToCart = (product) => {
        dispatch(addToCart(product));
        toast.success("Item added to your cart");
    };

    const filteredProducts = products
        .filter(product =>
            selectedCategory === 'All' || product.category === selectedCategory
        )
        .filter(product =>
            product.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
            product.description.toLowerCase().includes(searchTerm.toLowerCase())
        );

    return (
        <div className="flex flex-col items-center py-10">
            {/* Filter and Search Bar */}
            <div className="flex w-full justify-center mb-8">
                <select
                    className="mr-4 p-2 rounded-lg border-2 border-gray-300 hover:border-green-600"
                    value={selectedCategory}
                    onChange={(e) => setSelectedCategory(e.target.value)}
                >
                    {['All', 'seeds', 'fertilizers', 'sprayers', 'garden'].map(category => (
                        <option key={category} value={category}>{category}</option>
                    ))}
                </select>
                <div className="relative w-full md:w-1/2">
                    <input
                        type="text"
                        placeholder="Search products..."
                        value={searchTerm}
                        onChange={(e) => setSearchTerm(e.target.value)}
                        className="p-3 pl-10 rounded-lg border-2 border-gray-300 shadow-sm w-full focus:outline-none focus:border-green-500 transition-colors duration-300"
                    />
                    <FaSearch className="absolute top-1/2 left-3 transform -translate-y-1/2 text-gray-500" />
                </div>
                
            </div> 

            {/* Product List */}
            <div className="m-8 grid grid-cols-4 gap-6">
                {filteredProducts.length === 0 ? (
                    <p className="text-center text-red-500 text-3xl font-bold col-span-4">No products found</p>
                ) : (
                    filteredProducts.map((product) => (
                        <ProductCard
                            key={product.id}
                            imageUrl={product.imageUrl}
                            name={product.name}
                            description={product.description}
                            price={product.price}
                            onAddToCart={() => sendToCart(product)}
                        />
                    ))
                )}
            </div>
            <ToastContainer />
        </div>
    );
}
// // Products.js
// import React, { useState, useEffect } from 'react';
// import ProductCard from './ProductCard';
// import { ToastContainer, toast } from 'react-toastify';
// import 'react-toastify/dist/ReactToastify.css';
// import { useDispatch } from 'react-redux';
// import { addToCart } from '../redux/features/CartSlice';
// import { db } from '../firebase/firebaseConfig'; // Importing Firestore from firebase.js
// import { collection, getDocs, } from 'firebase/firestore';

// export default function Products() {
//     const [selectedCategory, setSelectedCategory] = useState('All');
//     const [products, setProducts] = useState([]);
//     const dispatch = useDispatch();

//     useEffect(() => {
//         const fetchProducts = async () => {
//             try {
//                 const productsCollection = collection(db, 'products');
//                 const productsSnapshot = await getDocs(productsCollection);
//                 const productsList = productsSnapshot.docs.map(doc => ({ id: doc.id, ...doc.data() }));
//                 setProducts(productsList);
//             } catch (error) {
//                 console.error('Error fetching products:', error);
//             }
//         };

//         fetchProducts();
//     }, []);

//     const sendToCart = (product) => {
//         dispatch(addToCart(product));
//         // toast.success("Item added to your cart");
//     };

//     const filteredProducts = selectedCategory === 'All'
//         ? products
//         : products.filter(product => product.category === selectedCategory);

//     return (
//         <div className="flex justify-center items-start py-20">
//             {/* Sidebar */}
//             <div className="w-64 h-[50rem] bg-gradient-to-br from-purple-800 to-purple-900 rounded-lg p-6 mr-6">
//                 <h2 className="text-white text-2xl font-bold mb-4">Categories </h2>
//                 <ul>
//                     {['All', 'seeds', 'fertilizers', 'sprayers', 'garden'].map(category => (
//                         <li key={category} className="mb-2">
//                             <input
//                                 type="radio"
//                                 id={category.toLowerCase()}
//                                 name="category"
//                                 value={category}
//                                 className="mr-2"
//                                 checked={selectedCategory === category}
//                                 onChange={(e) => setSelectedCategory(e.target.value)}
//                             />
//                             <label htmlFor={category.toLowerCase()} className="text-white">{category}</label>
//                         </li>
//                     ))}
//                 </ul>
//             </div>
//             {/* Product List  */}
//             <div className="grid grid-cols-3 gap-6">
//                 {filteredProducts.length === 0 ? (
//                     <p className="text-center text-red-500 text-3xl font-bold">No products found in the given category</p>
//                 ) : (
//                     filteredProducts.map((product) => (
//                         <ProductCard
//                             key={product.id}
//                             imageUrl={product.imageUrl}
//                             name={product.name}
//                             description={product.description}
//                             price={product.price}
//                             onAddToCart={() => sendToCart(product)}
//                         />
//                     ))
//                 )}
//             </div>
//             <ToastContainer/>
//         </div>
//     );
// }

