import React from "react";
import img1 from "../../assets/expertize/deb.jpeg";
import { Link } from "react-router-dom";

const Dev = () => {
  return (
    <div className="ml-5 mr-5 rounded-2xl  mt-10 transition-transform duration-500 ease-in-out transform hover:scale-105 ">
      <div className="">
        <div className="hero shadow-2xl">
          <div className="hero-content flex-col sm:flex-row md:flex gap-36">
            <img
              src={img1}
              className="sm:max-w-32 sm:max-h-40 rounded-2xl shadow-2xl"
            />
            <div className="p-2">
              <h1 className="md:text-4xl text-3xl font-bold">Deb Kumar Biswas </h1>
              <h1 className="border-2 w-[350px] text-center border-lime-400"></h1>

              <p className="py-6">
              expertise lies in the design, analysis, and optimization of advanced mechanical systems. At Rolls-Royce, I contribute to the development of cutting-edge technologies, ensuring precision and efficiency in our engineering processes
              </p>
              <Link to="/details/deb" className="btn btn-outline btn-primary">
                more info
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dev;
