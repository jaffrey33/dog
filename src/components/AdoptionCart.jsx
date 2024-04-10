import { Table } from 'antd';
import { doc, getDoc } from 'firebase/firestore';
import { useEffect, useState } from 'react';
import { FirestoreDatabase, auth } from '../Auth/Config';

export default function AdoptionCart() {
    const [cartData, setCartData] = useState();
    const [user, setUser] = useState(null);

    useEffect(() => {
        const unsubscribe = auth.onAuthStateChanged((user) => {
            setUser(user);
        });
        return () => unsubscribe();
    }, []);

    useEffect(() => {
        const fetchCartData = async () => {
            try {
                if (!user) return; // Ensure user is not null

                const cartDocRef = doc(FirestoreDatabase, 'AdoptedCart', user.uid);
                const cartDocSnap = await getDoc(cartDocRef);

                if (cartDocSnap.exists()) {
                    const cartData = cartDocSnap.data();
                    setCartData(cartData);
                    console.log('Cart data:', cartData);
                } else {
                    console.log('Cart document does not exist for user:', user.uid);
                    setCartData([]); // Set cartData to empty array
                }
            } catch (error) {
                console.error('Error fetching cart document:', error);
                setCartData([]); // Set cartData to empty array
            }
        };

        fetchCartData();
    }, [user]);



    return (
        <div>
            {cartData && cartData.products &&
                (Object.values(cartData.products).map((item) => {
                    return (
                        <div className='flex'>
                           <img src={item.image} alt="" className='w-24' />
                            {item.name}
                        </div>
                    )
                }))
            }


        </div>
    );
}
