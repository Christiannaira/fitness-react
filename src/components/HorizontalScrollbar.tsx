import React, { useContext } from 'react';
import { Box, Typography } from '@mui/material';
import { ScrollMenu, VisibilityContext } from 'react-horizontal-scrolling-menu';
import 'react-horizontal-scrolling-menu/styles.css'; // import react-horizontal-scrolling-menu

import RightArrowIcon from '../assets/icons/right-arrow.png';
import LeftArrowIcon from '../assets/icons/left-arrow.png';
import BodyPart from './BodyPart';


const LeftArrow = () => {

    const {scorllPrev} = useContext(VisibilityContext);

    return (
        <Typography onClick={() => scorllPrev()} className="right-arrow">
            <img src={LeftArrowIcon} alt="right-arrow" />
        </Typography>
    )

}

const RightArrow = () => {

    const {scorllNext} = useContext(VisibilityContext);

    return (
        <Typography onClick={() => scorllNext()} className="left-arrow">
            <img src={RightArrowIcon} alt="left-arrow" />
        </Typography>
    )

}


const HorizontalScrollbar = ({data, bodyPart, setBodyPart}) => {


  return (
    <div>
        <ScrollMenu LeftArrow={LeftArrow} RightArrow={RightArrow}>

        {data.map((item) => (

            <Box m="0 40px" key={item.id || item} title={item.id || item}>

            <BodyPart item={item} bodyPart={bodyPart} setBodyPart={setBodyPart}/>

            </Box>

        ))}

        </ScrollMenu>
    

    </div>
   
  )
}

export default HorizontalScrollbar
