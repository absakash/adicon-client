import React from "react";
import img1 from "../../assets/avialble products/1.jpg";
import img2 from "../../assets/avialble products/2.jpg";
import img3 from "../../assets/avialble products/3.jpeg";
import img4 from "../../assets/avialble products/4.jpg";
import img5 from "../../assets/avialble products/5.jpg";
import img6 from "../../assets/avialble products/6.jpg";
import img7 from "../../assets/avialble products/7.jpg";

const Supply = () => {
  return (
    <div className="my-20 max-w-7xl mx-auto">
      <div className="py-5">
        <h1 className="text-4xl text-center first-letter:text-red-700 first-letter:text-6xl">
          Available Products
        </h1>
        <h1 className="border-4 mt-3"></h1>
      </div>

      <div className="carousel carousel-center space-x-1">
        <div className="carousel-item">
          <img
            src={img1}
            alt="Product 1"
            className="w-60 h-60 object-cover rounded-lg shadow-lg"
          />
        </div>
        <div className="carousel-item">
          <img
            src={img2}
            alt="Product 2"
            className="w-60 h-60 object-cover rounded-lg shadow-lg"
          />
        </div>
        <div className="carousel-item">
          <img
            src={img3}
            alt="Product 3"
            className="w-60 h-60 object-cover rounded-lg shadow-lg"
          />
        </div>
        <div className="carousel-item">
          <img
            src={img4}
            alt="Product 4"
            className="w-60 h-60 object-cover rounded-lg shadow-lg"
          />
        </div>
        <div className="carousel-item">
          <img
            src={img5}
            alt="Product 5"
            className="w-60 h-60 object-cover rounded-lg shadow-lg"
          />
        </div>
        <div className="carousel-item">
          <img
            src={img6}
            alt="Product 6"
            className="w-60 h-60 object-cover rounded-lg shadow-lg"
          />
        </div>
        <div className="carousel-item">
          <img
            src={img7}
            alt="Product 7"
            className="w-60 h-60 object-cover rounded-lg shadow-lg"
          />
        </div>
      </div>

      <div className="flex justify-center py-3">
        <button className="btn btn-outline btn-primary">Visit More</button>
      </div>
      <h1 className="border-4 mt-2"></h1>
    </div>
  );
};

export default Supply;
