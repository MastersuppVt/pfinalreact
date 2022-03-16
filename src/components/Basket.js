
import React from 'react';
import { Link } from 'react-router-dom';

export default function Basket(props) {

  const { cartItems,onAdd, onRemove,Erase } = props;
  const itemsPrice = cartItems.reduce((a, c) => a + c.qty * c.precio, 0);
  const taxPrice = itemsPrice * 0.19;
  const shippingPrice = itemsPrice > 2000 ? 0 : 20;
  const totalPrice = itemsPrice + taxPrice + shippingPrice;
  return (
    <aside className="container-basket aside-on">
      <h2>Carrito de compras</h2>
      <div>
        {cartItems.length === 0 && <div> El carrito esta vacio</div>}
        {cartItems.map((item) => (
          <div key={item.id} className="row">
            <div className="col-2">{item.name}</div>
            <div className="col-2">
              <button onClick={() => onRemove(item)} className="remove">
                -
              </button>{' '}
              <button onClick={() => onAdd(item)} className="add">
                +
              </button>
            </div>

            <div className="col-2 text-right">
              {item.qty} x ${item.precio.toFixed(2)}
            </div>
          </div>
        ))}

        {cartItems.length !== 0 && (
          <>
            <hr></hr>
            <div className="row">
              <div className="col-2">Precio productos</div>
              <div className="col-1 text-right">${itemsPrice.toFixed(2)}</div>
            </div>
            <div className="row">
              <div className="col-2">iva</div>
              <div className="col-1 text-right">${taxPrice.toFixed(2)}</div>
            </div>
            <div className="row">
              <div className="col-2">Precio envio</div>
              <div className="col-1 text-right">
                ${shippingPrice.toFixed(2)}
              </div>
            </div>

            <div className="row">
              <div className="col-2">
                <strong>Precio Total</strong>
              </div>
              <div className="col-1 text-right">
                <strong>${totalPrice.toFixed(2)}</strong>
              </div>
            </div>
            <hr />
            <div className="row">
              <button onClick={Erase}>
                Borrar todo
              </button>
              <Link to="/purchase">
              <button>
                Terminar mi compra
              </button>
              </Link>
              
            </div>
          </>
        )}
      </div>
    </aside>
  );
}
