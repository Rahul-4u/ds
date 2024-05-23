import React from 'react'
import { useTypewriter } from 'react-simple-typewriter'
import { Slide } from "react-awesome-reveal";



export default function HomeLeft() {
    const [text] = useTypewriter({
        words: ['Frontend Developer', 'WordPress Designer'],
        loop: 0
      })
  return (
    <div className=''>
      
      <Slide>
      <div className='font-bodyFont flex flex-col gap-2  '>
        <p className='mdl:text-[24px] text-[18px]   '>WELCOME MY WORLD

</p>
        <h1 className='mdl:text-[36px] text-[25px] font-bold'>Hello 👋, I'm Rahul Baishnab</h1>
        
        <span className='mdl:text-[26px] text-[30px] font-bold'> A seasoned  <span className='text-green-500'>{text}</span></span>

      </div>
      <br />
      <button className=' text-[15px] font-bold border-2 py-1 px-3  border-rose-600  transition ease-in-out delay-150  hover:-translate-y-1 hover:scale-110  duration-300 '>Click Me </button>

      </Slide>

    </div>
  )
}
