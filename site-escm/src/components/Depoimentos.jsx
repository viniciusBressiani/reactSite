import React from 'react';
import { Box, Typography } from '@mui/material';
import Depoimento from './Depoimento';
import charles from 'assets/alunos/charles_da_silva.webp';

const dataDepoimentos = [
  { 
    text: " O curso de Cervejeiro Caseiro é o melhor que já fiz. A escola possui uma excelente estrutura e conta com professores de alta qualificação, empenhados em transmitir o vasto conteúdo sobre produção de cerveja de forma clara e objetiva. Mesmo sendo um curso a distância, a escola se preocupa com análises sensoriais, o que me deixou muito satisfeito. Toda a equipe da ESCM é muito acessível, o que deixa os alunos muito à vontade. Farei outros cursos, pois sei que o investimento vale a pena! ",
    title: "Cervejeiro Caseiro",
    name: "CHARLES DA SILVA",
    image: charles
},
  { 
    text: " Curso foi maravilhoso. Superou todas as expectativas. Professores e material de ensino super qualificado e a estrutura da escola, mesmo sendo um curso on-line foi fantástico. Espero em breve realizar mais cursos. ",
    title: "Cervejeiro Caseiro",
    name: "HENRIQUE SAUR LOPES",
    image: charles
},
  { 
    text: " O Curso Cervejeiro Caseiro superou as minhas expectativas. Por ser on-line, tinha receio de que ficaria limitado à teoria, mas não. Os recursos disponibilizados e principalmente a didática dos professores conseguiram tornar as aulas muito produtivas e objetivas.  ",
    title: "Cervejeiro Caseiro",
    name: "EDMILSON SCHMITZ",
    image: charles
},
]

const Depoimentos = () => {
  return (
    <Box
    sx={{
      maxWidth: "1140px",
      margin: "4rem auto"
    }}>
        <Typography variant='h2' margin='2rem auto' textAlign='center'>O que nossos alunos dizem:</Typography>
       
         {
          dataDepoimentos.map(({title, text, image, name}) => {
            return <Box
            sx={{
             margin: "4rem auto"
            }}>
              <Depoimento title={title} text={text} image={image} name={name}/>
            </Box>
          })
         }
       
    </Box>
  )
}

export default Depoimentos
