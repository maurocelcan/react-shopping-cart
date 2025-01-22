  import { useEffect, useState } from 'react';
<<<<<<< HEAD
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
=======
  import CardItem from '../components/CardItem';
  import { fetchProducts } from '../api/productApi';
  import { Product } from '../types/Product';
  import { useDispatch } from 'react-redux';
  import { addToCart } from '../redux/slices/cartSlice';
  import { Box } from '@mui/material';
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
>>>>>>> b998472 (Update: UI improvements and reusable components)
        }
      };
      getProducts();
    }, []);
<<<<<<< HEAD

    // Maneja la acción de agregar productos al carrito
    const handleAddToCart = (product: Product) => {
      dispatch(addToCart(product)); // Despacha la acción para agregar al carrito
    };

    // Renderiza mientras carga
    if (loading) return <div>Cargando productos...</div>;

    // Renderiza si hay un error
    if (error) return <div>{error}</div>;

    // Renderiza la lista de productos
=======
  
    const handleAddToCart = (product: Product) => {
      dispatch(addToCart(product));
    };

    const handleNavigateToDetails = (id: number) => {
      navigate(`/product/${id}`); // Navega al detalle del producto
    };
  
>>>>>>> b998472 (Update: UI improvements and reusable components)
    return (
      <Box
        sx={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))',
<<<<<<< HEAD
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

=======
          gap: 8,
          padding: 1,
        }}
      >
        {error && <div>{error}</div>}
        {loading ? (
          <div>Cargando productos...</div>
        ) : (
          products.map(product => (
            <CardItem
              key={product.id}
              product={product}
              buttonText="Agregar al carrito"
              onButtonClick={handleAddToCart}
              onNavigate={handleNavigateToDetails} // Agrega la funcionalidad de navegación
              customStyles={{
                container: { backgroundColor: '#f9f9f9', borderColor: '#ccc' },
                image: { maxHeight: '150px' },
                button: { backgroundColor: '#1976d2', color: 'white' },
              }}
            />
          ))
        )}
      </Box>
    );
  };
  
>>>>>>> b998472 (Update: UI improvements and reusable components)
  export default ProductList;
