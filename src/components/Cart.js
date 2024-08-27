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
        console.log('Adding item to cart:', item);
        dispatch(addToCart(item));
    };

    const handleDecrement = (id) => {
        console.log('Removing item from cart:', id);
        dispatch(removeToCart(id));
        toast.success("Item Removed From Your Cart");
    };

    const handleSingleDecrement = (item) => {
        console.log('Decrementing single item quantity:', item);
        dispatch(removeSingleIteams(item));
    };

    const emptycart = () => {
        console.log('Emptying cart');
        dispatch(emptycartIteam());
        toast.success("Your Cart is Empty");
    };

    const total = () => {
        let totalPrice = 0;
        carts.forEach((ele) => {
            totalPrice += ele.price * ele.qnty;
        });
        console.log('Total price calculated:', totalPrice);
        setPrice(totalPrice);
    };

    const countquantity = () => {
        let totalQuantity = 0;
        carts.forEach((ele) => {
            totalQuantity += ele.qnty;
        });
        console.log('Total quantity calculated:', totalQuantity);
        setTotalQuantity(totalQuantity);
    };

    useEffect(() => {
        total();
        countquantity();
    }, [carts]);

    console.log('Cart state:', carts);

    const handlePlaceOrder = () => {
        navigate('/checkout', { state: { carts } }); // Navigate to checkout page with cart data
    };

    const handleContinueShopping = () => {
        navigate('/products'); // Navigate to products page
    };

    return (
        <div className="row justify-center mx-auto">
            <div className="col-md-8 mt-5 mb-5 cardsdetails">
                <div className="card">
                    <div className="card-header bg-grey-800 py-3 px-4">
                        <div className="flex justify-between items-center ">
                            <h5 className=" text-white m-0">Cart Calculation {carts.length > 0 ? `(${carts.length})` : ""}</h5>
                            {carts.length > 0 && (
                                <button className="btn btn-danger mt-0 btn-sm" onClick={emptycart}>
                                    <i className="fa fa-trash-alt mr-2"></i>
                                    <span>Empty Cart</span>
                                </button>
                            )}
                        </div>
                    </div>
                    <div className="card-body p-0">
                        {carts.length === 0 ? (
                            <table className="table cart-table mb-0">
                                <tbody>
                                    <tr>
                                        <td colSpan={6}>
                                            <div className="cart-empty">
                                                <i className="fa fa-shopping-cart"></i>
                                                <p>Your Cart Is Empty</p>
                                            </div>
                                        </td>
                                    </tr>
                                </tbody>
                            </table>
                        ) : (
                            <table className="table cart-table mb-0 table-responsive-sm">
                                <thead>
                                    <tr>
                                        <th>Action</th>
                                        <th>Product</th>
                                        <th>Name</th>
                                        <th>Price</th>
                                        <th>Qty</th>
                                        <th className="text-right">
                                            <span id="amount" className="amount">Total Amount</span>
                                        </th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {carts.map((data) => (
                                        <tr key={data.id}>
                                            <td>
                                                <button className="prdct-delete" onClick={() => handleDecrement(data.id)}>
                                                    <i className="fa fa-trash-alt"></i>
                                                </button>
                                            </td>
                                            <td>
                                                <div className="product-img -h-15 w-12">
                                                    <img src={data.imageUrl} alt="" />
                                                </div>
                                            </td>
                                            <td>
                                                <div className="product-name">
                                                    <p>{data.name}</p>
                                                </div>
                                            </td>
                                            <td>{data.price}</td>
                                            <td>
                                                <div className="prdct-qty-container">
                                                    <button
                                                        className="prdct-qty-btn"
                                                        type="button"
                                                        onClick={data.qnty <= 1 ? () => handleDecrement(data.id) : () => handleSingleDecrement(data)}
                                                    >
                                                        <i className="fa fa-minus"></i>
                                                    </button>
                                                    <input type="text" className="qty-input-box" value={data.qnty} disabled />
                                                    <button className="prdct-qty-btn" type="button" onClick={() => handleIncrement(data)}>
                                                        <i className="fa fa-plus"></i>
                                                    </button>
                                                </div>
                                            </td>
                                            <td className="text-right">₹ {data.qnty * data.price}</td>
                                        </tr>
                                    ))}
                                </tbody>
                                <tfoot>
                                    <tr>
                                        <th>&nbsp;</th>
                                        <th colSpan={3}>&nbsp;</th>
                                        <th>Items In Cart: <span className="text-danger">{totalquantity}</span></th>
                                        <th className="text-right">Total Price: <span className="text-danger">₹ {totalprice}</span></th>
                                    </tr>
                                </tfoot>
                            </table>
                        )}
                    </div>
                    <div className="card-footer bg-grey-800 py-3 px-4">
                        <div className="flex justify-between items-center">
                            <div className="flex justify-center space-x-4 mt-4">
                                <button className="btn btn-primary bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded" onClick={handleContinueShopping}>
                                    Continue Shopping
                                </button>
                                <button className="btn btn-success bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded" onClick={handlePlaceOrder}>
                                    Place Order
                                </button>
                            </div>
                        </div>
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
//     }, [carts, countquantity, total]);

//     console.log('Cart state:', carts);
//     const handlePlaceOrder = () => {
//         navigate('/checkout'); // Navigate to checkout page
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
//                             {/* <button className="btn btn-primary" onClick={handleContinueShopping}>Continue Shopping</button>
//                             <button className="btn btn-success" onClick={handlePlaceOrder}>Place Order</button> */}
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
