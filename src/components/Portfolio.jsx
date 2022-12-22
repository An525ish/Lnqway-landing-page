import React from 'react'
import Swiper from './swiper'

const Portfolio = () => {
    return (
        <section id="portfolio" className='bg-[#f7f7f7]'>
            <div className='text-center p-10 md:p-16'>
                <h4 className='text-[#4c3cff] font-bold p-5 text-2xl'> Our Customer Testimonial</h4>
                <h2 className='text-3xl md:text-5xl font-bold'> Customer's Feedbacks</h2>
            </div>

            <div className='p-0 md:p-5'>
                <Swiper/>
            </div>
        </section>
    )
}

export default Portfolio