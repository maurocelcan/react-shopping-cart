import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import ProductList from './pages/ProductList';
import ShoppingCart from './pages/ShoppingCart';
import Root from './pages/Root';

const router = createBrowserRouter([
  {
    path: '/',
    element: <Root />,
    children: [
      { path: '', element: <ProductList /> },
      { path: 'cart', element: <ShoppingCart /> }, // Sin barra inicial en 'path'
    ],
  },
]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;