import { useParams } from 'react-router-dom';

const ProductDetail = () => {
  const { productId } = useParams(); // Obtiene "producto1", "producto2", etc.
  
  // Aquí puedes usar productId para buscar el detalle del producto
  return <div>Detalle del producto {productId}</div>;
};

export default ProductDetail;