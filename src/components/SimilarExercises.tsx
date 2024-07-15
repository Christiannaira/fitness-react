import React from 'react'

import { Typography, Stack, Box  } from '@mui/material'

const SimilarExercises = ({targetMuscleExercises, equipmentExercises}) => {
  return (
    <Box sx={{mt: {lg: '100px', xs: '0px'}}}>

      <Typography sx={{fontSize: {lg: '44px', xs: '25px'}, ml: '20px'}} fontWeight={700} color="#000" mb="33px">
    Similar <span>Target Muscle</span> exercises
      </Typography>

      <Stack direction="row" sx={{p: 2, position: 'relative'}}>

    {targetMuscleExercises}

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
 