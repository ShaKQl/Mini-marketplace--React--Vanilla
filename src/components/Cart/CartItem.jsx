const CartItem = ({ item, removeItem }) => {
  return (
    <div className="cart__card">
      <h4>{item.title}</h4>
      <p>Price: ${item.price}</p>
      <p>Quantity: {item.quantity ?? 1}</p>

      <button onClick={() => removeItem(item.id)}>
        Remove
      </button>
    </div>
  );
};

export default CartItem;
