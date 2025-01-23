import { useLocation } from 'react-router-dom';
import ProductDetails from '../components/ProductDetails';

const ProductDetail = () => {
  const location = useLocation();
  const { product } = location.state || {};

  return (
    <>
     <ProductDetails product={product} />
    </>
    
  );
};

export default ProductDetail;