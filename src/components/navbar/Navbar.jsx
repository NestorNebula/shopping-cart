import { Link } from 'react-router-dom';

function Navbar({ cart }) {
  return (
    <nav>
      <ul>
        <li>
          <Link to="shop">Shop</Link>
        </li>
        <li>
          <Link to="/">Fake Store</Link>
        </li>
        <li>
          <div>
            <div>{cart.items.length}</div>
            <Link to="cart">Cart</Link>
          </div>
        </li>
      </ul>
    </nav>
  );
}

export default Navbar;
