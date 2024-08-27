import React, { useEffect, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { signOut } from 'firebase/auth';
import { collection, getDocs } from 'firebase/firestore';
import { toast } from 'react-toastify';
import { auth, db } from '../firebase/firebaseConfig';

export default function AdminNav() {
  const navigate = useNavigate();
  const [usersCount, setUsersCount] = useState(0);
  const [ordersCount, setOrdersCount] = useState(0);
  const [completedOrdersCount, setCompletedOrdersCount] = useState(0);
  const [totalProductsCount, setTotalProductsCount] = useState(0);

  useEffect(() => {
    const fetchCounts = async () => {
      try {
        const usersSnapshot = await getDocs(collection(db, 'users'));
        const ordersSnapshot = await getDocs(collection(db, 'orders'));
        const completedOrdersSnapshot = await getDocs(collection(db, 'completedOrders'));
        const productsSnapshot = await getDocs(collection(db, 'products'));

        setUsersCount(usersSnapshot.size);
        setOrdersCount(ordersSnapshot.size);
        setCompletedOrdersCount(completedOrdersSnapshot.size);
        setTotalProductsCount(productsSnapshot.size);
      } catch (error) {
        console.error('Error fetching counts:', error);
        toast.error('Failed to fetch data');
      }
    };

    fetchCounts();
  }, []);

  const handleLogout = async () => {
    try {
      await signOut(auth);
      toast.success('Logout successful');
      navigate('/');
    } catch (error) {
      console.error('Error logging out:', error);
      toast.error('Error logging out');
    }
  };

  const handleNavigate = (path) => {
    navigate(path);
  };

  return (
    <>
      <nav className="bg-white-800 text-black p-4 flex justify-between items-center">
        <div className="flex items-center">
          <span className="text-2xl font-bold">AKB</span>
          <span className="ml-2 font-semibold">Admin</span>
        </div>
        <div className="flex gap-4">
          <Link to="/admin/users" className="hover:text-green-500 font-bold">Users</Link>
          <Link to="/admin/orders" className="hover:text-green-500 font-bold">Orders</Link>
          {/* <Link to="/admin/completedorders" className="hover:text-green-500 font-bold">CompletedOrders</Link> */}
          <Link to="/admin/addproduct" className="hover:text-green-500 font-bold">Add Product</Link>
          <Link to="/admin/allproducts" className="hover:text-green-500 font-bold">All Products</Link>
          
        </div>
        <button onClick={handleLogout} className="bg-red-600 hover:bg-red-700 px-4 py-2 rounded">
          Logout
        </button>
      </nav>
      <div className="grid grid-cols-4 gap-4 p-4 mt-10 mb-10">
        <div
          className="bg-[#40513B] p-4 rounded shadow-md text-center cursor-pointer"
          onClick={() => handleNavigate('/admin/users')}
        >
          <h2 className="text-xl font-bold text-white">Users</h2>
          <p className="text-2xl text-white">{usersCount}</p>
        </div>
        <div
          className="bg-[#40513B] p-4 rounded shadow-md text-center cursor-pointer"
          onClick={() => handleNavigate('/admin/orders')}
        >
          <h2 className="text-xl font-bold text-white">Orders</h2>
          <p className="text-2xl text-white">{ordersCount}</p>
        </div>
        <div
          className="bg-[#40513B] p-4 rounded shadow-md text-center cursor-pointer"
          onClick={() => handleNavigate('/admin/completedorders')}
        >
          <h2 className="text-xl font-bold text-white">Completed Orders</h2>
          <p className="text-2xl text-white">{completedOrdersCount}</p>
        </div>
        <div
          className="bg-[#40513B] p-4 rounded shadow-md text-center cursor-pointer"
          onClick={() => handleNavigate('/admin/allproducts')}
        >
          <h2 className="text-xl font-bold text-white">Total Products</h2>
          <p className="text-2xl text-white">{totalProductsCount}</p>
        </div>
      </div>
    </>
  );
}

// import React from 'react';
// import { Link } from 'react-router-dom';
// // import { useDispatch } from 'react-redux';
// import { signOut } from 'firebase/auth';
// import { useNavigate } from 'react-router-dom';
// import { toast } from 'react-toastify';
// import { auth } from '../firebase/firebaseConfig';

// export default function AdminNav() {
//   // const dispatch = useDispatch();
//   const navigate = useNavigate();

//   const handleLogout = async () => {
//     try {
//       await signOut(auth);
//       // Dispatch logout action if using Redux
//       // dispatch(logoutUser());
//       toast.success('Logout successful');
//       navigate('/');
//     } catch (error) {
//       console.error('Error logging out:', error);
//       toast.error('Error logging out');
//     }
//   };

//   return (
//     <>
//       <nav className="bg-white-800 text-black p-4 flex justify-between items-center">
//         <div className="flex items-center">
//           <span className="text-2xl font-bold">AKB</span>
//           <span className="ml-2 font-semibold">Admin</span>
//         </div>
//         <div className="flex gap-4">
//           <Link to="/admin/users" className="hover:text-green-500 font-bold">Users</Link>
//           <Link to="/admin/orders" className="hover:text-green-500 font-bold">Orders</Link>
//           <Link to="/admin/addproduct" className="hover:text-green-500 font-bold">Add Product</Link>
//           {/* <Link to="/admin/editproduct/:id" className="hover:text-green-500 font-bold">Edit Product</Link> */}
//           <Link to="/admin/allproducts" className="hover:text-green-500 font-bold"> All Products</Link>
//         </div>
//         <button onClick={handleLogout} className="bg-red-600 hover:bg-red-700 px-4 py-2 rounded">
//           Logout
//         </button>
//       </nav>
//       <div className="grid grid-cols-4 gap-4 p-4 mt-10 mb-10">
//         <div className="bg-[#40513B] p-4 rounded shadow-md text-center">
//           <h2 className="text-xl font-bold text-white">Users</h2>
//           <p className="text-2xl text-white">users</p>
//         </div>
//         <div className="bg-[#40513B] p-4 rounded shadow-md text-center">
//           <h2 className="text-xl font-bold text-white">Orders</h2>
//           <p className="text-2xl text-white">120</p>
//         </div>
//         <div className="bg-[#40513B] p-4 rounded shadow-md text-center">
//           <h2 className="text-xl font-bold text-white">Completed Orders</h2>
//           <p className="text-2xl text-white">100</p>
//         </div>
//         <div className="bg-[#40513B] p-4 rounded shadow-md text-center">
//           <h2 className="text-xl font-bold text-white">Total Products</h2>
//           <p className="text-2xl text-white">80</p>
//         </div>
//       </div>
//     </>
//   );
// }
