import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import { selectProductById } from '../../store/selectors/selectProductSelector';
import { useEffect, useState } from 'react';
import { fetchProducts } from '../../store/slices/productSlice';
import type { AppDispatch } from '../../store';
import type {
  TProduct,
  TProductColor,
  TProductSize,
} from '../../types/product-types';
import { addToCart } from '../../store/slices/cartSlice';

const colors: TProductColor[] = ['blue', 'red', 'green'];
const sizes: TProductSize[] = ['S', 'M', 'L'];

export default function ProductItem() {
  const { id } = useParams();
  const dispatch = useDispatch<AppDispatch>();
  const product = useSelector(selectProductById(Number(id)));
  const [itemColor, setItemColor] = useState<TProductColor>('blue');
  const [itemSize, setItemSize] = useState<TProductSize>('S');
  const [itemQuantity, setItemQuantity] = useState(1);

  useEffect(() => {
    if (!product) {
      dispatch(fetchProducts());
    }
  }, [product, dispatch]);

  const handleAddToCart = () => {
    if(!product) return
    const productToCart: TProduct = {
      ...product,
      color: itemColor,
      size: itemSize,
      quantity: itemQuantity,
    };

    // console.log(productToCart)
    dispatch(addToCart(productToCart));
  };

  const handleDecreaseQuantity = () => {
    if (itemQuantity === 1) return;
    setItemQuantity(itemQuantity - 1);
  };

  if (!product) return <div style={{ color: 'black' }}>Loading...</div>;
  return (
    <>
      <div className="product-item">
        <div className="image-container">
          <img src={product.image} alt={product.title} />
        </div>
        <div className="item-description">
          <h4 style={{ color: 'black' }}>{product.title}</h4>
          <h4 className="price">${product.price.toFixed(2)}</h4>
          <div>
            <p className="variant">Color: {itemColor}</p>
            <div style={{ display: 'flex', gap: '10px' }}>
              {colors.map((color) => (
                <button
                  key={color}
                  onClick={() => setItemColor(color)}
                  style={{
                    borderWidth: '10px',
                    borderColor: itemColor === color ? 'black' : 'white',
                    backgroundColor: color,
                    width: '10px',
                    height: '10px',
                  }}
                />
              ))}
            </div>
          </div>
          <div>
            <p className="variant">Size: {itemSize}</p>
            <div style={{ display: 'flex', gap: '10px' }}>
              {sizes.map((size) => (
                <button
                  key={size}
                  onClick={() => setItemSize(size)}
                  style={{
                    color: itemSize === size ? 'red' : 'black',
                  }}
                >
                  {size}
                </button>
              ))}
            </div>
          </div>
          <div>
            <p className="variant">Quantity: {itemQuantity}</p>
            <div style={{ display: 'flex', gap: '10px' }}>
              <button onClick={() => setItemQuantity(itemQuantity + 1)}>
                +
              </button>
              <button onClick={() => handleDecreaseQuantity()}>-</button>
            </div>
          </div>
          <button className="add-to-cart" onClick={handleAddToCart}>Add to Cart</button>
        </div>
      </div>
    </>
  );
}
