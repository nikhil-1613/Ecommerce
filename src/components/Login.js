import React, { useState } from "react";
import login_background from '../images/login_background.png';
import { auth } from '../firebase/firebaseConfig';
import { signInWithEmailAndPassword } from "firebase/auth";
import { useDispatch } from "react-redux";
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { useNavigate } from "react-router-dom";
import { loadCartFromFirebase } from "../redux/features/CartSlice";

export default function Login() {
    const [formData, setFormData] = useState({
        email: '',
        password: ''
    });

    const dispatch = useDispatch();
    const navigate = useNavigate();

    const handleChange = (e) => {
        const { id, value } = e.target;
        setFormData(prevState => ({
            ...prevState,
            [id]: value
        }));
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        const { email, password } = formData;
        try {
            const userCredential = await signInWithEmailAndPassword(auth, email, password);
            const user = userCredential.user;
            toast.success('User login successful');
            console.log('User logged in:', user);
            dispatch(loadCartFromFirebase());

            if (user.email === 'hemanth1234@gmail.com') {
                navigate('/admin');
                toast.success('admin login successful');
            } else {
                navigate('/');
            }
        } catch (error) {
            console.error('Error logging in:', error);
            toast.error('Error logging in');
        }
    };

    return (
        <div className="flex flex-col lg:flex-row justify-center items-center h-screen lg:space-x-4 px-4 lg:px-0">
            {/* Background image */}
            <div className="w-full sm:w-2/3 md:w-1/2 lg:w-1/3 mb-8 lg:mb-0 mt-20 sm:mt-0">
                <img
                    src={login_background}
                    alt="Login Background"
                    className="w-full h-auto rounded-lg lg:rounded-l-lg"
                />
            </div>

            {/* Login form */}
            <div className="bg-white p-8 rounded-lg lg:rounded-r-lg w-full sm:w-2/3 md:w-1/2 lg:w-1/3 shadow-2xl">
                <h1 className="text-3xl sm:text-4xl lg:text-5xl mb-6 font-bold text-[#40513B] text-center">
                    Welcome Back!
                </h1>
                <form onSubmit={handleSubmit} className="space-y-4">
                    <div className="flex flex-col">
                        <label htmlFor="email" className="text-lg font-semibold">Email:</label>
                        <input
                            type="email"
                            id="email"
                            placeholder="Please enter your email"
                            value={formData.email}
                            onChange={handleChange}
                            className="rounded-md px-4 py-2 border border-gray-300"
                        />
                    </div>
                    <div className="flex flex-col">
                        <label htmlFor="password" className="text-lg font-semibold">Password:</label>
                        <input
                            type="password"
                            id="password"
                            placeholder="Please enter your password"
                            value={formData.password}
                            onChange={handleChange}
                            className="rounded-md px-4 py-2 border border-gray-300"
                        />
                    </div>
                    <div className="flex justify-between items-center mt-4">
                        <button id="b1" type="button" className="text-[#40513B] text-sm sm:text-base">Forgot Password?</button>
                        <button id="b2" type="submit" className="bg-[#40513B] text-white px-6 py-2 rounded-md hover:bg-[#40513C]">
                            Submit
                        </button>
                    </div>
                </form>
            </div>

            {/* Toast Notifications */}
            <ToastContainer />
        </div>
    );
}

// import React, { useState } from "react";
// import login_background from '../images/login_background.png';
// import { auth } from '../firebase/firebaseConfig';
// import { signInWithEmailAndPassword } from "firebase/auth";
// import { useDispatch } from "react-redux";
// import { toast, ToastContainer } from 'react-toastify';
// import 'react-toastify/dist/ReactToastify.css';
// import { useNavigate } from "react-router-dom";
// import { loadCartFromFirebase } from "../redux/features/CartSlice";

// export default function Login() {
//     const [formData, setFormData] = useState({
//         email: '',
//         password: ''
//     });

//     const dispatch = useDispatch();
//     const navigate = useNavigate();

//     const handleChange = (e) => {
//         const { id, value } = e.target;
//         setFormData(prevState => ({
//             ...prevState,
//             [id]: value
//         }));
//     };

//     const handleSubmit = async (e) => {
//         e.preventDefault();
//         const { email, password } = formData;
//         try {
//             const userCredential = await signInWithEmailAndPassword(auth, email, password);
//             const user = userCredential.user;
//             toast.success('User login successful');
//             console.log('User logged in:', user);
//             dispatch(loadCartFromFirebase());
            
//             // Check if the user is an admin based on email
//             if (user.email === 'hemanth1234@gmail.com') {
//                 navigate('/admin'); 
//                 toast.success('admin login successful')
//                // Redirect admin to admin panel
//             } else {
//                 navigate('/'); // Redirect normal user to home or another page
//             }
//         } catch (error) {
//             console.error('Error logging in:', error);
//             toast.error('Error logging in');
//         }

      
//     };

//     return (
//         <div className="flex justify-center items-center h-screen">
//             <img src={login_background} alt="Login Background" className="w-1/3 rounded-l-lg " />
//             <div className="bg-white p-8 rounded-r-lg">
//                 <h1 className="text-7xl mb-8 font-bold text-[#40513B]">Welcome Back!!</h1>
//                 <form onSubmit={handleSubmit} className="space-y-4">
//                     <div className="flex flex-col">
//                         <label htmlFor="email" className="text-lg font-semibold">Email:</label>
//                         <input
//                             type="email"
//                             id="email"
//                             placeholder="Please enter your email"
//                             value={formData.email}
//                             onChange={handleChange}
//                             className="rounded-md px-4 py-2 border border-gray-300"
//                         />
//                     </div>
//                     <div className="flex flex-col">
//                         <label htmlFor="password" className="text-lg font-semibold">Password:</label>
//                         <input
//                             type="password"
//                             id="password"
//                             placeholder="Please enter your password"
//                             value={formData.password}
//                             onChange={handleChange}
//                             className="rounded-md px-4 py-2 border border-gray-300"
//                         />
//                     </div>
//                     <div className="flex justify-between">
//                         <button id="b1" type="button" className="text-[#40513B]">Forget Password?</button>
//                         <button id="b2" type="submit" className="bg-[#40513B] text-white px-8 py-2 rounded-md hover:bg-[#40513C]">Submit</button>
//                     </div>
//                 </form>
//             </div>
//             <ToastContainer />
//         </div>
//     )
// }
