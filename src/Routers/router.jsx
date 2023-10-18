import { createBrowserRouter } from 'react-router-dom';
import ErrorPage from '../Pages/Errorpage';
import Root from '../layout/Root';
import Home from '../Pages/Home';
import Login from '../Pages/Login';
import AddProduct from '../Pages/AddProduct';
import MyCart from '../Pages/MyCart';
import Registration from '../Pages/Registration';

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
    ],
  },
]);

export default router;
