import { useState, useEffect } from 'react';
import Cart from './components/Cart';

function App() {
  const [items, setItems] = useState([]);

  const loadCart = () => {
    const cart = JSON.parse(localStorage.getItem('cart')) || [];
    setItems(cart);
  };

  const removeItem = id => {
    const updated = items.filter(item => item.id !== id);
    localStorage.setItem('cart', JSON.stringify(updated));
    setItems(updated);
  };

  useEffect(loadCart, []);

  return (
    <Cart
      items={items}
      loadCart={loadCart}
      removeItem={removeItem}
    />
  );
}

export default App;
