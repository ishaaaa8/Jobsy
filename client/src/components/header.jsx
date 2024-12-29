import MenuOutlined from "@mui/icons-material/Menu";
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";
// import logopic from "../assets/logo.jpeg";


const Header = () => {
    return (
      <div
        className={`fixed w-full text-white flex justify-between p-4 items-center z-10 ${
          navbar ? "navbar-active" : "bg-transparent"
        }`}
      >
        <div className="md:flex-[0.5] flex-initial justify-center items-center">
          <h1 className="w-16 logo-text font-semibold text-[4rem] cursor-pointer">WorkHire</h1>
        </div>
  
        <nav>
          <div className="absolute right-6 md:hidden top-6 scale-150">
            {/* <MenuOutlined
              onClick={showMenu}
              className="scale-150 cursor-pointer"
            /> */}
          </div>
  
          <ul className="hidden text-xl md:flex gap-8 p-6 uppercase bg-transparent">
            <li>
              <Link to="/">Home</Link>
            </li>
           
          </ul>
          
        </nav>
      </div>
    );
  };
  
  export default Header;