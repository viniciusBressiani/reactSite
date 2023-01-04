import React from 'react'
import { Box, Typography } from '@mui/material';

const Diferencial = ({title, description, icon}) => {
  return (
    <Box
    sx={{
        textAlign: "center",
    }}>
        <img width="50%" src={icon} alt="" />
        <Typography variant='h3' height="8rem" marginTop="2rem">{title}</Typography>
        <Typography variant='body1' fontWeight="400" >{description}</Typography>
    </Box>
  )
}

export default Diferencial
