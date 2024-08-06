import { Link } from 'react-router-dom';

function Homepage() {
  return (
    <main>
      <header>
        <div>Fake Store</div>
      </header>
      <section>
        <div>
          <div>Start shopping now!</div>
          <Link to="shop">Shop</Link>
          <Link to="cart">Cart</Link>
        </div>
      </section>
    </main>
  );
}

export default Homepage;
