import React from 'react'
import WorkerCards from './WorkerCards'
import Typography from '@mui/material/Typography'
import Divider from '@mui/material/Divider';
import { Box, Stack } from '@mui/material';
import WorkerModal from './WorkerModal';




export default function WorkerView() {

  return (
  
      <Stack
       spacing={3}
      >
        <Stack
         direction={{
          xs: 'column',
          sm: 'column',
          md: 'row',
          lg: 'row'
        }}
          justifyContent={"space-between"}
          alignItems="center"
          spacing={6}
        >
          <Typography variant="h4" color="initial">Trabajadores</Typography>
          <WorkerModal/>
        </Stack>
        <Divider />
        <WorkerCards />
      </Stack>
     
  )
}
