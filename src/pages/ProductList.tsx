  import { useEffect, useState } from 'react';
  import CardItem from '../components/CardItem';
  import { fetchProducts } from '../api/productApi';
  import { Product } from '../types/Product';
  import { useDispatch } from 'react-redux';
  import { addToCart } from '../redux/slices/cartSlice';
  import { Box, CircularProgress } from '@mui/material';
  import { useNavigate } from 'react-router-dom';


const ProductList = () => {
    const [products, setProducts] = useState<Product[]>([]);
    const [loading, setLoading] = useState<boolean>(true);
    const [error, setError] = useState<string | null>(null);
    const dispatch = useDispatch();
    const navigate = useNavigate();
  
    useEffect(() => {
      const getProducts = async () => {
        try {
          const data = await fetchProducts();
          setProducts(data);
        } catch (error) {
          setError('No se pudieron cargar los productos.');
        } finally {
          setLoading(false);
        }
      };
      getProducts();
    }, []);
  
    const handleAddToCart = (product: Product) => {
      dispatch(addToCart(product));
    };

    const handleNavigateToDetails = (product: Product) => {
      navigate(`/product/${product.id}`, { state: { product } });
    };

    if (loading) {
      return (
        <Box
          sx={{
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            height: '100vh', 
          }}
        >
          <CircularProgress sx={{ color: '#4caf50' }} />
        </Box>
      );
    }
  
    if (error) {
      return <div>{error}</div>;
    }
  
    return (
      <Box
        sx={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))',
          gap: 8,
          padding: 1,
        }}
      >
          {products.map(product => (
            <CardItem
              key={product.id}
              product={product}
              buttonText="Agregar al carrito"
              onButtonClick={handleAddToCart}
              onNavigate={handleNavigateToDetails}
              customStyles={{
                container: { backgroundColor: '#f9f9f9', borderColor: '#ccc' },
                image: { maxHeight: '150px' },
                button: { backgroundColor: '#1976d2', color: 'white' },
              }}
            />
          )
        )}
      </Box>
    );
  };
  
  export default ProductList;
