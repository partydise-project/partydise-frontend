import * as React from 'react';
import Accordion from '@mui/material/Accordion';
import AccordionActions from '@mui/material/AccordionActions';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import Button from '@mui/material/Button';
import { createTheme } from '@mui/material';
import { ThemeProvider } from '@emotion/react';
import '@fontsource/roboto/300.css';

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
                fontFamily:'roboto'
            }
        }
      }
    },
  });

export default function NavbarMenu() {
  return (
    <div>
      
      <ThemeProvider theme={theme}>
      <Accordion>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel1-content"
          id="panel1-header"
        >
          Accordion 1
        </AccordionSummary>
        <AccordionDetails>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
          malesuada lacus ex, sit amet blandit leo lobortis eget.
        </AccordionDetails>
      </Accordion>
    </ThemeProvider>
    
    </div>
  );
}