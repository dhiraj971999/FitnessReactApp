import './App.css';
// import Navbar from './Components/Navbar';
import {BrowserRouter, Route, Routes} from 'react-router-dom'
import Home from './Pages/Home';
import ExerciseDetails from './Pages/ExerciseDetails';



function App() {
 
  return (
    <>
    <BrowserRouter>
    
    <Routes>
      <Route  path="/" element={<Home/>}/>
      <Route  path="/exercise/:id" element={<ExerciseDetails/>}/>
    </Routes>


    {/* <Home/>
    <SearchComponent setExercises={setExercises} bodyPart={bodyPart} setBodyPart={setBodyPart} exercises={exercises}/>
    <Exercises setExercises={setExercises} bodyPart={bodyPart} exercises={exercises}/> */}
    </BrowserRouter>
    
    </>
  );
}

export default App;
