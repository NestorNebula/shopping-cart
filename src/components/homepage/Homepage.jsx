import { Link, useOutletContext } from 'react-router-dom';
import styles from './Homepage.module.css';

function Homepage() {
  const { data } = useOutletContext();
  const reversedData = [];
  for (let i = data.length - 1; i >= 0; i--) {
    reversedData.push(data[i]);
  }

  return (
    <main className={styles.homepage}>
      <header className={styles.title}>
        <div>Welcome to Fake Store!</div>
      </header>
      <section className={styles.section}>
        <div className={styles.sectionTitle}>Start shopping now!</div>
        <div className={styles.items}>
          <div className={styles.itemsContainer}>
            {data.map((item) => (
              <div key={item.id + '1'} className={styles.imgContainer}>
                <img className={styles.img} src={item.images[0]} />
              </div>
            ))}
          </div>
        </div>
        <div className={styles.items}>
          <div className={styles.itemsContainerBottom}>
            {reversedData.map((item) => (
              <div key={item.id + '2'} className={styles.imgContainer}>
                <img className={styles.img} src={item.images[0]} />
              </div>
            ))}
          </div>
        </div>
        <div className={styles.links}>
          <Link to="shop">Shop</Link>
          <Link to="cart">Cart</Link>
        </div>
      </section>
    </main>
  );
}

export default Homepage;
