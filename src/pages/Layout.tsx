import React from 'react';
import { Outlet } from 'react-router-dom';
import Header from '../components/Header';
import { Box } from '@mui/material';

const Layout: React.FC = () => {
  return (
    <>

      <Header />
      <Box 
        sx={{
          display: 'flex', 
          flexDirection: 'column',
          border: 1, 
          justifyContent: 'center',
          alignItems: 'center',
          padding: 2,
          maxWidth: '100%',
          overflow: 'hidden',
          boxSizing: 'border-box',
        }}>
       <Outlet /> 
      </Box>

    </>
  );
};


export default Layout;