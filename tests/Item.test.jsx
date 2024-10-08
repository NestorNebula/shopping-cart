import { vi, describe, it, expect } from 'vitest';
import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { FakeData } from './FakeData';
import Item from '../src/components/item/Item';
import { Cart } from '../src/Cart';
import { MemoryRouter } from 'react-router-dom';

const data = FakeData().data;
const cart = Cart([{ item: FakeData().data[3], quantity: 1 }]);

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
    render(
      <MemoryRouter>
        <Item />
      </MemoryRouter>
    );
    const title = screen.queryByText('Family Tree Photo Frame');
    expect(title).not.toBeNull();
  });

  it('add item to the cart', async () => {
    const user = userEvent.setup();
    render(
      <MemoryRouter>
        <Item />
      </MemoryRouter>
    );
    const addButton = screen.getByRole('button', { name: 'Add to Cart' });
    await user.click(addButton);
    expect(mockAddItem).toHaveBeenCalled();
  });

  it('add item with correct quantity', async () => {
    const user = userEvent.setup();
    render(
      <MemoryRouter>
        <Item />
      </MemoryRouter>
    );
    const input = screen.getByLabelText('Quantity:');
    await user.type(input, '2');
    const addButton = screen.getByRole('button', { name: 'Add to Cart' });
    await user.click(addButton);
    expect(mockAddItem).toHaveBeenLastCalledWith(data[1], '2');
  });
});
