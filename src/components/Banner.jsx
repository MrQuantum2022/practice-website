import {React} from "react";
import { ReactTyped } from "react-typed";


export default function Banner() {
  
  return (
    <div className=" h-72">
      <div className=" flex relative justify-center z-0 font-bold text-md md:text-2xl mt-20  text-green-800">
        Precision, Power, Quantum
      </div>
      <h1
        className="flex relative justify-center z-30 font-bold text-xl md:text-2xl mt-10 text-center scale-125 lg:text-4xl
       "
      >
        Unlocking Tomorrow with <br />
        Quantum Power
      </h1>
      <h2 className="flex relative justify-center z-30 font-bold text-xl md:mt-10  mt-5 text-center  text-green-600 scale-125 md:text-3xl">
        <ReactTyped className="md:text-2xl text-sm"
          strings={[
            "Step into the Quantum Revolution",
            "Harnessing Quantum Potential",
            "Innovate Beyond Limits ",
          ]}
          typeSpeed={50}
          loop
        />
      </h2>
      <div className="flex relative items-center justify-center z-40 font-bold text-2xl mt-10 flex-col md:flex-row scale-100 md:text-3xl md:scale-125 ">
        <button className=" bg-black w-28 text-white py-1 px-2 text-xl rounded-xl my-2 hover:bg-slate-800 active:bg-slate-600">
          Join Us
        </button>
        <button className=" bg-green-600 w-28 text-white py-1 mx-2 text-xl rounded-xl hover:bg-green-800 active:text-black">
            Learn
        </button>
      </div>
      <div className="absolute md:right-10  right-0 top-16 z-10 ">
        <img
          className=" h-96  md:w-44  w-24 object-cover md:object-center object-left  "
          src="https://imgs.search.brave.com/6i8-ERXLHTT9c7xv32XBllivDp_7FFCDC6G0m23nffk/rs:fit:500:0:0/g:ce/aHR0cHM6Ly93d3cu/cG5nbWFydC5jb20v/ZmlsZXMvMjEvUXVh/bnR1bS1Db21wdXRp/bmctUE5HLVBob3Rv/cy5wbmc"
          alt=""
        />
      </div>
      <div className="absolute md:left-0 -left-24 md:top-32 top-60 z-10 h-96  w-96  lg:scale-75 md:scale-50  ">
        <img
          className="  h-72 w-72 md:h-96 md:w-96 object-cover object-top"
          src="https://c8.alamy.com/comp/2M77W1B/quantum-computer-on-white-background-2M77W1B.jpg"
          alt=""
        />
      </div>
    </div>
  );
}
