// src/components/ProtectedRoutesForAdmin.js
import React from 'react';
import { Navigate } from 'react-router-dom';
import useAdmin from '../hooks/UseAdmin';

const ProtectedRoutesForAdmin = ({ children }) => {
  const { isAdmin, loading } = useAdmin();

  if (loading) {
    return <div>Loading...</div>; // Show a loading indicator while checking admin status
  }

  if (isAdmin) {
    return children;
  } else {
    return <Navigate to='/login' />;
  }
};

export default ProtectedRoutesForAdmin;
