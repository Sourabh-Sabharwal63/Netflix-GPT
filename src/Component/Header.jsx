import React from "react";
import imgs from "./netflix_logo_icon.png";

const Header = () => {
  return (
    <div className="absolute w-screen px-8 py2 bg-gradient-to-b from-black z-10">
      <img className="w-40" src={imgs} alt="logo" />
    </div>
  );
};

export default Header;
