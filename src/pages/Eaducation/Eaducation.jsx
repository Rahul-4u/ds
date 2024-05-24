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
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          infinite: true,
          dots: true
        }
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          initialSlide: 4
        }
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        }
      }
    ]
  };
  return (
    <div className='py-8 bg-slate-700 '>
       <div>
        <TitelOne name="Eaducation"/>
       </div>

       <div className="cards py-10 container mdl:w-[90%]  items-center justify-center ">
       
       <Slider {...settings} >
        
         
       <div className=' bg-slate-700 border border-green-400 p-5 rounded-2xl'>
            <EaduCard sub="2019"/>
            <EaduCard name="huio;yiutyuit6" />
            <EaduCard/>

          </div>

          <div className=' bg-slate-700 border border-green-400 p-5 rounded-2xl'>
            <EaduCard sub="2019"/>
            <EaduCard name="huio;yiutyuit6" />
            <EaduCard/>

          </div>
          <div className=' bg-slate-700 border border-green-400 p-5 rounded-2xl'>
            <EaduCard sub="2019"/>
            <EaduCard name="huio;yiutyuit6" />
            <EaduCard/>

          </div>
          <div className=' bg-slate-700 border border-green-400 p-5 rounded-2xl'>
            <EaduCard sub="2019"/>
            <EaduCard name="huio;yiutyuit6" />
            <EaduCard/>

          </div>
          <div className=' bg-slate-700 border border-green-400 p-5 rounded-2xl'>
            <EaduCard sub="2019"/>
            <EaduCard name="huio;yiutyuit6" />
            <EaduCard/>

          </div>
         
        

       </Slider>
         
       </div>
    </div>
  )
}
