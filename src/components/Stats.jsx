import React from 'react'
import './stats.css'
import unity from '../assets/unity.png'
import react from '../assets/react.png'
import mongo from '../assets/mongo.png'
import typescript from '../assets/typescript.png'
import vue from '../assets/vue.png'
import python from '../assets/python.png'
import csharp from '../assets/csharp.png'
import php from '../assets/php.png'
import aws from '../assets/aws.png'

const Stats = () => {
  return (
    <div class="slider">
      <div class="slide-track">
        <div class="slide">
          <img src={unity} alt="" />
        </div>
        <div class="slide">
          <img src={react} alt="" />
        </div>
        <div class="slide">
          <img src={mongo} alt="" />
        </div>
        <div class="slide">
          <img src={typescript} alt="" />
        </div>
        <div class="slide">
          <img src={vue} alt="" />
        </div>
        <div class="slide">
          <img src={python} alt="" />
        </div>
        <div class="slide">
          <img src={csharp} alt="" />
        </div>
        <div class="slide">
          <img src={php} alt="" />
        </div>
        <div class="slide">
          <img src={aws} alt="" />
        </div>
      </div>
    </div>
  )
}

export default Stats