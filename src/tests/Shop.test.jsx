import { vi, describe, it, expect } from 'vitest';
import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import Shop from '../components/shop/Shop';
import { FakeData } from '../placeholders/FakeData';

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
});
