import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import useOnlineStatus from "../Constant/useOnlineStatus";

const Header = () => {
  // let btnName= 'Login';
  const [btnName, setbtnName] = useState("Login");
  const onlineStatus = useOnlineStatus();

  return (
    <div className="header">
      <div className="logo-container">
        <Link to="/">
          <img
            src="https://png.pngtree.com/template/20200610/ourmid/pngtree-food-delivery-logo-design-image_381320.jpg"
            alt="Logo" className="logo"
          />
        </Link>
      </div>
      <div className="nav-items">
        <ul className="navBar">
          <li>Online Status: {onlineStatus ? '🟢' : '🔴'}</li>
          <li className ="nav-list">
            <Link to="grocery">Grocery</Link>
          </li>
          <li className ="nav-list">
            <Link to="/">Home</Link>
          </li>
          <li className ="nav-list">
            <Link to="about">About</Link>
          </li>
          <li className ="nav-list">
            <Link to="/contact">Contact Us</Link>
          </li>
          <li className ="nav-list">Cart</li>
          <button
            className="login"
            onClick={() => {
              btnName === "Login" ? setbtnName("Logout") : setbtnName("Login");
            }}
          >
            {btnName}
          </button>
        </ul>
      </div>
    </div>
  );
};

export default Header;
