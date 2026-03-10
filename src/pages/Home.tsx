import { useDispatch, useSelector } from 'react-redux';
import type { AppDispatch, RootState } from '../store';
import { useEffect, useState } from 'react';
import { fetchProducts, setSearchProduct } from '../store/slices/productSlice';
import { ItemCard } from '../components/ItemCard';
import { selectSearchedProducts } from '../store/selectors/productSelectors';
import useDebounce from '../hooks/useDebounce';

export default function Home() {
  const dispatch = useDispatch<AppDispatch>();
  const [searchInput, setSearchInput] = useState('');
  const debouncedInput = useDebounce(searchInput, 300);
  const products = useSelector(selectSearchedProducts);
  const { loading, error } = useSelector((state: RootState) => state.products);

  useEffect(() => {
    dispatch(fetchProducts());
  }, [dispatch]);

  useEffect(() => {
    dispatch(setSearchProduct(debouncedInput));
  }, [debouncedInput, dispatch]);

  if (loading) return <p>Loading...</p>;
  if (loading) return <p>Error: {error}</p>;
  return (
    <>
      <div className="header-actions">
        <input
          type="text"
          placeholder="Search products"
          value={searchInput}
          onChange={(e) => setSearchInput(e.target.value)}
          className="search-bar"
        />
      </div>

      <div className="product-list">
        {products.map((item) => (
          <ItemCard key={item.id} product={item} />
        ))}
      </div>
    </>
  );
}
