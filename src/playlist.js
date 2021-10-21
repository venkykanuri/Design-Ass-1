import React from "react";
import Carousel from "react-bootstrap/Carousel";

import "bootstrap/dist/css/bootstrap.min.css";

function PlayList() {
  return (
    <div class="carousel" align="center">
      <h1>telugu songs</h1>
      <Carousel style={{ width: "25rem", height: "19rem" }}>
        <Carousel.Item>
          <button style={{ borderBlockStyle: "hidden" }}>
            <img className="d-block w-100" src="./images/Dalapathi.jpeg" alt="First slide" />
          </button>
        </Carousel.Item>
        <Carousel.Item>
          <button style={{ borderBlockStyle: "hidden" }}>
           
            <img className="d-block w-100" src="./images/Avatharam.jpeg" alt="Second slide" />
          </button>
        </Carousel.Item>
      </Carousel>
    </div>
  );
}

export default PlayList;
