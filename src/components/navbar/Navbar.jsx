import { Link } from 'react-router-dom';

function Navbar() {
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
          <Link to="cart">Cart</Link>
        </li>
      </ul>
    </nav>
  );
}

export default Navbar;
