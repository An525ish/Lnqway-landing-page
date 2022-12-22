import React from 'react'
import './customer-testimonial.css'

const Customertestimonial = (props) => {
    return (
        <div class="customer">
            <div className='img-wrapper'>
                <img src={props.img} alt="" className='customer-img' />
            </div>
            <div class="customer-info">
                <p class="text-body">{props.desc}</p>
                <p class="text-title">{props.name}</p>
                <div className='flex justify-around w-[12rem]'>
                    <ion-icon name="star"></ion-icon>
                    <ion-icon name="star"></ion-icon>
                    <ion-icon name="star"></ion-icon>
                    <ion-icon name="star"></ion-icon>
                    <ion-icon name="star-half"></ion-icon>
                </div>
            </div>
        </div>
    )
}

export default Customertestimonial