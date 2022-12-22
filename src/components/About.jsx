import React from 'react'
import Button from './Button'
import about from '../assets/about.jpg'


const About = () => {
    return (
        <section id="about" classname="font-poppins" >
            <div className=" flex flex-col md:flex-row md:p-20 md:gap-20 p-5 justify-around">

                <div className="self-center p-5 ">
                    <img src={about} alt="hero" className='md:w-[80rem] w-[90%] m-auto' />
                </div>


                <div className='p-5 flex flex-col gap-5 md:gap-8 self-center justify-self-center'>

                    <p className='text-[1.5rem] tracking-wide font-bold text-[#4c3cff]'>
                        More About Company</p>

                    <div className="moto relative flex ">
                        <p className='text-[5.5vw] md:text-[3rem] capitalize font-semibold leading-tight'>Marketing Your Business More Unique
                        </p>
                    </div>

                    <div className="heroCntnt mt-4">
                        <p className='lg:text-[.95rem] text-[1rem] lg:w-[75%] leading-6 tracking-wide text-grey'>
                            Lorem ipsum dolor sit amet consectetur adipiscing italeo tellus, luctus nec mattis pulvinar dapibus leo. dolor sit amet, consectetur adipiscing elit. dkalk elit tellus, luctus nec mattis.
                            <br />
                            <br />
                            Natoque turpis metus mollis dignissim sociosqu curabitur suspendisse eu habitasse, arcu hendrerit vitae leo laoreet nulla


                        </p>
                    </div>
                    <div>
                        <Button text="Get Started" />
                    </div>
                </div>

            </div>
        </section>
    )
}

export default About