import React from 'react'
import { Box, Typography } from '@mui/material';

const Card = ({title, info}) => {
  return (
    <Box
        sx={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            justifyContent: "center",
            boxShadow: "10px 5px 5px 5px rgba(0, 0, 0, 0.1)",
            borderRadius:"15px",
            padding:"2rem",
            "p":{
                fontSize: "2.5rem",
                fontWeight: "400"
            }
        }}>
        <Typography variant='h3'>{title}</Typography>
        <p>{info}</p>
    </Box>
  )
}

export default Card