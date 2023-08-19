import { Link } from "react-router-dom";
import { LOGO_URL } from "../utils/constant";

const Header = () => {
  const btnName = "Login";
  return (
    <div className="header">
      <div className="logo-container">
        <img className="logo" src={LOGO_URL}></img>
      </div>
      <div className="nav-items">
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/about">About us</Link>
          </li>
          <li>
            <Link to="/contact">Contact us</Link>
          </li>
          <li>Cart</li>
          <button className="login">{btnName}</button>
        </ul>
      </div>
    </div>
  );
};

export default Header;
