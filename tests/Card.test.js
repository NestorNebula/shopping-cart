import { vi, describe, it, expect } from 'vitest';
import { FakeData } from '../src/placeholders/FakeData';
import { Cart } from '../src/Cart';

const data = FakeData().data;

describe('getTotal', () => {
  const cart = Cart();
  it('returns 0 when nothing in Cart', () => {
    expect(cart.getTotal()).toBe(0);
  });

  it('returns total when items inside Cart', () => {
    cart.addItem(data[0], 2);
    expect(cart.getTotal()).toBe(119.98);
  });
});

describe('addItem', () => {
  const cart = Cart();
  it('add an item correctly', () => {
    cart.addItem(data[0], 1);
    expect(cart.getTotal()).toBe(59.99);
  });
});

describe('clearCart', () => {
  const cart = Cart();
  it('remove all items from cart', () => {
    cart.addItem(data[0], 1);
    cart.clearCart();
    expect(cart.getTotal()).toBe(0);
  });
});
