import { useOutletContext, Link } from 'react-router-dom';

function Cart() {
  const { data, cart } = useOutletContext();

  return (
    <section>
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
    </section>
  );
}

export default Cart;
