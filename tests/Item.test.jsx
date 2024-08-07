import { vi, describe, it, expect } from 'vitest';
import { queryByText, render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { FakeData } from '../src/placeholders/FakeData';
import { MemoryRouter, useParams } from 'react-router-dom';
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
  it('renders a given object correctly', () => {
    render(<Item />);
    const title = screen.queryByText('Family Tree Photo Frame');
    expect(title).not.toBeNull();
  });
});
