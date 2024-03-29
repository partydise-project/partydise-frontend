import * as React from 'react';
import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';
import { createTheme, Button, Box, Stack } from '@mui/material';
import { ThemeProvider } from '@emotion/react';
import SentimentSatisfiedAltIcon from '@mui/icons-material/SentimentSatisfiedAlt';
import '@fontsource/roboto/300.css';
import { Link } from 'react-router-dom';

const theme = createTheme({
  
    components: {
      MuiAccordion: {
        styleOverrides: {
          root: {
            border: 'none', 
            boxShadow: 'none',
           },
        },
      },
      
      MuiAccordionSummary:{
        styleOverrides:{
            root:{
                color:'#9747FF',
                fontFamily:'roboto',
                textTransform: 'capitalize'
            }
        }
      }
    },
    palette: {
      primary: {
        main:"#9747FF",
      },}
  });

export default function NavbarMenu() {
  return (
    <div>
      
      <ThemeProvider theme={theme}>
      <Accordion>
        <AccordionSummary
          expandIcon={<ArrowDropDownIcon color="secondary"/>}
          aria-controls="panel1-content"
          id="panel1-header"
          
        >
          {<SentimentSatisfiedAltIcon  color="#9747FF" sx={{marginRight:1}}/>}
        
          Personal
        </AccordionSummary>
        <AccordionDetails>
        <Box sx={{backgroundColor:'#F4F4F4',height:90,width:155}}>
          <Stack
           direction="column"
           justifyContent="space-between"
           alignItems="center"
           spacing={1} >
        <Link to="/Recreadores">
      <Button variant='outlined' color='primary' sx={{width:135}}>
        Recreadores
      </Button>
    </Link>
    <Link to="/Trabajadores">
      <Button variant="contained" color='primary' sx={{width:135}}>
        Trabajadores
      </Button>
    </Link>
        </Stack>
        </Box>
        </AccordionDetails>
      </Accordion>
    </ThemeProvider>
    
    </div>
  );
}