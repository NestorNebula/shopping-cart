import { useEffect, useState } from "react";

interface Item {
  brand?: string,
  category: string,
}

const useData = () => {
  const [data, setData] = useState<Item[] | null>(null);
  const [error, setError] = useState<string | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch('https://dummyjson.com/products?limit=0', { mode: 'cors' })
      .then((response) => {
        if (!response.ok) {
          throw new Error('Server Error.');
        }
        return response.json();
      })
      .then((response: { products: Item[]}) =>
        setData(
          response.products.filter((item) => {
            return (
              !item.brand &&
              item.category !== 'groceries' &&
              item.category !== 'kitchen-accessories'
            );
          })
        )
      )
      .catch((error: Error) => setError(error.message))
      .finally(() => setLoading(false));
  }, []);

  return { data, error, loading };
};

export { useData };