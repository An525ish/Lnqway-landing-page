import React from 'react'
import logo from '../assets/logo.png'
import menu from '../assets/menu.png'
import './navbar.css'
import { useState } from 'react'
import Button from './Button'

const Navbar = () => {
    const [toggle, setToggle] = useState(false)
    return (
        <nav className='flex md:justify-evenly xs:justify-between p-5 md:p-10 text-[1.1rem] items-center font-poppins sticky z-[99]'>
            <div className="logo">
                <img src={logo} alt="logo" className='w-[10rem] md:w-[12rem]'/>
            </div>
            <div className="nav-links md:w-[40%]">
                <ul className='md:flex justify-around hidden font-semibold'>
                    <li><a href="#home">Home</a></li>
                    <li><a href="#about">About</a></li>
                    <li><a href="#service">Service</a></li>
                    <li><a href="#portfolio">Portfolio</a></li>
                    <li><a href="#blog">Blog</a></li>
                    <li><a href="#contact">Contact</a></li>
                </ul>
            </div>
            <div className='relative z-[-1] '>
                <Button
                text = "Let's Talk" />
            </div>
            <div className="menu block md:hidden relative z-0">
                <img
                src={menu}
                alt="menu"
                className='w-[2.5rem]'
                onClick={() => setToggle((prev) => !prev)} />
            </div>

            <div className={ `${toggle ? 'flex-col' : 'hidden'} ss-nav fixed h-[100vh] w-[22rem] bg-[aliceblue] right-0 top-0 p-10 text-center`}>
                <img
                src="http://cdn.onlinewebfonts.com/svg/img_572334.png"
                alt="menu"
                className='w-[3rem] cursor-pointer'
                onClick={() => setToggle((prev) => !prev)} />

                <div className="logo p-3">
                    <img src={logo} alt="logo" className='w-[10rem] my-3' />
                </div>
                <ul className='xs:flex flex-col justify-between hidden font-semibold h-[55%]'>
                    <li><a href="#home"><button class="button">
                        Home
                    </button></a></li>
                    <li><a href="#about"><button class="button">
                    About
                    </button></a></li>
                    <li><a href="#service"><button class="button">
                    Service
                    </button></a></li>
                    <li><a href="#portfolio"><button class="button">
                    Portfolio
                    </button></a></li>
                    <li><a href="#blog"><button class="button">
                    Blog
                    </button></a></li>
                    <li><a href="#contact"><button class="button">
                    Contact
                    </button></a></li>
                </ul>
                <div className="socials mt-10 flex justify-between">
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
        </nav>
    )
}

export default Navbar