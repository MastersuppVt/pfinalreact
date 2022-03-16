import * as React from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { CardActionArea } from '@mui/material';
import { Link } from 'react-router-dom';

const CardComponent = ({ char, cart, setCart, characters }) => {

  const { name, img, status, id, precio } = char;
  const addChar = (id) => {
    const char = characters.filter((char) => char.id === id);
    setCart([...cart, ...char]);
    console.log(cart.length);
  };
  const delChar = (id) => {
    const characters = cart.filter((char) => char.id !== id);
    setCart(characters);
  };

  return (
    <Card className='card' sx={{ width: 400, height: 600 }}>
      <CardActionArea>
        <Link to={`/producto/${char.id}`}>
          <CardMedia
            component="img"
            height="360"
            image={char.img}
            alt="green iguana"
          />
        </Link>

        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            {name}
          </Typography>
          <Typography variant="body2" color="text.secondary">
            {precio}
          </Typography>
        </CardContent>
      </CardActionArea>
      <CardActions>
        {/* <button
          type="button"
          onClick={() => addChar(id)}
        >
          Agregar +
        </button>


        <button

          type="button"
          onClick={() => delChar(id)}
        >
          Eliminar
        </button>
        <button

          type="button"
          onClick={() => delChar(id)}
        >
          Confirmar
        </button>
        <Button size="small" color="primary">
          Share
        </Button> */}
      </CardActions>
    </Card>
  );
}
export default CardComponent