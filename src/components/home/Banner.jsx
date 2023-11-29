import React from "react";

import img1 from "../../assets/homeCarousel/1.jpg";
import img2 from "../../assets/homeCarousel/2.jpg";
import img3 from "../../assets/homeCarousel/3.jpg";
import img4 from "../../assets/homeCarousel/4.jpg";

const Banner = () => {
  return (
    <div className="ml-5 mr-5">
      <div className="max-w-6xl mx-auto mt-1 shadow-xl rounded-3xl">
        <div className="carousel w-full  ">
          <div
            id="slide1"
            className="carousel-item relative w-full shadow-2xl p-1"
          >
            <img src={img1} className="w-full  opacity-60 rounded-3xl shadow-2xl" />
            <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
              <a href="#slide4" className="btn btn-circle">
                ❮
              </a>
              <a href="#slide2" className="btn btn-circle">
                ❯
              </a>
            </div>
            <div className="absolute   right-5 left-24 top-1/2 font-seri">
              <p className="text-xl text-black">Welcome to,</p>
              <p className="text-2xl md:text-5xl text-black font-bold">
                Adicon Power & Engineering Solution
              </p>
            </div>
          </div>

          <div id="slide2" className="carousel-item relative w-full">
            <img src={img2} className="w-full" />
            <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
              <a href="#slide1" className="btn btn-circle">
                ❮
              </a>
              <a href="#slide3" className="btn btn-circle">
                ❯
              </a>
            </div>
          </div>
          <div id="slide3" className="carousel-item relative w-full">
            <img src={img3} className="w-full" />
            <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
              <a href="#slide2" className="btn btn-circle">
                ❮
              </a>
              <a href="#slide4" className="btn btn-circle">
                ❯
              </a>
            </div>
          </div>
          <div id="slide4" className="carousel-item relative w-full">
            <img src={img4} className="w-full" />
            <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
              <a href="#slide3" className="btn btn-circle">
                ❮
              </a>
              <a href="#slide1" className="btn btn-circle">
                ❯
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Banner;
