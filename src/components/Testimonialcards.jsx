import React from 'react'
import './testimonials-card.css'


const Testimonialcards = (props) => {
    return (

        <div class="testi-card">
            <div class="blob"></div>
            <img src={props.img} alt="" className='img ' />
            <h2>{props.first}<br /><span>{props.second}</span><br /><span className='font-semibold leading-loose'>-{props.role}-</span></h2>
            <p>
                <span><a href={props.facebook}><ion-icon name="logo-facebook"></ion-icon></a></span>
                <span><a href={props.twitter}><ion-icon name="logo-twitter"></ion-icon></a></span>
                <span><a href={props.github}><ion-icon name="logo-github"></ion-icon></a></span>
            </p>
        </div>
    )
}

export default Testimonialcards