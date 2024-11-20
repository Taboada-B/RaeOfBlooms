
import React from "react";

function Footer() {
  return (
    <footer className="footer mt-5 py-4">
      <div className="container">
        <div className="row text-center text-md-start">
          {/* About Section */}
          <div className="text-center col-12 col-md-4 mb-2">
            <h2>Rae of Bloom</h2>
            <p>
              Party on Garth
            </p>
          </div>

          {/* Contact Section */}
          <div className="text-center col-12 col-md-4 mb-2">
            <h3>Contact Us</h3>
            <p><i className="fas fa-map-marker-alt"></i> Denver, CO + Surrounding</p>
            <p><i className="fas fa-phone"></i> (555) 555-555</p>
            <p><i className="fas fa-envelope"></i> fake@email.com</p>
          </div>

          {/* Social Section */}
          <div className="text-center col-12 col-md-4 mb-2">
            <h3>Follow Us</h3>
            <a href="https://www.instagram.com/bloomtobeyoga?utm_source=ig_web_button_share_sheet&igsh=ZDNlZDc0MzIxNw==" className="text-decoration-none me-3">
              <i className="fab fa-instagram fa-lg"></i>
            </a>
          </div>
        </div>

        {/* Footer Bottom */}
        <div className="footer-bottom text-center mt-3">
          <p>© 2024 Rae of Bloom | "catchPhrase"</p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;

