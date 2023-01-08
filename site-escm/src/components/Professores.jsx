import React from 'react';
import {professores} from 'data/professoresData.js';
import { Box, Typography } from '@mui/material';
import Professor from './Professor';

const Professores = () => {
  return (
    <Box
      sx={{
        
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        maxWidth:"calc(1140px + 6rem)",
        marginInline: "auto"
      }}>
        <Typography variant='h2' margin="6rem auto">Nossos Professores são altamente capacitados:</Typography>
        <Box
          sx={{
            display: "grid",
            gridTemplateColumns: "repeat(3, 1fr)",
            alignContent: "center",
            gap:"6rem"
          }}>
      {
        professores.CCO.map(({title, description, image}, index) => {
          return <Professor key={index} title={title} description={description} image={image} />
        })
      }
    </Box>
    </Box>
    
  )
}

export default Professores
