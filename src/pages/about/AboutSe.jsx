import React from 'react'
import TitelOne from '../TitelOne'
import { Fade, Slide } from 'react-awesome-reveal'




export default function AboutSe() {
  return (
    <div>
       <div className=' bg-slate-600'>
      <div className='container'>
        <div className='  '>

           <Fade delay='65'>
           <TitelOne name='About Me'/> 
            </Fade>         

          <Fade delay='80'>
          <p className='text-white  font-bodyFont py-4 md:px-20 md:text-center'>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Placeat ullam, reiciendis fuga pariatur repellat obcaecati repellendus dolor dolores totam quasi voluptates dolorem labore nostrum iure est repudiandae distinctio aut ducimus.</p>
          
          </Fade>
        </div>


        <div className='md:flex py-12  items-center gap-10'>
         
           <Slide direction='left'>
            
           <div className='border-4  md:w-full w-[250px] '><img className='md:w-[700px] w-[250px] h-[300px] md:h-[450px] ' src="./About.png" alt="" /></div>
           </Slide>

          <Slide  direction='right'>
          <div className='md:w-full font-sans md:gap-5 gap-2 flex flex-col py-4 '>
            <h1 className='text-white md:text-[32px] text-[25px]'>Hello Friends 👋</h1>
           <span className=' text-[18px]  gap-5 flex flex-col text-slate-300'>
           <h5>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Praesentium aut assumenda, nostrum unde earum maiores sed sapiente voluptas accusantium similique facere rerum rem non, eligendi saepe inventore?</h5>
           <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quam exercitationem, amet minima dolore quos veniam sint enim voluptates.</p>
           <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Omnis aspernatur soluta minima. Labore ipsa deleniti voluptatibus veniam! Quam omnis aperiam et fugit perferendis, ducimus nostrum suscipit inventore ex totam?</p>
            
           </span>
          </div>
          </Slide>
        </div>
        <button>hji</button>


      </div>

    </div>
    </div>
  )
}
