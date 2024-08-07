export function Cart(itm, setItems) {
  const items = itm;

  const getTotal = () =>
    items.reduce((sum, item) => (sum += item.item.price * item.quantity), 0);

  const addItem = (item, quantity) => {
    items.forEach((cartItem) => {
      if (cartItem.item.id === cartItem.id) return false;
    });
    setItems([...items, { item: item, quantity: quantity }]);
  };

  const clearCart = () => setItems([]);

  return { items, getTotal, addItem, clearCart };
}
