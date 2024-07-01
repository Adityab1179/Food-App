import { FontAwesomeIcon } from "../../node_modules/@fortawesome/react-fontawesome";
import {
  faSearch,
  faPercent,
  faHandHoldingHand,
  faUser,
  faShoppingCart,
} from "../../node_modules/@fortawesome/free-solid-svg-icons";
import Applogo from "../components/Applogo";
import { useState } from "react";
const Header = () => {
    const [loginbtn, setloginbtn] = useState("login");
    const toggleLogin = () => {
      setloginbtn((prevLoginBtn) =>
        prevLoginBtn === "login" ? "logout" : "login"
      );
    };

  return (
    <nav className="nav">
      <Applogo />
      <ul className="nav-links">
        <li>
          <a href="#">
            <FontAwesomeIcon icon={faSearch} className="icon" />
            Search
          </a>
        </li>
        <li>
          <a href="#">
            <FontAwesomeIcon icon={faPercent} className="icon" />
            Offers
          </a>
        </li>
        <li>
          <a href="#">
            <FontAwesomeIcon icon={faHandHoldingHand} className="icon" />
            Help
          </a>
        </li>
        <li>
          <a href="#">
            <FontAwesomeIcon icon={faUser} className="icon" />
            Sign in
          </a>
        </li>
        <li>
          <a href="#">
            <FontAwesomeIcon icon={faShoppingCart} className="icon" />
            Cart
          </a>
        </li>
        <button className="loginbtn" onClick={toggleLogin}>{loginbtn}</button>
      </ul>
    </nav>
  );
};
export default Header;
