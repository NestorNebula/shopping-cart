import { useOutletContext, Link } from 'react-router-dom';
import { useState } from 'react';
import { Item } from '../../types/types';
import styles from './Shop.module.css';
import homepage from '../../assets/icons/homepage.png';
import cart from '../../assets/icons/cart.png';

interface CustomEvent {
  target: {
    value: string;
  };
}

type SortOption = 'category' | 'popularity' | 'low-to-high' | 'high-to-low';

function Shop() {
  let { data }: { data: Item[] } = useOutletContext();

  const [search, setSearch] = useState('');
  const [sort, setSort] = useState<SortOption>('category');
  const isSortOption = (value: string): value is SortOption => {
    const options = ['category', 'popularity', 'low-to-high', 'high-to-low'];
    return options.includes(value);
  };
  const regex = new RegExp(search, 'i');
  data = data.filter((item) => regex.test(item.description));

  const updateSearch = (e: CustomEvent) => setSearch(e.target.value);
  const updateSort = (e: CustomEvent) =>
    isSortOption(e.target.value) && setSort(e.target.value);
  (function sortData(datas: Item[]) {
    if (sort === 'popularity') {
      datas.sort((a, b) => b.rating - a.rating);
    } else if (sort === 'low-to-high') {
      datas.sort((a, b) => a.price - b.price);
    } else if (sort === 'high-to-low') {
      datas.sort((a, b) => b.price - a.price);
    } else {
      datas.sort();
    }
  })(data);

  return (
    <main className={styles.shop}>
      <header className={styles.title}>
        <h2>
          <span className={styles.fakeStore}>Fake Store </span>'s Shop
        </h2>
      </header>
      <div className={styles.params}>
        <div className={styles.numItems}>
          {data.length > 1 ? `${data.length} Items` : `${data.length} Item`}{' '}
          {search && `found for "${search}"`}
        </div>
        <div>
          <label htmlFor="select">Sort by: </label>
          <select id="select" onChange={updateSort}>
            <option value="category">Category</option>
            <option value="popularity">Popularity</option>
            <option value="low-to-high">Price: Low to High</option>
            <option value="high-to-low">Price: High to Low</option>
          </select>
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
      <div className={styles.links}>
        <Link to="/">
          <div className={styles.linkContainer}>
            <img className={styles.linkImg} src={homepage} alt=""></img>
            <div>Homepage</div>
          </div>
        </Link>
        <Link to="/cart">
          <div className={styles.linkContainer}>
            <img className={styles.linkImg} src={cart} alt="" />
            <div>Cart</div>
          </div>
        </Link>
      </div>
    </main>
  );
}

export default Shop;
