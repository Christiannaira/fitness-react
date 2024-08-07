import React, { useContext } from 'react';
import { Box, Typography } from '@mui/material';
import { ScrollMenu, VisibilityContext } from 'react-horizontal-scrolling-menu';
import 'react-horizontal-scrolling-menu/styles.css'; // import react-horizontal-scrolling-menu

import RightArrowIcon from '../assets/icons/right-arrow.png';
import LeftArrowIcon from '../assets/icons/left-arrow.png';
import BodyPart from './BodyPart';
import ExerciseCard from './ExerciseCard';


const LeftArrow = () => {

    const {scrollPrev} = useContext(VisibilityContext);

    return (
        <Typography onClick={() => scrollPrev()} className="right-arrow">
            <img src={LeftArrowIcon} alt="right-arrow" />
        </Typography>
    )

}

const RightArrow = () => {

    const {scrollNext} = useContext(VisibilityContext);

    return (
        <Typography onClick={() => scrollNext()} className="left-arrow">
            <img src={RightArrowIcon} alt="left-arrow" />
        </Typography>
    )

}


const HorizontalScrollbar = ({data, bodyPart, setBodyPart, bodyParts}) => {

    // console.log(data);

  return (
    
     
     <ScrollMenu LeftArrow={LeftArrow} RightArrow={RightArrow}>

     {
            data.map((item) => (

                <Box
                key={item.id || item}
                title={item.id || item}
                m="0 40px"
                >

                    {bodyParts? <BodyPart item={item} setBodyPart={setBodyPart} bodyPart={bodyPart}/> : <ExerciseCard exercise={item} />}

                </Box>

            ))
        }
    

     </ScrollMenu>

       

    
   
  )
}

export default HorizontalScrollbar
