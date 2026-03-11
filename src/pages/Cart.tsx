import { useSelector } from 'react-redux';
import type { RootState } from '../store';
import { ItemCart } from '../components/ItemCart';

export default function Cart() {
  const cartItems = useSelector((state: RootState) => state.cart.items);

  console.log(cartItems);
  if (cartItems.length < 1) return null;
  return (
    <div>
      {cartItems.map((item) => (
        <ItemCart
          image={item.image}
          title={item.title}
          price={item.price}
          quantity={item.quantity || 0}
          color={item.color!}
          size = {item.size!}
        />
      ))}
    </div>
  );
}
