import { Link, useOutletContext } from 'react-router-dom';
import { Item } from '../../types/types';
import cart from '../../assets/icons/cart.png';
import shop from '../../assets/icons/shop.png';
import styles from './Homepage.module.css';

function Homepage() {
  const { data }: { data: Item[] } = useOutletContext();
  const reversedData: Item[] = [];
  for (let i = data.length - 1; i >= 0; i--) {
    reversedData.push(data[i]);
  }

  return (
    <main className={styles.homepage}>
      <header className={styles.title}>
        <div>
          Welcome to <span className={styles.fakeStore}>Fake Store </span>!
        </div>
      </header>
      <section className={styles.section}>
        <div className={styles.sectionTitle}>Start shopping now!</div>
        <div className={styles.items}>
          <div className={styles.itemsContainer}>
            {data.map((item) => (
              <Link
                key={item.id + '1'}
                to={`shop/item/${item.id}`}
                className={styles.imgContainer}
              >
                <img className={styles.img} src={item.images[0]} />
              </Link>
            ))}
          </div>
        </div>
        <div className={styles.items}>
          <div className={styles.itemsContainerBottom}>
            {reversedData.map((item) => (
              <Link
                key={item.id + '2'}
                to={`shop/item/${item.id}`}
                className={styles.imgContainer}
              >
                <img className={styles.img} src={item.images[0]} />
              </Link>
            ))}
          </div>
        </div>
        <div className={styles.links}>
          <Link to="shop">
            <div className={styles.linkContainer}>
              <img className={styles.linkImg} src={shop} alt=""></img>
              <div>Shop</div>
            </div>
          </Link>
          <Link to="cart">
            <div className={styles.linkContainer}>
              <img className={styles.linkImg} src={cart} alt="" />
              <div>Cart</div>
            </div>
          </Link>
        </div>
      </section>
    </main>
  );
}

export default Homepage;
