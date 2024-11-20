
import React from "react";

const servicesData = [
  {
    title: "Moral Support",
    description: "I am there for you for your party",
    image: "",
  },
  {
    title: "Flowers",
    description: "Love the flowers, they are pretty",
    image: "",
  },
  {
    title: "Signs",
    description: "Everyone loves a sign to take a picture in front of",
    image: "",
  },
  // Add more services as needed
];

const Services = () => {
  return (
    <section className="services py-5">
      <div className="container">
        <h2 className="text-center display-4 mb-5">Our Services</h2>
        <div className="row">
          {servicesData.map((service, index) => (
            <div key={index} className="col-md-6 col-lg-4 mb-4">
              <div className="card shadow-sm h-100">
                <img src={service.image} alt={service.title} className="card-img-top" />
                <div className="card-body">
                  <h5 className="card-title">{service.title}</h5>
                  <p className="card-text">{service.description}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
