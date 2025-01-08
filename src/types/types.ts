interface Cart {
  items: { item: Item; quantity: number }[];
  getTotal: () => number;
  addItem: (item: Item, quantity: number) => void;
  removeItem: (itemId: number) => void;
  clearCart: () => void;
}

interface Item {
  id: number;
  title: string;
  description: string;
  category: string;
  price: number;
  rating: number;
  brand?: string;
  reviews: Review[];
  images: any[];
}

interface Review {
  rating: number;
  comment: string;
  date: string;
  reviewerName: string;
}

export type { Cart, Item };
