import './App.css';
import { Route, Routes } from 'react-router-dom';
import HomePage from './pages/Home';
import CartPage from './pages/Cart';
import Checkout from './pages/Checkout';
import Navbar from './components/Navbar';
import ProductItem from './pages/products/Item';
import ProductsList from './pages/products/List';

function App() {
  return (
    <div className="app">
      <Navbar />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="products" element={<ProductsList />}/>
         <Route path="products/:id" element={<ProductItem />} />
        <Route path="cart" element={<CartPage />} />
        <Route path="checkout" element={<Checkout />} />
        <Route
          path="*"
          element={<h1 style={{ color: 'black' }}>404 not found</h1>}
        />
      </Routes>
    </div>
  );
}

export default App;
