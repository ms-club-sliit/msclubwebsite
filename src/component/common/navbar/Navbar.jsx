import React, { useState } from 'react';
import './Navbar.css';
import MSCLUBLOGO from '../../../assets/images/logo/Ms-Club.svg';

function Navbar() {
  const [navbar, setNavbar] = useState(false);

  const changeBackground = () => {
    if (window.scrollY > 100) {
      setNavbar(true);
    } else {
      setNavbar(false);
    }
  };

  window.addEventListener('scroll', changeBackground);

  return (
    <div>
      <nav className="navbar navbar-expand-lg navbar-light bg">
        <nav className={navbar ? 'navbar active' : 'navbar'}>
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
                  <a className="nav-link navLink" href="/contact">
                    Contact us
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </nav>
      </nav>
    </div>
  );
}

export default Navbar;
