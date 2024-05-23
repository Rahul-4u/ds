import React from 'react'
import { Slide } from 'react-awesome-reveal'

export default function HomeRight() {
  return (
    <div className='mdl:mr-20 mb-10'>
      <Slide direction="right">
      <div className=" w-[200px] h-[300px] md:w-[250px] flex  justify-center  relative md:h-[500px]  ">
        <img className=" z-10" src="banner.png" alt="" />
        <div className=" bg-black  opacity-30 border-[6px] rounded-lg border-red-500 h-[200px]  md:h-[350px] shadow-2xl shadow-black -bottom-5 w-[210px] md:w-[350px] absolute"></div>
      </div>
      </Slide>
    </div>
  )
}
