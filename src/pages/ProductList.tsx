  import { useEffect, useState } from 'react';
  import ProductCard from '../components/ProductCard'; // Corregí el punto extra al final
  import { fetchProducts } from '../api/productApi';
  import { Product } from '../types/Product';
  import { useDispatch } from 'react-redux';
  import { addToCart } from '../redux/cartSlice';
  import { Box } from '@mui/material';

  const ProductList = () => {
    const [products, setProducts] = useState<Product[]>([]); // Estado para almacenar productos
    const [loading, setLoading] = useState<boolean>(true); // Estado de carga
    const [error, setError] = useState<string | null>(null); // Estado de error
    const dispatch = useDispatch(); // Despachador de Redux

    // Llamada a la API al montar el componente
    useEffect(() => {
      const getProducts = async () => {
        try {
          const data = await fetchProducts(); // Llama a la función de la API
          setProducts(data); // Actualiza el estado con los productos
        } catch (error) {
          setError('No se pudieron cargar los productos.'); // Manejo de error
        } finally {
          setLoading(false); // Finaliza la carga
        }
      };
      getProducts();
    }, []);

    // Maneja la acción de agregar productos al carrito
    const handleAddToCart = (product: Product) => {
      dispatch(addToCart(product)); // Despacha la acción para agregar al carrito
    };

    // Renderiza mientras carga
    if (loading) return <div>Cargando productos...</div>;

    // Renderiza si hay un error
    if (error) return <div>{error}</div>;

    // Renderiza la lista de productos
    return (
      <Box
        sx={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))',
          gap: 8, // Espacio entre los elementos (en px)
          padding: 1,
        }}
      >
        {products.map(product => (
          <ProductCard
            key={product.id}
            product={product}
            onAddToCart={handleAddToCart}
          />
        ))}
      </Box>
    );
  };

  export default ProductList;
