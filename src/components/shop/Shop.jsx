import { useOutletContext } from 'react-router-dom';
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
            <div data-testid="item" className="item" key={item.id}>
              <img src={item.images[0]} alt="" />
              <div>{item.title}</div>
              <div>{item.price}$</div>
            </div>
          );
        })}
      </section>
    </main>
  );
}

export default Shop;
