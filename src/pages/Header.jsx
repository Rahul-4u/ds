import React, { useState } from 'react'
import { FiLock, FiMenu } from 'react-icons/fi'
import { Link } from 'react-router-dom'
import { RiCloseLargeFill } from "react-icons/ri";



export default function Header() {
  const [Show, setShow] = useState(false);


  return (
    <div className='w-full fixed z-50 bg-black  py-2'>
    <div className='flex container mx-auto items-center  justify-between '>
      <div className='flex items-center gap-3 '>
        <img className=' w-[35px] h-[35px] rounded-full ' src="logo.png" alt="" />

        <h1 className="text-green-400 text-[25px] font-bold cursor-pointer ">
              <span className="text-red-600">RA</span>HUL
            </h1>
      </div>

      <div>
        <ul className=' flex hidden mdl:inline-flex text-gray-300 text-[19px] font-bodyFont'>
        <li className=' nav-link '>
              <Link to={'/'} >Home</Link>
           </li>
            <li className=' nav-link '>
              <Link to={'about'} >About</Link>
           </li>
           <li className=' nav-link '>
              <Link to={'demo'} >Demo</Link>
           </li>
           <li className=' nav-link '>
              <Link to={'portfolio'} >Portfolio</Link>
           </li>
           <li className=' nav-link '>
              <Link to={'contact'} >Contact</Link>
           </li>
         
        </ul>

        <span onClick={()=>setShow (!Show)}  className=' text-gray-300 mdl:hidden text-[30px]' >
         {Show ?  <RiCloseLargeFill /> : <FiMenu/>
}
        </span>

        <span onClick={()=> setShow (false)} className=' text-green-500 text-2xl  w-10 h-10 cursor-pointer mdl:hidden'>

          {
            Show && (
              <div className=' w-[100%] fixed h-screen absolute z-50 inline-block bg-slate-800 left-0 top-[51px]'>
                <ul className='  justify-between items-center  '>
        <li className=' nav-link '>
              <Link to={'/'} >Home</Link>
       </li>
            <li className=' nav-link '>
              <Link to={'about'} >About</Link>
           </li>
           <li className=' nav-link '>
              <Link to={'demo'} >Demo</Link>
           </li>
           <li className=' nav-link '>
              <Link to={'portfolio'} >Portfolio</Link>
           </li>
           <li className=' nav-link '>
              <Link to={'contact'} >Contact</Link>
           </li>
         
        </ul>

              </div>
            )
          }

        </span>

        
      </div>

            
         </div>
     
    </div>
  )
}
