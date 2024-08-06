import './App.css';
import Navbar from './components/navbar/Navbar';
import Footer from './components/footer/Footer';
import { Outlet } from 'react-router-dom';
// import { useState, useEffect } from 'react';

/* const useData = () => {
  const [data, setData] = useState(null);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch('https://dummyjson.com/products?limit=0', { mode: 'cors' })
      .then((response) => {
        if (!response.ok) {
          throw new Error('server error');
        }
        return response.json();
      })
      .then((response) =>
        setData(
          response.products.filter((item) => {
            return (
              item.tags.includes('clothing') ||
              item.tags.includes('home decor') ||
              item.tags.includes('sunglasses')
            );
          })
        )
      )
      .catch((error) => setError(error.message))
      .finally(() => setLoading(false));
  }, []);

  return { data, error, loading };
}; */

function App() {
  const { data, error, loading } = fakeData();
  return (
    !loading && (
      <>
        <Navbar />
        <Outlet />
        <Footer />
      </>
    )
  );
}

const fakeData = () => {
  const data = [
    {
      id: 43,
      title: 'Decoration Swing',
      description:
        'The Decoration Swing is a charming addition to your home decor. Crafted with intricate details, it adds a touch of elegance and whimsy to any room.',
      category: 'home-decoration',
      price: 59.99,
      discountPercentage: 0.65,
      rating: 3.56,
      stock: 62,
      tags: ['home decor', 'swing'],
      sku: 'MBEK52ST',
      weight: 8,
      dimensions: {
        width: 20.75,
        height: 11.18,
        depth: 7.92,
      },
      warrantyInformation: 'Lifetime warranty',
      shippingInformation: 'Ships in 2 weeks',
      availabilityStatus: 'In Stock',
      reviews: [
        {
          rating: 5,
          comment: 'Highly recommended!',
          date: '2024-05-23T08:56:21.621Z',
          reviewerName: 'Aria Roberts',
          reviewerEmail: 'aria.roberts@x.dummyjson.com',
        },
        {
          rating: 5,
          comment: 'Highly impressed!',
          date: '2024-05-23T08:56:21.621Z',
          reviewerName: 'Caleb Perkins',
          reviewerEmail: 'caleb.perkins@x.dummyjson.com',
        },
        {
          rating: 5,
          comment: 'Great product!',
          date: '2024-05-23T08:56:21.621Z',
          reviewerName: 'Aria Roberts',
          reviewerEmail: 'aria.roberts@x.dummyjson.com',
        },
      ],
      returnPolicy: '30 days return policy',
      minimumOrderQuantity: 2,
      meta: {
        createdAt: '2024-05-23T08:56:21.621Z',
        updatedAt: '2024-05-23T08:56:21.621Z',
        barcode: '6434699988216',
        qrCode: 'https://assets.dummyjson.com/public/qr-code.png',
      },
      images: [
        'https://cdn.dummyjson.com/products/images/home-decoration/Decoration%20Swing/1.png',
        'https://cdn.dummyjson.com/products/images/home-decoration/Decoration%20Swing/2.png',
        'https://cdn.dummyjson.com/products/images/home-decoration/Decoration%20Swing/3.png',
      ],
      thumbnail:
        'https://cdn.dummyjson.com/products/images/home-decoration/Decoration%20Swing/thumbnail.png',
    },
    {
      id: 44,
      title: 'Family Tree Photo Frame',
      description:
        'The Family Tree Photo Frame is a sentimental and stylish way to display your cherished family memories. With multiple photo slots, it tells the story of your loved ones.',
      category: 'home-decoration',
      price: 29.99,
      discountPercentage: 1.53,
      rating: 3.84,
      stock: 34,
      tags: ['home decor', 'photo frame'],
      sku: 'EZOJC792',
      weight: 4,
      dimensions: {
        width: 15.46,
        height: 26.32,
        depth: 17.1,
      },
      warrantyInformation: '6 months warranty',
      shippingInformation: 'Ships in 1 month',
      availabilityStatus: 'In Stock',
      reviews: [
        {
          rating: 1,
          comment: 'Disappointing product!',
          date: '2024-05-23T08:56:21.621Z',
          reviewerName: 'Logan Torres',
          reviewerEmail: 'logan.torres@x.dummyjson.com',
        },
        {
          rating: 4,
          comment: 'Very pleased!',
          date: '2024-05-23T08:56:21.621Z',
          reviewerName: 'William Gonzalez',
          reviewerEmail: 'william.gonzalez@x.dummyjson.com',
        },
        {
          rating: 3,
          comment: 'Disappointing product!',
          date: '2024-05-23T08:56:21.621Z',
          reviewerName: 'Amelia Perez',
          reviewerEmail: 'amelia.perez@x.dummyjson.com',
        },
      ],
      returnPolicy: '90 days return policy',
      minimumOrderQuantity: 16,
      meta: {
        createdAt: '2024-05-23T08:56:21.621Z',
        updatedAt: '2024-05-23T08:56:21.621Z',
        barcode: '9462569143093',
        qrCode: 'https://assets.dummyjson.com/public/qr-code.png',
      },
      images: [
        'https://cdn.dummyjson.com/products/images/home-decoration/Family%20Tree%20Photo%20Frame/1.png',
      ],
      thumbnail:
        'https://cdn.dummyjson.com/products/images/home-decoration/Family%20Tree%20Photo%20Frame/thumbnail.png',
    },
    {
      id: 45,
      title: 'House Showpiece Plant',
      description:
        'The House Showpiece Plant is an artificial plant that brings a touch of nature to your home without the need for maintenance. It adds greenery and style to any space.',
      category: 'home-decoration',
      price: 39.99,
      discountPercentage: 19.45,
      rating: 3.61,
      stock: 89,
      tags: ['home decor', 'artificial plants'],
      sku: 'LLNHNIFU',
      weight: 9,
      dimensions: {
        width: 27.15,
        height: 14.43,
        depth: 10.05,
      },
      warrantyInformation: '5 year warranty',
      shippingInformation: 'Ships in 1 week',
      availabilityStatus: 'In Stock',
      reviews: [
        {
          rating: 5,
          comment: 'Great value for money!',
          date: '2024-05-23T08:56:21.621Z',
          reviewerName: 'Olivia Anderson',
          reviewerEmail: 'olivia.anderson@x.dummyjson.com',
        },
        {
          rating: 2,
          comment: 'Very unhappy with my purchase!',
          date: '2024-05-23T08:56:21.621Z',
          reviewerName: 'Grace Perry',
          reviewerEmail: 'grace.perry@x.dummyjson.com',
        },
        {
          rating: 5,
          comment: 'Highly recommended!',
          date: '2024-05-23T08:56:21.621Z',
          reviewerName: 'Emma Wilson',
          reviewerEmail: 'emma.wilson@x.dummyjson.com',
        },
      ],
      returnPolicy: '7 days return policy',
      minimumOrderQuantity: 7,
      meta: {
        createdAt: '2024-05-23T08:56:21.621Z',
        updatedAt: '2024-05-23T08:56:21.621Z',
        barcode: '1895440764997',
        qrCode: 'https://assets.dummyjson.com/public/qr-code.png',
      },
      images: [
        'https://cdn.dummyjson.com/products/images/home-decoration/House%20Showpiece%20Plant/1.png',
        'https://cdn.dummyjson.com/products/images/home-decoration/House%20Showpiece%20Plant/2.png',
        'https://cdn.dummyjson.com/products/images/home-decoration/House%20Showpiece%20Plant/3.png',
      ],
      thumbnail:
        'https://cdn.dummyjson.com/products/images/home-decoration/House%20Showpiece%20Plant/thumbnail.png',
    },
    {
      id: 46,
      title: 'Plant Pot',
      description:
        'The Plant Pot is a stylish container for your favorite plants. With a sleek design, it complements your indoor or outdoor garden, adding a modern touch to your plant display.',
      category: 'home-decoration',
      price: 14.99,
      discountPercentage: 0.19,
      rating: 3.33,
      stock: 70,
      tags: ['home decor', 'plant accessories'],
      sku: 'M8IWE8MF',
      weight: 8,
      dimensions: {
        width: 16.28,
        height: 8.72,
        depth: 18.47,
      },
      warrantyInformation: '2 year warranty',
      shippingInformation: 'Ships in 1-2 business days',
      availabilityStatus: 'In Stock',
      reviews: [
        {
          rating: 4,
          comment: 'Fast shipping!',
          date: '2024-05-23T08:56:21.621Z',
          reviewerName: 'Harper Turner',
          reviewerEmail: 'harper.turner@x.dummyjson.com',
        },
        {
          rating: 5,
          comment: 'Awesome product!',
          date: '2024-05-23T08:56:21.621Z',
          reviewerName: 'Leah Gutierrez',
          reviewerEmail: 'leah.gutierrez@x.dummyjson.com',
        },
        {
          rating: 4,
          comment: 'Highly recommended!',
          date: '2024-05-23T08:56:21.621Z',
          reviewerName: 'Sadie Morales',
          reviewerEmail: 'sadie.morales@x.dummyjson.com',
        },
      ],
      returnPolicy: '90 days return policy',
      minimumOrderQuantity: 44,
      meta: {
        createdAt: '2024-05-23T08:56:21.621Z',
        updatedAt: '2024-05-23T08:56:21.621Z',
        barcode: '4265754153251',
        qrCode: 'https://assets.dummyjson.com/public/qr-code.png',
      },
      images: [
        'https://cdn.dummyjson.com/products/images/home-decoration/Plant%20Pot/1.png',
        'https://cdn.dummyjson.com/products/images/home-decoration/Plant%20Pot/2.png',
        'https://cdn.dummyjson.com/products/images/home-decoration/Plant%20Pot/3.png',
        'https://cdn.dummyjson.com/products/images/home-decoration/Plant%20Pot/4.png',
      ],
      thumbnail:
        'https://cdn.dummyjson.com/products/images/home-decoration/Plant%20Pot/thumbnail.png',
    },
    {
      id: 47,
      title: 'Table Lamp',
      description:
        'The Table Lamp is a functional and decorative lighting solution for your living space. With a modern design, it provides both ambient and task lighting, enhancing the atmosphere.',
      category: 'home-decoration',
      price: 49.99,
      discountPercentage: 0.59,
      rating: 4.56,
      stock: 84,
      tags: ['home decor', 'lighting'],
      sku: '0K9UDIUB',
      weight: 2,
      dimensions: {
        width: 29.6,
        height: 19.68,
        depth: 10.12,
      },
      warrantyInformation: '1 year warranty',
      shippingInformation: 'Ships in 2 weeks',
      availabilityStatus: 'In Stock',
      reviews: [
        {
          rating: 3,
          comment: 'Not worth the price!',
          date: '2024-05-23T08:56:21.621Z',
          reviewerName: 'Mateo Nguyen',
          reviewerEmail: 'mateo.nguyen@x.dummyjson.com',
        },
        {
          rating: 5,
          comment: 'Very satisfied!',
          date: '2024-05-23T08:56:21.621Z',
          reviewerName: 'James Garcia',
          reviewerEmail: 'james.garcia@x.dummyjson.com',
        },
        {
          rating: 1,
          comment: 'Waste of money!',
          date: '2024-05-23T08:56:21.621Z',
          reviewerName: 'Henry Turner',
          reviewerEmail: 'henry.turner@x.dummyjson.com',
        },
      ],
      returnPolicy: '30 days return policy',
      minimumOrderQuantity: 10,
      meta: {
        createdAt: '2024-05-23T08:56:21.621Z',
        updatedAt: '2024-05-23T08:56:21.621Z',
        barcode: '7764806947768',
        qrCode: 'https://assets.dummyjson.com/public/qr-code.png',
      },
      images: [
        'https://cdn.dummyjson.com/products/images/home-decoration/Table%20Lamp/1.png',
      ],
      thumbnail:
        'https://cdn.dummyjson.com/products/images/home-decoration/Table%20Lamp/thumbnail.png',
    },
  ];
  const error = null;
  const loading = false;

  return { data, error, loading };
};

export default App;
