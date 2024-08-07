import { useOutletContext, Link, useParams } from 'react-router-dom';
import { useState } from 'react';

function Item() {
  const { data, cart } = useOutletContext();
  const { item: id } = useParams();
  const [quantity, setQuantity] = useState(1);
  const regex = new RegExp('([0-9]+)', 'i');

  const updateQuantity = (e) => {
    if (regex.test(e.target.value)) setQuantity(e.target.value);
  };
  const item = data.find((itm) => itm.id === +id);
  const addToCart = () => {
    cart.addItem(item, quantity);
  };

  return (
    <div>
      <img src={item.images[0]} alt="" />
      <div>{item.title}</div>
      <div>{item.price}$</div>
      <div>{item.description}</div>
      <button onClick={addToCart}>Add to Cart</button>
      <label htmlFor="quantity">Quantity:</label>
      <input
        id="quantity"
        type="number"
        value={quantity}
        onChange={updateQuantity}
      />
    </div>
  );
}

export default Item;
