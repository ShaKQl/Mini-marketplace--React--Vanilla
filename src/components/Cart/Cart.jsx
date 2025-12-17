import CartList from "./CartList";
import './cart.css'
const Cart = ({ items, removeItem }) => {
    const total = items.reduce(
        (sum, item) => sum + item.price * (item.quantity ?? 1),
        0
    );


    return (
        <div className="cart">
            <h2>Cart</h2>
            <CartList items={items} removeItem={removeItem} />
            {items.length > 0 && (
                <div className="cart__total">
                    Total: ${total.toFixed(2)}
                </div>
            )}

        </div>
    );
};

export default Cart;
