import React from 'react';
import { Box, Typography, Button } from '@mui/material';
import { Product } from '../types/Product';

interface CardItemProps {
  product: Product; // Producto que se mostrará
  buttonText: string; // Texto del botón
  onButtonClick: (product: Product) => void; // Acción al hacer clic en el botón
  onNavigate?: (product: Product) => void; // Función opcional para redirigir al detalle del producto
  customStyles?: { // Estilos personalizados opcionales
    container?: object; // Estilos para el contenedor principal
    button?: object; // Estilos para el botón
    image?: object; // Estilos para la imagen
  };
}

const CardItem: React.FC<CardItemProps> = ({
  product,
  buttonText,
  onButtonClick,
  onNavigate,
  customStyles,
}) => {
  return (
    <Box
      sx={{
        border: '1px solid #ddd',
        borderRadius: '8px',
        padding: '16px',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'space-between',
        alignItems: 'center',
        textAlign: 'center',
        height: '100%',
        cursor: onNavigate ? 'pointer' : 'default', // Muestra el cursor de enlace si hay navegación
        ...customStyles?.container,
      }}
      onClick={onNavigate ? () => onNavigate(product) : undefined} // Navega si se proporciona la función
    >
      <Box
        component="img"
        src={product.image}
        alt={product.title} 
        sx={{
          width: '100%',
          height: 'auto',
          maxHeight: '200px',
          marginBottom: '16px',
          objectFit: 'contain',
          ...customStyles?.image,
        }}
      />
      <Typography variant="h6">{product.title}</Typography>
      <Typography variant="body1">Precio: ${product.price.toFixed(2)}</Typography>
      <Button
        variant="contained"
        onClick={(e) => {
          e.stopPropagation(); // Evita que el click en el botón dispare la navegación
          onButtonClick(product);
        }}
        sx={{
          marginTop: '8px',
          ...customStyles?.button,
        }}
      >
        {buttonText}
      </Button>
    </Box>
  );
};

export default CardItem;