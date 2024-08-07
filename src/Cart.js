export function Cart() {
  let items = [];

  const getTotal = () =>
    items.reduce((sum, item) => (sum += item.item.price * item.quantity), 0);

  const addItem = (item, quantity) => {
    items.forEach((cartItem) => {
      if (cartItem.item.id === cartItem.id) return false;
    });
    items.push({ item: item, quantity: quantity });
  };

  const clearCart = () => (items = []);

  return { getTotal, addItem, clearCart };
}
