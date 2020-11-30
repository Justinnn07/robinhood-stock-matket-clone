import React from "react";
import "./Header.css";
function Header() {
  return (
    <div className="header-wrap">
      <div className="header-logo">
        {/* Logo */}
        <img
          src="https://raw.githubusercontent.com/CleverProgrammers/robinhood-clone/69f8244e276928c04fffbd3324ee21c6c82d28e6/src/robinhood.svg"
          alt=""
          width={25}
        />
      </div>
      <div className="header-search">
        <div className="header-searchContainer">
          {/* Search */}
          <input type="text" placeholder="Search" />
        </div>
      </div>
      <div className="header-menu">
        {/* menuItem */}
        <a href="">Free Stocks</a>
        <a href="">Portfolio</a>
        <a href="">Cash</a>
        <a href="">Messages</a>
        <a href="">Account</a>
      </div>
    </div>
  );
}

export default Header;
