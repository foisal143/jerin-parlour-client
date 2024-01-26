import { createBrowserRouter } from 'react-router-dom';
import Main from '../layouts/Main';
import Home from '../pages/Home/Home/Home';
import Login from '../pages/Login/Login';
import Registar from '../pages/Registar/Registar';
import Dashboardlayout from '../layouts/Dashboardlayout';
import Book from '../pages/DashboardUser/Book/Book';
import BookingList from '../pages/DashboardUser/BookingList/BookingList';
import Review from '../pages/DashboardUser/Review/Review';
import Services from '../pages/Services/Services';
import Privateroute from '../Privateroute/Privateroute';
import OrderList from '../pages/DashboardAdmin/OrderList/OrderList';
import AddService from '../pages/DashboardAdmin/AddService/AddService';
import ManageService from '../pages/DashboardAdmin/ManageService/ManageService';
import MakeAdmin from '../pages/DashboardAdmin/MakeAdmin/MakeAdmin';

const router = createBrowserRouter([
  {
    path: '/',
    element: <Main />,
    children: [
      {
        path: '/',
        element: <Home></Home>,
      },
      {
        path: 'login',
        element: <Login />,
      },
      {
        path: 'registar',
        element: <Registar />,
      },
      {
        path: 'services',
        element: (
          <Privateroute>
            <Services />
          </Privateroute>
        ),
      },
    ],
  },
  {
    path: 'dashboard',
    element: (
      <Privateroute>
        <Dashboardlayout></Dashboardlayout>
      </Privateroute>
    ),
    children: [
      {
        path: 'book/:id',
        element: (
          <Privateroute>
            <Book />
          </Privateroute>
        ),
      },
      {
        path: 'booking-list',
        element: (
          <Privateroute>
            <BookingList></BookingList>
          </Privateroute>
        ),
      },
      {
        path: 'review',
        element: (
          <Privateroute>
            <Review />
          </Privateroute>
        ),
      },
      // admin route
      {
        path: 'order-list',
        element: <OrderList />,
      },
      {
        path: 'add-service',
        element: <AddService />,
      },
      {
        path: 'manage-service',
        element: <ManageService />,
      },
      {
        path: 'make-admin',
        element: <MakeAdmin></MakeAdmin>,
      },
    ],
  },
]);

export default router;
