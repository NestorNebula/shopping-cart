import { Link } from 'react-router-dom';
import styles from './Navbar.module.css';

function Navbar({ cart }) {
  return (
    <nav>
      <ul>
        <li>
          <Link to="shop">Shop</Link>
        </li>
        <li>
          <Link className={styles.title} to="/">
            Fake Store
          </Link>
        </li>
        <li>
          <div className={styles.cart}>
            <div className={styles.cartLength}>{cart.items.length}</div>
            <Link to="cart">Cart</Link>
          </div>
        </li>
      </ul>
    </nav>
  );
}

export default Navbar;
