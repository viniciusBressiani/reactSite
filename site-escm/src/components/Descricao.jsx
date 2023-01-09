import React from 'react'
import { Box, Typography } from '@mui/material';
import copos from 'assets/Copos@x2W.webp';

const description = [
 "Beber cerveja é bom, mas poder beber uma cerveja produzida na sua própria casa é fantástico!",

  "Com o curso de Cervejeiro Caseiro da ESCM você irá mergulhar no universo das cervejas e conhecer ferramentas para produzir a sua própria bebida, em casa, dentro dos padrões técnicos e de qualidade.",
  
  "Além disso, você conhecerá todo o processo de produção de cerveja, será capaz de fazer melhores escolhas de insumos e equipamentos e elaborará a sua própria receita de cerveja! Pelas câmeras, você acompanhará toda a preparação prática da cerveja que acontece em nossos laboratórios e discutirá, ao vivo com os professores e colegas da turma, os métodos e os fundamentos da ciência por trás da cerveja.",
  
  "Público-Alvo",
  "O curso de Cervejeiro Caseiro foi desenhado para:",
  "– você que nunca fez cerveja antes e quer aprender os fundamentos da arte com professores cervejeiros experientes;",
  "– você que já faz cerveja em casa, mas quer entender onde tem errado para melhorar a qualidade da sua cerveja.",
]

const Descricao = () => {
  return (
    <Box>
      <Box
        sx={{
          display:"flex",
          marginTop: "8rem"
        }}
      >
        <Box sx={{flex:1, background: "green", height: "5px"}}></Box>
        <Box sx={{flex:1, background: "red", height: "5px"}}></Box>
        <Box sx={{flex:1, background: "yellow", height: "5px"}}></Box>
      </Box>
      <Box
        sx={{
          marginTop: "8rem",
          display: "grid",
          gridTemplateColumns: "calc(47% - 1.5rem) 1fr",
          gap:"3rem",
          maxWidth: "1140px",
          marginInline: "auto"
        }}
      >
        <Box 
        sx={{
          display: "flex",
          justifyContent: "flex-start",
          alignItems: "center"
        }}>
          <img width="85%"  src={copos} alt="Copos de Cerveja" />
        </Box>
        <Box>
          <Typography variant='h2'
          sx={{
            margin: "4rem auto",
          }}>No curso de Cervejeiro Caseiro você irá:</Typography>
          {
            description.map((text) => {
              return <Box marginBottom="2rem">
                <Typography variant='body1'>{text}</Typography>
              </Box>
            })
          }
      
        </Box>
      </Box>
    </Box>
  )
}

export default Descricao
