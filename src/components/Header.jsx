import React,{useState} from 'react'
import NavLinks from './Links'
import { AiOutlineMenu,AiOutlineClose  } from "react-icons/ai";
import RespoNav from './RespoNav';
export default function Header() {
    const[tog,settog]= useState(false);
  return (
    <div className=' bg-green-600 p-1 z-10'>
        <div className=' max-w-[1100px]  px-2 items-center mx-auto flex justify-between 
        '>
            <div className=' text-3xl font-bold flex flex-col scale-90'>
            <span className='flex'>Quantum<span className='text-white'>Tech</span></span>
                <p className=' font-thin text-white text-sm mx-auto'>-for the future-</p>
            </div>
            {
                tog?
                <AiOutlineClose onClick={()=>settog(!tog)} className='text-2xl text-white md:hidden block'/>
                :<AiOutlineMenu onClick={()=>settog(!tog)} className='text-2xl text-white md:hidden block'/>
            }
            <NavLinks/>
            {/* responsive menu */}
            <RespoNav show ={tog}/>
        </div>
    </div>
  )
}
