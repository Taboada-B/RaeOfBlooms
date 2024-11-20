import React from "react";


const AboutUs = () => {
  return (
    <section className="about-us py-5">
      <div className="container">
        {/* Intro Section */}
        <div className="row mb-5 text-center">
          <div className="col-12">
            <h1 className="display-4 mb-3">About Us</h1>
            <p className="lead ">
              I'm a momma trying to make your events reach their potential. 
            </p>
          </div>
        </div>

        {/* Founders Section */}
        <div className="row align-items-center mb-5">
          <div className="col-md-6 text-center">
            <img src="./reba.jpg" alt="Founder 1" className="img-fluid rounded-circle mb-3" style={{ width: "400px" }} />
            <h3 className="darkBlueFont">Alyssa</h3>
            <p className=" greenFont">Founder</p>
            <p>
              Here is a short description of myself, it is very interesting. 
            </p>
          </div>
        </div>

        {/* Services Section */}
        <div className="row text-center mb-5">
          <div className="col-12">
            <h2 className="mb-4 darkBlueFont">Our Services</h2>
          </div>
          <div className="col-md-4">
            <h4 className="greenFont">Service 1</h4>
            <p>Service 1 descritpion </p>
          </div>
          <div className="col-md-4">
            <h4 className="greenFont">Service 2</h4>
            <p>Service description </p>
          </div>
          <div className="col-md-4">
            <h4 className="greenFont">Service 3</h4>
            <p>Service 3 description and so on</p>
          </div>
        </div>

        {/* Testimonials Section */}
        <div className="row text-center mb-5">
          <div className="col-12">
            <h2 className="mb-4 darkBlueFont">What people have said</h2>
          </div>
          <div className="col-md-4">
            <blockquote className="blockquote">
              <p>"great time"</p>
              <footer className="blockquote-footer">A person</footer>
            </blockquote>
          </div>
          <div className="col-md-4">
            <blockquote className="blockquote">
              <p>"Let the good times role"</p>
              <footer className="blockquote-footer">Rick Astley</footer>
            </blockquote>
          </div>
          <div className="col-md-4">
            <blockquote className="blockquote">
              <p>"loves them!"</p>
              <footer className="blockquote-footer">Michael Jordan</footer>
            </blockquote>
          </div>
        </div>

        {/* Contact Information */}
        <div className="row text-center">
          <div className="col-12">
            <h2 className="mb-3 darkBlueFont">Get in Touch</h2>
            <p>
              Ready to join us on this journey? Contact us today.
            </p>
            <a href="mailto:fake@email.com" className="btn btn-primary btn-lg">Email Us</a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutUs;