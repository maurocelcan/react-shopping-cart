import React from 'react';
import { Button, Card, CardContent, CardMedia, Typography } from '@mui/material';
import { Product } from '../types/Product';

interface ProductCardProps {
  product: Product;
  onAddToCart: (product: Product) => void;
}

// Función para truncar títulos largos
const truncateTitle = (title: string, maxLength: number) => {
  return title.length > maxLength ? `${title.slice(0, maxLength)}...` : title;
};

const ProductCard: React.FC<ProductCardProps> = ({ product, onAddToCart }) => {
  return (
    <Card
      sx={{
        width: 250, // Tamaño fijo para las tarjetas
        margin: '8px',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'space-between',
        height: '100%', // Garantiza altura uniforme
      }}
    >
      <CardMedia
        component="img"
        image={product.image}
        alt={product.title}
        sx={{
          height: 200, // Tamaño fijo para las imágenes
          objectFit: 'contain', // Mantiene la proporción de las imágenes
          backgroundColor: '#f5f5f5', // Fondo neutro
          padding: '8px',
        }}
      />
      <CardContent sx={{ textAlign: 'center', flexGrow: 1 }}>
        <Typography
          gutterBottom
          variant="h6"
          component="div"
          sx={{
            overflow: 'hidden',
            textOverflow: 'ellipsis',
            whiteSpace: 'nowrap', // Evita que el texto pase a otra línea
          }}
        >
          {truncateTitle(product.title, 30)} {/* Límite de 30 caracteres */}
        </Typography>
        <Typography variant="body2" color="text.secondary">
          ${product.price.toFixed(2)}
        </Typography>
        <Button
          variant="contained"
          color="primary"
          onClick={() => onAddToCart(product)}
          sx={{ marginTop: '8px' }}
        >
          Agregar al carrito
        </Button>
      </CardContent>
    </Card>
  );
};

export default ProductCard;