import Depoimentos from 'components/Depoimentos';
import Descricao from 'components/Descricao';
import Diferenciais from 'components/Diferenciais';
import Formulario from 'components/Formulario';
import Header from 'components/Header';
import Informacoes from 'components/Informacoes';
import Investimento from 'components/Investimento';
import Metas from 'components/Metas';
import Professores from 'components/Professores';

import { Box } from '@mui/material';

const CervejeiroCaseiro = () => {
  return (
   <>
        <Header  />
        <Metas />
        <Informacoes />
        <Diferenciais />
        <Depoimentos />
        <Professores />
        <Descricao />
        <Formulario />
        <Investimento />
      
   </>
    
    
  )
}

export default CervejeiroCaseiro
