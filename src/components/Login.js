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
            
            // Check if the user is an admin based on email
            if (user.email === 'hemanth1234@gmail.com') {
                navigate('/admin'); 
                toast.success('admin login successful')
               // Redirect admin to admin panel
            } else {
                navigate('/'); // Redirect normal user to home or another page
            }
        } catch (error) {
            console.error('Error logging in:', error);
            toast.error('Error logging in');
        }

        // try {
        //     const userCredential = await signInWithEmailAndPassword(auth, email, password);
        //     const user = userCredential.user;
        //     toast.success('User login successful');
        //     console.log('User logged in:', user);
        //     dispatch(loadCartFromFirebase());
        //     navigate('/'); // Redirect to home or another page after login
        // } catch (error) {
        //     console.error('Error logging in:', error);
        //     toast.error('Error logging in');
        // }
    };

    return (
        <div className="flex justify-center items-center h-screen">
            <img src={login_background} alt="Login Background" className="w-1/3 rounded-l-lg" />
            <div className="bg-white p-8 rounded-r-lg">
                <h1 className="text-7xl mb-8 font-bold text-[#40513B]">Welcome Back!!</h1>
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
                    <div className="flex justify-between">
                        <button id="b1" type="button" className="text-[#40513B]">Forget Password?</button>
                        <button id="b2" type="submit" className="bg-[#40513B] text-white px-8 py-2 rounded-md hover:bg-[#40513C]">Submit</button>
                    </div>
                </form>
            </div>
            <ToastContainer />
        </div>
    )
}

// import React, { useState } from "react";
// import login_background from '../images/login_background.png';
// import { auth } from '../firebase/firebaseConfig'; // Adjust the import based on your actual firebase config file
// import { signInWithEmailAndPassword } from "firebase/auth";
// import { toast, ToastContainer } from 'react-toastify';
// import 'react-toastify/dist/ReactToastify.css';
// import { useNavigate } from "react-router-dom";

// export default function Login() {
    
//     const [formData, setFormData] = useState({
//         email: '',
//         password: ''
//     });

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
//         } catch (error) {
//             console.error('Error logging in:', error);
//             toast.error('Error logging in');
//         }
//     };

//     return (
//         <div className="flex justify-center items-center h-screen">
//             <img src={login_background} alt="Login Background" className="w-1/3 rounded-l-lg" />
//             <div className="bg-white p-8 rounded-r-lg">
//                 <h1 className="text-7xl mb-8 font-bold text-[#40513B]">Welcome Back!!</h1>
//                 <form onSubmit={handleSubmit} className="space-y-4">
//                     <div className="flex flex-col">
//                         <label htmlFor="email" className="text-lg font-semibold ">Email:</label>
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
