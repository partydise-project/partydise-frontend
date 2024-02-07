import React from 'react'
import CardAadmin from './CardAadmin'
import { Card, CardContent,  Stack, Typography } from '@mui/material'

export default function WorkerCards() {
  return (
 <>
 
    <Card sx={{
  maxWidth: {
    xs: 400,  
    sm: 900,    
    md: 80000, 
    lg: 1200,  
  }
}}>
      <Stack
      direction={{
        xs: 'column', 
        sm: 'row', 
        md: 'row',    
        lg: 'row'     
      }}
      alignItems={{xs:'center',lg:'center'}}
      >
         <div style={{ overflow: 'hidden', maxHeight: 150 }}>
      <img src='https://img.freepik.com/foto-gratis/chico-guapo-seguro-posando-contra-pared-blanca_176420-32936.jpg' alt="Profile" style={{ width: '100%', objectFit:"fill"}} />
      </div>
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          Andres felipe vanegas
        </Typography>
        <Typography variant="body2" color="text.secondary">
          SEO
        </Typography>
        <Typography variant="body2" color="text.secondary">
          andres vanegas@gmail.com
        </Typography>
        <Typography variant="body2" color="text.secondary">
          3185448973
        </Typography>
      </CardContent>
      </Stack>
    </Card>
  <CardAadmin/>
 </>
  )
}
