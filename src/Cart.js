export function Cart() {
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
