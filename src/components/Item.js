import React, { useState } from "react";
import Mostrar from "./ItemDetailContainer";
import("./items.css")

const Item = ({ item, cart, setCart, items }) => {
    const [mostrar, setMostrar] = useState("lista")
    const ver = new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve("mostrarLista");
            console.log(mostrar)
        }, 2000)
    })

    ver.then((menssage) => setMostrar(menssage))
    const { nombre, precio, id, img, imgP } = item;
    return (
        <div className={mostrar}>
            <ul>
                <li>
                    <p>id:{id}</p>

                </li>
                <li>
                    <a href={"#"+id} onClick={Mostrar}><img src={imgP}></img></a>
                </li>
                <li>
                    <p>nombre:{nombre}</p>

                </li>
                <li>
                    <p>precio:{precio}</p>

                </li>
            </ul>
            
        </div>
    )
}

export default Item;