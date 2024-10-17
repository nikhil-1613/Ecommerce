import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { addToCart, removeToCart, removeSingleIteams, emptycartIteam } from '../redux/features/CartSlice';
import toast from 'react-hot-toast';
import './styles/CartStyle.css';
import { useNavigate } from 'react-router-dom';

export default function Cart() {
    const carts = useSelector((state) => state.allCart.carts);
    const [totalprice, setPrice] = useState(0);
    const [totalquantity, setTotalQuantity] = useState(0);
    const dispatch = useDispatch();
    const navigate = useNavigate();

    const handleIncrement = (item) => {
        dispatch(addToCart(item));
    };

    const handleDecrement = (id) => {
        dispatch(removeToCart(id));
        toast.success("Item Removed From Your Cart");
    };

    const handleSingleDecrement = (item) => {
        dispatch(removeSingleIteams(item));
    };

    const emptycart = () => {
        dispatch(emptycartIteam());
        toast.success("Your Cart is Empty");
    };

    const total = () => {
        let totalPrice = 0;
        carts.forEach((ele) => {
            totalPrice += ele.price * ele.qnty;
        });
        setPrice(totalPrice);
    };

    const countquantity = () => {
        let totalQuantity = 0;
        carts.forEach((ele) => {
            totalQuantity += ele.qnty;
        });
        setTotalQuantity(totalQuantity);
    };

    useEffect(() => {
        total();
        countquantity();
    }, [carts]);

    const handlePlaceOrder = () => {
        navigate('/checkout', { state: { carts } });
    };

    const handleContinueShopping = () => {
        navigate('/products');
    };

    return (
        <div className="container mx-auto p-4">
            <div className="flex flex-col items-center">
                <div className="w-full md:w-3/4 lg:w-2/3">
                    <div className="card">
                        <div className="card-header bg-gray-800 py-3 px-4">
                            <div className="flex justify-between items-center">
                                <h5 className="text-white m-0">Cart Calculation {carts.length > 0 ? `(${carts.length})` : ""}</h5>
                                {carts.length > 0 && (
                                    <button className="btn btn-danger btn-sm" onClick={emptycart}>
                                        <i className="fa fa-trash-alt mr-2"></i>Empty Cart
                                    </button>
                                )}
                            </div>
                        </div>
                        <div className="card-body p-0 overflow-x-auto">
                            {carts.length === 0 ? (
                                <div className="flex justify-center items-center py-10">
                                    <div className="text-center">
                                        <i className="fa fa-shopping-cart text-5xl mb-4"></i>
                                        <p className="text-xl">Your Cart Is Empty</p>
                                    </div>
                                </div>
                            ) : (
                                <table className="table w-full text-left">
                                    <thead>
                                        <tr className="bg-gray-200">
                                            <th className="p-2">Action</th>
                                            <th className="p-2">Product</th>
                                            <th className="p-2">Name</th>
                                            <th className="p-2">Price</th>
                                            <th className="p-2">Qty</th>
                                            <th className="p-2 text-right">Total</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        {carts.map((data) => (
                                            <tr key={data.id} className="border-t">
                                                <td className="p-2">
                                                    <button className="text-red-500" onClick={() => handleDecrement(data.id)}>
                                                        <i className="fa fa-trash-alt"></i>
                                                    </button>
                                                </td>
                                                <td className="p-2">
                                                    <img src={data.imageUrl} alt="" className="w-12 h-12 object-cover" />
                                                </td>
                                                <td className="p-2">
                                                    <p>{data.name}</p>
                                                </td>
                                                <td className="p-2">₹ {data.price}</td>
                                                <td className="p-2">
                                                    <div className="flex items-center space-x-2">
                                                        <button
                                                            className="bg-gray-200 px-2 py-1 rounded"
                                                            onClick={data.qnty <= 1 ? () => handleDecrement(data.id) : () => handleSingleDecrement(data)}
                                                        >
                                                            <i className="fa fa-minus"></i>
                                                        </button>
                                                        <span>{data.qnty}</span>
                                                        <button
                                                            className="bg-gray-200 px-2 py-1 rounded"
                                                            onClick={() => handleIncrement(data)}
                                                        >
                                                            <i className="fa fa-plus"></i>
                                                        </button>
                                                    </div>
                                                </td>
                                                <td className="p-2 text-right">₹ {data.qnty * data.price}</td>
                                            </tr>
                                        ))}
                                    </tbody>
                                    <tfoot>
                                        <tr className="border-t">
                                            <td colSpan={4} className="p-2">Total Items: <span className="text-red-500">{totalquantity}</span></td>
                                            <td colSpan={2} className="p-2 text-right">Total Price: <span className="text-red-500">₹ {totalprice}</span></td>
                                        </tr>
                                    </tfoot>
                                </table>
                            )}
                        </div>
                        {carts.length > 0 && (
                            <div className="card-footer bg-gray-800 py-3 px-4">
                                <div className="flex justify-between">
                                    <button
                                        className="btn btn-primary bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
                                        onClick={handleContinueShopping}
                                    >
                                        Continue Shopping
                                    </button>
                                    <button
                                        className="btn btn-success bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded"
                                        onClick={handlePlaceOrder}
                                    >
                                        Place Order
                                    </button>
                                </div>
                            </div>
                        )}
                    </div>
                </div>
            </div>
        </div>
    );
}

// import React, { useEffect, useState } from 'react';
// import { useDispatch, useSelector } from 'react-redux';
// import { addToCart, removeToCart, removeSingleIteams, emptycartIteam } from '../redux/features/CartSlice';
// import toast from 'react-hot-toast';
// import './styles/CartStyle.css';
// import { useNavigate } from 'react-router-dom';

// export default function Cart() {
//     const carts = useSelector((state) => state.allCart.carts);
//     const [totalprice, setPrice] = useState(0);
//     const [totalquantity, setTotalQuantity] = useState(0);
//     const dispatch = useDispatch();
//     const navigate = useNavigate();

//     const handleIncrement = (item) => {
//         console.log('Adding item to cart:', item);
//         dispatch(addToCart(item));
//     };

//     const handleDecrement = (id) => {
//         console.log('Removing item from cart:', id);
//         dispatch(removeToCart(id));
//         toast.success("Item Removed From Your Cart");
//     };

//     const handleSingleDecrement = (item) => {
//         console.log('Decrementing single item quantity:', item);
//         dispatch(removeSingleIteams(item));
//     };

//     const emptycart = () => {
//         console.log('Emptying cart');
//         dispatch(emptycartIteam());
//         toast.success("Your Cart is Empty");
//     };

//     const total = () => {
//         let totalPrice = 0;
//         carts.forEach((ele) => {
//             totalPrice += ele.price * ele.qnty;
//         });
//         console.log('Total price calculated:', totalPrice);
//         setPrice(totalPrice);
//     };

//     const countquantity = () => {
//         let totalQuantity = 0;
//         carts.forEach((ele) => {
//             totalQuantity += ele.qnty;
//         });
//         console.log('Total quantity calculated:', totalQuantity);
//         setTotalQuantity(totalQuantity);
//     };

//     useEffect(() => {
//         total();
//         countquantity();
//     }, [carts]);

//     console.log('Cart state:', carts);

//     const handlePlaceOrder = () => {
//         navigate('/checkout', { state: { carts } }); // Navigate to checkout page with cart data
//     };

//     const handleContinueShopping = () => {
//         navigate('/products'); // Navigate to products page
//     };

//     return (
//         <div className="row justify-center mx-auto">
//             <div className="col-md-8 mt-5 mb-5 cardsdetails">
//                 <div className="card">
//                     <div className="card-header bg-grey-800 py-3 px-4">
//                         <div className="flex justify-between items-center ">
//                             <h5 className=" text-white m-0">Cart Calculation {carts.length > 0 ? `(${carts.length})` : ""}</h5>
//                             {carts.length > 0 && (
//                                 <button className="btn btn-danger mt-0 btn-sm" onClick={emptycart}>
//                                     <i className="fa fa-trash-alt mr-2"></i>
//                                     <span>Empty Cart</span>
//                                 </button>
//                             )}
//                         </div>
//                     </div>
//                     <div className="card-body p-0">
//                         {carts.length === 0 ? (
//                             <table className="table cart-table mb-0">
//                                 <tbody>
//                                     <tr>
//                                         <td colSpan={6}>
//                                             <div className="cart-empty">
//                                                 <i className="fa fa-shopping-cart"></i>
//                                                 <p>Your Cart Is Empty</p>
//                                             </div>
//                                         </td>
//                                     </tr>
//                                 </tbody>
//                             </table>
//                         ) : (
//                             <table className="table cart-table mb-0 table-responsive-sm">
//                                 <thead>
//                                     <tr>
//                                         <th>Action</th>
//                                         <th>Product</th>
//                                         <th>Name</th>
//                                         <th>Price</th>
//                                         <th>Qty</th>
//                                         <th className="text-right">
//                                             <span id="amount" className="amount">Total Amount</span>
//                                         </th>
//                                     </tr>
//                                 </thead>
//                                 <tbody>
//                                     {carts.map((data) => (
//                                         <tr key={data.id}>
//                                             <td>
//                                                 <button className="prdct-delete" onClick={() => handleDecrement(data.id)}>
//                                                     <i className="fa fa-trash-alt"></i>
//                                                 </button>
//                                             </td>
//                                             <td>
//                                                 <div className="product-img -h-15 w-12">
//                                                     <img src={data.imageUrl} alt="" />
//                                                 </div>
//                                             </td>
//                                             <td>
//                                                 <div className="product-name">
//                                                     <p>{data.name}</p>
//                                                 </div>
//                                             </td>
//                                             <td>{data.price}</td>
//                                             <td>
//                                                 <div className="prdct-qty-container">
//                                                     <button
//                                                         className="prdct-qty-btn"
//                                                         type="button"
//                                                         onClick={data.qnty <= 1 ? () => handleDecrement(data.id) : () => handleSingleDecrement(data)}
//                                                     >
//                                                         <i className="fa fa-minus"></i>
//                                                     </button>
//                                                     <input type="text" className="qty-input-box" value={data.qnty} disabled />
//                                                     <button className="prdct-qty-btn" type="button" onClick={() => handleIncrement(data)}>
//                                                         <i className="fa fa-plus"></i>
//                                                     </button>
//                                                 </div>
//                                             </td>
//                                             <td className="text-right">₹ {data.qnty * data.price}</td>
//                                         </tr>
//                                     ))}
//                                 </tbody>
//                                 <tfoot>
//                                     <tr>
//                                         <th>&nbsp;</th>
//                                         <th colSpan={3}>&nbsp;</th>
//                                         <th>Items In Cart: <span className="text-danger">{totalquantity}</span></th>
//                                         <th className="text-right">Total Price: <span className="text-danger">₹ {totalprice}</span></th>
//                                     </tr>
//                                 </tfoot>
//                             </table>
//                         )}
//                     </div>
//                     <div className="card-footer bg-grey-800 py-3 px-4">
//                         <div className="flex justify-between items-center">
//                             <div className="flex justify-center space-x-4 mt-4">
//                                 <button className="btn btn-primary bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded" onClick={handleContinueShopping}>
//                                     Continue Shopping
//                                 </button>
//                                 <button className="btn btn-success bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded" onClick={handlePlaceOrder}>
//                                     Place Order
//                                 </button>
//                             </div>
//                         </div>
//                     </div>
//                 </div>
//             </div>
//         </div>
//     );
// }

