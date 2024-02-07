import React, { useState } from 'react'
import Typography from '@mui/material/Typography'
import Divider from '@mui/material/Divider';
import { Stack, Button } from '@mui/material';
import ReenactorSearch from './ReenactorSearch';
import ReenactorCards from './ReenactorCards';
import GenderFilterMenu from './GenderFilterMenu';
import FormForCreatorRecreator from './FormForCreatorRecreator';


export default function ReenactorView() {
  const [componenteActual, setComponenteActual] = useState('ReenactorCards');
  const handleBotonClick = (nombreComponente) => {
    
    setComponenteActual(nombreComponente);
  };
 
  return (

    <Stack spacing={2}
    >
      <Stack
        sx={{
          padding: {
            xs: 2,
            lg: 0}
        }}
        spacing={3}
      >
        <Typography variant="h4" color="initial"> Recreadores</Typography>
        <Stack
          direction={{ xs: 'column', md: 'column', lg: 'row' }}
          justifyContent="space-between"
          alignItems={{ xs: 'flex-start', md: 'flex-start', lg: 'center' }}
          spacing={3}
        >
          <Stack direction={'row'} spacing={5}>
            <Button  variant="text" color="primary" onClick={() => handleBotonClick('ReenactorCards')}>
              Mis Recreadores
            </Button>
            <Button variant="text" color="primary" onClick={() => handleBotonClick('FormForCreatorRecreato')}>
              Crear recreador
            </Button>
          </Stack>
          {componenteActual==='ReenactorCards'?<ReenactorSearch />: null}
          
        </Stack>
      </Stack>
        <Divider />
        {componenteActual==='ReenactorCards'?<GenderFilterMenu />: null}
      
      {componenteActual === 'ReenactorCards' ?  < ReenactorCards /> :   <FormForCreatorRecreator/>}
      
    </Stack>


  )
}
