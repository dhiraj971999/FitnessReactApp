import React, { useState } from 'react'

import SearchComponent from '../Components/SearchComponent';
import HomeBanner from '../Components/HomeBanner';
import Exercises from '../Components/Exercises';
import Footer from '../Components/Footer';


export default function Home() {
    const [exercises, setExercises] = useState([]);
    const [bodyPart, setBodyPart] = useState(['all']);
    console.log(bodyPart);
    return (
        <div>
            <HomeBanner />
            <SearchComponent setExercises={setExercises} bodyPart={bodyPart} setBodyPart={setBodyPart} exercises={exercises} />
            <Exercises setExercises={setExercises} bodyPart={bodyPart} exercises={exercises} />
            <Footer/>
        </div>
    )
}
