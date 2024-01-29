import React from 'react'
import Navbar from '../Components/WorkerComponents/Nav/Navbar'
import SerchBarworker from '../Components/WorkerComponents/Serbar'
import { Stack } from '@mui/material'
import NavMovail from '../Components/WorkerComponents/Nav/NavMovail'



export default function ReenactorCreator() {


  return (
    <>
      <Stack direction='row' spacing={5}>
        <Navbar />
        
        <Stack direction='column' spacing={2}   >
          <SerchBarworker />

        </Stack>
      </Stack>



    </>
  )
}
