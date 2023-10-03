import { Link } from "react-router-dom";
import shopIcon from "../../assets/icon/151-1511569_cart-notifications-free-shopping-cart-favicon-hd-png-removebg-preview.png";

const Navbar = () => {
  return (
    <nav className="navbar fixed z-10 opacity-90 text-white bg-[#15151580]">
      <div className="navbar-start w-[200px]">
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
            className="menu menu-sm dropdown-content bg-[#15151580] mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52"
          >
            <li>
              <a>Item 8</a>
            </li>
            <li>
              <a>Parent</a>
            </li>
            <li>
              <a>Item 3</a>
            </li>
          </ul>
        </div>
        <Link to="/">
          <div className="normal-case text-xl">
            <p>BISTRO BOSS</p>
            <p>Restaurant</p>
          </div>
        </Link>
      </div>
      <div className="navbar-end w-full selection:file:before: hidden lg:flex">
        <ul className="menu menu-horizontal px-1 font-bold">
          <li className="hover:bg-white transition duration-300 ease-in-out rounded-lg">
            <a>HOME</a>
          </li>
          <li className="hover:bg-white transition duration-300 ease-in-out rounded-lg">
            <a>CONTACT US</a>
          </li>
          <li className="hover:bg-white transition duration-300 ease-in-out rounded-lg">
            <a>DASHBOARD</a>
          </li>
          <li className="hover:bg-white transition duration-300 ease-in-out rounded-lg">
            <a>OUR MENU</a>
          </li>
          <li className="hover:bg-white transition duration-300 ease-in-out rounded-lg  ">
            <div className="flex">
              <a>OUR SHOP</a>
              <img src={shopIcon} alt="shop icon" className="w-6 h-6" />
            </div>
          </li>
          <li className="hover:bg-white transition duration-300 ease-in-out rounded-lg">
            <a>SIGN OUT</a>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
