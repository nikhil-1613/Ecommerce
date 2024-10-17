import React, { useState } from "react";
import login_back from '../images/login_background.png';
import { auth, db } from '../firebase/firebaseConfig';
import { createUserWithEmailAndPassword } from "firebase/auth";
import { doc, setDoc } from "firebase/firestore";
import bcrypt from 'bcryptjs';
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

export default function Signup() {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        password: '',
        phone: '',
        address: '',
        village: ''
    });

    const handleChange = (e) => {
        const { id, value } = e.target;
        setFormData(prevState => ({
            ...prevState,
            [id]: value
        }));
    };

    const handleSubmit = async (e) => {
        e.preventDefault(); // Prevent default form submission
        const { name, email, password, phone, address, village } = formData;
        try {
            // Hash the password before creating the user
            const hashedPassword = await bcrypt.hash(password, 10);
            const userCredential = await createUserWithEmailAndPassword(auth, email, password); // Use plain password here
            const user = userCredential.user;
            await setDoc(doc(db, "users", user.uid), {
                uid: user.uid,
                name,
                email,
                password: hashedPassword,
                phone,
                address,
                village
            });
            toast.success('User registered successfully!');
            console.log('User created:', user);
        } catch (error) {
            console.error('Error creating user:', error);
            toast.error('Error registering user');
        }
    };

    return (
        <div className="flex flex-col lg:flex-row justify-center items-center h-screen lg:space-x-4 px-4 lg:px-0">
            {/* Background image */}
            <div className="w-full mb-8 lg:mb-0 lg:w-1/3 mt-[500px] lg:mt-0">
                <img
                    src={login_back}
                    alt="Signup Background"
                    className="w-full h-auto rounded-lg lg:rounded-l-lg"
                />
            </div>

            {/* Signup form */}
            <div className="bg-white p-8 rounded-lg lg:rounded-r-lg w-full sm:w-2/3 md:w-1/2 lg:w-1/3 shadow-2xl">
                <h1 className="text-3xl sm:text-4xl lg:text-5xl mb-6 font-bold text-[#40513B] text-center">
                    Are You A New User? <br />Let's Signup
                </h1>
                <form onSubmit={handleSubmit} className="space-y-4">
                    <div className="flex flex-col">
                        <label htmlFor="name" className="text-lg font-semibold">Name:</label>
                        <input
                            type="text"
                            id="name"
                            placeholder="Enter Your Name"
                            value={formData.name}
                            onChange={handleChange}
                            className="rounded-md px-4 py-2 border border-gray-300"
                        />
                    </div>
                    <div className="flex flex-col">
                        <label htmlFor="email" className="text-lg font-semibold">Email:</label>
                        <input
                            type="email"
                            id="email"
                            placeholder="Enter Your Email"
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
                            placeholder="Enter Your Password"
                            value={formData.password}
                            onChange={handleChange}
                            className="rounded-md px-4 py-2 border border-gray-300"
                        />
                    </div>
                    <div className="flex flex-col">
                        <label htmlFor="phone" className="text-lg font-semibold">Phone No:</label>
                        <input
                            type="text"
                            id="phone"
                            placeholder="Enter Your Phone number"
                            value={formData.phone}
                            onChange={handleChange}
                            className="rounded-md px-4 py-2 border border-gray-300"
                        />
                    </div>
                    <div className="flex flex-col">
                        <label htmlFor="address" className="text-lg font-semibold">Address:</label>
                        <input
                            type="text"
                            id="address"
                            placeholder="Enter Your Address"
                            value={formData.address}
                            onChange={handleChange}
                            className="rounded-md px-4 py-2 border border-gray-300"
                        />
                    </div>
                    <div className="flex flex-col">
                        <label htmlFor="village" className="text-lg font-semibold">Village:</label>
                        <input
                            type="text"
                            id="village"
                            placeholder="Enter Your Village"
                            value={formData.village}
                            onChange={handleChange}
                            className="rounded-md px-4 py-2 border border-gray-300"
                        />
                    </div>
                    <button type="submit" className="bg-[#40513B] text-white px-8 py-2 rounded-md hover:bg-[#40513C]">Submit</button>
                </form>
            </div>

            <ToastContainer />
        </div>
    );
}



// import React, { useState } from "react";
// import login_back from '../images/login_background.png';
// import { auth, db } from '../firebase/firebaseConfig';
// import { createUserWithEmailAndPassword } from "firebase/auth";
// import { doc, setDoc } from "firebase/firestore";
// import bcrypt from 'bcryptjs';
// import { toast, ToastContainer } from 'react-toastify';
// import 'react-toastify/dist/ReactToastify.css';

// export default function Signup() {
//     const [formData, setFormData] = useState({
//         name: '',
//         email: '',
//         password: '',
//         phone: '',
//         address: '',
//         village: ''
//     });

//     const handleChange = (e) => {
//         const { id, value } = e.target;
//         setFormData(prevState => ({
//             ...prevState,
//             [id]: value
//         }));
//     };

//     const handleSubmit = async (e) => {
//         e.preventDefault(); // Prevent default form submission
//         const { name, email, password, phone, address, village } = formData;
//         try {
//             // Hash the password before creating the user
//             const hashedPassword = await bcrypt.hash(password, 10);
//             const userCredential = await createUserWithEmailAndPassword(auth, email, password); // Use plain password here
//             const user = userCredential.user;
//             await setDoc(doc(db, "users", user.uid), {
//                 uid: user.uid,
//                 name,
//                 email,
//                 password: hashedPassword,
//                 phone,
//                 address,
//                 village
//             });
//             toast.success('User registered successfully!');
//             console.log('User created:', user);
//         } catch (error) {
//             console.error('Error creating user:', error);
//             toast.error('Error registering user');
//         }
//     };

//     return (
//         <div className="signup flex justify-center items-center h-screen">
//             <img src={login_back} alt="Login Background" className="w-1/3 rounded-l-lg" />
//             <div className="form-content bg-white p-8 rounded-r-lg" style={{ height: "700px", marginBottom: "100px" }}>
//                 <h1 className="text-4xl font-semibold text-green-800 mb-8">Are You A New User? <br />Let's Signup</h1>
//                 <form onSubmit={handleSubmit} className="space-y-4">
//                     <div className="flex flex-col">
//                         <label htmlFor="name" className="text-lg font-bold">Name:</label>
//                         <input 
//                             type="text"
//                             id="name"
//                             placeholder="Enter Your Name"
//                             value={formData.name}
//                             onChange={handleChange}
//                             className="rounded-md px-4 py-2 border border-gray-300"
//                         />
//                     </div>
//                     <div className="flex flex-col">
//                         <label htmlFor="email" className="text-lg font-bold">Email:</label>
//                         <input
//                             type="text"
//                             id="email"
//                             placeholder="Enter Your Email"
//                             value={formData.email}
//                             onChange={handleChange}
//                             className="rounded-md px-4 py-2 border border-gray-300"
//                         />
//                     </div>
//                     <div className="flex flex-col">
//                         <label htmlFor="password" className="text-lg font-bold">Password:</label>
//                         <input
//                             type="password"
//                             id="password"
//                             placeholder="Enter Your Password"
//                             value={formData.password}
//                             onChange={handleChange}
//                             className="rounded-md px-4 py-2 border border-gray-300"
//                         />
//                     </div>
//                     <div className="flex flex-col">
//                         <label htmlFor="phone" className="text-lg font-bold">Phone No:</label>
//                         <input
//                             type="text"
//                             id="phone"
//                             placeholder="Enter Your Phone number"
//                             value={formData.phone}
//                             onChange={handleChange}
//                             className="rounded-md px-4 py-2 border border-gray-300"
//                         />
//                     </div>
//                     <div className="flex flex-col">
//                         <label htmlFor="address" className="text-lg font-bold">Address:</label>
//                         <input
//                             type="text"
//                             id="address"
//                             placeholder="Enter Your Address"
//                             value={formData.address}
//                             onChange={handleChange}
//                             className="rounded-md px-4 py-2 border border-gray-300"
//                         />
//                     </div>
//                     <div className="flex flex-col">
//                         <label htmlFor="village" className="text-lg font-bold">Village:</label>
//                         <input
//                             type="text"
//                             id="village"
//                             placeholder="Enter Your Village"
//                             value={formData.village}
//                             onChange={handleChange}
//                             className="rounded-md px-4 py-2 border border-gray-300"
//                         />
//                     </div>
//                     <button type="submit" className="bg-[#40513B] text-white px-8 py-2 rounded-md hover:bg-[#40513C]">Submit</button>
//                 </form>
//             </div>
//             <ToastContainer />
//         </div>
//     );
// }
