export function Cart(itm, setItems) {
  const items = itm;

  const getTotal = () =>
    items.reduce((sum, item) => (sum += item.item.price * item.quantity), 0);

  const addItem = (item, quantity) => {
    !items.some((cartItem) => cartItem.item.id === item.id) &&
      setItems([...items, { item: item, quantity: quantity }]);
  };

  const removeItem = (itemId) => {
    setItems(items.filter((item) => item.item.id !== itemId));
  };

  const clearCart = () => setItems([]);

  return { items, getTotal, addItem, removeItem, clearCart };
}
