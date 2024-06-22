import React from 'react'
// import './align.module.css'

export default function RespoNav({show}) {
    let link_lis= ['Home','Company', 'Resources','About','Contact','FAQ']
  return (
    <ul className={` md:hidden block absolute z-50 bg-black text-white h-screen top-[62px] w-1/2 ${show? 'left-[0px]' : 'left-[-500px]'} p-2 duration-300`}>
        {link_lis.map(items=><li key={items} className='p-3 border-b-2 border-green-600 duration-300 hover:bg-white  hover:text-black'>{items}</li>)}
    </ul>
  )
}
