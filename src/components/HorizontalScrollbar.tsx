import React from 'react';
import { Box } from '@mui/material';

import BodyPart from './BodyPart';

const HorizontalScrollbar = ({data}) => {

    // console.log(data);

  return (
    <div>

        {data.map((item) => (

            <Box m="0 40px" key={item.id || item} title={item.id || item}>

            <BodyPart item={item} bodyPart={bodyPart} setBodyPart={setBodyPart}/>

            </Box>

        ))}

    </div>
   
  )
}

export default HorizontalScrollbar
