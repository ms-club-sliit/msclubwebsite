import React from 'react';
import './Footer.css';
import Logo from '../../../assets/images/logo/Ms-Club.png';

const footer = () => (
  <footer className="footer-section">
    <div className="container">
      <div className="footer-content pt-5 pb-5">
        <div className="row">
          <div className="col-xl-4 col-lg-4 mb-50">
            <div className="footer-widget">
              <div className="footer-logo">
                <a href="index.html">
                  <img src={Logo} className="img-fluid" width="150px" alt="logo" />
                </a>
              </div>
              <div className="footer-text">
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit. Deleniti magni maiores molestias suscipit
                  tempore? Asperiores aut beatae doloremque, enim fugit, illum itaque mollitia nobis optio quo ratione,
                  repudiandae voluptas voluptates.
                </p>
              </div>
            </div>
          </div>
          <div className="col-xl-4 col-lg-4 col-md-6 mb-30">
            <div className="footer-widget">
              <div className="footer-widget-heading">
                <h3>Useful Links</h3>
              </div>
              <ul>
                <li>
                  <a href="https://ms-club-website.web.app/">Home</a>
                </li>
                <li>
                  <a href="https://ms-club-website.web.app/">Contact us</a>
                </li>
                <li>
                  <a href="https://ms-club-website.web.app/">Blog</a>
                </li>
                <li>
                  <a href="https://ms-club-website.web.app/">Events</a>
                </li>
                <li>
                  <a href="https://ms-club-website.web.app/">Code of Contact</a>
                </li>
                <li>
                  <a href="https://ms-club-website.web.app/">Brand Assets</a>
                </li>
              </ul>
            </div>
          </div>
          <div className="col-xl-4 col-lg-4 col-md-6 mb-50">
            <div className="footer-widget">
              <div className="footer-widget-heading">
                <h3>Subscribe</h3>
              </div>
              <div className="footer-text mb-25">
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ab aliquid asperiores dolores harum
                  laboriosam, maiores nobis quae repudiandae tempora voluptatem? Autem esse facilis neque nihil nobis
                  perspiciatis soluta sunt vero!
                </p>
              </div>
              <div className="subscribe-form">
                <form action="#">
                  <input type="text" placeholder="Email Address" />
                  <button type="submit">
                    <i className="fa fa-envelope" />
                  </button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div className="copyright-area">
      <div className="container">
        <div className="row">
          <div className="col-xl-6 col-lg-6 text-center text-lg-left">
            <div className="copyright-text">
              <p>
                Copyright &copy; 2018, All Right Reserved{' '}
                <a href="https://ms-club-website.web.app/">MS Club of SLIIT</a>
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </footer>
);

export default footer;
