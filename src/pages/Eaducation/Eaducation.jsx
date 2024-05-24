import React from 'react'

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import TitelOne from '../TitelOne'
import EaduCard from './EaduCard'
import Slider from "react-slick";

export default function Eaducation() {

    var settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 2,
        slidesToScroll: 1
      };

  return (
    <div className='py-8 bg-slate-700 '>
       <div>
        <TitelOne name="Eaducation"/>
       </div>

       <div className="cards py-5 container   items-center justify-center ">
       <Slider {...settings} >
         <div className="card py-4  w-[20%] container bg-slate-500 mx-5">
            <EaduCard sub='2019'/>
            <EaduCard name='SSC (Secondary School Certificate)'/>
            <EaduCard dec='(Sorolal Hig Scholl)'/>
            
        </div>

        <div className="card py-4 container bg-slate-500 mx-5">
            <EaduCard sub='2019'/>
            <EaduCard name='SSC (Secondary School Certificate)'/>
            <EaduCard dec='(Sorolal Hig Scholl)'/>
            
        </div>

        <div className="card py-4 container bg-slate-500 mx-5">
            <EaduCard sub='2019'/>
            <EaduCard name='SSC (Secondary School Certificate)'/>
            <EaduCard dec='(Sorolal Hig Scholl)'/>
            
        </div>

        <div className="card py-4 container bg-slate-500 mx-5">
            <EaduCard sub='2019'/>
            <EaduCard name='SSC (Secondary School Certificate)'/>
            <EaduCard dec='(Sorolal Hig Scholl)'/>
            
        </div>

        
        </Slider>
         
       </div>
    </div>
  )
}
