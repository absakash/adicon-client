import React from "react";
import { useForm } from "react-hook-form";
import { SiGmail, SiWhatsapp } from "react-icons/si";
import { FaLocationDot } from "react-icons/fa6";
import { Link } from "react-router-dom";
const Contact = () => {
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm();
  const onSubmit = (data) => {
    console.log(data); 
  };
  return (
    <div id="#contact" className="ml-5 mr-5">
      <div className="py-10 md:max-w-6xl mx-auto ">
        <div className="text-left">
          <h1 className="text-3xl font-semibold">Contact</h1>
          <h1 className="border-2 w-16 border-cyan-600"></h1>
          <p className="mt-4 p-5">
            Welcome to ADICON, where engineering excellence meets innovative
            solutions. As the proud owner, I am thrilled to lead a team of
            dedicated professionals committed to delivering top-notch
            engineering services. At ADICON, we specialize in providing
            comprehensive engineering solutions tailored to meet the unique
            needs of our clients.
          </p>
          <p className="font-semibold font-serif">
            Feel free to contacts with me , Enjoy your day{" "}
          </p>
        </div>

        <div className="py-10 lg:flex gap-5 grid ">
          <div className="lg:w-1/2 p-20 w-full mt-2 shadow-2xl ">
            <div className="flex mt-2 gap-5  hover:text-emerald-500 hover:scale-105">
              <Link className="">
                <FaLocationDot className="w-10 h-10 "></FaLocationDot>
              </Link>
              <div className="text-left">
                <h1>Location </h1>

                <p> Dhaka, East Rampura-1113</p>
              </div>
            </div>
            <div className="flex gap-5 mt-3  hover:text-emerald-500 hover:scale-105">
              <Link>
                <SiGmail className="w-10 h-10"></SiGmail>
              </Link>
              <div className="text-left">
                <h1>Email </h1>

                <p> deb.infradev@gmail.com</p>
              </div>
            </div>
            <div className="flex gap-5 mt-3 hover:text-emerald-500 hover:scale-105">
              <Link>
                <SiWhatsapp className="w-10 h-10 "></SiWhatsapp>
              </Link>
              <div className="text-left">
                <h1>Call </h1>

                <p> +8801619996653</p>
              </div>
            </div>
          </div>

          <div className="lg:w-1/2">
            <form className="p-5 shadow-xl" onSubmit={handleSubmit(onSubmit)}>
              {/* register your input into the hook by invoking the "register" function */}
              <div className="md:flex gap-4 justify-center ">
                <div className="md:w-1/2 mb-2">
                  <input
                    placeholder="enter your name "
                    className="input input-bordered input-info w-full hover:scale-105"
                    defaultValue=""
                    {...register("name", { required: "name is required" })}
                  />
                  <p className="text-red-600">{errors?.name?.message}</p>
                </div>
                <div className="md:w-1/2">
                  <input
                    placeholder="enter your email "
                    className="input input-bordered input-info w-full hover:scale-105"
                    defaultValue=""
                    {...register("email", { required: "email is required" })}
                  />
                  <p className="text-red-600">{errors?.email?.message}</p>
                </div>
              </div>

              <div className="mt-2">
                <input
                  placeholder="Subject "
                  className="input input-bordered input-info w-full hover:scale-105"
                  defaultValue=""
                  {...register("subject", { required: "subject is required" })}
                />
                <p className="text-red-600">{errors?.subject?.message}</p>
              </div>
              <div className="mt-2">
                <input
                  placeholder="enter your message "
                  className="input input-bordered input-info w-full h-[200px] hover:scale-105"
                  defaultValue=""
                  {...register("message", { required: "message is required" })}
                />
                <p className="text-red-600">{errors?.message?.message}</p>
              </div>
              <div className="flex justify-center">
                <input
                  className="btn mt-4 bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500"
                  type="submit"
                />
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
