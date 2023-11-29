import React from "react";

import img1 from "../../assets/banner/1.jpg";
import { Link } from "react-router-dom";

const Workshop = () => {
  return (
    <div className="ml-5 mr-5 rounded-2xl py-10 mt-10">
      <div className="max-w-6xl mx-auto mt-1">
        <div className="hero  bg-base-200">
          <div className="hero-content flex-col lg:flex-row">
            <img
              src={img1}
              className="md:max-w-lg rounded-2xl "
            />
            <div className="p-5">
              <h1 className="text-5xl font-bold">Our Services </h1>
              <p className="py-6">
                Provident cupiditate voluptatem et in. Quaerat fugiat ut
                assumenda excepturi exercitationem quasi. In deleniti eaque aut
                repudiandae et a id nisi.
              </p>
              <Link to='/services' className="btn  bg-gradient-to-r from-red-300 via-pink-500 to-green-200 ">Visit Now</Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Workshop;
