import React from "react";
import { Link } from "react-router-dom";

const Nav = () => {
  return (
    <nav>
      <h2>台北101導覽</h2>
      <ul>
        {/* <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/Login">Login</Link>
        </li>
        */}
        <li>
          <a href="/">Homepage</a>
        </li>
        <li>
          <a href="/Login">Login</a>
        </li>
      </ul>
    </nav>
  );
};

export default Nav;
