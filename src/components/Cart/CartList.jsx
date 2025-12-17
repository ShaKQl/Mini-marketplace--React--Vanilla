import CartItem from './CartItem';

const CartList = ({ items, removeItem }) => {
  if (items.length === 0) {
    return <p>Cart is empty</p>;
  }

  return (
    <>
      {items.map(item => (
        <CartItem
          key={item.id}
          item={item}
          removeItem={removeItem}
        />
      ))}
    </>
  );
};

export default CartList;
