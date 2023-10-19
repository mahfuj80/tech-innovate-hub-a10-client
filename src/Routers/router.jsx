import { createBrowserRouter } from 'react-router-dom';
import ErrorPage from '../Pages/Errorpage';
import Root from '../layout/Root';
import Home from '../Pages/Home';
import Login from '../Pages/Login';
import AddProduct from '../Pages/AddProduct';
import MyCart from '../Pages/MyCart';
import Registration from '../Pages/Registration';
import BrandProduct from '../Pages/BrandProduct';
import Profile from '../Pages/Profile';
import Settings from '../Pages/Settings';
import UpdateProduct from '../Pages/UpdateProduct';
import ProductDetails from '../Pages/ProductDetails';

const router = createBrowserRouter([
  {
    path: '/',
    element: <Root></Root>,
    errorElement: <ErrorPage></ErrorPage>,
    children: [
      {
        path: '/',
        element: <Home></Home>,
      },
      {
        path: '/add-product',
        element: <AddProduct></AddProduct>,
      },
      {
        path: '/my-cart',
        element: <MyCart></MyCart>,
      },
      {
        path: '/login',
        element: <Login></Login>,
      },
      {
        path: '/register',
        element: <Registration></Registration>,
      },
      {
        path: '/brand/:name',
        element: <BrandProduct></BrandProduct>,
      },
      {
        path: '/profile',
        element: <Profile></Profile>,
      },
      {
        path: '/settings',
        element: <Settings></Settings>,
      },
      {
        path: '/update-product/:id',
        element: <UpdateProduct></UpdateProduct>,
        loader: ({ params }) =>
          fetch(`http://localhost:5000/update-products/${params.id}`),
      },
      {
        path: '/details/:id',
        element: <ProductDetails></ProductDetails>,
        loader: ({ params }) =>
          fetch(`http://localhost:5000/update-products/${params.id}`),
      },
    ],
  },
]);

export default router;
