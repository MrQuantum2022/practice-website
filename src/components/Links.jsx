import React from 'react'
// import "./align.module.css"

export default function NavLinks() {
    let link_lis= ['Home','Company', 'Resources','About','Contact']
  return (
    <ul className=' hidden md:flex text-white gap-10 '>
        {link_lis.map(items=><li key={items} >{items}</li>)}
    </ul>
  )
}
