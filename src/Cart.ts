import type { Item } from './types/types';

interface CartItem {
  item: Item;
  quantity: number;
}

class Cart {
  items: CartItem[] = [];
  getTotal: () => number = () => {
    return this.items.reduce(
      (sum, item) => (sum += item.item.price * item.quantity),
      0
    );
  };
  addItem: (item: Item, quantity: number) => void = (item, quantity) => {
    !this.items.some((cartItem) => cartItem.item.id === item.id) &&
      this.updateItems([...this.items, { item: item, quantity: quantity }]);
  };
  removeItem: (id: number) => void = (id) => {
    this.updateItems(this.items.filter((item) => item.item.id !== id));
  };
  clearCart: () => void = () => {
    this.updateItems([]);
  };
  updateItems: (items: CartItem[]) => unknown;

  constructor(items: CartItem[], setItems: (items: CartItem[]) => unknown) {
    this.items = items;
    this.updateItems = setItems;
  }
}

function getCart(items: CartItem[], setItems: (items: CartItem[]) => unknown) {
  const cart = new Cart(items, setItems);

  return cart;
}

export { getCart as Cart };
