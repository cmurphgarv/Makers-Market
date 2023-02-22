import React from "react";
import { Link } from "react-router-dom";
import Auth from "../utils/auth";
import { getSavedProductList } from "../utils/localStorage";

let loginButton;
let cartButton;
let historyButton;

const handleLogOut = () => {
  Auth.logout();
};

if (Auth.loggedIn()) {
  loginButton = (
    <Link to={`/`}>
      <h5 onClick={() => handleLogOut()}>Logout</h5>
    </Link>
  );
} else {
  loginButton = (
    <Link to={`/login`}>
      <h5>Login/Sign Up</h5>
    </Link>
  );
}
if (Auth.loggedIn()) {
  cartButton = (
    <Link to={`/cart`}>
      <h5>View Cart</h5>
    </Link>
  );
} else {
  cartButton = "";
}
if (Auth.loggedIn()) {
  historyButton = (
    <Link to={`/history`}>
      <h5>View Order Histroy</h5>
    </Link>
  );
} else {
  historyButton = "";
}

let cartView;
// console.log(getSavedProductList());

    if(getSavedProductList().length > 0) {
      cartView = `View Cart(${getSavedProductList().length})`
    } else {
      cartView = "View Cart"
    }

const Nav = () => {
  return (
    <div class="navcard">
      <div class="nav">
        <div class="navlogo">
          <Link to={`/`}>
            {" "}
            <h1>🧶 MIDWEST MAKER'S MARKET</h1>{" "}
          </Link>
        </div>
        <div class="navlogin">
          <ul>
            <li>{historyButton}</li>
            <li>{cartButton}</li>
            <li>{loginButton}</li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Nav;
