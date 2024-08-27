import React from 'react'
import Header from './Header'
import Footer from './Footer'
import Routers from './Routers'
import { useLocation } from 'react-router-dom'
import AdminNav from '../admin/AdminNav';
import ProtectedRoutesForAdmin from '../admin/ProtectedRoutesForAdmin'

export default function Layout() {
  const location = useLocation();
  return (
  
   <div>
    {location.pathname.startsWith("/admin") ? <ProtectedRoutesForAdmin><AdminNav/></ProtectedRoutesForAdmin>:<Header/>}
    <Routers/>
    <Footer/>
   </div>
  )
}
