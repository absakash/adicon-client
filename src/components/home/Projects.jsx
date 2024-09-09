import React from 'react';
import im1 from '../../assets/homeCarousel/1.jpg'
import { Link } from 'react-router-dom';
const Projects = () => {
    return (
        <div className="p-10 ml-5 mr-5 rounded-2xl py-10 mt-10 transition-transform duration-500 ease-in-out transform hover:scale-105">
        <div className="">
          <div className="hero ">
            <div className="hero-content flex-col lg:flex-row-reverse shadow-2xl ">
              <img
                src={im1}
                className="md:max-w-lg rounded-2xl "
              />
              <div className="p-5">
                <h1 className="text-5xl font-bold">The project that we have completed </h1>
                <p className="py-6">
                  Vist Our completed projects that may be help you to reach our services , We are highly concern about our services 
                </p>
                <Link to='/projectsdetails' className="btn  btn-outline btn-primary">Visit Now</Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
};

export default Projects;