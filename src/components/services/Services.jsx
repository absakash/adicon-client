import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

import img3 from "../../assets/banner/3.jpg";
import img4 from "../../assets/banner/4.jpg";
import img5 from "../../assets/homeCarousel/1.jpg";
import img6 from "../../assets/homeCarousel/2.jpg";
import img7 from "../../assets/homeCarousel/3.jpg";
import img8 from "../../assets/homeCarousel/4.jpg";
import img9 from "../../assets/banner/9.jpeg";
import img10 from "../../assets/banner/10.jpg";
import img11 from "../../assets/banner/11.jpg";
import img12 from "../../assets/banner/12.jpg";
import img13 from "../../assets/banner/13.jpeg";
import img14 from "../../assets/banner/14.jpg";
import img15 from "../../assets/banner/15.jpg";
import img16 from "../../assets/banner/16.jpg";
import img17 from "../../assets/banner/17.jpeg";
import img18 from "../../assets/banner/18.jpeg";
import img19 from "../../assets/banner/19.jpg";
import img20 from "../../assets/banner/20.jpeg";

const Services = () => {
  const [imagesData, setImagesData] = useState([]);

  useEffect(() => {
    fetchImagesData();
  }, []);

  const fetchImagesData = () => {
    const images = [
      { id: 3, image: img3 },
      { id: 4, image: img4 },
      { id: 5, image: img5 },
      { id: 6, image: img6 },
      { id: 7, image: img7 },
      { id: 8, image: img8 },
      { id: 9, image: img9 },
      { id: 10, image: img10 },
      { id: 11, image: img11 },
      { id: 12, image: img12 },
      { id: 13, image: img13 },
      { id: 14, image: img14 },
      { id: 15, image: img15 },
      { id: 16, image: img16 },
      { id: 17, image: img17 },
      { id: 18, image: img18 },
      { id: 19, image: img19 },
      { id: 20, image: img20 },
    ];
    setImagesData(images);
  };

  return (
    <div className="ml-5 mr-5 rounded-2xl my-5">
      <div className="max-w-6xl mx-auto mt-1">
        <div className="text-center text-4xl mb-5">Our Provided Services</div>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-7">
          {imagesData.map((data) => (
            <div key={data.id} className="overflow-hidden hover:shadow-xl transition duration-300 ease-in-out transform hover:scale-105">
              <div className="bg-white rounded-xl">
                <img src={data.image} alt="Service" className="object-cover w-full h-64 md:h-80" />
                <div className="p-4">
                  <h2 className="text-lg font-semibold mb-2">Mechanical Services</h2>
                  <p className="text-gray-600">Description of the service...</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Services;
