import { useSelector, useDispatch } from 'react-redux';
import { RootState } from '../redux/store';
<<<<<<< HEAD
import { removeFromCart } from '../redux/cartSlice';

const ShoppingCart = () => {
  const cartItems = useSelector((state: RootState) => state.cart?.items || []); // Agrega un fallback para evitar errores
=======
import { removeFromCart } from '../redux/slices/cartSlice';
import { Box, Typography } from '@mui/material';
import CardItem from '../components/CardItem';

const ShoppingCart = () => {
  const cartItems = useSelector((state: RootState) => state.cart?.items || []);
>>>>>>> b998472 (Update: UI improvements and reusable components)
  const dispatch = useDispatch();

  const totalPrice = cartItems.reduce((total, item) => total + item.price, 0);

  const handleRemove = (id: number) => {
    dispatch(removeFromCart(id));
  };

<<<<<<< HEAD
  if (cartItems.length === 0) {
    return <div>Tu carrito está vacío</div>;
  }

  return (
    <div>
      <h2>Carrito de Compras</h2>
      <ul style={{ listStyleType: 'none', padding: 0 }}>
        {cartItems.map(item => (
          <li key={item.id} style={{ marginBottom: '16px', border: '1px solid #ddd', padding: '8px' }}>
            <h3>{item.title}</h3>
            <p>Precio: ${item.price.toFixed(2)}</p>
            <button onClick={() => handleRemove(item.id)}>Eliminar</button>
          </li>
        ))}
      </ul>
      <h3>Total: ${totalPrice.toFixed(2)}</h3>
    </div>
=======
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
          <Typography variant="h5" align="right" sx={{ marginTop: '16px' }}>
            Total: ${totalPrice.toFixed(2)}
          </Typography>
        </>
      )}
    </Box>
>>>>>>> b998472 (Update: UI improvements and reusable components)
  );
};

export default ShoppingCart;