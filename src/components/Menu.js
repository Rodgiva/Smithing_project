import React from "react";
import logo from "../assets/images/logo.png";
import { NavLink } from "react-router-dom";
import { FaWhatsapp, FaInstagram, FaFacebook } from "react-icons/fa";

const Menu = () => {
  return (
    <>
      <nav className="menu">
        <NavLink to="/" className="menu-left">
          <img src={logo} className="img" />
        </NavLink>

        <div className="menu-center">
          <NavLink
            to="/"
            className={({ isActive }) =>
              isActive ? "menu-link active" : "menu-link"
            }
          >
            Présentation
          </NavLink>
          <NavLink
            to="/shop"
            className={({ isActive }) =>
              isActive ? "menu-link active" : "menu-link"
            }
          >
            Shop
          </NavLink>
        </div>

        <div className="menu-socials">
          <a
            href="https://wa.me/9720584752950"
            className="links"
            target="_blank"
            rel="noreferrer"
          >
            <FaWhatsapp className="icon" />
          </a>
          <a
            href="https://instagram.com/rodgiva_/"
            className="links"
            target="_blank"
            rel="noreferrer"
          >
            <FaInstagram className="icon" />
          </a>
          <a
            href="https://www.facebook.com/profile.php?id=100009563442232"
            className="links"
            target="_blank"
            rel="noreferrer"
          >
            <FaFacebook className="icon" />
          </a>
        </div>
      </nav>
    </>
  );
};

export default Menu;
