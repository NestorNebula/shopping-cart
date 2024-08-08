import { useOutletContext, Link } from 'react-router-dom';
import { useState } from 'react';
import styles from './Shop.module.css';

function Shop() {
  let { data } = useOutletContext();

  const [search, setSearch] = useState('');
  const regex = new RegExp(search, 'i');
  data = data.filter((item) => regex.test(item.description));

  const updateSearch = (e) => setSearch(e.target.value);

  return (
    <main className={styles.shop}>
      <header className={styles.title}>
        <h2>Fake Store's Shop</h2>
      </header>
      <div className={styles.numItems}>
        {data.length > 1 ? `${data.length} Items` : `${data.length} Item`}{' '}
        {search && `found for "${search}"`}
      </div>
      <div className={styles.searchbar}>
        <label htmlFor="searchbar">Search Item:</label>
        <input
          className={styles.searchbarInput}
          type="text"
          id="searchbar"
          value={search}
          onChange={updateSearch}
        ></input>
      </div>
      <section className={styles.section}>
        {data.map((item) => {
          return (
            <Link to={`/shop/item/${item.id}`} key={item.id}>
              <div data-testid="item" className={styles.item} key={item.id}>
                <img src={item.images[0]} alt="" />
                <div className={styles.itemName}>{item.title}</div>
                <div className={styles.itemPrice}>{item.price}$</div>
              </div>
            </Link>
          );
        })}
      </section>
      <div>
        <Link to="/">Homepage</Link>
        <Link to="/cart">Cart</Link>
      </div>
    </main>
  );
}

export default Shop;
