import React from 'react'
// import background from './background.jpg'
import './BodyPart.css'
import Gym from '../assets/icons/gym.png'

export default function BodyPart({item, bodyPart, setBodyPart}) {
  
  return (
    <>
      <div className="main-bodypart" onClick={()=> setBodyPart(item)} >
        <div className="card">
            <img src={Gym} alt="muscle"/>
            <h4>{item}</h4>
        </div>
      </div>
    </>
  )
}
