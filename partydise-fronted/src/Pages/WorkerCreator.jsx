import React from 'react'
import Navbar from '../Components/WorkerComponents/Nav/Navbar'
import SerchBarworker from '../Components/WorkerComponents/Serbar'
import { Stack, useMediaQuery } from '@mui/material'
import WorkerView from '../Components/WorkerComponents/WorkerViewComponets/WorkerView'
import NavMovail from '../Components/WorkerComponents/Nav/NavMovail'

export default function WorkerCreator() {

  const isMobile = useMediaQuery('(max-width:800px)');
  return (
    <>
      <>
     {isMobile ? (
  <>
    {isMobile && <NavMovail />}
    <Stack direction={{
      xs: 'column',
      sm: 'column',
      md: 'row',
      lg: 'row'
    }} spacing={7} sx={{ marginTop: 4 }}>
      <Stack direction='column' spacing={2}>
        {!isMobile && <SerchBarworker />}
        <WorkerView/>
      </Stack>
    </Stack>
  </>
) : (
<Stack direction={{
  xs: 'column',
  sm: 'column',
  md: 'row',
  lg: 'row'
}} spacing={33} alignItems="center"sx={{width:"100vh"}} >
  {isMobile ? null : <Navbar />}
  <Stack direction='column' spacing={3}>
    {!isMobile && <SerchBarworker />}
    <WorkerView/>
  </Stack>
</Stack>

)}
   </>
 </>
  )
}
