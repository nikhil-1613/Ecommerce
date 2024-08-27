// // PrivateRoute.js
// import React from 'react';
// import { Navigate } from 'react-router-dom';
// import { toast } from 'react-toastify';
// import useAuth from '../Auth';

// const PrivateRoute = ({ element }) => {
//   const { user, isAdmin } = useAuth();

//   if (!user) {
//     return <Navigate to="/login" />;
//   }

//   if (isAdmin) {
//     toast.success('Admin login successful');
//     return element;
//   } else {
//     toast.error('Access denied. Admins only.');
//     return <Navigate to="/" />;
//   }
// };

// export default PrivateRoute;

// // import React from 'react';
// // import { Navigate } from 'react-router-dom';
// // import { toast } from 'react-toastify';

// // // Assuming you have a way to get the current user, e.g., from context or props
// // const isAdmin = (user) => {
// //   return user && user.email === 'hemanth1234@gmail.com';
// // };

// // const AdminRoute = ({ user, element }) => {
// //   if (isAdmin(user)) {
// //     toast.success('Admin login successful');
// //     return element;
// //   } else {
// //     toast.error('Access denied. Admins only.');
// //     return <Navigate to="/" />;
// //   }
// // };

// // export default AdminRoute;
