import React, { useEffect, useState } from 'react'
import { exerciseOptions, fetchData } from '../Utils/fetchData';
import ExerciseCard from './ExerciseCard';
import './Exercises.css'

import Pagination from '@mui/material/Pagination';


export default function Exercises({ setExercises, bodyPart, exercises }) {

  const [currentPage, setCurrentPage] = useState(1);
  const [exercisesPerPage] = useState(9);

  useEffect(()=>{
    const fetchExercisesData= async()=>{
      let exercisesData = [];

     
        exercisesData = await fetchData('https://exercisedb.p.rapidapi.com/exercises/bodyPart/chest',exerciseOptions);
      
      setExercises(exercisesData);
    }

    fetchExercisesData();
    console.log('fetchExercisesData from Exercises"s useEffect');

  },[])
 
 
  useEffect(()=>{
    const fetchExercisesData= async()=>{
      let exercisesData = [];

      if(bodyPart==='all')
      {
        exercisesData = await fetchData('https://exercisedb.p.rapidapi.com/exercises',exerciseOptions);
      }
      else{
        exercisesData = await fetchData(`https://exercisedb.p.rapidapi.com/exercises/bodyPart/${bodyPart}`,exerciseOptions);
      }
      setExercises(exercisesData);
    }

    fetchExercisesData();

  },[bodyPart])


  const indexOfLastExercise = currentPage * exercisesPerPage;
  const indexOfFirstExercise = indexOfLastExercise - exercisesPerPage;
  const currentExercises = exercises.slice(indexOfFirstExercise, indexOfLastExercise);

  const paginate = (event, value) => {
    setCurrentPage(value);

    window.scrollTo({ top: 1250, behavior: 'smooth' });
  };

  return (
    <>      
        <h3>Showing Results</h3>
        <div className="exercise-main">
        {currentExercises.map((exercise, index) => {
          return(<div key={index} >
          <ExerciseCard exercise={exercise}/>
          </div>)
          // return (
          //   <div>
          //     <p>{exercise.name}</p>
          //     <img src={exercise.gifUrl} alt="" />
          //   </div>)
        })}
        <div style={{marginTop:'1.5rem', marginBottom:'1.5rem'}}>
        {exercises.length > 9 && (
          <Pagination
            color="standard"
            shape="rounded"
            variant="outlined"
            defaultPage={1}
            count={Math.ceil(exercises.length / exercisesPerPage)}
            page={currentPage}
            onChange={paginate}
            size="large"
          />
        )}
        </div>
      </div>
    </>
  )
}
