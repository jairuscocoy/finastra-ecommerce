import { Link } from 'react-router-dom';
import '../App.css';
import { useSelector } from 'react-redux';
import type { RootState } from '../store';
export default function Navbar() {
  const countProduct = useSelector((state: RootState) => state.cart.count);
  return (
    <nav className="navbar">
      <div className="navbar-container">
        <Link to="/" className="navbar-brand">
          Home
        </Link>
        <div className="navbar-links">
          <Link to="/cart" className="navbar-link">
            Cart {countProduct}
          </Link>
        </div>
      </div>
    </nav>
  );
}
