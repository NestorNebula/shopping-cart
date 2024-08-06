import { vi, describe, it, expect } from 'vitest';
import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import Shop from '../src/components/shop/Shop';
import { FakeData } from '../src/placeholders/FakeData';

const data = FakeData().data;

vi.mock('react-router-dom', () => ({
  ...vi.importActual('react-router-dom'),
  useOutletContext: () => ({
    data: data,
  }),
}));

describe('Shop', () => {
  it('renders correctly', () => {
    render(<Shop />);
    const header = screen.getByRole('heading');
    expect(header.textContent).toMatch("Fake Store's Shop");
  });

  it('display all items', () => {
    render(<Shop />);
    const items = screen.queryAllByTestId('item');
    expect(items.length).toEqual(data.length);
  });

  it('display items based on search', async () => {
    const user = userEvent.setup();
    render(<Shop />);
    const searchbar = screen.getByLabelText('Search Item');
    await user.type(searchbar, 'house');
    const items = screen.queryAllByTestId('item');
    expect(items.length).toEqual(1);
  });
});
