import { createTheme } from "@mui/system";


export const theme = createTheme({
    palette: {
        primary: "#e84e1b", /* strong orange */
        secondary: "#dd6e17", /* light orange */
        accent: "#53351c", /* brown */
        body: "#2a2a2a", /* black */
        background: "#f7eeda", /* light cream */
    },
    btn: {
        g: 'padding: "1rem 2rem"'    
    },
    typography : {
        htmlFontSize: 10,
        fontFamily: ['Krona One', "sans-serif"].join(","),
        fontSize: "1.2rem",
        h1: {
            fontFamily: [ 'Krona One', "sans-serif"].join(","),
            fontSize: "6rem",
            color: "#e84e1b",
        },
        h2: {
            fontFamily: [ 'Krona One', "sans-serif"].join(","),
            fontSize: "4rem",
            color: "#e84e1b"
        },
        h3: {
            fontFamily: [ 'Krona One', "sans-serif"].join(","),
            fontSize: "3rem",
            
        },
        h4: {
            fontFamily: [ 'Krona One', "sans-serif"].join(","),
            fontSize: "2.5rem",
            
        },
        h5: {
            fontFamily: [ 'Krona One', "sans-serif"].join(","),
            fontSize: "2rem",
            
        },
        h6: {
            fontFamily: [ 'Krona One', "sans-serif"].join(","),
            fontSize: "1.5rem",
            
        },
        body1: {
            fontSize: "2.5rem",
        
        }
    }
})