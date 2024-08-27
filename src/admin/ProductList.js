import React, { useState, useEffect } from 'react';
import { collection, getDocs, deleteDoc, doc } from 'firebase/firestore';
import { db } from '../firebase/firebaseConfig'; // Adjust the path to your firebaseConfig
import { toast } from 'react-toastify';
import { useNavigate } from 'react-router-dom';

export default function ProductList() {
  const [products, setProducts] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    const fetchProducts = async () => {
      const productsCollection = collection(db, 'products');
      const productsSnapshot = await getDocs(productsCollection);
      const productsList = productsSnapshot.docs.map(doc => ({ id: doc.id, ...doc.data() }));
      setProducts(productsList);
    };

    fetchProducts();
  }, []);

  const handleDelete = async (id) => {
    try {
      await deleteDoc(doc(db, 'products', id));
      setProducts(products.filter(product => product.id !== id));
      toast.success('Product deleted successfully');
    } catch (error) {
      console.error('Error deleting product: ', error);
      toast.error('Error deleting product');
    }
  };

  const handleEdit = (id) => {
    navigate(`/admin/editproduct/${id}`);
  };

  return (
    <div className="max-w-7xl mx-auto mt-10">
      <h1 className="text-2xl font-bold mb-6">Product List</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {products.map(product => (
          <div key={product.id} className="bg-gray-300 shadow-md rounded p-4 flex">
            <div className="flex-grow">
              <h2 className="text-xl font-bold mb-2">{product.name}</h2>
              <p className="text-gray-700 mb-2">{product.description}</p>
              <p className="text-gray-700 mb-2">Price: ${product.price}</p>
              <p className="text-gray-700 mb-2">Stock: {product.stock}</p>
              <p className="text-gray-700 mb-2">Category: {product.category}</p>
              <div className="mt-4">
                <button
                  onClick={() => handleEdit(product.id)}
                  className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded mr-2"
                >
                  Edit
                </button>
                <button
                  onClick={() => handleDelete(product.id)}
                  className="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded"
                >
                  Delete
                </button>
              </div>
            </div>
            <img
              src={product.imageUrl}
              alt={product.name}
              className="w-48 h-48 object-cover rounded ml-4"
            />
          </div>
        ))}
      </div>
    </div>
  );
}


// import React, { useState, useEffect } from 'react';
// import { collection, getDocs, deleteDoc, doc } from 'firebase/firestore';
// import { db } from '../firebase/firebaseConfig'; // Adjust the path to your firebaseConfig
// import { toast } from 'react-toastify';
// import { useNavigate } from 'react-router-dom'; // If using react-router for navigation

// export default function ProductList() {
//   const [products, setProducts] = useState([]);
//   const navigate = useNavigate();

//   useEffect(() => {
//     const fetchProducts = async () => {
//       const productsCollection = collection(db, 'products');
//       const productsSnapshot = await getDocs(productsCollection);
//       const productsList = productsSnapshot.docs.map(doc => ({ id: doc.id, ...doc.data() }));
//       setProducts(productsList);
//     };

//     fetchProducts();
//   }, []);

//   const handleDelete = async (id) => {
//     try {
//       await deleteDoc(doc(db, 'products', id));
//       setProducts(products.filter(product => product.id !== id));
//       toast.success('Product deleted successfully');
//     } catch (error) {
//       console.error('Error deleting product: ', error);
//       toast.error('Error deleting product');
//     }
//   };

//   const handleEdit = (id) => {
//     navigate(`/edit-product/${id}`);
//   };

//   return (
//     <div className="max-w-7xl mx-auto mt-10">
//       <h1 className="text-2xl font-bold mb-6">Product List</h1>
//       <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
//         {products.map(product => (
//           <div key={product.id} className="bg-white shadow-md rounded p-4 flex">
//             <div className="flex-grow">
//               <h2 className="text-xl font-bold mb-2">{product.name}</h2>
//               <p className="text-gray-700 mb-2">{product.description}</p>
//               <p className="text-gray-700 mb-2">Price: ${product.price}</p>
//               <p className="text-gray-700 mb-2">Stock: {product.stock}</p>
//               <p className="text-gray-700 mb-2">Category: {product.category}</p>
//               <div className="mt-4">
//                 <button
//                   onClick={() => handleEdit(product.id)}
//                   className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded mr-2"
//                 >
//                   Edit
//                 </button>
//                 <button
//                   onClick={() => handleDelete(product.id)}
//                   className="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded"
//                 >
//                   Delete
//                 </button>
//               </div>
//             </div>
//             <img
//               src={product.imageUrl}
//               alt={product.name}
//               className="w-48 h-48 object-cover rounded ml-4"
//             />
//           </div>
//         ))}
//       </div>
//     </div>
//   );
// }


