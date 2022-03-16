import React, {  useState, useContext } from "react";
import { CartState } from "./CartContext";
const Icount = ({ rt }) => {
    const [krt, setKart, counter, setCounter] = useContext(CartState);
    const [stock, setStock] = useState(20);
    const [producto, setProducto] = useState(1);
    // useEffect(() => {
    //     itemCount(Number(prompt("stock")), Number(prompt("inicial")))
    //     return () => {
    //         console.log("hi")
    //     };
    // }, []);

    function itemCount() {
        setStock(20)
        setProducto(1)
    }
    const onAdd = () => {

        if (counter <= stock) {
            setProducto(producto + counter)
            // setKart(krt+counter)
            setStock(stock - counter)
            setCounter(0);
            rt()
        }
    }
    const quitar = () => {
        if (producto > 0 && (producto - counter) >= 0) {
            setProducto(producto - counter)
            setStock(stock + counter)
            setCounter(0);

        }
    }
    const handlerCounterUp = () => {
        if (counter < stock || producto > stock) {
            setCounter(counter + 1);
        }
    };

    const handlerCounterDown = () => {
        if (counter > 0) {
            setCounter(counter - 1);
        }

    };
    // const onClick = () => {
    //     alert('click');
    // };
    return (

        <div className='CounterSection'>
            <div>
                <div>
                    <h3>Counter: {counter}</h3>
                    <h4>producto: {producto}</h4>
                    <h5>stock: {stock}</h5>
                </div>

                <div className='btn-section'>

                    <button onClick={onAdd} >Añadir</button>
                    <button onClick={quitar}>quitar</button>
                    <button onClick={handlerCounterUp}>Incrementar</button>
                    <button onClick={handlerCounterDown}>Decrementar</button>

                </div>
            </div>




        </div>
    );

};
export default Icount;