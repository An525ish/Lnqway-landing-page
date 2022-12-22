import React from 'react'
import './Home.css'
import hero from '../assets/hero.png'
import Button from './Button'
import design from '../assets/design.svg'
import branding from '../assets/branding.svg'
import marketing from '../assets/marketing.svg'
import solution from '../assets/solution.svg'
import Card from './Card'
import stats from '../assets/stats.jpg'
import Stats from './Stats'

const Home = () => {
    return (
        <section id="home" className='font-poppins '>
            <div className=" hero flex flex-col-reverse md:flex-row md:p-20 p-5 ">
                <div className='p-5 flex flex-col gap-4 self-start justify-self-center'>
                    <div className="bg-[#ecebfa] border-2 border rounded-[8px] px-5 py-2 max-w-max">
                        <p className='uppercase text-grey text-[.9rem] tracking-wide font-medium text-[#4c3cff]'>ALL IN ONE SOLUTION FOR YOU</p>
                    </div>

                    <div className="moto relative flex ">
                        <p className='text-[5.5vw] md:text-[4.3rem] capitalize font-semibold leading-tight'>Build Your Business Easy Solution
                        </p>
                    </div>

                    <div className="heroCntnt mt-4">
                        <p className='lg:text-[1.1rem] text-[1rem] lg:w-[75%] leading-6 tracking-wide text-grey'>
                            Enim luctus sociis cum quam cubilia penatibus sodales neque tristique tempor dignissim aptent sollicitudin mattis integer magnis
                        </p>
                    </div>
                    <div>
                        <Button text="Get Started" />
                    </div>
                </div>

                <div className="self-center">
                    <img src={hero} alt="hero" className='md:w-[56rem] w-[90%] m-auto' />
                </div>
            </div>

            <div className="work_process text-center bg-[aliceblue]">
                <div className='p-16'>
                    <h4 className='text-[#4c3cff] font-semibold p-5 text-2xl'> How We Work</h4>
                    <h2 className='text-3xl md:text-5xl font-semibold'> Our Work Process</h2>
                </div>
                <div className='flex flex-wrap justify-around gap-y-10 md:p-16 p-10'>
                    <Card
                        img={design}
                        title="Design"
                        desc="Tempor lacus sodaleset conub accumsan ornare life" />
                    <Card
                        img={branding}
                        title="Branding"
                        desc="Tempor lacus sodaleset conub accumsan ornare life" />
                    <Card
                        img={marketing}
                        title="Marketing"
                        desc="Tempor lacus sodaleset conub accumsan ornare life" />
                    <Card
                        img={solution}
                        title="Solution"
                        desc="Tempor lacus sodaleset conub accumsan ornare life" />
                </div>

                <div id='stats' className='relative'>
                    <img src={stats} alt="stats" className='h-[8rem] w-[100%]' />
                    <div className='absolute top-[1rem]'>
                        <Stats/>
                    </div>
                </div>

            </div>
        </section>
    )
}

export default Home