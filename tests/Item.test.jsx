import { vi, describe, it, expect } from 'vitest';
import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { FakeData } from '../src/placeholders/FakeData';
import Item from '../src/components/item/Item';
import { Cart } from '../src/Cart';

const data = FakeData().data;
const cart = Cart();

vi.mock('react-router-dom', async () => {
  const actual = await vi.importActual('react-router-dom');
  return {
    ...actual,
    useOutletContext: vi.fn(() => {
      return { data: data, cart: cart };
    }),
    useParams: vi.fn(() => {
      return { item: '44' };
    }),
  };
});

describe('Item', () => {
  const mockAddItem = vi.fn((item, quantity) => {
    return {
      item: item,
      quantity: quantity,
    };
  });
  cart.addItem = mockAddItem;
  it('renders a given object correctly', () => {
    render(<Item />);
    const title = screen.queryByText('Family Tree Photo Frame');
    expect(title).not.toBeNull();
  });

  it('add item to the cart', async () => {
    const user = userEvent.setup();
    render(<Item />);
    const addButton = screen.getByRole('button', { name: 'Add to Cart' });
    await user.click(addButton);
    expect(mockAddItem).toHaveBeenCalled();
  });

  it('add item with correct quantity', async () => {
    const user = userEvent.setup();
    render(<Item />);
    const input = screen.getByLabelText('Quantity:');
    await user.type(input, '2');
    const addButton = screen.getByRole('button', { name: 'Add to Cart' });
    await user.click(addButton);
    expect(mockAddItem).toHaveBeenLastCalledWith(data[1], '12');
  });
});
