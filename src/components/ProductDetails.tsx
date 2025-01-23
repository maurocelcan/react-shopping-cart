import React from 'react';
import {Card,CardMedia,CardContent,CardActions,Typography,Button,Rating,Box} from '@mui/material';
import { useDispatch } from 'react-redux';
import { addToCart } from '../redux/slices/cartSlice';
import { Product } from '../types/Product';


interface ProductDetailsProps {
  product: Product;
}

const ProductDetails: React.FC<ProductDetailsProps> = ({ product }) => {

    const dispatch = useDispatch();

    const handleAddToCart = () => {
        dispatch(addToCart(product));
    };

  return (
    <Card sx={{ maxWidth: 600, margin: 'auto', mt: 4 }}>
      <CardMedia
        component="img"
        height="400"
        image={product.image}
        alt={product.title}
        sx={{ objectFit: 'contain', padding: 2 }}
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          {product.title}
        </Typography>
        <Typography variant="body2" color="text.secondary">
          Categoría: {product.category}
        </Typography>
        <Typography variant="h6" color="text.primary" sx={{ mt: 2 }}>
          Precio: ${product.price.toFixed(2)}
        </Typography>
        <Typography variant="body1" color="text.secondary" sx={{ mt: 2 }}>
          {product.description}
        </Typography>
        <Box sx={{ display: 'flex', alignItems: 'center', mt: 2 }}>
          <Rating value={product.rating.rate} precision={0.1} readOnly />
          <Typography variant="body2" color="text.secondary" sx={{ ml: 1 }}>
            ({product.rating.count} valoraciones)
          </Typography>
        </Box>
      </CardContent>
      <CardActions>
        <Button
          size="large"
          variant="contained"
          color="primary"
          onClick={handleAddToCart}
          sx={{ margin: 'auto', mb: 2 }}
        >
          Agregar al carrito
        </Button>
      </CardActions>
    </Card>
  );
};

export default ProductDetails;