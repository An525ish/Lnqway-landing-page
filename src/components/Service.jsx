import React from 'react'
import pic from '../assets/05.svg'
import Servicecard from './Servicecard'
import Testimonialcards from './Testimonialcards'
import profile1 from '../assets/profile-1.jpg'
import profile2 from '../assets/profile-2.jpg'
import profile3 from '../assets/profile-3.jpg'

const Service = () => {
    return (
        <section id='service'>
            <div className="work_process text-center bg-[aliceblue] p-10">
                <div className='p-0 md:p-16'>
                    <h4 className='text-[#4c3cff] font-bold p-5 text-[1.5rem]'> Our Services</h4>
                    <h2 className='text-3xl md:text-5xl font-bold'> Service We Provide</h2>
                </div>
                <div className='p-5 mt-8 md:p-20 flex flex-wrap justify-around gap-y-10 gap-x-5 md:w-[80%] md:m-auto'>
                    <Servicecard
                        img={pic}
                        title="Web Development"
                        desc="Nisul cong rhon risus dapibus habitant mauris eget ante er pharetra hire to Give" />
                    <Servicecard
                        img={pic}
                        title="App development"
                        desc="Nisul cong rhon risus dapibus habitant mauris eget ante er pharetra hire to Give" />
                    <Servicecard
                        img={pic}
                        title="AWS"
                        desc="Nisul cong rhon risus dapibus habitant mauris eget ante er pharetra hire to Give" />
                    <Servicecard
                        img={pic}
                        title="Design & UX"
                        desc="Nisul cong rhon risus dapibus habitant mauris eget ante er pharetra hire to Give" />
                    <Servicecard
                        img={pic}
                        title="Ecommerce"
                        desc="Nisul cong rhon risus dapibus habitant mauris eget ante er pharetra hire to Give" />
                    <Servicecard
                        img={pic}
                        title="Digital Marketing"
                        desc="Nisul cong rhon risus dapibus habitant mauris eget ante er pharetra hire to Give" />
                </div>

                <div className="testimonials p-0 md:p-20 pt-10">
                    <div className='p-10 pt-0'>
                        <h4 className='text-[#4c3cff] font-bold p-5 text-2xl'> How We Work</h4>
                        <h2 className='text-3xl md:text-5xl font-bold py-10 pt-0'> Meet Our Team</h2>
                    </div>
                    <div className="testi-cards flex flex-wrap justify-around gap-y-12">
                        <Testimonialcards
                            first="John"
                            second="Doe"
                            img={profile1}
                            role="Designer"
                            facebook="#"
                            twitter="#"
                            github="#"
                        />
                        <Testimonialcards
                            first="Elizabeth"
                            second="Victoria"
                            img={profile2}
                            role="Tester"
                            facebook="#"
                            twitter="#"
                            github="#"
                        />
                        <Testimonialcards
                            first="Anish"
                            second="Kumar"
                            img={profile3}
                            role="Developer"
                            facebook="#"
                            twitter="#"
                            github="#"
                        />
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Service