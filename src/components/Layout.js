import React from 'react';
import Header from './Header';
import Footer from './Footer';
import Routers from './Routers';
import { useLocation } from 'react-router-dom';
import AdminNav from '../admin/AdminNav';
import ProtectedRoutesForAdmin from '../admin/ProtectedRoutesForAdmin';

export default function Layout() {
  const location = useLocation();

  // Define paths where footer should not be displayed
  const hideFooterPaths = ['/login', '/signup'];

  return (
    <div>
      {/* Conditionally render AdminNav for admin routes */}
      {location.pathname.startsWith("/admin") ? (
        <ProtectedRoutesForAdmin>
          <AdminNav />
        </ProtectedRoutesForAdmin>
      ) : (
        <Header />
      )}

      {/* Main routing */}
      <Routers />

      {/* Conditionally render Footer if path is not in hideFooterPaths */}
      {!hideFooterPaths.includes(location.pathname) && <Footer />}
    </div>
  );
}
