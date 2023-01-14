import React from 'react'
import { Link } from 'react-router-dom'
import './Exercises.css'
// import ExerciseDetails from '../Pages/ExerciseDetails'

export default function ExerciseCard({ exercise }) {
    
    return (
        <>
        <Link onClick={()=>window.scrollTo({ top: 0, behavior: 'smooth' })} to={`/exercise/${exercise.id}`}>
            <div className='exercise-card'> 
                <div className='exercise-dash'></div>               
                <img src={exercise.gifUrl} alt="" />
                <button>{exercise.bodyPart}</button>
                <button>{exercise.target}</button>
                <p>{exercise.name}</p>
            </div>
            </Link>
        </>
    )
}
