import React from "react";
import Dev from "./Dev";
import Akash from "./Akash";
import Mamun from "./Mamun";

const Experts = () => {
  return (
    <div className="mt-10">
      <div>
        <p className="text-4xl font-serif text-center"><span className="text-red-600 font-bold text-6xl">0</span>ur Expertises</p>
        <div className="flex justify-center">
          <h1 className="border-2 w-64 border-lime-400 text-center"></h1>
        </div>
      </div>
      <Dev></Dev>
      <Akash></Akash>
      <Mamun></Mamun>
    </div>
  );
};

export default Experts;
