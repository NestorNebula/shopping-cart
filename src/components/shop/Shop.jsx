import { useOutletContext, Link } from 'react-router-dom';
import { useState } from 'react';

function Shop() {
  let { data } = useOutletContext();

  const [search, setSearch] = useState('');
  const regex = new RegExp(search, 'i');
  data = data.filter((item) => regex.test(item.description));

  const updateSearch = (e) => setSearch(e.target.value);

  return (
    <main>
      <header>
        <h2>Fake Store's Shop</h2>
      </header>
      <div>{data.length} Items</div>
      <div>
        <label htmlFor="searchbar">Search Item</label>
        <input
          type="text"
          id="searchbar"
          value={search}
          onChange={updateSearch}
        ></input>
      </div>
      <section>
        {data.map((item) => {
          return (
            <Link to={`/shop/item/${item.id}`} key={item.id}>
              <div data-testid="item" className="item" key={item.id}>
                <img src={item.images[0]} alt="" />
                <div>{item.title}</div>
                <div>{item.price}$</div>
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
