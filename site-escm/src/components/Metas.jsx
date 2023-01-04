import React from 'react'
import { Box, Typography } from '@mui/material';
import copos from 'assets/Copos@x2W.webp';

const metas = [
  "Produzir sua cerveja artesanal - fresca e saborosa - em casa;",
"Entender o passo-a-passo da fabricação de cervejas artesanais;",
"Dominar a brassagem;",
"Identificar as etapas de elaboração de receitas;",
"Melhorar as técnicas que você já conhece e atingir padrões de qualidade ainda melhores em suas cervejas artesanais.",
]

const Metas = () => {
  return (
    <Box
      sx={{
        marginTop: "4rem",
        display: "grid",
        gridTemplateColumns: "calc(47% - 1.5rem) 1fr",
        gap:"3rem",
        maxWidth: "1140px",
        marginInline: "auto"
      }}
    >
      <Box>
        <img width="70%" src={copos} alt="Copos de Cerveja" />
      </Box>
      <Box>
        <Typography variant='h2'
        sx={{
          marginLeft: "10px",
        }}>No curso de Cervejeiro Caseiro você irá:</Typography>
        <Box component="ul"
          sx={{
            display: "flex",
            flexDirection: "column",
            gap:"2rem",
            
            "li":{
              fontSize:"2.5rem",
              margin: 0
            }
          }}>
          {
            metas.map((meta, index) => {
              return <li key={index}>{meta}</li>
            })
          }

        </Box>
      </Box>
    </Box>
  )
}

export default Metas
