
import React from "react";
import { Link } from "react-router-dom";
const CartWidget = (props) => {

    return (

        <>
            <a href="#barra">
                <div class="logo">

                    {' '}
                    {props.countCartItems ? (
                        <button className="badge">{props.countCartItems}</button>
                    ) : (
                        ''
                    )}

                </div>
            </a>
            <Link to="/cart">
            </Link>




        </>

    )

};
export default CartWidget;