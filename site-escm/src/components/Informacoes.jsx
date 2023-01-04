import React from 'react'
import { Box } from '@mui/material';
import Card from './Card';

const infos =[
  {Title: "Duração", Info: "14 noites"},
  {Title: "Horário", Info: "19h às 22h"},
  {Title: "Formação", Info: "Livre | Online"},
  {Title: "Início", Info: "13/02/2023"},
  {Title: "Dias da Semana", Info: "Segundas-feiras"},
  {Title: "Carga Horária", Info: "42 horas"},
]

const Informacoes = () => {
  return (
    <Box
      sx={{
        maxWidth:"1140px",
        marginInline: "auto",
        marginTop: "6rem",
        display: "grid",
        gridTemplateColumns: "repeat(3, 1fr)",
        gap: "2rem"
      }}>
        {
        infos.map((info, index)=>{
          return <Card key={index} title={info.Title} info={info.Info}/>
        })  
        }

    </Box>
  )
}

export default Informacoes
