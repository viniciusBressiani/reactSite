import React from 'react'
import { Box, Typography, useTheme } from '@mui/material';
import Button from './Button';

const Header = () => {
 const theme = useTheme();
  
  return (
    <Box
    sx={{
      display: "flex",
      justifyContent: "center",
      paddingBottom: "7rem",
      clipPath: "polygon(0 0, 100% 0%, 100% 100%, 0 80%)",
      padding: "3rem 2rem",
      background: theme.palette.background,
     
    }}>
      <Box
       sx={{
        display: "grid",
        gridTemplateColumns: "1fr 1fr",
        maxWidth: "1140px",
       }}
      >
        <Box
          sx={{
            flex: 1 ,
            display: "flex",
            flexDirection: "column",
            alignItems: "flex-start",
            "span":{
              color: theme.palette.accent
            },
            "p": {
              fontWeight: "600",
              fontSize: "2rem"
            }
          }}
        >
          <Typography variant='h1'><span>Curso Online</span> Cervejeiro Caseiro</Typography>
          <p>O melhor conteúdo para você produzir a melhor cerveja.</p>
          <Button text="inscreva-se agora" color="accent" size="g"/>
        </Box>
        <Box
          sx={{
            flex: 1 ,
            display: "flex",
            flexDirection: "column",
            marginBottom: "4rem"
          }}
        >
         <iframe
            width="100%"
						height="350"
						src="https://www.youtube.com/embed/rtQySS1Q2-Y"
						title="YouTube video player"
						frameBorder="0"
						allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
						allowFullScreen
					></iframe>
        </Box>
      </Box>

    </Box>
  )
}

export default Header
