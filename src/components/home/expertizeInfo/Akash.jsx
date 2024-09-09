import React from "react";

import akash from "../../../assets/expertize/akash image.jpg";

const Akash = () => {
  return (
    <div className="grid md:grid-cols-2 md:max-w-7xl mx-auto">
      <div>
        <img className="w-[300px] h-[300px" src={akash} alt="" />
      </div>
      <div className="mt-20">
        <h1 className="text-3xl">I am Akash Biswas</h1>
        <p>
          A junior developer with a strong foundation in MERN Stack
          Development, proficient in working with React.js, Node.js, Express.js,
          and MongoDB. My skills in JavaScript, HTML, and CSS enable me to
          create dynamic and responsive web applications. I have experience in
          designing RESTful APIs and database schemas, and I am adept at both
          frontend and backend development. My goal is to continually expand my
          knowledge and expertise, contributing effectively to innovative
          projects and collaborating with experienced teams to build robust and
          scalable solutions.
        </p>
        <p className="mt-5 text-green-900"><span className="text-2xl font-bold">M</span>ail me through : akashboswas2@gmail.com || adicon.akash@gmail.com</p>
      </div>
    </div>
  );
};

export default Akash;
