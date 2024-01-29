import { createTheme, ThemeProvider } from '@mui/material/styles';
import { grey,teal } from '@mui/material/colors';
function Layout({children }) {
    const theme = createTheme({
        palette: {
          primary: {
            main:"#9747FF",
          },
         secondary:{
          main:"#F4F4F4"
         },
         
        },
        components:{
          MuiButton:{
            styleOverrides:{
                root:{
                    textTransform: 'capitalize',
                    
                }
            }
          }
        }
      }
      
      );
  return (
    <div>
     <ThemeProvider theme={theme}>
      <div>
        {children}
      </div>
      </ThemeProvider>
    </div>
  )
}

export default Layout


