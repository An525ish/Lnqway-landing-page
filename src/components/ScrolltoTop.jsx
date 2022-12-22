import React from 'react'
import arrow from '../assets/scroll1.png'

const ScrolltoTop = () => {
  return (
    <button
    className={'fixed bottom-5 right-5 h-[3rem] w-[3rem] bg-white text-white rounded-[50%] grid place-items-center cursor-pointer shadow-md' }
    onClick={() => {
        window.scrollTo({top: 0, left: 0, behavior: 'smooth'})
    }}>
        <img src={arrow} alt="arrow" className='w-[2rem] drop-shadow'/>
    </button>
  )
}

export default ScrolltoTop