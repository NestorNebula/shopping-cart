import { vi, describe, it, expect } from 'vitest';
import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { FakeData } from '../src/placeholders/FakeData';
import { Cart as Cartfunctions } from '../src/Cart';
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
    render(<Cart />);
    expect(screen.queryByText('Decoration Swing')).not.toBeNull();
    expect(screen.queryByText('59.99$')).not.toBeNull();
  });

  it('fake command when clicking button', async () => {
    cart.clearCart = vi.fn();
    const user = userEvent.setup();
    render(<Cart />);
    const button = screen.getByRole('button', { name: 'Confirm order' });
    await user.click(button);
    expect(cart.clearCart).toHaveBeenCalledOnce();
  });
});
