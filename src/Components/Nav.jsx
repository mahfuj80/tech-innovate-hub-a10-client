import { useContext } from 'react';
import { Link, NavLink, useNavigate } from 'react-router-dom';
import { AuthContext } from '../Provider/AuthProvider';
import Swal from 'sweetalert2';

const Nav = () => {
  const { logOut, user } = useContext(AuthContext);
  const navigate = useNavigate();

  const handleLogOut = () => {
    logOut();
    // Logged out
    Swal.fire('Logged Out', 'Log Out Success', 'success');
    navigate('/');
  };
  const navLinks = (
    <>
      <li className="font-bold">
        <NavLink to={'/'}>Home</NavLink>
      </li>
      <li className="font-bold">
        <NavLink to={'/add-product'}>Add Product</NavLink>
      </li>
      <li className="font-bold">
        <NavLink to={'/my-cart'}>My Cart</NavLink>
      </li>
    </>
  );

  const loginAndLogOutButton = (
    <>
      <li className="font-bold">
        <NavLink to={'/login'}>Login</NavLink>
      </li>
      <li className="font-bold">
        <NavLink to={'/register'}>Sign Up</NavLink>
      </li>
    </>
  );
  return (
    <div>
      <div className="navbar bg-gray-200">
        <div className="navbar-start">
          <div className="dropdown">
            <label tabIndex={0} className="btn btn-ghost lg:hidden">
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
            </label>
            <ul
              tabIndex={0}
              className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52"
            >
              {navLinks}
            </ul>
          </div>
          <Link to={'/'} className="hover:bg-gray-200 rounded-lg">
            <img className="w-28 h-14" src="/logo.png" alt="logo" />
          </Link>
        </div>
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal px-1">{navLinks}</ul>
        </div>
        <div className="navbar-end">
          {user ? (
            <div className="dropdown dropdown-end">
              <label tabIndex={0} className="btn btn-ghost btn-circle avatar">
                <div className="w-10 rounded-full">
                  <img src={user?.photoURL} alt="Profile_Image" />
                </div>
              </label>
              <ul
                tabIndex={0}
                className="mt-3 z-[1] p-2 shadow menu menu-sm dropdown-content bg-base-100 rounded-box w-52"
              >
                <li>
                  <a className="justify-between">
                    {user?.displayName}
                    <span className="badge">New</span>
                  </a>
                </li>
                <li>
                  <a>Settings</a>
                </li>
                <li>
                  {user && <button onClick={handleLogOut}>Log Out</button>}
                </li>
              </ul>
            </div>
          ) : (
            <ul className="menu menu-horizontal px-1">
              {loginAndLogOutButton}
            </ul>
          )}
        </div>
      </div>
    </div>
  );
};

export default Nav;
