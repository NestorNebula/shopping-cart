import { vi, describe, it, expect } from 'vitest';
import { FakeData } from './FakeData';
import { Cart } from '../src/Cart';

const data = FakeData().data;
const mockSetItems = vi.fn((update) => update);

describe('getTotal', () => {
  let cart = Cart([], mockSetItems);
  it('returns 0 when nothing in Cart', () => {
    expect(cart.getTotal()).toBe(0);
  });

  it('returns total when items inside Cart', () => {
    cart.addItem(data[0], 2);
    const newItems = mockSetItems.mock.lastCall[0];
    cart = Cart(newItems, mockSetItems);
    expect(cart.getTotal()).toBe(119.98);
  });
});

describe('addItem', () => {
  let cart = Cart([], mockSetItems);
  it('add an item correctly', () => {
    cart.addItem(data[0], 1);
    const newItems = mockSetItems.mock.lastCall[0];
    cart = Cart(newItems, mockSetItems);
    expect(cart.getTotal()).toBe(59.99);
  });
});

describe('clearCart', () => {
  let cart = Cart([], mockSetItems);
  it('remove all items from cart', () => {
    cart.addItem(data[0], 1);
    let newItems = mockSetItems.mock.lastCall[0];
    cart = Cart(newItems, mockSetItems);
    cart.clearCart();
    newItems = mockSetItems.mock.lastCall[0];
    cart = Cart(newItems, mockSetItems);
    expect(cart.getTotal()).toBe(0);
  });
});

describe('removeItem', () => {
  let cart = Cart([], mockSetItems);
  it('remove an item from cart', () => {
    cart.addItem(data[0], 1);
    cart.removeItem(data[0].id);
    expect(cart.items.length).toBe(0);
  });
});
