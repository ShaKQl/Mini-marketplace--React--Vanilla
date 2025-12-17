import { useEffect, useState } from 'react';
import Cart from './components/Cart/Cart';

function App() {
  const [items, setItems] = useState([]);

  function loadCart() {
    const cart = JSON.parse(localStorage.getItem('cart')) || [];
    setItems(cart);
  }

  function removeItem(id) {
    const updated = items.filter(item => item.id !== id);
    localStorage.setItem('cart', JSON.stringify(updated));
    setItems(updated);

    window.dispatchEvent(new Event('cartUpdated'));
  }

  useEffect(() => {
    loadCart();

    window.addEventListener('cartUpdated', loadCart);
    return () => window.removeEventListener('cartUpdated', loadCart);
  }, []);

  return <Cart items={items} removeItem={removeItem} />;
}

export default App;
