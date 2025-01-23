import { useSelector, useDispatch } from 'react-redux';
import { RootState } from '../redux/store';
import { removeFromCart } from '../redux/slices/cartSlice';
import { Box, Typography } from '@mui/material';
import CardItem from '../components/CardItem';

const ShoppingCart = () => {
  const cartItems = useSelector((state: RootState) => state.cart?.items || []);
  const dispatch = useDispatch();

  const totalPrice = cartItems.reduce((total, item) => total + item.price, 0);

  const handleRemove = (id: number) => {
    dispatch(removeFromCart(id));
  };

  return (
    <Box sx={{ padding: '16px' }}>
      {cartItems.length === 0 ? (
        <Typography variant="h5" align="center">
          Tu carrito está vacío
        </Typography>
      ) : (
        <>
          <Typography variant="h4" align="center" gutterBottom>
            Carrito de Compras
          </Typography>
          <Typography variant="h5" align="right" sx={{ marginTop: '16px' }}>
            Total: ${totalPrice.toFixed(2)}
          </Typography>
          {cartItems.map(item => (
            <CardItem
              key={item.id}
              product={item}
              buttonText="Eliminar"
              onButtonClick={() => handleRemove(item.id)}
              customStyles={{
                container: { backgroundColor: '#fff4f4', borderColor: '#f44336' },
                button: { backgroundColor: '#f44336', color: 'white' },
              }}
            />
          ))}
          
        </>
      )}
    </Box>
  );
};

export default ShoppingCart;