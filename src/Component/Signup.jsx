import React, { useRef, useState } from "react";
import { BgImage } from "./utils/constant";
import { Link } from "react-router-dom";
import { validatedata } from "./utils/Validatedata";
const Signup = () => {
  const [errorMessage,seterrorMessage]=useState(null)
  const email = useRef(null);
  const password = useRef(null);
  const repassword=useRef(null);
  const handleformSubmit = () => {
    const message = validatedata(email.current.value, password.current.value,repassword.current.value,true);
    seterrorMessage(message);
    console.log("message = ",message);
    console.log("email = ",email.current.value);
    console.log("password = ",password.current.value);
    console.log("repassword = ",repassword.current.value);
  };
  return (
    <div>
    
      <div className="fixed">
      <img className="h-screen object-cover md:h-auto"
          src={BgImage}
          alt="bg-img"
        />
      </div>
      <form
        onSubmit={(e)=>e.preventDefault()}
        className=" md:w-3/12 absolute p-12 bg-black md:my-36 mx-auto right-0 left-0 flex flex-col bg-opacity-80"
      >
        <h1 className="text-white  text-3xl font-extrabold p-2 ">Sign Up</h1>
        <input
          ref={email}
          type="email"
          placeholder="Email or mobile number"
          className="p-3 m-4 text-xl text-white rounded-lg bg-[#101113] border border-bg-[#5f5e5f]  focus:text-white"
        />
        <input
          ref={password}
          type="password"
          placeholder="Password"
          className="p-3 mx-4 my-2 text-xl  text-white rounded-lg  bg-[#101113] border border-bg-[#5f5e5f]  focus:text-white"
        />
        <input
         ref={repassword}
          type="password"
          placeholder="Re-Enter-Password"
          className="p-3 mx-4 my-2 text-xl text-white rounded-lg  bg-[#101113] border border-bg-[#5f5e5f] focus:text-white"
        />
        <p className="p-3 mx-4 my-2 text-red-600 font-bold">{errorMessage}</p>
        <button
          onClick={handleformSubmit}
          className="p-3 mx-4 my-2 text-xl text-white bg-red-600  rounded-lg cursor-pointer hover:bg-red-900 "
        >
          Sign Up
        </button>
        <p className="text-white  p-3 mx-4 my-2 text-xl text-center">
          Already have account→ <Link to="/">Sign In </Link>
        </p>
        <p className="text-white  mx-4 my-4">
          This page is protected by Google reCAPTCHA to ensure you're not a bot.
        </p>
      </form>
    </div>
  );
};

export default Signup;
