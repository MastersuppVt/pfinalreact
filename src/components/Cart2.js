import { useContext } from 'react';
import Main from './Main';
import Basket from './Basket';
import { CartContext, CartState } from './CartContext';
import { db } from '../firebase/firebaseConfig';
function Cart2({ children }) {
    const [products, setProducts] = useContext(CartContext)

    const [cartItems, setCartItems, num, setNum] = useContext(CartState);
    const onAdd = (product) => {
        const exist = cartItems.find((x) => x.id === product.id);
        if (exist) {
            setNum(num + 1)
            setCartItems(
                cartItems.map((x) =>
                    x.id === product.id ? { ...exist, qty: exist.qty + 1 } : x
                )
            );
        } else {
            setNum(cartItems.length + 1)
            setCartItems([...cartItems, { ...product, qty: 1 }]);
        }
    };
    const onRemove = (product) => {
        const exist = cartItems.find((x) => x.id === product.id);
        if (exist.qty === 1) {
            setNum(num - 1)
            setCartItems(cartItems.filter((x) => x.id !== product.id));
        } else {
            setNum(num - 1)
            setCartItems(
                cartItems.map((x) =>
                    x.id === product.id ? { ...exist, qty: exist.qty - 1 } : x
                )
            );
        }
    };
    const RemoveAll = () => {
        setNum(0)
        setCartItems([])
    }
    return (
        <div className="contenedor">

            <div >
                <Basket
                    cartItems={cartItems}
                    onAdd={onAdd}
                    onRemove={onRemove}
                    Erase={RemoveAll}
                ></Basket>
                <Main products={products} onAdd={onAdd}></Main>

            </div>
        </div>
    );
}
// const hola = () => {
//     var washingtonRef = db.collection("product").doc("DC");

//     // Set the "capital" field of the city 'DC'
//     return washingtonRef.update({
//         stock:0 
//     })
//         .then(() => {
//             console.log("Document successfully updated!");
//         })
//         .catch((error) => {
//             // The document probably doesn't exist.
//             console.error("Error updating document: ", error);
//         });
// }
export default Cart2;
