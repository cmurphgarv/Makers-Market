import React from "react";
import { Link } from "react-router-dom";

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
            <li>
              <Link to={`/login`}>
                <h5>Login/Signup </h5>
              </Link>
            </li>
            <li>
              <Link to={`/cart`}>
                <h5>View Cart</h5>
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Nav;
