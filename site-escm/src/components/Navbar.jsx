import React, { useState } from 'react';
import { Box, useTheme } from '@mui/material';
import logo from "assets/Logo.svg";
import Button from './Button';
import SchoolIcon from '@mui/icons-material/School';

const Navbar = () => {

  const [ isSobreOpen, setIsSobreOpen ] = useState(false);
  const theme = useTheme();

  return (
    <Box>
   
      <Box 
      sx={{ 
        background: theme.palette.primary,
        display: "flex",
        justifyContent: "flex-end",
        paddingRight:"20px"
      }}>
        <Button 
        link="https://escm.unimestre.com/projetos/nucleo/uteis/login.php?&tid=0&lid=0&pid=24&arq_ret=R5QT1WSRQBMCVQVPFFQSF99MCT5RT44Q9WRW0RBM0FMM5QQ4"
        text="Acesse o
				portal do aluno"
        color="accent"
        icon={<SchoolIcon/> }/>
      </Box>
      <Box sx={{
        maxWidth: "1140px",
        display : "flex",
        justifyContent: "space-between",
        margin: "0.5rem auto",
        fontSize: "3rem"
      }}>
        <Box sx={{
          flex: 1,
          display: "flex",
          justifyContent: "flex-end",
          alignItems: "center",
          marginBottom: "20px"
        }}>
          <img width="250px" src={logo} alt="" />
        </Box>
        <Box component="ul"
              sx={{
                zIndex: 99,
                display: "flex",
                flex: 5,
                justifyContent: "flex-end",
                alignItems: "flex-end",
                listStyle: "none",
                position: "relative",
                transition: "0.25s ease-in",
                "li" : {
                  cursor: "pointer",
                  marginRight: "30px",
                  padding: "0.5rem",
                  borderRadius: "10px",
                  transition: "0.25s ease-in",
                  background: "white",
                  marginBottom: "none"
                },
                "li:hover" : {
                  color: theme.palette.primary,
                 
                },
                "& MuiBox-root" : {
                  marginBottom: "none"
                }
              }}>
          <Box>
      
                      <li onClick={() => setIsSobreOpen(!isSobreOpen)}>
                      Sobre a ESCM
                        </li>
                        {isSobreOpen
                        ? <Box component="ul" sx={{
                          background: "white",
                          display: "block",
                          listStyle: "none",
                          padding: 0,
                          position: "absolute",
                          "li": {
                            marginTop: "20px"
                          }
                        }}
                        >
                          <li>Quem Somos</li>
                          <li>Publicações Legais</li>
                          <li>Turismo em Blumenau</li>
                        </Box>
                        :""}
          </Box>
            <li onClick={() => setIsSobreOpen(false)}>Cursos</li>
            <li onClick={() => setIsSobreOpen(false)}>Blog Cervejeiro</li>
            <li onClick={() => setIsSobreOpen(false)}>Contato</li>
      
        </Box>
      </Box>
      <Box
        sx={{
          display:"flex"
        }}
      >
        <Box sx={{flex:1, background: "green", height: "5px"}}></Box>
        <Box sx={{flex:1, background: "red", height: "5px"}}></Box>
        <Box sx={{flex:1, background: "yellow", height: "5px"}}></Box>
      </Box>
    </Box>
  )
}

export default Navbar
