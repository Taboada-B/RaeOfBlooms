import React from "react";
import { NavLink } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";

const Banner = () => {
  return (
    <header className="sticky-top topNav shadow py-2">
      <div className="">
        <div className="row align-items-center">
          {/* Logo on the left */}
          <div className="col-12 col-lg-3 text-center text-lg-start mb-3 mb-lg-0">
            <img id="logo" src="./logoTan.png" alt="Bloom Logo" className="img-fluid" />
          </div>

          {/* Title and Navigation in the center */}
          <div className="col-12 col-lg-6 text-center">
            <h1 className="bloomTitle h3 mb-2">Rae Of Bloom</h1>
            {/* <p className="catchPhrase mb-3">
              "Find your balance, breathe, and bloom."
            </p> */}
            <nav>
              <ul className="nav justify-content-center">
                <li className="nav-item">
                  <NavLink to="/" className="nav-link">Home</NavLink>
                </li>
                <li className="nav-item">
                  <NavLink to="/services" className="nav-link">Services</NavLink>
                </li>
                <li className="nav-item">
                  <NavLink to="/about" className="nav-link">About</NavLink>
                </li>
                <li className="nav-item">
                  <NavLink to="/gallery" className="nav-link">Gallery</NavLink>
                </li>
                <li className="nav-item">
                  <NavLink to="/contact" className="nav-link">Contact</NavLink>
                </li>
              </ul>
            </nav>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Banner;
