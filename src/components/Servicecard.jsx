import React from 'react'
import pic from '../assets/05.svg'

const Servicecard = (props) => {
  return (
    <div className='service-card p-8 w-[18rem] text-left flex flex-col gap-4 bg-white rounded-[1rem] justify-center hover:translate-y-[-1rem] duration-300'>
      <div className="logo">
        <img src={props.img} alt={props.img} />
      </div>
      <h2 className='text-2xl font-semibold'> {props.title}</h2>
      <p className='text-[grey]'>
        {props.desc}
      </p>
      <a href="#"><span className='text-[#4c3cff] font-semibold'>Learn More  </span></a>
    </div>
  )
}

export default Servicecard