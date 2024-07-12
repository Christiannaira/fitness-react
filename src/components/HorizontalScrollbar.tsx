import React from 'react';
import { Box } from '@mui/material';
import { ScrollMenu, VisibilityContext } from 'react-horizontal-scrolling-menu';
import 'react-horizontal-scrolling-menu/styles.css'; // import react-horizontal-scrolling-menu

import RightArrowIcon from '../assets/icons/right-arrow.png';
import LeftArrowIcon from '../assets/icons/left-arrow.png';
import BodyPart from './BodyPart';

const HorizontalScrollbar = ({data, bodyPart, setBodyPart}) => {


  return (
    <div>
        <ScrollMenu>

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
