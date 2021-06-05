import React from 'react';
import './Navbar.css';
import MSCLUBLOGO from '../../../assets/images/logo/Ms-Club.svg';

const Navbar = () => (
  <div className="container">
    <nav className="navbar navbar-expand-lg navbar-light bg-transparent">
      <div className="container-fluid">
        <a className="navbar-brand" href="/">
          <img src={MSCLUBLOGO} alt="MsClubLogo" className="img-logo" />
        </a>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon" />
        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav me-auto mb-lg-0" />

          <ul className="navbar-nav d-flex me-2">
            <li className="nav-item">
              <a className="nav-link navLink" href="/">
                Home
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link navLink" href="/events">
                Events
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link navLink" href="/about">
                About
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link navLink" href="/contactus">
                Contact us
              </a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  </div>
);

export default Navbar;
