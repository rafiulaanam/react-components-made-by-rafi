import React, { useContext } from "react";
import { Link, useNavigate } from "react-router-dom";
import { FaFacebookF } from "react-icons/fa";
import { BsGoogle, BsGithub } from "react-icons/bs";
import { useForm } from "react-hook-form";
import { AuthContext } from "../../Context/AuthProvider";

const Signup = () => {
  const navigate = useNavigate();


  // Import from AuthProvide
  const {

    continueWithGoogle,
    continueWithGithub,
    continueWithFacebook,
    createUser,
    updateUser,
  } = useContext(AuthContext);


  //React Hook Form
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  //Form Data 
  const handleSignup = (data,event) => {
    // console.log(data);

    const form = event.target;
 
    // Sign Up with Email and Password
    createUser(data.email, data.password)
      .then(() => {
        form.reset();

        //Update Name when SignUp
        const userInfo = {
          displayName: data.firstName +" "+ data.lastName,
        };
        updateUser(userInfo)
          .then(() => { 
           
            navigate('/')
          })
          .catch((e) => console.log(e));

        // toast.success("Register Successfully");
      })
      .catch((e) => console.log(e));
  };

  const handleGoogle = () => {
    continueWithGoogle()
      .then((result) => {
        const user = result.user;
       
        navigate('/')
        console.log(user);
      })
      .catch((e) => console.log(e));
  }
  const handleFacebook = () => {
    continueWithFacebook()
      .then((result) => {
        const user = result.user;
    
        navigate('/')
        console.log(user);
      })
      .catch((e) => console.log(e));
  }
  const handleGithub = () => {
    continueWithGithub()
      .then((result) => { 
        const user = result.user;
     
        navigate('/')
        console.log(user);
      })
      .catch((e) => console.log(e));
  }

  return (
    <div className="bg-[#ECECEC] relative">
      <img
        src="login1.svg"
        alt=""
        className="absolute w-1/3  top-0  right-0 "
      />
      <img
        src="login2.png"
        alt=""
        className="absolute w-1/4  bottom-0 left-0 "
      />
      <div className="flex justify-center  relative">
        <div className="flex flex-col bg-white justify-center items-center md:flex-row shadow rounded-xl max-w-7xl w-full lg:w-[70%]  my-20">
          <div className="h-full w-full md:w-2/4  bg-gradient-to-l from-blue-400 to-emerald-400  items-center flex justify-center rounded-xl">
            <div className="text-black text-base font-semibold text-center my-10 space-y-2 m-2">
              <div className="flex justify-center">
                <img src="logoo.png" alt="" />
              </div>
              <h1 className="text-5xl">Welcome back</h1>
              <h1 className="py-8">
                To keep connected with us please <br /> login with your personal
                info
              </h1>
              <Link to="/login">
                {" "}
                <button className="btn btn-outline text-black rounded-full px-10 ">
                  Sign In
                </button>
              </Link>
            </div>
          </div>
          <div className=" w-full md:w-3/4 py-20">
            <div className="text-xl cursor-pointer flex flex-col justify-center items-center mt-5 md:mt-0 py-4">
              <h1 className="font-semibold text-xl text-center md:text-2xl text-gray-600 m-2">
                Creating Account
              </h1>
              <h1 className="text-sm font-medium text-gray-600 m-2">
                Continue using Social accounts
              </h1>
              <div className="text-lg lg:text-xl text-center space-x-5 m-2">
             
                  <button  onClick={handleFacebook}
                    type="button"
                    className="mb-2 inline-block rounded-full p-3 text-xs font-medium uppercase leading-normal text-white shadow-md transition duration-150 ease-in-out hover:shadow-lg focus:shadow-lg focus:outline-none focus:ring-0 active:shadow-lg
      bg-[#c13584]"
                  >
                    <FaFacebookF className="text-xl" />
                  </button>
             
              
                  <button  onClick={handleGoogle}
                    type="button"
                    className="mb-2 inline-block rounded-full p-3 text-xs font-medium uppercase leading-normal text-white shadow-md transition duration-150 ease-in-out hover:shadow-lg focus:shadow-lg focus:outline-none focus:ring-0 active:shadow-lg
      bg-[#c13584]"
                  >
                    <BsGoogle className="text-xl" />
                  </button>
                
               
                  <button  onClick={handleGithub}
                    type="button"
                    className="mb-2 inline-block rounded-full p-3 text-xs font-medium uppercase leading-normal text-white shadow-md transition duration-150 ease-in-out hover:shadow-lg focus:shadow-lg focus:outline-none focus:ring-0 active:shadow-lg
      bg-[#c13584]"
                  >
                    <BsGithub className="text-xl" />
                  </button>
                
              </div>
              <h1 className="text-sm font-medium text-gray-600 m-2">OR</h1>
            </div>
            <form
              onSubmit={handleSubmit(handleSignup)}
              className="flex flex-col justify-center items-center m-2 space-y-6 md:space-y-8"
            >
              <div className="">
                <input
                  {...register("firstName", {
                    required: true,
                    minLength: 2,
                    maxLength: 20,
                    pattern: /^[A-Za-z]+$/i,
                  })}
                  type="text"
                  placeholder="First Name"
                  className=" bg-gray-100 rounded-lg px-5 py-2 focus:border border-blue-600 focus:outline-none text-black placeholder:text-gray-600 placeholder:opacity-50 font-semibold md:w-72 lg:w-[340px]"
                />
                {errors.firstName && errors.firstName.type === "required" && (
                  <p className="ml-2 text-red-500">This is required</p>
                )}
                {errors.firstName && errors.firstName.type === "minLength" && (
                  <p className="ml-2 text-red-500">First name is too short</p>
                )}
                {errors.firstName && errors.firstName.type === "maxLength" && (
                  <p className="ml-2 text-red-500">First name is too long</p>
                )}
                {errors.firstName && errors.firstName.type === "pattern" && (
                  <p className="ml-2 text-red-500">
                    First name should be word{" "}
                  </p>
                )}
              </div>
              <div className="">
                <input
                  {...register("lastName", {
                    required: true,
                    minLength: 2,
                    maxLength: 20,
                    pattern: /^[A-Za-z]+$/i,
                  })}
                  type="text"
                  placeholder="Last Name"
                  className=" bg-gray-100 rounded-lg px-5 py-2 focus:border border-blue-600 focus:outline-none text-black placeholder:text-gray-600 placeholder:opacity-50 font-semibold md:w-72 lg:w-[340px]"
                />
                {errors.lastName && errors.lastName.type === "required" && (
                  <p className="ml-2 text-red-500">This is required</p>
                )}
                {errors.lastName && errors.lastName.type === "minLength" && (
                  <p className="ml-2 text-red-500">Last name is too short</p>
                )}
                {errors.lastName && errors.lastName.type === "maxLength" && (
                  <p className="ml-2 text-red-500">Last name is too long</p>
                )}
                {errors.lastName && errors.lastName.type === "pattern" && (
                  <p className="ml-2 text-red-500">Last name should be word </p>
                )}
              </div>
              <div className="">
                <input
                  {...register("email", {
                    required: true,
                    pattern:
                      /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
                  })}
                  type="email"
                  placeholder="Email"
                  className=" bg-gray-100 rounded-lg px-5 py-2 focus:border border-blue-600 focus:outline-none text-black placeholder:text-gray-600 placeholder:opacity-50 font-semibold md:w-72 lg:w-[340px]"
                />
                {errors.email && errors.email.type === "required" && (
                  <p className="ml-2 text-red-500">This is required</p>
                )}
                {errors.email && errors.email.type === "pattern" && (
                  <p className="ml-2 text-red-500">Email should be valid </p>
                )}
              </div>
              <div className="">
                <input
                  {...register("password", {
                    required: true,
                    pattern:
                      /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[a-zA-Z]).{8,}$/,
                  })}
                  type="password"
                  placeholder="Password"
                  className=" bg-gray-100 rounded-lg px-5 py-2 focus:border border-blue-600 focus:outline-none text-black placeholder:text-gray-600 placeholder:opacity-50 font-semibold md:w-72 lg:w-[340px]"
                />
                {errors.password && errors.password.type === "required" && (
                  <p className="ml-2 text-red-500">This is required</p>
                )}
                {errors.password && errors.password.type === "pattern" && (
                  <p className="ml-2 text-red-500">
                    Password should be at least 8 characters,
                    <br />
                    one digit, capital,small, special symbol{" "}
                  </p>
                )}
              </div>
              <div className="text-center mt-7">
                <input
                  type="submit"
                  value="Sign Up"
                  className=" px-24 md:px-[118px] lg:px-[140px] py-2 rounded-md text-white bg-gradient-to-l from-blue-400 to-emerald-400  font-medium m-2 mb-6 uppercase"
                />
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Signup;
