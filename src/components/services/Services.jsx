import React from "react";
import img1 from "../../assets/banner/1.jpg";
import img2 from "../../assets/banner/2.jpg";
import img3 from "../../assets/banner/3.jpg";
import img4 from "../../assets/banner/4.jpg";
import img5 from "../../assets/homeCarousel/1.jpg"
import img6 from "../../assets/homeCarousel/2.jpg"
import img7 from "../../assets/homeCarousel/3.jpg"
import img8 from "../../assets/homeCarousel/4.jpg"
import { Link } from "react-router-dom";
const Services = () => {
  const imagesData = [
    {
      id: 1,
      image: img1,
    },
    {
      id: 2,
      image: img2,
    },
    {
      id: 3,
      image: img3,
    },
    {
      id: 4,
      image: img4,
    },
    {
      id: 5,
      image: img5,
    },
    {
      id: 6,
      image: img6,
    },
    {
      id: 7,
      image: img7,
    },
    {
      id: 8,
      image: img8,
    },
  ];


  const handleAboutmore=data=>{
    console.log("onclik data ",data)
  }
  return (
    <div className="ml-5 mr-5 rounded-2xl my-5">
      <div className="max-w-6xl mx-auto mt-1">
        <div className="text-center text-4xl mb-5">Our Provided Services</div>

        <div className="grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3  gap-7">
          {imagesData.map((data) => (
            <div  data={data} key={data.id} className="hover:scale-105">
              <div className="card card-compact w-96 bg-base-100 shadow-xl">
                <figure>
                  <img src={data.image} alt="Shoes" />
                </figure>
                <div className="card-body">
                  <h2 className="card-title">Mechanical !</h2>
                  <p>About the services </p>
                  <div className="card-actions justify-end">
                    <Link to={`/servicedetails/${data.id}`}  name={"akash"}   onClick={()=>handleAboutmore(data)} className="btn bg-gradient-to-r from-red-300 via-pink-500 to-green-200">
                      About More
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* <div className="card card-compact w-96 bg-base-100 shadow-xl">
            <figure>
              <img
                src={img1}
                alt="Shoes"
              />
            </figure>
            <div className="card-body">
              <h2 className="card-title">Mechanical !</h2>
              <p>About the services </p>
              <div className="card-actions justify-end">
                <button className="btn bg-gradient-to-r from-red-300 via-pink-500 to-green-200">Buy Now</button>
              </div>
            </div>
          </div> */}
      </div>
    </div>
  );
};

export default Services;
