import React, { useEffect, useState } from 'react';
import { collection, getDocs, doc, setDoc, deleteDoc } from 'firebase/firestore';
import { db } from '../firebase/firebaseConfig';

export default function Orders() {
  const [orders, setOrders] = useState([]);

  useEffect(() => {
    const fetchOrders = async () => {
      const ordersCollection = collection(db, 'orders');
      const orderSnapshot = await getDocs(ordersCollection);
      const ordersList = orderSnapshot.docs.map((doc, index) => ({
        id: doc.id,
        serialNumber: index + 1,
        ...doc.data()
      }));
      setOrders(ordersList);
    };

    fetchOrders();
  }, []);

  const handleComplete = async (order) => {
    const orderRef = doc(db, 'orders', order.id);
    const completedOrderRef = doc(db, 'completedOrders', order.id);

    await setDoc(completedOrderRef, order);
    await deleteDoc(orderRef);

    setOrders((prevOrders) => prevOrders.filter((o) => o.id !== order.id));
  };

  const handleCancel = async (order) => {
    const orderRef = doc(db, 'orders', order.id);
    const deletedOrderRef = doc(db, 'deletedOrders', order.id);

    await setDoc(deletedOrderRef, order);
    await deleteDoc(orderRef);

    setOrders((prevOrders) => prevOrders.filter((o) => o.id !== order.id));
  };

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-2xl font-bold mb-4">Orders</h1>
      <div className="overflow-x-auto">
        <table className="min-w-full bg-white border border-gray-200">
          <thead>
            <tr className="bg-[#40513B] text-white uppercase text-sm leading-normal">
              <th className="py-2 px-4 border-b">S.No</th>
              <th className="py-2 px-4 border-b">Date</th>
              <th className="py-2 px-4 border-b">Name</th>
              <th className="py-2 px-4 border-b">Phone Number</th>
              <th className="py-2 px-4 border-b">Email</th>
              <th className="py-2 px-4 border-b">Order Details</th>
              <th className="py-2 px-4 border-b">Status</th>
            </tr>
          </thead>
          <tbody className="text-black  font-bold">
            {orders.map((order) => (
              <tr key={order.id}>
                <td className="py-2 px-4 border-b text-center">{order.serialNumber}</td>
                <td className="py-2 px-4 border-b">
                  {order.orderDate?.toDate().toLocaleString()}
                </td>
                <td className="py-2 px-4 border-b">{order.name}</td>
                <td className="py-2 px-4 border-b">{order.phone}</td>
                <td className="py-2 px-4 border-b">{order.email}</td>
                <td className="py-2 px-4 border-b">
                  <ul className="list-disc list-inside">
                    {order.items.map((item, index) => (
                      <li key={index}>
                        {item.name} - ₹{item.price} x {item.qnty}
                      </li>
                    ))}
                  </ul>
                </td>
                <td className="py-2 px-4 border-b text-center">
                  <button
                    onClick={() => handleComplete(order)}
                    className="bg-green-500 text-white px-4 py-1 rounded mr-2 hover:bg-green-600"
                  >
                    Complete
                  </button>
                  <button
                    onClick={() => handleCancel(order)}
                    className="bg-red-500 text-white px-4 py-1 rounded hover:bg-red-600"
                  >
                    Cancel
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}


  // import React from 'react'

  // export default function Orders() {
  //   return (
  //     <div>Orders</div>
  //   )
  // }
