import { useOutletContext } from 'react-router-dom';

function Shop() {
  const { data } = useOutletContext();

  return (
    <main>
      <header>
        <h2>Fake Store's Shop</h2>
      </header>
      <div>{data.length} Items</div>
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
