import React, { useState, useContext } from "react";
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { CardActionArea } from '@mui/material';
import { Link } from 'react-router-dom';
import Icount from "./ItemCount";
import { CartState } from "./CartContext";

const Char = ({ char, cart, setCart, characters }) => {
    const { name, img, status, char_id } = char;
    const [krt,setKrt,counter, setCounter] = useContext(CartState)
    const [inCart, setInCart] = useState(0)
    const addChar = (id) => {
        if (counter === 0) {

            const char = characters.filter((char) => char.char_id === id);
            setCart([...cart, ...char]);

        }
        setCounter(counter + 1)
        console.log(counter);

    };
    const del = () => {
        setCounter(0)
    }
    const delChar = (id) => {
        setCounter(0)
        const characters = cart.filter((char) => char.char_id !== id);
        setCart(characters);

        console.log(counter)
    };
    return (
        <Card sx={{ width: 400, height: 600 }}>
            <CardActionArea>
                <Link to={`/producto/${char.char_id}`}>
                    <CardMedia
                        component="img"
                        height="360"
                        image={img}
                        alt="green iguana"
                    />
                </Link>

                <CardContent>
                    <Typography gutterBottom variant="h5" component="div">
                        {name}
                    </Typography>
                    <Typography variant="body2" color="text.secondary">
                        {status}
                    </Typography>
                </CardContent>
            </CardActionArea>
            <CardActions>
                {characters ? (
                    <div>
                        <button
                            type="button"
                            onClick={() => addChar(char_id)}
                        >
                            Agregar +
                        </button>
                        <button
                            type="button"
                            onClick={() => delChar(char_id)}
                        >
                            Quitar -
                        </button>
                    </div>

                ) : (
                    <div>
                        <Link to={`/producto/${char.char_id}`}>
                            <button

                                type="button"

                            >
                                Confirmar
                            </button>
                        </Link>

                        <Icount cart={cart}/>
                    </div>

                )}

            </CardActions>
        </Card>
    )

    //   return (
    //     <ul>
    //       <img src={img}></img>
    //       <li>{name}</li>
    //       <li>{status}</li>
    //       {characters ? (
    //         <button
    //           type="button"
    //           onClick={() => addChar(char_id)}
    //         >
    //           Agregar +
    //         </button>
    //       ) : (
    //         <div>
    //           <button

    //             type="button"
    //             onClick={() => delChar(char_id)}
    //           >
    //             Eliminar
    //           </button>
    //           <button

    //             type="button"
    //             onClick={() => delChar(char_id)}
    //           >
    //             Confirmar
    //           </button>
    //         </div>
    //       )}
    //     </ul>
    //   );
};

export default Char;

// const ItemDetail = () => {
//     const [counter, setCounter] = useState(1);
//     const [stock, setStock] = useState(1);
//     const [producto, setProducto] = useState(1);
//     useEffect(() => {
//         itemCount(Number(prompt("stock")), Number(prompt("inicial")))
//         return () => {
//             console.log("hi")
//         };
//     }, []);

//     function itemCount(stock, inicial, onAdd) {
//         var n1 = stock;
//         var n2 = inicial;
//         setStock(n1)
//         setProducto(n2)
//     }
//     const onAdd = () => {

//         if (counter <= stock) {
//             setProducto(producto + counter)
//             setStock(stock - counter)
//             setCounter(0);
//         }
//     }
//     const quitar = () => {
//         if (producto > 0 && (producto - counter) >= 0) {
//             setProducto(producto - counter)
//             setStock(stock + counter)
//             setCounter(0);
//         }
//     }
//     const handlerCounterUp = () => {
//         if (counter < stock || producto > stock) {
//             setCounter(counter + 1);
//         }
//     };

//     const handlerCounterDown = () => {
//         if (counter > 0) {
//             setCounter(counter - 1);
//         }

//     };

//     const [characters, setCharacters] = useState([])
//     let id = useParams().id;
//     useEffect(() => {
//         axios(`https://www.breakingbadapi.com/api/characters/${id}`).then((res) => setCharacters(res.data))
//     }, [id]);
//     return (
//         <div>
//             <div className='CounterSection'>
//                 <p>Counter: {counter}</p>
//                 <p>producto: {producto}</p>
//                 <p>stock: {stock}</p>
//                 <div className='btn-section'>

//                     <button onClick={onAdd}>Añadir</button>
//                     <button onClick={quitar}>quitar</button>
//                     <button onClick={handlerCounterUp}>Incrementar</button>
//                     <button onClick={handlerCounterDown}>Decrementar</button>

//                 </div>
//             </div>
//             {
//                 characters.map((char) => {
//                     return (
//                         <div>
//                             <h1>hola</h1>
//                             <h1>{char.name}</h1>
//                             <h2>{char.status}</h2>
//                             <img src={char.img}></img>

//                         </div>
//                     );
//                 })
//             }


//         </div >
//     )
// }

// export default ItemDetail;