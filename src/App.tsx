import Navbar from './components/navbar/Navbar';
import Footer from './components/footer/Footer';
import { Outlet } from 'react-router-dom';
import { useState } from 'react';
import { useData } from './hooks/useData';
import type { Item } from './types/types';
import { Cart } from './Cart';

function App() {
  const { data, error, loading } = useData();
  const [items, setItems] = useState<{ item: Item; quantity: number }[]>([]);
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
