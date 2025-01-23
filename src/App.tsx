import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import ProductList from './pages/ProductList';
import ShoppingCart from './pages/ShoppingCart';
import Layout from './pages/Layout';
import ProductDetail from './pages/ProductDetail';

const router = createBrowserRouter([
  {
    path: '/',
    element: <Layout />,
    children: [
      { path: '', element: <ProductList /> },
      { path: 'cart', element: <ShoppingCart /> },
      { path: 'product/:productId', element: <ProductDetail /> } 
    ],
  },
]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;