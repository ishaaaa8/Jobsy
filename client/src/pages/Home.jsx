import React from "react";
import Header from "../components/header";
import Navbar from "../components/navbar";
import wave1 from "../assets/bg.jpg";

export default function Home(){
    const img1 = () => {
        document.getElementById("hero").style.backgroundImage = `url(${wave1})`;
        document.getElementById("hero").style.transition = "ease-in-out 1s";
      };

    return(
        <>
            <Navbar/>
            <h1>Home Page</h1>
        </>
    )
} 