import { useDispatch, useSelector } from 'react-redux';
import type { AppDispatch, RootState } from '../store';
import { add } from '../store/slices/addToCartSlice';

export default function Home() {
  const count = useSelector((state: RootState) => state.cart.count);
  const dispatch = useDispatch<AppDispatch>();
  return (
    <div className="">
      <p style={{ color: 'red' }}>Cart {count}</p>
      <button onClick={() => dispatch(add())}>Add to cart</button>
    </div>
  );
}
