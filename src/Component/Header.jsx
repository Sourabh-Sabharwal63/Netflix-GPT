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
    <div className="fixed w-screen px-8 py2 bg-gradient-to-b from-black z-10 flex justify-between">
      <img className="w-40" src={Images} alt="logo" />
      <div className="flex p-2 justify-around">
        {Gpt_flag &&   <select className="py-2 px-4 mx-4 my-3 bg-purple-200  text-black rounded-lg h-10" onChange={handleSelect}>
          {Supported_Language.map((lan) => (
            <option value={lan.identifier}>{lan.name}</option>
          ))}
        </select>}
       
        <button
          className="py-2 px-4 mx-4 my-2 bg-purple-400 text-white rounded-lg h-12"
          onClick={handleDispatch}
        >
         { !Gpt_flag ? "GPT Search 🔎" : "Home"} 
        </button>
        <img
          className="h-20 w-15 rounded-full border-2  border-lime-100"
          src={Profile_pic}
          alt="ProfilePic"
        />
        <button className="font-bold text-white h-20 w-15 p-4">
          Sign out{" "}
        </button>
      </div>
    </div>
  );
};

export default Header;
