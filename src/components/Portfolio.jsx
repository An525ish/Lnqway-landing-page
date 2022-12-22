import React from 'react'
import Customertestimonial from './customertestimonial'
import profile1 from '../assets/profile-1.jpg'
import profile2 from '../assets/profile-2.jpg'
import profile3 from '../assets/profile-3.jpg'
import Carousel from './Carousel'
import Swiper from './swiper'

const Portfolio = () => {
    return (
        <section id="portfolio" className='p-10 md:p-16 bg-[#f7f7f7]'>
            <div className='text-center'>
                <h4 className='text-[#4c3cff] font-bold p-5 text-2xl'> Our Customer Testimonial</h4>
                <h2 className='text-3xl md:text-5xl font-bold'> Customer's Feedbacks</h2>
            </div>

            <div>
                <Swiper/>
            </div>
        </section>
    )
}

export default Portfolio