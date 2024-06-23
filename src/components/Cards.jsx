import  { React} from 'react'


export default function Cards({heads,content,elcontent,settogl,setheadp,setcontp}) {
  
  const setval=(heading,elcont)=>{
    setheadp(heading);
    setcontp(elcont);
    settogl(true);
  }
  return (
    <div className=" mx-12  my-7 flex items-center px-3 py-3 justify-center text-center flex-col hover:shadow hover:bg-slate-50 hover:scale-105 hover:animate-pulse duration-500 ">
    <h1 className=" font-bold  h-16 scale-90 items-center flex">
      {heads}
    </h1>
    <p className=" flex items-center text-sm scale-90 h-44 border-b-2 border-t-2   border-gray-300">
    {content}
    </p>
    <button value={heads} onClick={()=>setval(heads,elcontent)}  className="border-2 border-green-500 duration-500 hover:bg-green-500 hover:text-white px-2 py-1 mt-3">Preview</button>
    
  </div>
  )
}
