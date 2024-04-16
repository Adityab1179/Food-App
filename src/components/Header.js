import { FontAwesomeIcon } from "../../node_modules/@fortawesome/react-fontawesome";
import {
  faSearch,
  faPercent,
  faHandHoldingHand,
  faUser,
  faShoppingCart,
} from "../../node_modules/@fortawesome/free-solid-svg-icons";
import Applogo from "../components/Applogo";
const Header = () => {
  return (
    <nav className="nav">
      <Applogo />
      <ul className="nav-links">
        <li>
          <FontAwesomeIcon icon={faSearch} />
          Search
        </li>
        <li>
          <FontAwesomeIcon icon={faPercent} />
          Offers
        </li>
        <li>
          <FontAwesomeIcon icon={faHandHoldingHand} />
          Help
        </li>
        <li>
          <FontAwesomeIcon icon={faUser} />
          Sign in
        </li>
        <li>
          <FontAwesomeIcon icon={faShoppingCart} />
          Cart
        </li>
      </ul>
    </nav>
  );
};
export default Header;
