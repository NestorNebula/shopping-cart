import App from '../App';
import { RouteObject } from 'react-router-dom';
import Homepage from '../components/homepage/Homepage';
import Shop from '../components/shop/Shop';
import Item from '../components/item/Item';
import Cart from '../components/cart/Cart';
import ErrorPage from '../components/error/ErrorPage';

const routes: RouteObject[] = [
  {
    path: '/',
    element: <App />,
    errorElement: <ErrorPage />,
    children: [
      { index: true, element: <Homepage /> },
      { path: 'shop', element: <Shop /> },
      { path: '/shop/item/:item', element: <Item /> },
      { path: 'cart', element: <Cart /> },
    ],
  },
];

export default routes;
