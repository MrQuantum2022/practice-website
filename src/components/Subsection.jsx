import { React, useState } from "react";
import { FaAtom } from "react-icons/fa6";
export default function Subsection() {
  const [show, setshow] = useState(false);
  console.log(show);
  return (
    <div className=" mt-28 bg-green-600  grid md:grid-cols-2 sm:grid-cols-2 grid-flow-row object-cover">
      <div className="flex items-center " onClick={() => setshow(!show)}>
        <img
          className={`' hover:opacity-70 opacity-100 '`}
          src="https://www.usnews.com/object/image/0000016f-fd0e-ddf4-a7ff-ff6f64510000/200131quantumcomputer-editorial.computers.AP.jpg?update-time=1580498831014&size=responsive640"
          alt=""
        />
        {show?
        <div className=" relative flex text-white items-center -left-2/3 ">
        <button className=" md:w-40 w-28 border-2 md:p-3 p-1 flex border-white  md:text-2xl text-m justify-center">Learn more</button>
      </div>:null}
      </div>
      <div className=" mx-5 my-9 px-0  flex items-center flex-col justify-center">
      <FaAtom className="  my-2 text-white animate-spin " />
        <h1 className="text-xl md:text-3xl text-white font-semibold  pl-5 mb-5 md:pl-0 ">
          Quantum Computing 
        </h1>
        <p className="text-xs py-5 border-y-2 text-white">
          Quantum Computing merges two great scientific revolutions of the 20th
          century: computer science and quantum physics. Quantum physics is the
          theoretical basis of the transistor, the laser, and other technologies
          which enabled the computing revolution. But on the algorithmic level,
          today's computing machinery still operates on ""classical"" Boolean
          logic. Quantum Computing is the design of hardware and software that
          replaces Boolean logic by quantum law at the algorithmic level. For
          certain computations such as optimization, sampling, search or quantum
          simulation this promises dramatic speedups. We are particularly
          interested in applying quantum computing to artificial intelligence
          and machine learning. This is because many tasks in these areas rely
          on solving hard optimization problems or performing efficient
          sampling.
        </p>
      </div>
    </div>
  );
}
