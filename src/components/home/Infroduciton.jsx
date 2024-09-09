import React from "react";
import adicon from "../../assets/adicon.png";
const Infroduciton = () => {
  return (
    <div className="ml-10 mr-10 transition-transform duration-500 ease-in-out transform hover:scale-110">
      <div className="">
        <div className="flex justify-center mt-10">
          <div className="mt-10">
            <p className="font-serif text-center text-3xl">
              Your satisfaction is our goal
            </p>
            <h1 className="border-2 w-64 border-cyan-600 text-center"></h1>
          </div>

          <img className="w-32 h-32" src={adicon} alt="" />
        </div>
      </div>
      <div className="max-w-5xl mx-auto text-justify text-xl">
        <p>
          <span className="text-4xl font-serif text-red-400">A</span>dicon Power
          and Engineering Solution, we are your trusted partners in delivering
          exceptional mechanical services with a specialized focus on generator
          solutions for power plants and lift generators. Our expertise extends
          to providing comprehensive services for all types of diesel engines,
          ensuring reliable and efficient power supply for a diverse range of
          applications. We pride ourselves on our commitment to excellence,
          offering top-notch maintenance, repair, and installation services that
          minimize downtime and optimize performance. With a team of highly
          skilled professionals, we leverage the latest technology and
          innovative approaches to address your unique power and engineering
          needs. Our dedication to quality and customer satisfaction is
          unwavering, as we strive to build long-term relationships based on
          trust, reliability, and exceptional service. At Adicon, we understand
          the critical importance of dependable power solutions. Whether you
          require routine maintenance, emergency repairs, or custom
          installations, we are here to ensure your operations run smoothly and
          efficiently. Thank you for choosing Adicon Power and Engineering
          Solution. We look forward to exceeding your expectations and powering
          your success.
        </p>
      </div>
    </div>
  );
};

export default Infroduciton;
