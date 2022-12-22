import React from 'react'
import mail from '../assets/mail.svg'
import cntct from '../assets/contact.svg'
import Button from './Button'
import './contact.css'
const Contact = () => {
  return (
    <section id="contact" className='p-10 md:p-20 flex flex-col md:flex-row gap-8'>
      <div className='flex flex-col gap-8 flex-1 p-5'>
        <span className='text-[#4c3cff] font-bold text-2xl'>Get in touch</span>
        <h2 className='text-[5vw] md:text-[3.6vw] leading-tight font-semibold'>Have Any Project Plan In Your Mind?</h2>
        <p className='text-[grey]'>Parturient gravida dis auctor augue vivamus cras pellentesque hac, vametus tortor aptent turpis nam. Etiam integer eros pulvinar fusce justo nam phasellus consequat sagittis parturient.</p>
        <div className='flex flex-col gap-4'>
          <div className='flex gap-4'>
            <img src={mail} alt="" />
            <div>
              <h4 className='text-[grey]'> Mail Us 24/7</h4>
              <span className='text-[1.3rem] font-semibold'> hello.mail@gmail.com </span>
            </div>
          </div>
          <div className='flex gap-4'>
            <img src={cntct} alt="" />
            <div>
              <h4 className='text-[grey]'> For urgent help</h4>
              <span className=' text-[1.3rem] font-semibold'> +227-300-3676 </span>
            </div>
          </div>
        </div>
      </div>

      <div className="form p-5 flex flex-col gap-4 flex-1 text-[1.2rem] ">
        Your Name *
        <input type="text" className='p-3 rounded-[1rem] border-2 outline-[#4c3cff]'/>
        Your Email*
        <input type="email" className='p-3 rounded-[1rem] border-2 outline-[#4c3cff]' />
        How can we help you
        <textarea name="" id="msg" cols="30" rows="4" className='p-3 rounded-[1rem] border-2 outline-[#4c3cff] resize-none my-5' ></textarea>
        <Button text = "Submit"/>
      </div>
    </section>
  )
}

export default Contact