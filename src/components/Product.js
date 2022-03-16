import React from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { CardActionArea } from '@mui/material';
import { Link } from 'react-router-dom';
export default function Product(props) {
  const { product, onAdd, onRemove } = props;
  return (
    <>
<div className='card'>
 

      <Card  sx={{ }}>
        <CardActionArea>
          <Link to={`/producto/${product.id}`}>
            <CardMedia className='card-img'
              component="img"
              height="360"
              image={product.img}
              alt="green iguana"
            />
          </Link>

          <CardContent className='contenido-card'>
            <Typography className='card-name' gutterBottom variant="h5" component="div">
              {product.name}
            </Typography>
            <Typography className='card-p'variant="body2" color="text.secondary">
             Precio: ${product.precio}
            </Typography>
            <Typography className='card-p'variant="body2" color="text.secondary">
             Stock: {product.stock}
            </Typography>
          </CardContent>
        </CardActionArea>
        <CardActions>
          <button className='card-a'
            type="button"
            onClick={() => onAdd(product)}
          >
            Agregar +
          </button>
        </CardActions>
      </Card>
      </div>
    </>
  );
}
