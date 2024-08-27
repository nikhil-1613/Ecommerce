import React from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';
import Home from './Home';
import About from './About';
import Shop from './Shop';
import Products from './Products';
import Cart from './Cart';
import Contact from './Contact';
import Login from './Login';
import Signup from './Signup';
import ProtectedRoutesForAdmin from '../admin/ProtectedRoutesForAdmin';
import Users from '../admin/Users';
import Orders from '../admin/Orders';
// import Addproducts from '../admin/AddProducts';
import EditProducts from '../admin/EditProducts';
import ProductList from '../admin/ProductList';
// import AddProducts from '../admin/Addproducts';
import AddProducts from '../admin/AddProducts'; // Correct casing
import Checkout from './Checkout';
import CompletedOrders from '../admin/CompletedOrders';


export default function Routers() {
  return (
    <Routes>
      <Route path="/" element={<Navigate to="/home" />} />
      <Route path="/home" element={<Home />} />
      <Route path="/about" element={<About />} />
      <Route path="/shop" element={<Shop />} />
      {/* <Route path="/shop/:id" element={<ProductDetails />} /> */}
      <Route path="/products" element={<Products />} />
      <Route path="/cart" element={<Cart />} />
      <Route path="/contactus" element={<Contact />} />
      <Route path="/checkout" element={<Checkout />} />
      <Route path="/login" element={<Login />} />
      <Route path="/signup" element={<Signup />} />

      {/* Admin Routes */}
     
        <Route path="/admin/users" element={<ProtectedRoutesForAdmin><Users/></ProtectedRoutesForAdmin>} />
        <Route path="/admin/orders" element={<ProtectedRoutesForAdmin><Orders/></ProtectedRoutesForAdmin>} />
        <Route path="/admin/addproduct" element={<ProtectedRoutesForAdmin><AddProducts/></ProtectedRoutesForAdmin>} />
        <Route path="/admin/editproduct/:id" element={<ProtectedRoutesForAdmin><EditProducts /></ProtectedRoutesForAdmin>} />
        <Route path='/admin/allproducts' element={<ProtectedRoutesForAdmin><ProductList/></ProtectedRoutesForAdmin>}/>
        <Route path='/admin/completedorders' element={<ProtectedRoutesForAdmin><CompletedOrders/></ProtectedRoutesForAdmin>}/>
        
    </Routes>
  );
}

// import React from 'react';
// import { Routes, Route, Navigate } from 'react-router-dom';
// import Home from './Home';
// import About from './About';
// import Shop from './Shop';
// import Products from './Products';
// import Cart from './Cart';
// import Contact from './Contact';
// import Login from './Login';
// import Signup from './Signup';
// import ProtectedRoutesForAdmin from '../admin/ProtectedRoutesForAdmin';
// import Users from '../admin/Users';
// import Orders from '../admin/Orders';
// import Addproducts from '../admin/Addproducts';
// import EditProducts from '../admin/EditProducts';


// export default function Routers() {
//   return (
//     <Routes>
//       <Route path="/" element={<Navigate to="/home" />} />
//       <Route path="/home" element={<Home />} />
//       <Route path="/about" element={<About />} />
//       <Route path="/shop" element={<Shop />} />
//       {/* <Route path="/shop/:id" element={<ProductDetails />} /> */}
//       <Route path="/products" element={<Products />} />
//       <Route path="/cart" element={<Cart />} />
//       <Route path="/contactus" element={<Contact />} />
//       {/* <Route path="/checkout" element={<Checkout />} /> */}
//       <Route path="/login" element={<Login />} />
//       <Route path="/signup" element={<Signup />} />
      
//       {/* <Route path='/admin' element={<ProtectedRoutesForAdmin><AdminNav/></ProtectedRoutesForAdmin>}/> */}
//         <Route path='/users' element={<ProtectedRoutesForAdmin><Users/></ProtectedRoutesForAdmin>}/>
//         <Route path='/orders' element={<ProtectedRoutesForAdmin><Orders/></ProtectedRoutesForAdmin>}/>
//         <Route path='/addproducts' element={<ProtectedRoutesForAdmin><Addproducts/></ProtectedRoutesForAdmin>}/>
//         <Route path='/editproducts' element={<ProtectedRoutesForAdmin><EditProducts/></ProtectedRoutesForAdmin>}/>
//     </Routes>
//   )
// }
