import { useOutletContext, Navigate, Link } from 'react-router-dom';
import { useState } from 'react';
import styles from './Cart.module.css';

function Cart() {
  const { cart } = useOutletContext();
  const [submit, setSubmit] = useState(false);

  const handleFakeOrder = () => {
    cart.clearCart();
    setSubmit(true);
  };

  const handleRemove = (itemId) => cart.removeItem(itemId);

  return cart.items.length < 1 ? (
    <main className={styles.main}>
      <section className={styles.noCart}>
        <div>You don't have any item in your cart for now!</div>
        <Link className={styles.returnButton} to="/shop">
          Return to shop
        </Link>
      </section>
    </main>
  ) : (
    <main className={styles.main}>
      <section className={styles.cart}>
        {submit && <Navigate to="/" />}
        <div className={styles.title}>Your Cart</div>
        <div className={styles.rows}>
          <div className={styles.cartHeaders}>
            <div>Item</div>
            <div>Price</div>
            <div>Quantity</div>
            <div></div>
          </div>
          {cart.items.map((item) => {
            return (
              <div className={styles.item} key={item.item.id}>
                <img src={item.item.images[0]} alt="/" />
                <div>{item.item.title}</div>
                <div>{item.item.price}</div>
                <div>{item.quantity}</div>
                <button
                  className={styles.removeButton}
                  onClick={() => handleRemove(item.item.id)}
                >
                  Remove
                </button>
              </div>
            );
          })}
        </div>
        <div>
          <div>Total:</div>
          <div>{Math.round(cart.getTotal() * 100) / 100}$</div>
        </div>
        <button className={styles.confirmOrder} onClick={handleFakeOrder}>
          Confirm order
        </button>
      </section>
    </main>
  );
}

export default Cart;
