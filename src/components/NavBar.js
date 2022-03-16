
import CartWidget from "./CartWidget"
import { Link } from "react-router-dom";
import { useContext } from "react";

import { CartContext, CartState } from "./CartContext";
import img from "./assets/color.png"
const NavBar = ({ cart, setCart }) => {

  const [products, setProducts] = useContext(CartContext)
  const [cartItems, setCartItems, num, setNum] = useContext(CartState);
  return (

    <nav>
      <div class="barra" id="barra">

        <a href="#barra">
          <img class="logo" src={img} alt="icono mastersupp" title="Icono"></img>
        </a>
        <CartWidget countCartItems={num} />
        <div class="menu" id="close">
          <Link to="/">
            Inicio
          </Link>
          <Link to="/purchase">
            Carrito
          </Link>
          <Link to="/category/category1">
            category1
          </Link>
          <Link to="/category/category2">
            category2
          </Link>
          <Link to="/category/category3">
            category3
          </Link>
          <Link to="/category/category4">
            category4
          </Link>
          <a href="#close" id="cerrar">CERRAR</a>
        </div>
      </div>
    </nav>
  );
};

export default NavBar;