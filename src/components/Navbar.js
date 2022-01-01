import React, { useState, useEffect } from "react";
import { Link } from "gatsby";

import AnchorLink from "react-anchor-link-smooth-scroll";

import github from "../img/github-icon.svg";
import logo1 from "../img/logo1.png";
import logo2 from "../img/logo2.png";

const languages = { ua: "ua", en: "en", ru: "ru" };

// /about, /products, /blog, /contact, /contact/examples
const _renderNavLinks = () => (
  <div className="navbar-start has-text-centered">
    <Link className="navbar-item">
      <AnchorLink href="#__index">Головна</AnchorLink>
    </Link>
    <Link className="navbar-item">
      <AnchorLink href="#__student">Абітурієнту</AnchorLink>
    </Link>
    <Link className="navbar-item">
      <AnchorLink href="#__about">Про кафедру</AnchorLink>
    </Link>
    <Link className="navbar-item">
      <AnchorLink href="#__study-proc">Навчальний процес</AnchorLink>
    </Link>
    <Link className="navbar-item">
      <AnchorLink href="#__contacts">Контакты</AnchorLink>
    </Link>
  </div>
);

// TODO: Create service for parse news?s
// TODO: Add link to personal cabinet ?
// TODO: add use toggle hook
const Navbar = props => {
  const [isActive, setActive] = useState(false);
  const [navBarActiveClass, setNavBarActiveClass] = useState("");
  const [selectedLanguage, setLanguage] = useState(languages.ru);

  useEffect(
    () => setNavBarActiveClass(isActive ? "is-active" : ""),
    [isActive]
  );

  const toggleHamburger = () => setActive(p => !p);

  return (
    <nav
      className={`navbar is-transparent ${props?.isActive ? "active-nav" : ""}`}
    >
      <div className="container">
        <div className="navbar-brand">
          <Link to="/" className="navbar-item" title="Logo">
            <img src={logo1} />
            <img src={logo2} />
          </Link>
          {_renderHamburgerMenu(toggleHamburger, navBarActiveClass)}
        </div>
        <div id="navMenu" className={`navbar-menu ${navBarActiveClass}`}>
          {_renderNavLinks()}
          <div className="navbar-end has-text-centered">
            <a
              className="navbar-item"
              href="https://github.com/vlad-kamrad/decm-dnu"
              target="_blank"
              rel="noopener noreferrer"
            >
              <span className="icon">
                <img src={github} alt="Github" />
              </span>
            </a>
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
