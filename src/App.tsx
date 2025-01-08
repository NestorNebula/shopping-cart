import Navbar from './components/navbar/Navbar';
import Footer from './components/footer/Footer';
import { Outlet } from 'react-router-dom';
import { useState } from 'react';
import { useData } from './hooks/useData';
import type { Item } from './types/types';
import { Cart } from './Cart';

function App() {
  const { data, error, loading } = useData();
  !localStorage.getItem('cart') &&
    localStorage.setItem('cart', JSON.stringify([]));
  const initCart = JSON.parse(localStorage.getItem('cart')!);
  const [items, setItems] =
    useState<{ item: Item; quantity: number }[]>(initCart);
  const updateItems = (items: { item: Item; quantity: number }[]) => {
    setItems(items);
    localStorage.setItem('cart', JSON.stringify(items));
  };
  const cart = Cart(items, updateItems);
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
