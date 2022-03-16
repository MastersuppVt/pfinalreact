import React, { createContext, useState, useEffect } from 'react';
import { collection, query, where, getDocs } from "firebase/firestore";
import { db } from "../firebase/firebaseConfig"
// 1 - CREAR EL CONTEXTO
export const CartContext = createContext();
export const CartState = createContext();
// 2 - CREAR EL COMPONENTE PROVIDER (ItemsProvider)
export const CartStateProvider =({children})=>{
	const [num, setNum] = useState(0)
	const [cartItems, setCartItems] = useState([]);
    return (
		<CartState.Provider value={[cartItems, setCartItems,num,setNum]}>
			{/* 4 - PROPS.CHILDREN O BIEN CHILDREN */}
			{children}
		</CartState.Provider>
	);
}
export const CartProvider = ({ children }) => {

	const [products, setProducts] = useState([])
    useEffect(() => {
        const getProducts = async () => {
            const q = query(collection(db, "product"));
            const docs = [];
            const querySnapshot = await getDocs(q);
            querySnapshot.forEach((doc) => {
                docs.push({...doc.data(),id:doc.id})
            })
            setProducts(docs)
        };
        getProducts();
    }, []);
	// 3 - RETORNAMOS NUESTRO CONTEXT CON UN .PROVIDER

	return (
		<CartContext.Provider value={[products, setProducts]}>
			{/* 4 - PROPS.CHILDREN O BIEN CHILDREN */}
			{children}
		</CartContext.Provider>
	);
};
