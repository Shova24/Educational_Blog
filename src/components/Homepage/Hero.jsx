import React from "react";
import { Card } from "../ui/card";

function Hero() {
  return (
    <>
      <div className="flex flex-col justify-center items-center m-5 border-8 border-black w-[400px] h-[150px]">
        <p className="text-4xl font-md">Brainstroming</p>
      </div>
      <p className="h-[80px]">
        A educational site for students all over Bangladesh.
      </p>
    </>
  );
}

export default Hero;
