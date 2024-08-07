import { useOutletContext, Link, useParams } from 'react-router-dom';
import { useState } from 'react';

function Item() {
  const { data, cart } = useOutletContext();
  const { item: id } = useParams();
  const [quantity, setQuantity] = useState('');
  const regex = new RegExp('([0-9]+)', 'i');

  const updateQuantity = (e) => {
    if (regex.test(e.target.value)) setQuantity(e.target.value);
  };
  const item = data.find((itm) => itm.id === +id);
  const addToCart = () => {
    cart.addItem(item, quantity || '1');
  };

  return (
    <div>
      <img src={item.images[0]} alt="" />
      <div>{item.title}</div>
      <div>{item.price}$</div>
      <div>{item.description}</div>
      {console.log(cart.items)};
      {cart.items.some((cartItem) => cartItem.item.id === item.id) ? (
        <>
          <div>This item is already on your cart!</div>
          <Link to="/cart">Check your cart</Link>
        </>
      ) : (
        <>
          <button onClick={addToCart}>Add to Cart</button>
          <label htmlFor="quantity">Quantity:</label>
          <input
            id="quantity"
            type="number"
            placeholder="1"
            value={quantity}
            onChange={updateQuantity}
          />
        </>
      )}
    </div>
  );
}

export default Item;
