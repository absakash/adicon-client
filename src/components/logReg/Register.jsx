import React, { useContext, useState } from "react";
import { useForm } from "react-hook-form";
import sign from "../../assets/register/sign.jpg";
import goog from "../../assets/register/goog.png";
import { SiPlaycanvas } from "react-icons/si";
import { Authcontexts } from "../../context/AuthContextProvider";
import toast from "react-hot-toast";
import { data } from "autoprefixer";
const Register = () => {
  const { withGoogle, Register ,updateUser} = useContext(Authcontexts);
  const [loading, setLoading] = useState(false);
  const handleGoogle = () => {
    withGoogle()
      .then((results) => {
        const user = results.user;
        console.log(user);
        toast.success("successfully login through google ........");
      })
      .catch((error) => {
        console.log(error);
      });
  };

  const {
    register,
    handleSubmit,reset,
    watch,
    formState: { errors },
  } = useForm();

  // saving the user in mongodb.....
  const saveUser=(name,email,password,phone)=>{
    const user={
      name,email,password,phone
    }

    fetch('',{
      method:'POST',
      headers:{
        'content-type' :'application.json'
      }
    })
  }
  const onSubmit = (data) => {
   
    
      Register(data.email,data.password,data.name)
      .then((results=>{
          const user=results.user;
          toast.success('successfully registerded .....')
          setLoading(true)
          
          const userinfo = {
            displayName: data.name,
          };
          updateUser(userinfo)
            .then(() => {
              
            toast.success("updated the user successfully.....")
            })
            
            reset()
          
      }))
      .catch(error=>{
        console.log(error)
      })
    
  };
  return (
    <div className="ml-5 mr-5 mt-5">
      <div className="max-w-6xl mx-auto mt-1 rounded-3xl">
        <div className="md:flex gap-5 shadow-2xl ">
          <div className="md:w-1/2 shadow-2xl rounded-xl">
            <img src={sign} alt="" />
          </div>

          <div className="md:w-1/2 rounded-xl">
            <form className="p-10 shadow-xl" onSubmit={handleSubmit(onSubmit)}>
              {/* register your input into the hook by invoking the "register" function */}
              <div>
                <p className="text-center text-4xl py-5 font-semibold">
                  Register yourself
                </p>
              </div>
              <div className="">
                <div className=" mb-2">
                  <input
                    placeholder="enter your name "
                    className="input input-bordered input-info w-full hover:scale-105"
                    defaultValue=""
                    {...register("name", { required: "name is required" })}
                  />
                  <p className="text-red-600">{errors?.name?.message}</p>
                </div>
                <div className="">
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
                  placeholder="Enter your password "
                  className="input input-bordered input-info w-full hover:scale-105"
                  defaultValue=""
                  {...register("password", {
                    required: "Password is required",
                  })}
                />
                <p className="text-red-600">{errors?.password?.message}</p>
              </div>
              <div className="mt-2">
                <input
                  placeholder="enter your phone number "
                  className="input input-bordered input-info w-full hover:scale-105"
                  defaultValue=""
                  {...register("phone", { required: "phone is required" })}
                />
                <p className="text-red-600">{errors?.phone?.message}</p>
              </div>
              <div className="flex justify-center">
                <input
                  className="btn mt-4 bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500"
                  type="submit"
                />
              </div>

              <div>
                <p className="text-center mt-2">
                  ----------------or-----------------
                </p>
              </div>
              <div
                onClick={handleGoogle}
                className="bg-gradient-to-r from-indigo-300 via-purple-500 to-pink-500 btn flex justify-between items-center align-middle border-2 rounded-3xl"
              >
                <img className="w-10 ml-5 " src={goog} alt="" />
                <p className="mr-10">Login with Google</p>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Register;
