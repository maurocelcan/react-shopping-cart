import axios from 'axios';
import {Product} from '../types/Product';

// URL base de la API
const BASE_URL = 'https://fakestoreapi.com';

// Función para obtener todos los productos
export const fetchProducts = async (): Promise<Product[]> => {
  try {
    const response = await axios.get(`${BASE_URL}/products`);
    return response.data; // Devuelve la lista de productos
  } catch (error) {
    console.error('Error al obtener los productos:', error);
    throw error; // Lanza el error para que pueda ser manejado por el componente
  }
};