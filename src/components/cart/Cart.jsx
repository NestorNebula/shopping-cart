import { useOutletContext, Navigate } from 'react-router-dom';
import { useState } from 'react';

function Cart() {
  const { cart } = useOutletContext();
  const [submit, setSubmit] = useState(false);

  const handleFakeOrder = () => {
    cart.clearCart();
    setSubmit(true);
  };

  return (
    <section>
      {submit && <Navigate to="/" />}
      <div>Your Cart</div>
      <div>
        <div>Item</div>
        <div>Price</div>
        <div>Quantity</div>
      </div>
      {cart.items.map((item) => {
        return (
          <div key={item.item.id}>
            <div>{item.item.title}</div>
            <div>{item.item.price}</div>
            <div>{item.quantity}</div>
          </div>
        );
      })}
      <div>
        <div>Total:</div>
        <div>{cart.getTotal()}$</div>
      </div>
      <button onClick={handleFakeOrder}>Confirm order</button>
    </section>
  );
}

export default Cart;
