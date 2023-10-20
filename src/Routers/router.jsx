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
import PrivetRoutes from './PrivateRoute';

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
        element: (
          <PrivetRoutes>
            <AddProduct></AddProduct>
          </PrivetRoutes>
        ),
      },
      {
        path: '/my-cart/:email',
        element: (
          <PrivetRoutes>
            <MyCart></MyCart>
          </PrivetRoutes>
        ),
        loader: ({ params }) =>
          fetch(
            `https://tech-innovate-hub-a10-server-9pvdv2erv.vercel.app/cart/${params?.email}`
          ),
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
        element: (
          <PrivetRoutes>
            <Profile></Profile>
          </PrivetRoutes>
        ),
      },
      {
        path: '/settings',
        element: (
          <PrivetRoutes>
            <Settings></Settings>
          </PrivetRoutes>
        ),
      },
      {
        path: '/update-product/:id',
        element: (
          <PrivetRoutes>
            <UpdateProduct></UpdateProduct>
          </PrivetRoutes>
        ),
        loader: ({ params }) =>
          fetch(
            `https://tech-innovate-hub-a10-server-9pvdv2erv.vercel.app/update-products/${params.id}`
          ),
      },
      {
        path: '/details/:id',
        element: (
          <PrivetRoutes>
            <ProductDetails></ProductDetails>
          </PrivetRoutes>
        ),
        loader: ({ params }) =>
          fetch(
            `https://tech-innovate-hub-a10-server-9pvdv2erv.vercel.app/update-products/${params.id}`
          ),
      },
    ],
  },
]);

export default router;
