import React from "react";
import "./ProjectDetails.css";
import img1 from "../../assets/projectWedid/WhatsApp Image 2024-07-15 at 1.18.41 PM.jpeg";
import img2 from "../../assets/projectWedid/WhatsApp Image 2024-07-15 at 1.18.42 PM.jpeg";
import img3 from "../../assets/projectWedid/WhatsApp Image 2024-07-15 at 1.18.43 PM.jpeg";
import img4 from "../../assets/projectWedid/WhatsApp Image 2024-07-15 at 1.33.13 PM.jpeg";
import { Link } from "react-router-dom";

const ProjectsDetails = () => {
  return (
    <div className="p-5 lg:p-10">
      <div>
        <div className="border shadow-2xl p-5">
          <h1 className="text-4xl text-center"> Completed Projects </h1>
          <div className="flex justify-center mr-5">
            <h1 className="border-2 w-64 border-cyan-600 text-center"></h1>
          </div>
          <div className="rounded-2xl py-10 mt-10 transition-transform duration-500 ease-in-out transform hover:scale-105">
            <div className="p-10">
              <div className="lg:flex lg:gap-10 lg:flex-row-reverse">
                <div className="grid lg:grid-cols-2 grid-cols-1 p-5 gap-5 border rounded-2xl shadow-xl lg:ml-20">
                  <div>
                    <img
                      src={img1}
                      alt="Project Image 1"
                      className="rounded-2xl shadow-lg transition-transform duration-500 ease-in-out transform hover:scale-105"
                    />
                  </div>
                  <div>
                    <img
                      src={img2}
                      alt="Project Image 2"
                      className="rounded-2xl shadow-lg transition-transform duration-500 ease-in-out transform hover:scale-105"
                    />
                  </div>
                  <div>
                    <img
                      src={img3}
                      alt="Project Image 3"
                      className="max-h-[300px] w-[300px] rounded-2xl shadow-lg transition-transform duration-500 ease-in-out transform hover:scale-105"
                    />
                  </div>
                  <div>
                    <img
                      src={img4}
                      alt="Project Image 4"
                      className="rounded-2xl shadow-lg transition-transform duration-500 ease-in-out transform hover:scale-105"
                    />
                  </div>
                </div>
                <div className="p-5 border rounded-2xl shadow-xl lg:ml-20 mt-5 lg:mt-0">
                  <h1 className="text-5xl font-bold mb-4">
                    Bangladesh Power Development Board, Postogola
                  </h1>
                  <p className="py-6">
                    We performed a thorough maintenance check on a 250 kV
                    engine. Our services included:
                  </p>
                  <ul className="list-disc list-inside mb-6">
                    <li>Changing the machine's filter</li>
                    <li>Replacing the water</li>
                    <li>Rewiring the machine</li>
                    <li>Washing the machine tank</li>
                    <li>Changing the old oil</li>
                    <li>Ensuring the machine was in good working condition</li>
                  </ul>
                  <Link
                    to="/projectsdetails"
                    className="btn btn-outline btn-primary"
                  >
                    Visit Now
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProjectsDetails;

// const [string, setString] = useState("");
//   const inputRef = useRef(null);

//   const handleClick = (value) => {
//     if (value === "=") {
//       try {
//         setString(eval(string)); // Be cautious with eval
//       } catch {
//         setString("Error");
//       }
//     } else if (value === "AC") {
//       setString("");
//     } else if (value === "DEL") {
//       setString(string.slice(0, -1));
//     } else {
//       setString(string + value);
//     }
//   };

{
  /* <div className="ml-5 mr-5 rounded-2xl my-5">
<div className="">
  <h1 className="text-4xl text-center mb-10">Let's calculate .....</h1>
</div>
<div className="max-w-[500px] mx-auto ">
  <div className="border p-16 all rounded-2xl">
    <div>
      <input
        ref={inputRef}
        className="input input-bordered w-full  mb-10"
        type="text"
        value={string}
        readOnly
      />
    </div>
    <div className="grid grid-cols-4 gap-5">
      {["1", "2", "3", "+", "4", "5", "6", "-", "7", "8", "9", "*", "0", ".", "=", "/"].map((value) => (
        <h2 key={value} onClick={() => handleClick(value)} className="cursor-pointer">
          {value}
        </h2>
      ))}
      <h2 onClick={() => handleClick("AC")} className="cursor-pointer">
        AC
      </h2>
      <h2 onClick={() => handleClick("DEL")} className="cursor-pointer">
        DEL
      </h2>
    </div>
  </div>
</div>
</div> */
}
