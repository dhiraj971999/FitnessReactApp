import React, { useEffect, useState } from 'react'
import './SearchComponent.css';
import { exerciseOptions, fetchData } from '../Utils/fetchData';
import HorizontalScrollBar from './HorizontalScrollBar';

export default function SearchComponent({setExercises, bodyPart, setBodyPart, exercises}) {
    const [value, setValue]= useState('');
    // const [exercises, setExercises]=useState([]);
    const [bodyParts, setBodyParts]= useState([]);

    useEffect(() => {
      const fetchExercisesData = async () => {
        const bodyPartsData = await fetchData('https://exercisedb.p.rapidapi.com/exercises/bodyPartList', exerciseOptions);
  
        setBodyParts(['all', ...bodyPartsData]);
      };
  
      fetchExercisesData();
      console.log('bodyParts from SearchComponent"s useEffect');
    }, []);

    const handleSearch= async ()=>{
      if(value){
        const exerciseData= await fetchData('https://exercisedb.p.rapidapi.com/exercises',exerciseOptions);

        const searchedExercises = exerciseData?.filter((exercise)=> exercise.name.toLowerCase().includes(value))
        || exerciseData?.filter((exercise)=> exercise.target.toLowerCase().includes(value))
        || exerciseData?.filter((exercise)=> exercise.bodyPart.toLowerCase().includes(value))
        || exerciseData?.filter((exercise)=> exercise.equipment.toLowerCase().includes(value));

        setValue('');
        setExercises(searchedExercises);
        
      }
      console.log(exercises);
    }

  return (
    <>
    <div className="container">
        <h2>Awesome Exercises You <br/> Should Know</h2>
        <div className="search">
        <input type="text" value={value} placeholder="Search exercises by names, bodypart, equipment..." onChange={(e)=>setValue(e.target.value.toLowerCase())}/>
        <button onClick={handleSearch}>Serach</button>
        </div>
    </div>
    
    <HorizontalScrollBar data={bodyParts} bodyPart={bodyPart} setBodyPart={setBodyPart} isBodyParts/>
    </>
  )
}
