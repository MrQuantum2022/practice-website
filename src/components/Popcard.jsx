import React from "react";
import { GoMilestone } from "react-icons/go";
import { IoLogOutOutline } from "react-icons/io5";
import { GoDesktopDownload } from "react-icons/go";
export default function Popcard({ showpop, head, content, setshow,pgref }) {
  console.log(showpop);
  return (
    <div
      className={` bg-black flex items-center w-3/4 md:w-1/2 h-screen z-50 text-white fixed duration-300 top-0 ${
        showpop ? "left-0" : "-left-full"
      }`}
    >
      <div className="">
      <div className="border-b-2 border-t-2 px-1 py-2 md:mx-12 md:py-5 mx-2  font-light text-2xl md:text-3xl text-center ">
        {head}
      </div>
      <div className="w-full text-xs md:text-md font-thin px-6  flex md:h-3/5 overflow-auto my-6 ">
        {content}
      </div>
      </div>
      <div className="flex items-center justify-evenly absolute bottom-3  py-1 gap-5 right-6">
        <a
          href="Header.jsx"
          className="duration-300 hover:text-white hover:bg-black border-2 flex items-center bg-white rounded-xl font-semibold text-black px-3 py-2 text-xl" 
        >
          <button className="pr-2 ">visit </button>
          <GoDesktopDownload />
        </a>
        <div className="flex items-center border-0 duration-100 hover:border-b-2 hover:border-t-2 px-2 py-1 text-2xl " onClick={() => setshow(false)}>
          <button className=" pr-3" >
            back
          </button>
          <IoLogOutOutline />
        </div>
      </div>
    </div>
  );
}
