import type { TProductColor, TProductSize } from '../types/product-types';

type TItemCart = {
  image: string;
  title: string;
  price: number;
  quantity: number;
  color: TProductColor;
  size: TProductSize;
  subtractQuantity?: (quantity: number) => void;
  addQuantity?: (quantity: number) => void;
};

export const ItemCart = (props: TItemCart) => {
  const { image, title, price, quantity, color, size } = props;
  const totalPrice = price * quantity;
  return (
    <div className="item-cart">
      <p className="title">{title}</p>
      <div className="item-desc">
        <img src={image} alt={title} />
        <div>
          <p>Color: {color}</p>
          <p>Size: {size}</p>
          <p>Price: ${price}</p>
          <p className="price">Total Price: ${totalPrice.toFixed(2)}</p>
        </div>
        <div className='quantity'>
          <button style={{width:'20px', height: '20px', padding: 0}}>+</button>
          <p className="quantity">{quantity}</p>
          <button style={{width:'20px', height: '20px', padding: 0}}>-</button>
        </div>
      </div>
    </div>
  );
};
