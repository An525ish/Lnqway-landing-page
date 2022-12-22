import React from 'react'
import './button.css'
const Button = (props) => {
    return (
        <div className="btn">
            <button> {props.text} </button>
        </div>
    )
}

export default Button