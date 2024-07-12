import React from 'react';
import { Box } from '@mui/material';

const HorizontalScrollbar = ({data}) => {

    // console.log(data);

  return (
    <div>

        {data.map((item) => (

            <Box m="0 40px" key={item.id || item} title={item.id || item}>

            {item}

            </Box>

        ))}

    </div>
   
  )
}

export default HorizontalScrollbar
