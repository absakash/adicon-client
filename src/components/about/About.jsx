import React from 'react';
import adicon from "../../assets/adicon icon .png"

const About = () => {
  return (
    <div className="mx-5 mt-10 text-justify">
      <div className="flex justify-center items-center">
        <img src={adicon} alt="Adicon Power and Engineering Solution" className="h-[100px] w-[100px] " />
        <h2 className=" btn btn-outline btn-primary">About Us</h2>
      </div>
      <div className="grid grid-cols-1  gap-6">
        <div>
          <p className="mb-5">
            Welcome to <span className='text-3xl font-bold'>Adicon Power and Engineering Solution</span>, your trusted partner in solving mechanical issues with precision and expertise. At Adicon, we specialize in a wide range of generator services, catering to the diverse needs of industries and businesses. Our comprehensive services include maintenance, repair, and installation of power plants, lift generators, and various other types of generators.
          </p>
          <h3 className="text-xl font-bold mb-3">Our Services:</h3>
          <ul className="list-disc pl-5 mb-5">
            <li>Generator Services: We offer comprehensive solutions for all types of generators, ensuring optimal performance and reliability.</li>
            <li>Power Plant Solutions: From design to installation, we provide tailored solutions for efficient power generation plants.</li>
            <li>Mechanical Expertise: Our team of skilled engineers and technicians are committed to delivering high-quality mechanical services.</li>
          </ul>
        </div>
        <div>
          <h3 className="text-xl font-bold mb-3">Why Choose Us?</h3>
          <ul className="list-disc pl-5 mb-5">
            <li>Expertise: With years of experience, we bring unparalleled expertise in the field of mechanical engineering and power solutions.</li>
            <li>Reliability: We prioritize reliability and efficiency, ensuring minimal downtime and maximum productivity for our clients.</li>
            <li>Customer Satisfaction: Our commitment to customer satisfaction drives us to deliver exceptional service and support.</li>
          </ul>
          <p>
            Whether you require routine maintenance, emergency repairs, or complete installation services, Adicon Power and Engineering Solution is here to meet your needs. Contact us today to discover how we can support your power and engineering requirements.
          </p>
        </div>
        <div>
        <h3 className="text-xl font-bold mb-3">Our Goal</h3>
       <p>
       At Adicon Power and Engineering Solution, our goal is to become the leading provider of mechanical and power engineering services, known for our unparalleled expertise and commitment to quality. We aim to deliver innovative, reliable, and efficient solutions for all types of diesel engines and power generation systems. Our focus is on minimizing downtime and maximizing performance, ensuring that our clients can depend on their power systems without interruption. Through continuous improvement, advanced technology, and a customer-centric approach, we strive to exceed expectations and foster long-term partnerships. Our ultimate goal is to empower businesses by providing top-tier services that support their growth and success, making Adicon a name synonymous with excellence in power and engineering solutions.
       </p>
        </div>
      </div>
    </div>
  );
};

export default About;
