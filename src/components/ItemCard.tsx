import type { TProduct } from '../types/product-types';

type TItemProps = {
  product: TProduct;
 
};
export const ItemCard = (props: TItemProps) => {
  const { title, price, image, category } = props.product;
  return (
    <div style={{ display: 'flex', flexDirection: 'column' }}>
      <div className="card">
        <img src={image} alt={title} />
      </div>
      <div className="card-footer">
        <div className='details'>
          <p className="category">{category}</p>
          <p className="price">${price.toFixed(2)}</p>
        </div>

        <p className="title">{title}</p>
      </div>
    </div>
  );
};
