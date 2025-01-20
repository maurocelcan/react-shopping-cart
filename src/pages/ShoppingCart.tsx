import { useSelector, useDispatch } from 'react-redux';
import { RootState } from '../redux/store';
import { removeFromCart } from '../redux/cartSlice';

const ShoppingCart = () => {
  const cartItems = useSelector((state: RootState) => state.cart?.items || []); // Agrega un fallback para evitar errores
  const dispatch = useDispatch();

  const totalPrice = cartItems.reduce((total, item) => total + item.price, 0);

  const handleRemove = (id: number) => {
    dispatch(removeFromCart(id));
  };

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
  );
};

export default ShoppingCart;