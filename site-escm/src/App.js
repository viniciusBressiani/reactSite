import { ThemeProvider } from "@mui/system";
import Footer from "components/Footer";
import Navbar from "components/Navbar";
import { BrowserRouter, Route, Routes, Navigate } from "react-router-dom";
import { theme } from './theme.js'
 
import CervejeiroCaseiro from './scenes/cervejeiroCaseiro';

function App() {

  
  return (
          <div className="app">
              <ThemeProvider theme={theme}>
                <BrowserRouter >
                 <Navbar/>
                    <Routes>
                        <Route path="/" element={<Navigate to="/curso/cervejeiro-caseiro" replace />} />
                        <Route path="/curso/cervejeiro-caseiro" element={<CervejeiroCaseiro/>} />
                    </Routes>
                  <Footer />
                </BrowserRouter>
              </ThemeProvider>
          </div>    
  );
}

export default App;
