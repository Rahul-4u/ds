import React from 'react'
import HomeLeft from './home/HomeLeft'
import HomeRight from './home/HomeRight'

export default function MeinHome() {
  return (
    <div>
        <div className=' bg-[url(/bg-1.jpg)] w-full'>
       <div className='w-full container md:py-5   text-slate-100  '>
     <div className='container mdl:flex flex md:flex-row items-center  flex-col-reverse justify-between py-5 items-center'>
     <HomeLeft/>
      <HomeRight/>
      
      
  
     </div>
    </div>
    
   </div>
      
    </div>
  )
}
