import { createBrowserRouter } from 'react-router-dom';
import ErrorPage from '../Pages/Errorpage';
import Root from '../layout/Root';
import Home from '../Pages/Home';
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
    ],
  },
]);

export default router;
