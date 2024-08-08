import { vi, describe, it, expect } from 'vitest';
import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import Shop from '../src/components/shop/Shop';
import { FakeData } from '../src/placeholders/FakeData';
import { MemoryRouter } from 'react-router-dom';

const data = FakeData().data;

vi.mock('react-router-dom', async () => {
  const actual = await vi.importActual('react-router-dom');
  return {
    ...actual,
    useOutletContext: vi.fn(() => {
      return { data: data };
    }),
  };
});

describe('Shop', () => {
  it('renders correctly', () => {
    render(
      <MemoryRouter>
        <Shop />
      </MemoryRouter>
    );
    const header = screen.getByRole('heading');
    expect(header.textContent).toMatch("Fake Store's Shop");
  });

  it('display all items', () => {
    render(
      <MemoryRouter>
        <Shop />
      </MemoryRouter>
    );
    const items = screen.queryAllByTestId('item');
    expect(items.length).toEqual(data.length);
  });

  it('display items based on search', async () => {
    const user = userEvent.setup();
    render(
      <MemoryRouter>
        <Shop />
      </MemoryRouter>
    );
    const searchbar = screen.getByLabelText(/Search Item/);
    await user.type(searchbar, 'house');
    const items = screen.queryAllByTestId('item');
    expect(items.length).toEqual(1);
  });
});
