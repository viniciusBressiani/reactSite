import { Typography } from '@mui/material'
import { Box, useTheme } from '@mui/system'
import React from 'react'

const Depoimento = ({image, text, name, title}) => {
    const theme = useTheme();

  return (
    <Box
    sx={{
        display: "flex",
        gap: "4rem",
        boxShadow: "10px 10px 10px 10px rgba(0, 0, 0, 0.15)",
        padding: "2rem"
    }}>
        <Box 
        sx={{
            flex: "1"
        }}>
            <img width="100%" src={image} alt={name} />
        </Box>
        <Box
        sx={{
            display: "flex",
            flexDirection: "column",
            flex: "2",
            
        }}>
            <Typography variant='body1' textAlign='center' height="100%"><i>{`"${text}"`}</i></Typography>
            <Box
            sx={{
                display: "flex",
                flexDirection: "column",
                justifyContent: "flex-end"
            }}>
                <Typography variant='h3' marginTop='3rem'>{name}</Typography>
                <Typography variant='body1' color={theme.palette.primary}>{title}</Typography>
            </Box>
        </Box>

    </Box>
  )
}

export default Depoimento
