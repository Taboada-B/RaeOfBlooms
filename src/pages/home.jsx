import React from "react";

function Home() {
  return (
    <div className="row justify-content-center position-relative ">
      <img className="opacity-75   mx-auto   " src="./aspen.jpeg" alt="Aspen trees" />{/* pt-4 col-8 rounded-pill */}
      <div className="overlay-text position-absolute top-50 start-50 translate-middle text-white text-center">
        <h1>Rae Of Bloom</h1>
        <p>Dance, tequila, repeat</p>
      </div>
    </div>
  );
}

export default Home;