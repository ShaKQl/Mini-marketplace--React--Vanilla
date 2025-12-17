import { useEffect } from 'react';
import './cart.css';

const Cart = ({ items, loadCart, removeItem }) => {

  useEffect(() => {
    loadCart();

    window.addEventListener('cartUpdated', loadCart);
    return () => window.removeEventListener('cartUpdated', loadCart);
  }, []);

  const total = items.reduce(
    (sum, item) => sum + item.price * item.quantity,
    0
  );

  return (
    <div className="cart">
      {items.length === 0 && <p>Cart is empty</p>}

      {items.map(item => (
        <div key={item.id} className="cart__card">
          <h4>{item.title}</h4>
          <p>${item.price}</p>
          <button onClick={() => removeItem(item.id)}>Remove</button>
        </div>
      ))}

      {items.length > 0 && (
        <div className="cart__total">
          Total: ${total.toFixed(2)}
        </div>
      )}
    </div>
  );
};

export default Cart;
