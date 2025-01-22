import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import ProductList from './pages/ProductList';
import ShoppingCart from './pages/ShoppingCart';
<<<<<<< HEAD
import Root from './pages/Root';
=======
import Layout from './pages/Layout';
import ProductDetail from './pages/ProductDetail';
>>>>>>> b998472 (Update: UI improvements and reusable components)

const router = createBrowserRouter([
  {
    path: '/',
<<<<<<< HEAD
    element: <Root />,
    children: [
      { path: '', element: <ProductList /> },
      { path: 'cart', element: <ShoppingCart /> }, // Sin barra inicial en 'path'
=======
    element: <Layout />,
    children: [
      { path: '', element: <ProductList /> },
      { path: 'cart', element: <ShoppingCart /> },
      { path: 'product/:productId', element: <ProductDetail /> } 
>>>>>>> b998472 (Update: UI improvements and reusable components)
    ],
  },
]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;