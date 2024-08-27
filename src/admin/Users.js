// src/components/Users.js
import React, { useEffect, useState } from 'react';
import { collection, getDocs } from 'firebase/firestore';
import { db } from '../firebase/firebaseConfig'; // Make sure the path to firebase.js is correct

export default function Users() {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    const fetchUsers = async () => {
      const usersCollection = collection(db, 'users');
      const usersSnapshot = await getDocs(usersCollection);
      const usersList = usersSnapshot.docs.map(doc => doc.data());
      setUsers(usersList);
    };

    fetchUsers();
  }, []);

  return (
    <div className="container mx-auto p-6">
      <h1 className="text-2xl font-bold mb-6">Users</h1>
      <div className="overflow-x-auto">
        <table className="min-w-full bg-white border border-black rounded-lg">
          <thead>
            <tr className="bg-[#40513B] text-white uppercase text-sm leading-normal">
              <th className="py-3 px-6 text-left">Name</th>
              <th className="py-3 px-6 text-left">Email</th>
              <th className="py-3 px-6 text-left">Phone</th>
              <th className="py-3 px-6 text-left">Address</th>
              <th className="py-3 px-6 text-left">Village</th>
              <th className="py-3 px-6 text-left">User ID</th>
            </tr>
          </thead>
          <tbody className="text-black text-lg font-bold">
            {users.map((user, index) => (
              //changed grey to black
              <tr key={index} className="border-b border-black hover:bg-gray-100"> 
                <td className="py-3 px-6 text-left ">{user.name}</td>
                <td className="py-3 px-6 text-left">{user.email}</td>
                <td className="py-3 px-6 text-left">{user.phone}</td>
                <td className="py-3 px-6 text-left">{user.address}</td>
                <td className="py-3 px-6 text-left">{user.village}</td>
                <td className="py-3 px-6 text-left">{user.uid}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}


