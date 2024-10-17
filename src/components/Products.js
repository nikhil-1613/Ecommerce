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
        <div className="flex flex-col items-center py-10 px-4 md:px-10">
            {/* Filter and Search Bar */}
            <div className="flex flex-col md:flex-row w-full justify-center mb-8">
                <select
                    className="mb-4 md:mb-0 md:mr-4 p-2 rounded-lg border-2 border-gray-300 hover:border-green-600"
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
            <div className="m-8 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 w-full">
                {filteredProducts.length === 0 ? (
                    <p className="text-center text-red-500 text-2xl font-bold col-span-full">No products found</p>
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

// import React, { useState, useEffect } from 'react';
// import ProductCard from './ProductCard';
// import { ToastContainer, toast } from 'react-toastify';
// import 'react-toastify/dist/ReactToastify.css';
// import { useDispatch } from 'react-redux';
// import { addToCart } from '../redux/features/CartSlice';
// import { db } from '../firebase/firebaseConfig';
// import { collection, getDocs } from 'firebase/firestore';
// import { FaSearch } from 'react-icons/fa'; // Importing search icon
// export default function Products() {
//     const [selectedCategory, setSelectedCategory] = useState('All');
//     const [products, setProducts] = useState([]);
//     const [searchTerm, setSearchTerm] = useState('');
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
//         toast.success("Item added to your cart");
//     };

//     const filteredProducts = products
//         .filter(product =>
//             selectedCategory === 'All' || product.category === selectedCategory
//         )
//         .filter(product =>
//             product.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
//             product.description.toLowerCase().includes(searchTerm.toLowerCase())
//         );

//     return (
//         <div className="flex flex-col items-center py-10">
//             {/* Filter and Search Bar */}
//             <div className="flex w-full justify-center mb-8">
//                 <select
//                     className="mr-4 p-2 rounded-lg border-2 border-gray-300 hover:border-green-600"
//                     value={selectedCategory}
//                     onChange={(e) => setSelectedCategory(e.target.value)}
//                 >
//                     {['All', 'seeds', 'fertilizers', 'sprayers', 'garden'].map(category => (
//                         <option key={category} value={category}>{category}</option>
//                     ))}
//                 </select>
//                 <div className="relative w-full md:w-1/2">
//                     <input
//                         type="text"
//                         placeholder="Search products..."
//                         value={searchTerm}
//                         onChange={(e) => setSearchTerm(e.target.value)}
//                         className="p-3 pl-10 rounded-lg border-2 border-gray-300 shadow-sm w-full focus:outline-none focus:border-green-500 transition-colors duration-300"
//                     />
//                     <FaSearch className="absolute top-1/2 left-3 transform -translate-y-1/2 text-gray-500" />
//                 </div>
                
//             </div> 

//             {/* Product List */}
//             <div className="m-8 grid grid-cols-4 gap-6">
//                 {filteredProducts.length === 0 ? (
//                     <p className="text-center text-red-500 text-3xl font-bold col-span-4">No products found</p>
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
//             <ToastContainer />
//         </div>
//     );
// }
