import type { TProduct } from '../types/product-types';

type TItemProps = {
  product: TProduct;
  onHandleAddToCart?: (product: TProduct) => void;
};
export const ItemCard = (props: TItemProps) => {
  const {  title, price, image } = props.product;
  return (
    <div className="card">
      <img src={image} alt={title} />
      <h3 className="title">{title}</h3>
      <p className="price">${price.toFixed(2)}</p>
    </div>
  );
};
