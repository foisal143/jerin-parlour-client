import { useContext } from 'react';
import logo from '../../../assets/logo.png';
import { Link, NavLink } from 'react-router-dom';
import { AuthContext } from '../../../AuthProvaider/AuthProvaider';
import useAdmin from '../../../hooks/useAdmin';
const Navbar = () => {
  const { user, logout } = useContext(AuthContext);
  const [isAdmin] = useAdmin();
  const navlink = (
    <>
      <li>
        <NavLink to="/">Home</NavLink>
      </li>
      {isAdmin ? (
        <li>
          <NavLink to="/dashboard/order-list">Dashboard</NavLink>
        </li>
      ) : (
        <li>
          <NavLink to="/my-portfolio">My Portfoio</NavLink>
        </li>
      )}
      <li>
        <NavLink to="/services">Services</NavLink>
      </li>
      <li>
        <NavLink to="/contact">Contact Us</NavLink>
      </li>
    </>
  );

  const handlerLogout = () => {
    logout().then();
  };
  return (
    <div className="navbar px-5 pt-8 lg:px-12 bg-[#FFF8F5]">
      <div className="navbar-start">
        <div className="dropdown">
          <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h8m-8 6h16"
              />
            </svg>
          </div>
          <ul
            tabIndex={0}
            className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52"
          >
            {navlink}
          </ul>
        </div>
        <Link to="/" className=" text-xl">
          <img className="w-[127px] h-12" src={logo} alt="" />
        </Link>
      </div>
      <div className="navbar-end hidden w-full lg:flex">
        <ul className="flex   items-center gap-8 me-5 text-[#474747] px-1">
          {navlink}{' '}
        </ul>
        {user ? (
          <>
            <img
              className="w-8 me-2 h-8 rounded-full"
              src={user?.photoURL}
              alt=""
            />
            <button onClick={handlerLogout} className="btn-coustom">
              Logout
            </button>
          </>
        ) : (
          <li className="hidden lg:block">
            <Link to="/login">
              {' '}
              <button className="btn-coustom">Login</button>
            </Link>
          </li>
        )}
      </div>
      <div className="navbar-end lg:hidden">
        {user ? (
          <>
            <img
              className="w-8 me-2 h-8 rounded-full"
              src={user?.photoURL}
              alt=""
            />
            <button onClick={handlerLogout} className="btn-coustom">
              Logout
            </button>
          </>
        ) : (
          <li className="hidden lg:block">
            <Link to="/login">
              {' '}
              <button className="btn-coustom">Login</button>
            </Link>
          </li>
        )}
      </div>
    </div>
  );
};

export default Navbar;
