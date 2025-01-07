import { Link } from 'react-router-dom';
import styles from './Navbar.module.css';
import cartIcon from '../../assets/icons/cart.svg';
import { Cart } from '../../types/types';

function Navbar({cart}: { cart: Cart }) {
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
            <div
              className={styles.cartLength}
              aria-label={cart.items.length + ' items in cart'}
            >
              {cart.items.length}
            </div>
            <Link to="cart">
              <img className={styles.cartIcon} src={cartIcon} alt="cart" />
            </Link>
          </div>
        </li>
      </ul>
    </nav>
  );
}

export default Navbar;
