// useAdmin.js
import { useEffect, useState } from 'react';
import { getDoc, doc } from 'firebase/firestore';
import { auth, db } from '../firebase/firebaseConfig';

const useAdmin = () => {
  const [isAdmin, setIsAdmin] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const checkAdmin = async (user) => {
      if (user) {
        const userDoc = await getDoc(doc(db, 'users', user.uid));
        if (userDoc.exists() && userDoc.data().email === 'hemanth1234@gmail.com') {
          setIsAdmin(true);
        } else {
          setIsAdmin(false);
        }
      } else {
        setIsAdmin(false);
      }
      setLoading(false);
    };

    const unsubscribe = auth.onAuthStateChanged((user) => {
      checkAdmin(user);
    });

    return () => unsubscribe();
  }, []);

  return { isAdmin, loading };
};

export default useAdmin;
