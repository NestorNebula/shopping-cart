import { vi, describe, it, expect } from 'vitest';
import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { FakeData } from './FakeData';
import { Cart as Cartfunctions } from '../src/Cart';
import { MemoryRouter } from 'react-router-dom';
import Cart from '../src/components/cart/Cart';

const mockSetItems = vi.fn((update) => update);
const cart = Cartfunctions(
  [{ item: FakeData().data[0], quantity: 1 }],
  mockSetItems
);

vi.mock('react-router-dom', async () => {
  const actual = await vi.importActual('react-router-dom');
  return {
    ...actual,
    useOutletContext: vi.fn(() => {
      return { cart: cart };
    }),
  };
});

describe('cart', () => {
  it('renders cart properly', () => {
    render(
      <MemoryRouter>
        <Cart />
      </MemoryRouter>
    );
    expect(screen.queryByText('Decoration Swing')).not.toBeNull();
    expect(screen.queryByText('59.99$')).not.toBeNull();
  });

  it('fake command when clicking button', async () => {
    cart.clearCart = vi.fn();
    const user = userEvent.setup();
    render(
      <MemoryRouter>
        <Cart />
      </MemoryRouter>
    );
    const button = screen.getByRole('button', { name: 'Confirm order' });
    await user.click(button);
    expect(cart.clearCart).toHaveBeenCalledOnce();
  });

  it('calls removeItem when remove button clicked', async () => {
    cart.removeItem = vi.fn();
    const user = userEvent.setup();
    render(
      <MemoryRouter>
        <Cart />
      </MemoryRouter>
    );
    const button = screen.getByRole('button', { name: 'Remove' });
    await user.click(button);
    expect(cart.removeItem).toHaveBeenCalledWith(43);
  });
});
