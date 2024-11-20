import React, { useState } from "react";

function Gallery() {
  const [selectedImage, setSelectedImage] = useState(null);

  const images = [
 

    { src: "./bouquet.jpg", alt: "" },
    { src: "./pinkRose.jpg", alt: "" },
    { src: "./rings.jpg", alt: "" },
    { src: "./bouquet2.jpg", alt: "" },
    { src: "./rose.jpg", alt: "" },
    { src: "./signs.jpg", alt: "" },
    { src: "sunflower.jpg", alt: "" },
    { src: "./roses.jpg", alt: "" },
    { src: "", alt: "" },
    { src: "", alt: "" },
    // { src: "", alt: "" },

    // Add more images as needed
  ];

  const handleImageClick = (image) => {
    setSelectedImage(image);
    console.log('is this working? ')
  };

  return (
    <div className="container mt-4 gallery">
      <h2 className="text-center mb-4">Gallery</h2>
      <div className="row g-4">
        {images.map((image, index) => (
          <div key={index} className="col-6 col-md-4 col-lg-3">
            <div className="position-relative overflow-hidden">
              <img
                src={image.src}
                alt={image.alt}
                className="img-fluid rounded shadow"
                onClick={() => handleImageClick(image)}
                data-bs-toggle="modal"
                data-bs-target="#imageModal"
                style={{ cursor: "pointer" }}
              />
              <div className="overlay position-absolute top-0 start-0 w-100 h-100 d-flex align-items-center justify-content-center text-white fw-bold">
                {image.alt}
              </div>
            </div>
          </div>
        ))}
      </div>
      {/* Modal */}
      <div
        className="modal fade"
        id="imageModal"
        tabIndex="-1"
        aria-labelledby="imageModalLabel"
        aria-hidden="true"
      >
        <div className="modal-dialog modal-dialog-centered">
          <div className="modal-content">
            <div className="modal-header">
              <button
                type="button"
                className="btn-close"
                data-bs-dismiss="modal"
                aria-label="Close"
              ></button>
            </div>
            <div className="modal-body">
              {selectedImage && (
                <img
                  src={selectedImage.src}
                  alt={selectedImage.alt}
                  className="img-fluid"
                />
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Gallery;
