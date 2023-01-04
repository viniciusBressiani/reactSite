import React from 'react'
import { Box, useTheme } from '@mui/material';

const Button = ({link, text, color, icon, size}) => {
  const theme = useTheme();  
  
  return (
    <Box 
     sx={size === "g" ? {
      backgroundColor: theme.palette[color],
        borderRadius: "50px",
        border: "solid 2px" + theme.palette[color],
        cursor: "pointer",
        fontSize: "2rem",
        fontWeight: "600",
        textTransform: "uppercase",
        letterSpacing: "0.25rem",
        margin: "0.65rem 0",
        padding: "1rem 2rem",
        textAlign: "center",
        whiteSpace: "nowrap",
        "a":{
            textDecoration: "none",
            color: "white",
            display: "flex",
            alignItems: "center",
            gap:"0.5rem"
        },
        ":hover" :{
            background: theme.palette.background,
            "a": {color:"brown"}
        }
     }
     :{
        backgroundColor: theme.palette[color],
        borderRadius: "50px",
        border: "none",
        cursor: "pointer",
        fontSize: "0.85rem",
        fontWeight: "600",
        textTransform: "uppercase",
        letterSpacing: "0.25rem",
        margin: "0.65rem 0",
        padding: "0.5rem 1rem",
        textAlign: "center",
        whiteSpace: "nowrap",
        "a":{
            textDecoration: "none",
            color: "white",
            display: "flex",
            alignItems: "center",
            gap:"0.5rem"
        },
        ":hover" :{
            background: theme.palette.background,
            "a": {color:"brown"}
        }
     }}>
			<a aria-label={text} href={link}>{icon}{text}</a
			>
	</Box>
  )
}

export default Button
