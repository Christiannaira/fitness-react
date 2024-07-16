import React from 'react'

import { Typography, Stack, Box  } from '@mui/material';

import HorizontalScrollbar from './HorizontalScrollbar';
import Loader from './Loader';

const SimilarExercises = ({targetMuscleExercises}) => {

  console.log(targetMuscleExercises);

  return (
    <Box sx={{mt: {lg: '100px', xs: '0px'}}}>

      <Typography sx={{fontSize: {lg: '44px', xs: '25px'}, ml: '20px'}} fontWeight={700} color="#000" mb="33px">
    Similar <span>Target Muscle</span> exercises
      </Typography>

      <Stack direction="row" sx={{p: 2, position: 'relative'}}>

      {targetMuscleExercises.length !== 0? <h1>hello world</h1> : <Loader/>}

      {targetMuscleExercises.map((item) => (
        <h1>{item.name}</h1>
      ))}


      </Stack>

      <Typography>


      </Typography>

      <Stack>

      </Stack>

      Similar Exercises
    </Box>
  )
}

export default SimilarExercises
 