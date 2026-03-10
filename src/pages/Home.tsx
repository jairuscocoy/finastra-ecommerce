import { useDispatch, useSelector } from 'react-redux';
import type { AppDispatch, RootState } from '../store';
import { add } from '../store/slices/cartSlice';
import { useEffect } from 'react';
import { fetchProducts } from '../store/slices/productSlice';
import { ItemCard } from '../components/ItemCard';

export default function Home() {
  const count = useSelector((state: RootState) => state.cart.count);
  const { products, loading, error } = useSelector(
    (state: RootState) => state.products,
  );
  const dispatch = useDispatch<AppDispatch>();

  useEffect(() => {
    dispatch(fetchProducts());
  }, [dispatch]);

  if (loading) return <p>Loading...</p>;
  if (loading) return <p>Error: {error}</p>;
  return (
    <div className="">
      <ul>
        {products.map((item) => (
          <ItemCard key={item.id} product={item} />
        ))}
      </ul>
      <p style={{ color: 'red' }}>Cart {count}</p>
      <button onClick={() => dispatch(add())}>Add to cart</button>
    </div>
  );
}
