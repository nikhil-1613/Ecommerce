import React, { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { doc, getDoc, updateDoc } from 'firebase/firestore';
import { db } from '../firebase/firebaseConfig'; // Adjust the path to your firebaseConfig
import { toast } from 'react-toastify';

export default function EditProduct() {
  const { id } = useParams();
  const navigate = useNavigate();
  const [product, setProduct] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchProduct = async () => {
      const docRef = doc(db, 'products', id);
      const docSnap = await getDoc(docRef);

      if (docSnap.exists()) {
        setProduct(docSnap.data());
      } else {
        toast.error('No such product!');
        navigate('/admin/products');
      }
      setLoading(false);
    };

    fetchProduct();
  }, [id, navigate]);

  const handleChange = (e) => {
    setProduct({ ...product, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const docRef = doc(db, 'products', id);
      await updateDoc(docRef, product);
      toast.success('Product updated successfully');
      navigate('/admin/products');
    } catch (error) {
      console.error('Error updating product: ', error);
      toast.error('Error updating product');
    }
  };

  if (loading) {
    return <p>Loading...</p>;
  }

  return (
    <div className="max-w-7xl mx-auto mt-10">
      <h1 className="text-2xl font-bold mb-6">Edit Product</h1>
      <form onSubmit={handleSubmit} className="bg-[#45B8AC] shadow-md rounded px-8 pt-6 pb-8 mb-4">
        <div className="mb-4">
          <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="name">
            Name
          </label>
          <input
            type="text"
            name="name"
            value={product.name}
            onChange={handleChange}
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
          />
        </div>
        <div className="mb-4">
          <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="description">
            Description
          </label>
          <input
            type="text"
            name="description"
            value={product.description}
            onChange={handleChange}
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
          />
        </div>
        <div className="mb-4">
          <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="price">
            Price
          </label>
          <input
            type="number"
            name="price"
            value={product.price}
            onChange={handleChange}
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
          />
        </div>
        <div className="mb-4">
          <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="stock">
            Stock
          </label>
          <input
            type="number"
            name="stock"
            value={product.stock}
            onChange={handleChange}
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
          />
        </div>
        <div className="mb-4">
          <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="category">
            Category
          </label>
          <input
            type="text"
            name="category"
            value={product.category}
            onChange={handleChange}
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
          />
        </div>
        <div className="mb-4">
          <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="imageUrl">
            Image URL
          </label>
          <input
            type="text"
            name="imageUrl"
            value={product.imageUrl}
            onChange={handleChange}
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
          />
        </div>
        <button
          type="submit"
          className="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
        >
          Save
        </button>
      </form>
    </div>
  );
}


// import React, { useState, useEffect } from 'react';
// import { doc, getDoc, updateDoc } from 'firebase/firestore';
// import { db } from '../firebase/firebaseConfig'; // Adjust the path to your firebaseConfig
// import { toast } from 'react-toastify';
// import { useParams, useNavigate } from 'react-router-dom';

// export default function EditProduct() {
//   const { id } = useParams();
//   const navigate = useNavigate();
//   const [product, setProduct] = useState({
//     name: '',
//     description: '',
//     price: '',
//     stock: '',
//     category: 'seeds',
//     imageUrl: '',
//   });

//   useEffect(() => {
//     const fetchProduct = async () => {
//       const productDoc = await getDoc(doc(db, 'products', id));
//       if (productDoc.exists()) {
//         setProduct(productDoc.data());
//       } else {
//         toast.error('Product not found');
//         navigate('/product-list');
//       }
//     };

//     fetchProduct();
//   }, [id, navigate]);

//   const handleChange = (e) => {
//     setProduct({
//       ...product,
//       [e.target.name]: e.target.value,
//     });
//   };

//   const handleCategoryChange = (e) => {
//     setProduct({
//       ...product,
//       category: e.target.value,
//     });
//   };

//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     try {
//       await updateDoc(doc(db, 'products', id), {
//         name: product.name,
//         description: product.description,
//         price: parseFloat(product.price),
//         stock: parseInt(product.stock),
//         category: product.category,
//         imageUrl: product.imageUrl, // Assuming imageUrl doesn't change
//       });
//       toast.success('Product updated successfully');
//       navigate('/product-list');
//     } catch (error) {
//       console.error('Error updating product: ', error);
//       toast.error('Error updating product');
//     }
//   };

//   return (
//     <div className="max-w-md mx-auto mt-10">
//       <h1 className="text-2xl font-bold mb-6">Edit Product</h1>
//       <form onSubmit={handleSubmit} className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4">
//         <div className="mb-4">
//           <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="name">
//             Name
//           </label>
//           <input
//             type="text"
//             name="name"
//             value={product.name}
//             onChange={handleChange}
//             className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
//             required
//           />
//         </div>
//         <div className="mb-4">
//           <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="description">
//             Description
//           </label>
//           <textarea
//             name="description"
//             value={product.description}
//             onChange={handleChange}
//             className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
//             required
//           ></textarea>
//         </div>
//         <div className="mb-4">
//           <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="price">
//             Price
//           </label>
//           <input
//             type="number"
//             name="price"
//             value={product.price}
//             onChange={handleChange}
//             className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
//             required
//           />
//         </div>
//         <div className="mb-4">
//           <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="category">
//             Category
//           </label>
//           <select
//             name="category"
//             value={product.category}
//             onChange={handleCategoryChange}
//             className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
//             required
//           >
//             <option value="seeds">Seeds</option>
//             <option value="fertilizers">Fertilizers</option>
//             <option value="sprayers">Sprayers</option>
//             <option value="garden">Garden</option>
//           </select>
//         </div>
//         <div className="mb-4">
//           <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="stock">
//             Stock
//           </label>
//           <input
//             type="number"
//             name="stock"
//             value={product.stock}
//             onChange={handleChange}
//             className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
//             required
//           />
//         </div>
//         <div className="flex items-center justify-between">
//           <button
//             type="submit"
//             className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
//           >
//             Save Changes
//           </button>
//         </div>
//       </form>
//     </div>
//   );
// }


// // import React from 'react'

// // export default function EditProducts() {
// //   return (
// //     <div>EditProducts</div>
// //   )
// // }
