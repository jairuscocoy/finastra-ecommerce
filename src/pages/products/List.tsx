import { useDispatch, useSelector } from 'react-redux';
import type { AppDispatch, RootState } from '../../store';
import { useEffect, useState } from 'react';
import {
  fetchProducts,
  setSearchProduct,
  setSortBy,
  setSortOrder,
} from '../../store/slices/productSlice';
import { ItemCard } from '../../components/ItemCard';
import useDebounce from '../../hooks/useDebounce';
import { selectSortedProducts } from '../../store/selectors/sortProductsSelector';
import { Link, Outlet } from 'react-router-dom';

export default function ProductsList() {
  const dispatch = useDispatch<AppDispatch>();
  const [searchInput, setSearchInput] = useState('');
  const debouncedInput = useDebounce(searchInput, 300);
  const products = useSelector(selectSortedProducts);
  const { loading, error, sortBy, sortOrder } = useSelector(
    (state: RootState) => state.products,
  );

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
        <select
          value={sortBy}
          onChange={(e) => dispatch(setSortBy(e.target.value))}
        >
          <option value="" disabled selected>
            Select category
          </option>
          <option value="title">Name</option>
          <option value="price">Price</option>
          <option value="category">Category</option>
        </select>
        <button
          onClick={() =>
            dispatch(setSortOrder(sortOrder === 'asc' ? 'desc' : 'asc'))
          }
        >
          {sortOrder === 'asc' ? 'top' : 'bottom'}
        </button>
      </div>

      <div className="product-list">
        {products.map((item) => (
          <Link key={item.id} to={`products/${item.id}`}>
            <ItemCard key={item.id} product={item} />
          </Link>
        ))}
      </div>
      <Outlet />
    </>
  );
}
