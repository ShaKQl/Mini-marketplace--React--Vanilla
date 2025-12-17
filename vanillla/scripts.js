function addQuantityCart(prod) {
  let cart = JSON.parse(localStorage.getItem('cart')) || [];

  const exists = cart.find(item => item.id === prod.id);
  if (exists) return;

  cart.push({
    id: prod.id,
    title: prod.title,
    price: prod.price,
    quantity: 1
  });

  localStorage.setItem('cart', JSON.stringify(cart));

  // 🔔 УВЕДОМЛЯЕМ REACT
  window.dispatchEvent(new Event('cartUpdated'));
}
