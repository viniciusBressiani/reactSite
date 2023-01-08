import React from 'react'
import { Box, Typography } from '@mui/material';

const Professor = ({title, description, image}) => {
  return (
    <Box
    sx={{
        textAlign: "center",
    }}>
        <Box component='img' width="50%" borderRadius="50%" src={image} alt={title} />
        <Typography variant='h3' height="8rem" margin="2rem auto">{title}</Typography>
        <Typography variant='body1' fontWeight="400" >{description}</Typography>
    </Box>
  )
}

export default Professor
