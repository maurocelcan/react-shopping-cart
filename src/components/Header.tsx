import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { RootState } from '../redux/store';
import { AppBar, Toolbar, Typography, Button } from '@mui/material';


const Header = () => {
  const cartItems = useSelector((state: RootState) => state.cart?.items || []); 
  return (
    <>
      <AppBar position='fixed'>
        <Toolbar>
          <Typography variant="h6" sx={{ flexGrow: 1 }}>
            Lista de Productos
          </Typography>
          <Button color="inherit" component={Link} to="/">
            Inicio
          </Button>
          <Button color="inherit" component={Link} to="/cart">
            Carrito
          </Button>
          {cartItems.length}
        </Toolbar>
     </AppBar>
     <Toolbar />
    </>
    
  );
};


export default Header;
