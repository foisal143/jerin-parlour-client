import { Link, NavLink, Outlet } from 'react-router-dom';
import logo from '../assets/logo.png';
import { FaComment, FaLock, FaShoppingCart, FaUser } from 'react-icons/fa';
import useAdmin from '../hooks/useAdmin';
import { MdManageHistory } from 'react-icons/md';

const Dashboardlayout = () => {
  const [isAdmin] = useAdmin();

  return (
    <div className="drawer lg:drawer-open">
      <input id="my-drawer-2" type="checkbox" className="drawer-toggle" />
      <div className="drawer-content ">
        <label
          htmlFor="my-drawer-2"
          className="btn-coustom drawer-button lg:hidden"
        >
          Open Menu
        </label>
        <div className="p-5">
          <Outlet />
        </div>
      </div>
      <div className="drawer-side">
        <label
          htmlFor="my-drawer-2"
          aria-label="close sidebar"
          className="drawer-overlay"
        ></label>
        <ul className=" px-10 flex font-[Poppins]  font-semibold flex-col gap-2  p-4 w-72 min-h-full ">
          {isAdmin ? (
            <>
              {' '}
              <li className="mb-8">
                <Link to="/" className=" text-xl">
                  <img className="w-[127px] h-12" src={logo} alt="" />
                </Link>
              </li>
              <li className="dashboard">
                <NavLink className="flex gap-1 items-center" to="order-list">
                  <FaShoppingCart /> Order List
                </NavLink>
              </li>
              <li className="dashboard">
                <NavLink className="flex gap-1 items-center" to="add-service">
                  + Add Service
                </NavLink>
              </li>
              <li className="dashboard">
                <NavLink className="flex gap-1 items-center" to="make-admin">
                  <FaUser /> Make Admin
                </NavLink>
              </li>
              <li className="dashboard">
                <NavLink
                  className="flex gap-1 items-center"
                  to="manage-service"
                >
                  <MdManageHistory /> Manage Service
                </NavLink>
              </li>
            </>
          ) : (
            <>
              {' '}
              <li className="mb-8">
                <Link to="/" className=" text-xl">
                  <img className="w-[127px] h-12" src={logo} alt="" />
                </Link>
              </li>
              <li className="dashboard">
                <NavLink
                  className="flex gap-1 items-center"
                  to={`book/${null}`}
                >
                  <FaShoppingCart /> Book
                </NavLink>
              </li>
              <li className="dashboard">
                <NavLink className="flex gap-1 items-center" to="booking-list">
                  <FaLock /> Booking List
                </NavLink>
              </li>
              <li className="dashboard">
                <NavLink className="flex gap-1 items-center" to="review">
                  <FaComment /> Reviews
                </NavLink>
              </li>
            </>
          )}
        </ul>
      </div>
    </div>
  );
};

export default Dashboardlayout;
