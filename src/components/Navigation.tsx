import { Link } from 'react-router-dom';
export default function Navigation(){
    return(
        <nav>
            <ul>
                <li><Link to="/">Lista de Productos</Link></li>
                <li><Link to="/cart">Carrito de Compras</Link></li>
            </ul>
        </nav>
    )}