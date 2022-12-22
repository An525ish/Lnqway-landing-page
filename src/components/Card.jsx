import React from 'react'
import card from '../assets/card.png'
import './card.css'

const Card = (props) => {
    return (
        <div className='cards'>
            <img src={card} alt="card" className='h-[19rem] max-w-full' />
            <div className='card'>
                <img src={props.img} alt="" />
                <h2 className='text-2xl font-semibold'> {props.title} </h2>
                <p className='text-[grey]'> {props.desc} </p>
            </div>
        </div>
    )
}

export default Card