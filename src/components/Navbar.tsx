import { Link } from 'react-router-dom';
import '../App.css';
export default function Navbar() {
  return (
    <nav className="navbar">
      <div className="navbar-container">
        <Link to="/" className="navbar-brand">
          Home
        </Link>
        <div className="navbar-links">
          <Link to="/cart" className="navbar-link">Cart</Link>
          <Link to="/checkout" className="navbar-link">Checkout</Link>
        </div>
      </div>
    </nav>
  );
}
