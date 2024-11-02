import React from "react";
import Images from "./netflix_logo_icon.png";
import Profile_pic from "./Venom_Poster.jpg";
import { useDispatch } from "react-redux";
import { changePageStatus } from "./utils/Redux/GPTSlice";
import { Supported_Language } from "./utils/language_Constant";
import { changeLanguage } from "./utils/Redux/GPTSlice";
import { useSelector } from "react-redux";
const Header = () => {
  const Gpt_flag=useSelector(store=>store?.GPTSlice?.pageStatus);
  const dispatch = useDispatch();
  const handleDispatch = () => {
    dispatch(changePageStatus());
  };
  const handleSelect=(e)=>{
    dispatch(changeLanguage(e.target.value));
  }
  return (
    <div className="md:absolute w-screen px-8 py2  z-10 flex  flex-col  bg-transparent sm:bg-transparent  sm:bg-gradient-to-b sm:from-black sm:to-transparent md:flex-row md:justify-between md:bg-transparent md:bg-gradient-to-b md:from-black md:to-transparent ">
      <img className="w-24  md:w-40 mx-auto  md:mx-0" src={Images} alt="logo" /> 
      <div className="flex p-2 md:justify-around ">
        {Gpt_flag &&   <select className="py-2 px-4 mx-4 my-3 bg-purple-200  text-black rounded-lg h-10" onChange={handleSelect}>
          {Supported_Language.map((lan) => (
            <option value={lan.identifier}>{lan.name}</option>
          ))}
        </select>}
       
        <button
          className=" text-sm px-1 py-2 h-10 md:text-lg md:py-2 md:px-3 md:mx-4 md:my-2  bg-purple-400 text-white rounded-lg  md:h-12"
          onClick={handleDispatch}
        >
         { !Gpt_flag ? "GPT Search 🔎" : "Home"} 
        </button>
        <img
          className="h-20 w-15 rounded-full border-2  border-lime-200"
          src={Profile_pic}
          alt="ProfilePic"
        />
        <button className="font-bold text-red-400 h-20 w-15 p-4">
          Sign out{" "}
        </button>
      </div>
    </div>
  );
};

export default Header;
