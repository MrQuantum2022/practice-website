import React, { useState } from "react";

export default function Subsection3() {
  const [pop, setpop] = useState(false);

  return (
    <div className="flex flex-row items-center md:justify-between justify-center bg-black md:px-12 ">
      <div className=" relative h-52 w-1/4 md:flex object-contain hidden">
        <img src="https://imgs.search.brave.com/ywd3Ns8_m237rzTW2zC_ss9m0gJeV0jGnS7tTW8H7uk/rs:fit:860:0:0/g:ce/aHR0cHM6Ly9zdG9y/YWdlLmdvb2dsZWFw/aXMuY29tL2d3ZWIt/dW5pYmxvZy1wdWJs/aXNoLXByb2QvaW1h/Z2VzL1F1YW50dW1Q/cm9jZXNzb3JIYW5k/b2ZmLndpZHRoLTEy/MDAuZm9ybWF0LXdl/YnAud2VicA" className="absolute bottom-0 right-0 h-40 w-5/6 z-10 " alt="" />
        <img src="https://imgs.search.brave.com/WY0Idx90p4m0rkHOrWvNZuBvSRhugVDf_N3XZvBCIcc/rs:fit:500:0:0/g:ce/aHR0cHM6Ly93d3cu/bmV4dHBsYXRmb3Jt/LmNvbS93cC1jb250/ZW50L3VwbG9hZHMv/MjAyMy8wMi9hd3Mt/cXVhbnR1bS1wcm9j/ZXNzb3ItMzI2eDI0/NS5qcGc " className="absolute top-0 left-0 z-0  h-40 w-5/6 " alt="" />
      </div>
    <div className="h-96 bg-black flex flex-col items-center justify-center   ">
      <div className="relative">
      <div
        onClick={() => setpop(!pop)}
        className="border-2 relative z-10 text-white flex text-2xl p-3 bg-black    "
      >
        Research areas
      </div>
      <div className="">

      <div
          className={`absolute h-7 duration-200 text-white z-0 ${pop?"-top-12 -left-20 ":"top-0 left-0"}  text-sm flex text-center  border rounded-2xl py-1 px-2`}
        >
          Algorithms & Optimization
        </div>
        <div
          className={`absolute h-7 duration-200 text-white z-0 ${pop?"-bottom-12 -right-20 ":"-bottom-0 -right-0"}  text-sm flex text-center  border rounded-2xl py-1 px-2`}
        >
          Science & Societal Impact
        </div>
        <div
          className={`absolute h-7 duration-200 text-white z-0 ${pop?"-top-20 -right-20 ":"top-0 right-0"}  text-sm flex text-center  border rounded-2xl py-1 px-2`}
        >
          Computing Paradigms
        </div>
        <div
          className={`absolute h-7 duration-200 text-white z-0 ${pop?"-top-32 -left-12":"-top-0 -left-0"}  text-sm flex text-center  border rounded-2xl py-1 px-2`}
        >
         AI/ML Foundations & Capabilities
        </div>
        <div
          className={`absolute h-7 duration-200 text-white z-0 ${pop?"-bottom-24 -left-16 ":"-bottom-0 -left-0"}  text-sm flex text-center  border rounded-2xl py-1 px-2`}
        >
          Computing Paradigms
        </div>
      </div>
        </div>
    </div>
    <div className=" relative h-52 w-1/4 md:flex hidden object-contain">
        <img src="https://imgs.search.brave.com/YWjaX3o0lze1Hb6F9MFrI8HfQD_v-tW3RvhsOgUSHyQ/rs:fit:860:0:0/g:ce/aHR0cHM6Ly90aGVx/dWFudHVtaW5zaWRl/ci5jb20vd3AtY29u/dGVudC91cGxvYWRz/L3F1YW50dW0tY29t/cHV0ZXIuanBlZw " className="absolute bottom-0 left-0 h-40 w-5/6 z-10 right-0 " alt="" />
        <img src="https://imgs.search.brave.com/c17TQecg67C4KasH9xUoj7H6SUQKVnqhqi07wRS6RY8/rs:fit:860:0:0/g:ce/aHR0cHM6Ly93d3cu/Y25ldC5jb20vYS9p/bWcvcmVzaXplL2Zm/YjczMzkxMTNkN2U3/N2M1NzI1ZmI2NjA0/MjU2ZWYyN2M0NmIw/ZDgvaHViLzIwMTkv/MTAvMjMvMjk3YWQw/MGEtZmZjZC00MDk0/LTg1MDItMTNmYjc4/MjE5ZWZmL2dvb2ds/ZS1xdWFudHVtLWNv/bXB1dGVyLXN5Y2Ft/b3JlLTIwMTktMTAu/anBnP2F1dG89d2Vi/cCZmaXQ9Y3JvcCZo/ZWlnaHQ9Njc1Jndp/ZHRoPTEyMDA" className="absolute top-0 right-0 z-0  h-40 w-5/6 " alt="" />
      </div>
      
    </div>
  );
}
