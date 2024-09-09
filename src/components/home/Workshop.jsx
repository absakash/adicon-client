import React from "react";

import img1 from "../../assets/banner/1.jpg";
import { Link } from "react-router-dom";

const Workshop = () => {
  return (
    <div className="p-10 ml-5 mr-5 rounded-2xl py-10 mt-10 transition-transform duration-500 ease-in-out transform hover:scale-105 ">
      <div className="">
        <div className="hero">
          <div className="hero-content flex-col lg:flex-row shadow-2xl">
            <img
              src={img1}
              className="md:max-w-lg rounded-2xl shadow-2xl"
            />
            <div className="p-5">
              <h1 className="text-5xl font-bold">Our Services </h1>
            <h1 className="border-2 w-64 border-cyan-600 text-center"></h1>

              <p className="py-6">
                Adicon Power & Engineering provides a reliable & proficient services , Feel free to vist our workshop 
              </p>
              <Link to='/services' className="btn btn-outline btn-primary">Visit Now</Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Workshop;
