import React from 'react'

export default function EaduCard(eadu) {
  return (
    <div className=' text-white  font-sans flex py-2 '>
    <p className='text-[22px] text-slate-300'> {eadu.sub}</p>
      <h1 className='text-[35px]  font-bold'>{eadu.name}</h1>
      <p className='text-[28px]'>{eadu.dec}</p>
    </div>
  )
}
