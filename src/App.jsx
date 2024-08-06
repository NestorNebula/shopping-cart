import './App.css';
import Navbar from './components/navbar/Navbar';
import Footer from './components/footer/Footer';
import { Outlet } from 'react-router-dom';
import { FakeData } from './placeholders/FakeData';
// import { useState, useEffect } from 'react';

/* const useData = () => {
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
              item.tags.includes('clothing') ||
              item.tags.includes('home decor') ||
              item.tags.includes('sunglasses')
            );
          })
        )
      )
      .catch((error) => setError(error.message))
      .finally(() => setLoading(false));
  }, []);

  return { data, error, loading };
}; */

function Cart() {
  let items = [];

  const getTotal = () =>
    items.reduce((sum, item) => (sum += item.price * item.quantity));

  const addItem = (item, quantity) => {
    items.forEach((cartItem) => {
      if (cartItem.item.id === cartItem.id) return false;
    });
    items.push({ item: item, quantity: quantity });
  };

  const clearCart = () => (items = []);

  return { getTotal, addItem, clearCart };
}

function App() {
  const { data, error, loading } = FakeData();

  const cart = Cart();
  return (
    !loading &&
    !error && (
      <>
        <Navbar />
        <Outlet context={{ data, cart }} />
        <Footer />
      </>
    )
  );
}

export default App;
