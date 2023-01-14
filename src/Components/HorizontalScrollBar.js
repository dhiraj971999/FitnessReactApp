import React, { useContext } from 'react';
import BodyPart from './BodyPart';
import {} from 'react-horizontal-scrolling-menu'
import { ScrollMenu, VisibilityContext } from 'react-horizontal-scrolling-menu';
import ExerciseCard from './ExerciseCard';
// import RightArrowIcon from '../assets/icons/right-arrow.png';
// import LeftArrowIcon from '../assets/icons/left-arrow.png';

 
export default function HorizontalScrollBar({data, bodyPart, setBodyPart, isBodyParts}) {

  // const LeftArrow = () => {
  //   const { scrollPrev } = useContext(VisibilityContext);
  
  //   return (
  //     <div onClick={() => scrollPrev()} className="right-arrow">
  //       <img src={LeftArrowIcon} alt="right-arrow" />
  //     </div>
  //   );
  // };
  
  // const RightArrow = () => {
  //   const { scrollNext } = useContext(VisibilityContext);
  
  //   return (
  //     <div onClick={() => scrollNext()} className="left-arrow">
  //       <img src={RightArrowIcon} alt="right-arrow" />
  //     </div>
  //   );
  // };


  return (
    <>
    <ScrollMenu>
      {data.map((item)=>
        <div 
        style={{backgroundColor:'white', margin:'0px 20px'}}
        key={item.id || item}
        itemID={item.id || item}
        title={item.id || item}
        >
          {isBodyParts ? <BodyPart item={item} bodyPart={bodyPart} setBodyPart={setBodyPart}/>: <ExerciseCard exercise={item}/>}
        </div>
      )}
      </ScrollMenu>
    </>
  )
}
