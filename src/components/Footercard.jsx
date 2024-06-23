import React from 'react'
import { FaXTwitter } from "react-icons/fa6";
import { FaLinkedin } from "react-icons/fa";
import { FaYoutube } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";
import { AiFillQuestionCircle } from "react-icons/ai";
import { LuDot } from "react-icons/lu";

export default function Footercard () {
  return (
    <div>
      <div className='flex md:absolute border items-center md:text-xl md:mt-2 p-4 text-2xl bg-slate-200  text-slate-700 md:p-2 justify-center  '>Follow Us <LuDot /> Contribute </div>
      <div className='flex justify-center md:pl-10 bg-slate-200 gap-10 text-3xl p-5 md:py-3 '>
      <FaXTwitter className='hover:text-slate-700' />
      <FaLinkedin  className='hover:text-slate-700'/>
      <FaYoutube className='hover:text-slate-700' />
      <FaGithub className='hover:text-slate-700' />
      </div>
      <div className=" md:flex   flex-col md:flex-row items-center gap-6">
      <div className='text-3xl md:text-4xl md:opacity-70 text-green-600 font-bold p-4 justify-center   flex'>Quanntum<span className=' text-black'> Tech </span></div>
      <div className='flex gap-3 bg-slate-200 md:bg-white p-2 items-center justify-center text-xl flex-col  md:flex-row md:text-normal  md:py-12 md:gap-10 font-normal md:font-normal md:text-sm
        '>
        <h1 className='border-b-2 md:border-none border-white text-slate-700 md:text-slate-600 hover:text-black'>About QuantumTech</h1>
        <h1 className='border-b-2 md:border-none border-white text-slate-700 md:text-slate-600 hover:text-black'>QuantumTech Products</h1>
        <h1 className='border-b-2 md:border-none border-white text-slate-700 md:text-slate-600 hover:text-black'>Privacy</h1>
        <h1 className='border-b-2 md:border-none border-white text-slate-700 md:text-slate-600 hover:text-black'>Terms</h1>
      </div>
      <div className='flex gap-5 justify-center p-2  bg-black md:bg-white md:text-slate-700 text-white ' >
      
      <h1 className='flex gap-1 items-center '><AiFillQuestionCircle/>Help</h1>
      <h1>Submit feedback</h1>
      </div>
      </div>

    </div>
  )
}
