<<<<<<< HEAD
import React from 'react';
import { Link } from 'react-router-dom';
import { AppBar, Toolbar, Typography, Button } from '@mui/material';

const Header = () => {
=======
import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { RootState } from '../redux/store';
import { AppBar, Toolbar, Typography, Button } from '@mui/material';


const Header = () => {
  const cartItems = useSelector((state: RootState) => state.cart?.items || []); 
>>>>>>> b998472 (Update: UI improvements and reusable components)
  return (
    <AppBar position="static">
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
<<<<<<< HEAD
=======
        {cartItems.length}
>>>>>>> b998472 (Update: UI improvements and reusable components)
      </Toolbar>
    </AppBar>
  );
};


export default Header;
