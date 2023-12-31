import { Link, NavLink } from "react-router-dom";
import logo from "../../assets/logo_big.png";
const Navbar = () => {
  const navLinks = (
    <>
      <li>
        <NavLink>Home</NavLink>
      </li>
      <li>
        <NavLink>Shop</NavLink>
      </li>
    </>
  );
  return (
    <div>
      <div className="max-w-screen-xl navbar fixed z-10 bg-opacity-40 bg-black text-white">
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
              {navLinks}
            </ul>
          </div>
          <div className="flex justify-center items-center">
            <img className="w-10 lg:w-16 mr-0 lg:mr-2" src={logo} alt="" />
            <a className="text-lg lg:text-xl font-bold">Urban Vogue</a>
          </div>
        </div>
        <div className="navbar-center hidden lg:flex">
          <ul className="menu-horizontal space-x-4">{navLinks}</ul>
        </div>
        <div className="navbar-end">
          <Link className="btn bg-red-700 text-white">Sign up</Link>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
