import './App.css';
import Navbar from './components/navbar/Navbar';
import Footer from './components/footer/Footer';
import { Outlet } from 'react-router-dom';
import { useState, useEffect } from 'react';
import { Cart } from './Cart';

const useData = () => {
  const [data, setData] = useState(null);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch('https://dummyjson.com/products?limit=0', { mode: 'cors' })
      .then((response) => {
        if (!response.ok) {
          throw new Error('server error');
        }
        return response.json();
      })
      .then((response) =>
        setData(
          response.products.filter((item) => {
            return (
              !item.brand &&
              item.category !== 'groceries' &&
              item.category !== 'kitchen-accessories'
            );
          })
        )
      )
      .catch((error) => setError(error.message))
      .finally(() => setLoading(false));
  }, []);

  return { data, error, loading };
};

function App() {
  const { data, error, loading } = useData();
  const [items, setItems] = useState([]);
  const cart = Cart(items, setItems);
  return (
    !loading &&
    !error && (
      <>
        <Navbar cart={cart} />
        <Outlet context={{ data, cart }} />
        <Footer />
      </>
    )
  );
}

export default App;
