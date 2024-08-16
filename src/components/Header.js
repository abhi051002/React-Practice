import { useEffect, useState, useContext } from "react";
import { Link } from "react-router-dom";
import useOnlineStatus from "../Constant/useOnlineStatus";
import UserContext from "../Constant/UserContext";
import { useDispatch, useSelector } from "react-redux";
import { addItem } from "../Constant/cartSlice";

const Header = () => {
  // let btnName= 'Login';
  const [btnName, setbtnName] = useState("Login");
  const onlineStatus = useOnlineStatus();
  const { loggedUser } = useContext(UserContext);

  // Subscribing to the store using useSelector hook
  const cartItems = useSelector((store) => store.cart.items);
  console.log(cartItems);
  const dispatch = useDispatch();

  return (
    <div className="header">
      <div className="logo-container">
        <Link to="/">
          <img
            src="https://png.pngtree.com/template/20200610/ourmid/pngtree-food-delivery-logo-design-image_381320.jpg"
            alt="Logo"
            className="logo"
          />
        </Link>
      </div>
      <div className="nav-items">
        <ul className="navBar">
          <li>Online Status: {onlineStatus ? "🟢" : "🔴"}</li>
          <li className="nav-list">
            <Link to="grocery">Grocery</Link>
          </li>
          <li className="nav-list">
            <Link to="/">Home</Link>
          </li>
          <li className="nav-list">
            <Link to="about">About</Link>
          </li>
          <li className="nav-list">
            <Link to="/contact">Contact Us</Link>
          </li>
          <li className="nav-list font-bold">
            <Link to="/cart">Cart ({cartItems.length} items)</Link>
          </li>
          <li className="nav-list">
            <Link to="/login">Login</Link>
          </li>
          <button
            className="login"
            onClick={() => {
              btnName === "Login" ? setbtnName("Logout") : setbtnName("Login");
            }}
          >
            {btnName}
          </button>
          <li className="nav-list">{loggedUser}</li>
        </ul>
      </div>
    </div>
  );
};

export default Header;
