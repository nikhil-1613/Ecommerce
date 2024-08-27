import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { FaShoppingCart, FaBars, FaTimes } from 'react-icons/fa'; // Import icons from react-icons/fa
import './styles/Header.css'; // Import the CSS file for header
import { useSelector } from 'react-redux';
import { auth } from '../firebase/firebaseConfig';
import { signOut } from 'firebase/auth';
import { toast } from 'react-toastify';
import { emptycartIteam } from '../redux/features/CartSlice';

export default function Header() {
  const [selected, setSelected] = useState("home");
  const { carts } = useSelector((state) => state.allCart);
  const [loggedIn, setLoggedIn] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false); 

  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged((user) => {
      if (user) {
        setLoggedIn(true);
      } else {
        setLoggedIn(false);
      }
    });
    return () => unsubscribe();
  }, []);

  const handleLogout = async () => {
    try {
      await signOut(auth);
      setLoggedIn(false);
      emptycartIteam();
      toast.success('User logout successful');
    } catch (error) {
      console.error('Error logging out:', error);
    }
  };

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <div className="header bg-white shadow-md">
      <div className="container mx-auto px-4 flex items-center justify-between h-20">
        <div className="logo">
          <h1 className="font-bold text-3xl">AKB</h1>
        </div>
        <div className="md:hidden">
          <button onClick={toggleMenu} className="text-3xl">
            {menuOpen ? <FaTimes /> : <FaBars />} {/* Toggle between bars and times icons */}
          </button>
        </div>
        <div className={`flex-grow flex items-center justify-end ${menuOpen ? 'flex' : 'hidden'} md:flex`}>
          <div className="center-links text-xl flex flex-col md:flex-row items-center">
            <Link className={`px-4 py-2 text-lg font-medium ${selected === 'home' ? 'text-green-500' : ''}`} onClick={(event) => setSelected(event.target.id)} to="/" id="home">Home</Link>
            <Link className={`px-4 py-2 text-lg font-medium ${selected === 'about' ? 'text-green-500' : ''}`} onClick={(event) => setSelected(event.target.id)} to="/about" id="about">About Us</Link>
            {/* <Link className={`px-4 py-2 text-lg font-medium ${selected === 'shop' ? 'text-green-500' : ''}`} onClick={(event) => setSelected(event.target.id)} to="/shop" id="shop">Shop</Link> */}
            <Link className={`px-4 py-2 text-lg font-medium ${selected === 'product' ? 'text-green-500' : ''}`} onClick={(event) => setSelected(event.target.id)} to="/products" id="product">Products</Link>
            <Link className={`px-4 py-2 text-lg font-medium ${selected === 'contact' ? 'text-green-500' : ''}`} onClick={(event) => setSelected(event.target.id)} to="/contactus" id="contact">Contact</Link>
            <Link className="relative px-4 py-2 text-lg font-medium flex items-center" onClick={(event) => setSelected(event.target.id)} to="/cart" id="cart">
              <FaShoppingCart />
              {carts.length > 0 && (
                <span className="cart-badge ml-1 bg-red-500 text-white rounded-full px-2 py-1 text-xs">{carts.length}</span>
              )}
            </Link>
          </div>
          <div className="right-links flex flex-col md:flex-row items-center mt-4 md:mt-0">
            {loggedIn ? (
              <button onClick={handleLogout} className="px-4 py-2 bg-red-500 text-white rounded">Logout</button>
            ) : (
              <>
                <Link onClick={(event) => setSelected(event.target.id)} to="/login">
                  <button id="login" className="px-4 py-2 bg-green-500 text-white rounded">Login</button>
                </Link>
                <Link onClick={(event) => setSelected(event.target.id)} to="/signup">
                  <button id="signup" className="px-4 py-2 mt-2 md:mt-0 md:ml-2 bg-green-500 text-white rounded">Signup</button>
                </Link>
              </>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}

// import React, { useState, useEffect } from 'react';
// import { Link } from 'react-router-dom';
// import { FaShoppingCart } from 'react-icons/fa'; // Import FaShoppingCart icon from react-icons/fa
// import './styles/Header.css'; // Import the CSS file for header
// import { useSelector } from 'react-redux';
// import { auth } from '../firebase/firebaseConfig';
// import { signOut } from 'firebase/auth';
// import { useNavigate } from 'react-router-dom';
// import { toast } from 'react-toastify';
// import { emptycartIteam } from '../redux/features/CartSlice';

// export default function Header() {
//   const [selected, setSelected] = useState("home");
//   const { carts } = useSelector((state) => state.allCart);
//   const [loggedIn, setLoggedIn] = useState(false);
//   // const navigate = useNavigate();
  
//   useEffect(() => {
//     const unsubscribe = auth.onAuthStateChanged((user) => {
//       if (user) {
//         setLoggedIn(true);
//       } else {
//         setLoggedIn(false);
//       }
//     });
//     return () => unsubscribe();
//   }, []); 

//   const handleLogout = async () => {
//     try {
//       await signOut(auth);
//       setLoggedIn(false);
//       emptycartIteam();
//       toast.success('user logout successfull')
//     } catch (error) {
//       console.error('Error logging out:', error);
//     }
//   };
//   return (
//     <div className='header h-20 bg-white-500'>
//       <div className="logo bg-black-500 float-left px-10 py-5">
//         <h1 className='font-bold text-3xl'>AKB</h1>
//       </div>
//       <div className="center-links pl-20 py-5 text-xl flex items-center">
//         <Link className={`px-2 text-xl font-medium ${selected === 'home' ? 'text-green-500' : ''}`} onClick={(event) => setSelected(event.target.id)} to="/" id='home'>Home</Link>
//         <Link className={`px-2 text-xl font-medium ${selected === 'about' ? 'text-green-500' : ''}`} onClick={(event) => setSelected(event.target.id)} to="/about" id='about'>About</Link>
//         <Link className={`px-2 text-xl font-medium ${selected === 'shop' ? 'text-green-500' : ''}`} onClick={(event) => setSelected(event.target.id)} to="/shop" id='shop'>Shop</Link>
//         <Link className={`px-2 text-xl font-medium ${selected === 'product' ? 'text-green-500' : ''}`} onClick={(event) => setSelected(event.target.id)} to="/products" id='product'>Products</Link>
//         <Link className={`px-2 text-xl font-medium ${selected === 'contact' ? 'text-green-500' : ''}`} onClick={(event) => setSelected(event.target.id)} to="/contactus" id='contact'>Contact</Link>

//         <Link className="relative px-2 text-xl font-medium flex items-center" onClick={(event) => setSelected(event.target.id)} to="/cart" id='cart'>
//           <FaShoppingCart /> {/* Use FaShoppingCart icon from react-icons */}
//           {carts.length > 0 && (
//             <span className="cart-badge">{carts.length}</span>
//           )}
//         </Link>

//         <div className="right-links float-right px-4 ml-auto">
//           {loggedIn ? (
//             <button onClick={handleLogout} className="px-4 py-2 bg-red-500 text-white rounded">Logout</button>
//           ) : (
//             <Link onClick={(event) => setSelected(event.target.id)} to="/login">
//               <button id="login" className="px-4 py-2 bg-green-500 text-white rounded">Login</button>
//             </Link>
//           )}

//           {/* <Link onClick={(event) => setSelected(event.target.id)} to="/login">
//             <button id="login" className="px-4 py-2 bg-green-500 text-white rounded">Login</button>
//           </Link> */}
//           <Link onClick={(event) => setSelected(event.target.id)} to="/signup">
//             <button id="signup" className="px-4 py-2 ml-2 bg-green-500 text-white rounded">Signup</button>
//           </Link>
//         </div>
//       </div>
//     </div>
//   );
// }

