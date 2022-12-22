import React from 'react'
import logo from '../assets/logo.png'

const Footer = () => {
    return (
        <footer>
            <div className='bg-[#1c1c1c] text-white p-10 md:p-12 flex flex-wrap justify-around text-[1.2rem] gap-y-8'>
                <div className='w-[80%] md:w-[30%] '>
                    <img src={logo} alt="logo" className='w-[10rem]' />
                    <p className='mt-8'>Tempus nula rhoncus euismod curae masa cras justo, quisque semper molestie primis porttitor mus tempor dapibus</p>
                    <div>
                        <div className="socials">
                            <ul class="wrapper">
                                <li class="icon facebook">
                                    <span class="tooltip">Facebook</span>
                                    <span><ion-icon name="logo-facebook"></ion-icon></span>
                                </li>
                                <li class="icon twitter">
                                    <span class="tooltip">Twitter</span>
                                    <span><ion-icon name="logo-twitter"></ion-icon></span>
                                </li>
                                <li class="icon instagram">
                                    <span class="tooltip">Instagram</span>
                                    <span><ion-icon name="logo-instagram"></ion-icon></span>
                                </li>
                                <li class="icon skype">
                                    <span class="tooltip">Skype</span>
                                    <span><ion-icon name="logo-skype"></ion-icon></span>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
                <div className="services leading-loose p-5">
                    <h2 className='text-white text-[1.5rem] font-semibold'>Services</h2>
                    <li className='text-dimWhite list-none
                    hover:text-white'><a href="#">Branding Design</a></li>
                    <li className='text-dimWhite list-none hover:text-white'><a href="#">Website Development</a></li>
                    <li className='text-dimWhite list-none hover:text-white'><a href="#">App Design</a></li>
                    <li className='text-dimWhite list-none hover:text-white'><a href="#">Digital Marketing</a></li>
                    <li className='text-dimWhite list-none hover:text-white'><a href="#">Product Development</a></li>
                </div>
                <div className="resources leading-loose p-5">
                    <h2 className='text-white text-[1.5rem] font-semibold'>Blog</h2>
                    <li className='text-dimWhite list-none hover:text-white'><a href="#">Case Study</a></li>
                    <li className='text-dimWhite list-none hover:text-white'><a href="#">Portfolio</a></li>
                    <li className='text-dimWhite list-none hover:text-white'><a href="#">Team pages</a></li>
                </div>
                <div className="support leading-loose p-5">
                    <h2 className='text-white text-[1.5rem] font-semibold'>Support</h2>
                    <li className='text-dimWhite list-none hover:text-white'><a href="#">Contact</a></li>
                    <li className='text-dimWhite list-none hover:text-white'><a href="#">Privacy Policy</a></li>
                    <li className='text-dimWhite list-none hover:text-white'><a href="#">Terms of Use</a></li>
                </div>
            </div>

            <div className='bg-[#282828] text-white flex flex-wrap justify-center md:justify-between py-3 px-10 text-[1.2rem] gap-y-2 gap-x-6'>
                <div className='flex gap-6'>
                    <span className='hover:text-[#583bff] duration-500'><a href="#">Privacy & Terms</a> </span>
                    <span className='hover:text-[#583bff] duration-500'><a href="#">Contact Us</a> </span>
                </div>
                <span>Copyright @2022 <a href="#" className='hover:text-[#583bff]  duration-500'>Linqway</a> </span>
                <span className='hover:text-[#583bff] duration-500'><a href="#">About Us</a></span>
            </div>
        </footer>

    )
}

export default Footer