import React from 'react'
import { Box,Stack,Typography } from '@mui/material'
import HorizontalScrollbar from './HorizontalScrollbar'
import Loader from './Loader'

const SimilarExercises = ({targetMuscleExercises,equipmentExercises}) => {
  return (
    <Box sx={{mt:{ lg:'100px' ,xs:'0px'}}}>
        <Typography variant='h3'>
          Exercises that target the same muscle group.
          <Stack direction="row"  sx={{p:'2',position:'relative' ,mt:{lg: '80px' , xs: '10px'}}}>
              {targetMuscleExercises.length ? <HorizontalScrollbar data={targetMuscleExercises}/> : <Loader />}
          </Stack>
        </Typography>
        <Typography variant='h3' mt={10}>
          Exercises that target the same equipment.
          <Stack direction="row"  sx={{p:'2',position:'relative' ,mt:{lg: '80px' , xs: '10px'}}}>
              {equipmentExercises.length ? <HorizontalScrollbar data={equipmentExercises}/> : <Loader />}
          </Stack>
        </Typography>
    </Box>
  )
}

export default SimilarExercises