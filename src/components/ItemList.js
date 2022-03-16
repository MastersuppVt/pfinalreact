import { Fragment, useState,useContext } from "react";
import { CartContext, CartState } from "./CartContext";
import { useParams } from "react-router-dom";
import CardComponent from "./CardComponent";
const IList = () => {
    const [cartItems, setCartItems,num,setNum] = useContext(CartState)
    const [products] = useContext(CartContext);
    const [ver, setVer] = useState(true);
    const [characters, setCharacters] = useState([])
    let category = useParams().category;
    const result = products.filter(product => product.category == category)
    return (
        <>
           <div  className="block col-2 contenedor">
            {result.map((item) => (
                <CardComponent
                    key={item.id}
                    char={item} />
            ))}
            </div>
        </>
    );
}
export default IList;
