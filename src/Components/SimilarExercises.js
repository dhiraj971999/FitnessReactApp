import React from 'react';
import HorizontalScrollBar from './HorizontalScrollBar'
import Loader from './Loader';
import './Detail.css'

export default function SimilarExercises({targetMuscleExercises, equipmentExercises}) {
  return (
    <div className='SimilarExercises'>
    <div>
      <h2>Similar <span style={{ color: 'rgb(250, 72, 102)' }}>Target Muscle</span> Exercises</h2>
      <div>
        {targetMuscleExercises.length ? <HorizontalScrollBar data={targetMuscleExercises} /> : <Loader/>}
      </div>
    </div>

    <div>
      <h2>Similar <span style={{ color: 'rgb(250, 72, 102)' }}>Equipment</span> Exercises</h2>
      <div>
        {equipmentExercises.length ? <HorizontalScrollBar data={equipmentExercises} /> : <Loader/>}
      </div>
    </div>
    </div>
  )
}
