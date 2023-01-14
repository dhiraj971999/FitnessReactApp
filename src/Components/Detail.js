import React from 'react'
import "./Detail.css"
// import Logo from './logo512.png'
import BodyPart from '../assets/icons/body-part.png'
import Equipment from '../assets/icons/equipment.png'
import Target from '../assets/icons/target.png'

export default function Detail({exerciseDetail}) {
    console.log(exerciseDetail)
    const {bodyPart, gifUrl, name, target, equipment}= exerciseDetail;

    const extraDetail = [
        {
          icon: BodyPart,
          name: bodyPart,
        },
        {
          icon: Target,
          name: target,
        },
        {
          icon: Equipment,
          name: equipment,
        },
      ];

  return (
    <>
    <div className='detail-main'>
        <div className="gif">
            <img src={gifUrl} alt="" />
        </div>
        <div className="detail">
            <h2>{name}</h2>
            <p>Exercises keep you strong.{' '}
          <span style={{ textTransform: 'capitalize' }}>{name}</span> bup is one
          of the best <br /> exercises to target your {target}. It will help you improve your{' '}
          <br /> mood and gain energy.</p>
          <div>
            {extraDetail?.map((item)=>(
                <div className='target'>
                    <img src={item.icon} width='55px' height='55px' alt="" />
                    <p>{item.name}</p>
                </div>
           ))}
          </div>
        </div>
     
    </div>
    </>
  )
}
