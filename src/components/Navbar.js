import React, { useState, useEffect } from "react";
import { Link } from "gatsby";

import AnchorLink from "react-anchor-link-smooth-scroll";

import login from "../img/login.png";
import enter from "../img/enter.svg";
import invertEnter from "../img/invert-enter.svg";
import github from "../img/github-icon.svg";
import logo1 from "../img/logo1.png";
import logo2 from "../img/logo2.png";

const languages = { ua: "ua", en: "en", ru: "ru" };

// /about, /products, /blog, /contact, /contact/examples
const _renderNavLinks = (className, onClickCb) => (
  <div className={`navbar-start has-text-centered ${className}`}>
    <AnchorLink className="navbar-item" href="#__index" onClick={onClickCb}>
      Головна
    </AnchorLink>
    <AnchorLink className="navbar-item" href="#__student" onClick={onClickCb}>
      Абітурієнту
    </AnchorLink>
    <AnchorLink className="navbar-item" href="#__about" onClick={onClickCb}>
      Про кафедру
    </AnchorLink>
    <AnchorLink
      className="navbar-item"
      href="#__study-proc"
      onClick={onClickCb}
    >
      Навчальний процес
    </AnchorLink>
    <AnchorLink className="navbar-item" href="#__contacts" onClick={onClickCb}>
      Контакти
    </AnchorLink>
  </div>
);

// TODO: Create service for parse news?s
// TODO: Add link to personal cabinet ?
// TODO: add use toggle hook
const Navbar = props => {
  const [isActive, setActive] = useState(false);
  const [navBarActiveClass, setNavBarActiveClass] = useState("");
  const [selectedLanguage, setLanguage] = useState(languages.ua);

  useEffect(
    () => setNavBarActiveClass(isActive ? "is-active black" : ""),
    [isActive]
  );

  const toggleHamburger = () => setActive(p => !p);

  return (
    <nav
      className={`navbar is-transparent ${props?.isActive ? "active-nav" : ""}`}
    >
      <div className="container">
        <div
          className="navbar-brand"
          style={isActive ? { backgroundColor: "white" } : {}}
        >
          <Link to="/" className="navbar-item" title="Logo">
            <img src={logo1} width={45} height={45} alt="logo1" />
            <img src={logo2} width={45} height={45} alt="logo2" />
          </Link>
          {_renderHamburgerMenu(toggleHamburger, navBarActiveClass)}
        </div>
        <div id="navMenu" className={`navbar-menu ${navBarActiveClass}`}>
          {_renderNavLinks(
            isActive ? "black" : "",
            isActive ? toggleHamburger : () => {}
          )}
          <div className="navbar-end has-text-centered">
            {/*  <a
              className="navbar-item"
              href="https://github.com/vlad-kamrad/decm-dnu"
              target="_blank"
              rel="noopener noreferrer"
            >
              <span className="icon">
                <img src={github} alt="Github" />
              </span>
            </a> */}
            <Link
              className="navbar-item"
              to="https://github.com/vlad-kamrad/decm-dnu"
              target="_blank"
              rel="noopener noreferrer"
            >
              <span className="icon">
                <img
                  src={props?.isActive || isActive ? enter : invertEnter}
                  alt="Login"
                  width={40}
                  title="Login to internal system"
                />
              </span>
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
};

const _renderHamburgerMenu = (toggleFn, className) => (
  <div
    className={`navbar-burger burger ${className}`}
    data-target="navMenu"
    role="menuitem"
    tabIndex={0}
    onKeyPress={toggleFn}
    onClick={toggleFn}
  >
    <span />
    <span />
    <span />
  </div>
);

export default Navbar;
