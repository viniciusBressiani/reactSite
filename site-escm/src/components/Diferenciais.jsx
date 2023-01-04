import React from 'react'
import { Box, Typography, useTheme } from '@mui/material';
import { diferenciais } from 'data/diferenciaisData.js';
import Diferencial from 'components/Diferencial'

const Diferenciais = () => {
  const theme = useTheme();

  return (
    <Box
    sx={
      {
        background: theme.palette.background,
        padding: "4rem",
        marginTop: "4rem"
      }
    }>
      <Box
      sx={{
        
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        maxWidth:"calc(1140px + 6rem)",
        marginInline: "auto"
      }}>
        <Typography variant='h2' marginBottom="3rem">Diferenciais do nosso Curso:</Typography>
        <Box
          sx={{
            display: "grid",
            gridTemplateColumns: "repeat(3, 1fr)",
            alignContent: "center",
            gap:"6rem"
          }}>
           {
            diferenciais.CCO.map((diferencial, index)=> {
              return (
              <Diferencial title={diferencial.title} description={diferencial.description} icon={diferencial.icon} />
                )
            })
           }
        </Box>
      </Box>
    </Box>
  )
}

export default Diferenciais
