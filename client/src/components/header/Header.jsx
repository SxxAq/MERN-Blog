import React from "react";
import "./Header.css";
function Header() {
  return (
    <header className="Navbar">
      <a href="" className="logo">
        MERN-Blog
      </a>
      <nav>
        <a href="">Login</a>
        <a href="">Register</a>
      </nav>
    </header>
  );
}

export default Header;
