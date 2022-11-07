import React from "react";
import Logo from "./Assets/logo.svg";
import Menu from "./Assets/icon-menu.svg";
import Close from "./Assets/icon-menu-close.svg";
const Navbar = () => {
  return (
    <nav className="nav-bar">
      <img src={Logo} alt="" />
      <ul className="nav-links">
        {" "}
        <li>
          <a href="#">Home</a>
        </li>
        <li>
          <a href="#">New</a>
        </li>
        <li>
          <a href="#">Popular</a>
        </li>
        <li>
          <a href="#">Trending</a>
        </li>
        <li>
          <a href="#">Categories</a>
        </li>
      </ul>
      <img src={Menu} alt="" className="menu" />
    </nav>
  );
};

export default Navbar;
