import React, { useState,useContext } from 'react';

// Firebase
import { collection, addDoc } from 'firebase/firestore';
import { db } from '../firebase/firebaseConfig';
import Basket from './Basket';
import Message from './Message';
import { CartState } from './CartContext';
import TextField from '@mui/material/TextField';

const initialState = {
	name: '',
	phone: '',
	email: '',
	products: "",
};

const styles = {
	containerShop: {
		textAlign: 'center',
		paddingTop: 20,
	},
};

const Shop = () => {
	const [cartItems, setCartItems] = useContext(CartState);
	const [values, setValues] = useState(initialState);
	// Este estado está destinado a guardar el id de la compra
	const [purchaseID, setPurchaseID] = useState('');

	const handleOnChange = (e) => {
		const { value, name } = e.target;
		setValues({ ...values, [name]: value });
	};

	const onSubmit = async (e) => {
		e.preventDefault();
		values.products = cartItems;
		const docRef = await addDoc(collection(db, 'purchases'), {
			values,
		});
		setPurchaseID(docRef.id);
		setValues(initialState);
	};

	return (
		<div style={styles.containerShop}>
			<h1>Shop</h1>
			<form className='FormContainer' onSubmit={onSubmit}>
				<TextField
					placeholder='Name'
					style={{ margin: 10, width: 400 }}
					value={values.name}
					name='name'
					onChange={handleOnChange}
				/>
				<TextField
					placeholder='Phone'
					style={{ margin: 10, width: 400 }}
					value={values.phone}
					name='phone'
					onChange={handleOnChange}
				/>
				<TextField
					placeholder='email'
					style={{ margin: 10, width: 400 }}
					value={values.email}
					name='email'
					onChange={handleOnChange}
				/>
				<button className='btnASendAction'>Send</button>
			</form>
			{purchaseID && <Message purchaseID={purchaseID} />}
			<Basket
                    cartItems={cartItems}
                  
                ></Basket>
		</div>
		
	);
};

export default Shop;

