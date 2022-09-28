// Header.jsx
import React from "react";
import { Link } from "react-router-dom";
import iconMenu from "../../public/assets/icons/icon_menu.svg";
import iconShoppingCart from "../../public/assets/icons/icon_shopping_cart.svg";
import logo from "../../public/assets/logos/logo_yard_sale.svg";
import "../styles/header.scss";

const Header = () => {
  return (
    <nav>
      <img src={iconMenu} alt="menu" className="menu" />
      <div className="navbar-left">
        <img src={logo} alt="logo" className="logo" />
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/">Ingresos</Link>
          </li>
          <li>
            <Link to="/">Egresos</Link>
          </li>
          <li>
            <a href="/">Cuentas</a>
          </li>
          <li>
            <a href="/">Conceptos</a>
          </li>
          <li>
            <a href="/">Usuarios</a>
          </li>
        </ul>
      </div>
      <div className="navbar-right">
        <ul>
          <li className="navbar-email">platzi@example.com</li>
          <li className="navbar-shopping-cart">
            <img src={iconShoppingCart} alt="shopping cart" />
            <div>2</div>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Header;
