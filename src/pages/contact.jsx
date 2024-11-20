import React from "react";

function Contact() {
  return (
    <section className="contactPage container py-5">
      <div className="row justify-content-center">
        <div className="col-md-8">
          {/* <h1 className="text-center mb-5 display-4">Contact Me</h1> */}

          <div className="contactBlock card p-4 shadow-lg accent">
            <div className="card-body contact-info">
              <h3 className="text-center mb-4">Let's Get in Touch!</h3>
              <p className="lead text-center mb-4">
                I’d love to hear from you! Feel free to reach out through any of the methods below:
              </p>

              <ul className="list-unstyled text-center contacts">
                <li className="mb-4">
                  <i className="fas fa-envelope fa-lg me-2 text-primary"></i>
                  <strong>Email: </strong>
                  <a href="" className="text-decoration-none">Rae@gmail.com</a>
                </li>
                <li className="mb-4">
                  <i className="fas fa-phone fa-lg me-2 text-primary"></i>
                  <strong>Phone: </strong>
                  <a href="tel:+15555555555" className="text-decoration-none">(555) 555-555</a>
                </li>
                <li className="mb-4">
                  <i className="fab fa-instagram fa-lg me-2 text-primary"></i>
                  <strong>Instagram: </strong>
                  <a href="https://www.instagram.com/raeofblooms/" target="_blank" rel="noopener noreferrer" className="text-decoration-none">
                    @RaeOfBloom
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Contact;