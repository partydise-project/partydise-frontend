import React from "react";
import Profile from "../Components/AuthoComponest/User";
import LoginAutho from "../Components/AuthoComponest/LoginAutho";
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography'
import { motion } from 'framer-motion';
import { Stack, Button, Grid } from "@mui/material";
import Logo from "../../public/img/logo";


const Login = () => {
 return (
   
  <Grid container justifyContent="center" alignItems="center" sx={{ height: "100vh" }} spacing={2}>
  <Grid item xs={6} sx={{ backgroundColor: "white", borderRadius: 4, p: 4, boxShadow: "0px 0px 8px rgba(0, 0, 0, 0.13)" }}>
    <Box sx={{ marginLeft:{ 
       xs: 2, 
        sm: 2, 
        md: 36,    
        lg: 36} }}>
      <motion.div
        initial={{ opacity: 0, scale: 0.5 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.5 }}
      >
        <Logo />
      </motion.div>
    </Box>
    <Stack direction="column" spacing={4} sx={{ textAlign: "center", position: "relative", zIndex: 0 }}> {/* Asegura que el texto esté en una capa inferior */}
      <Typography variant="h5" color="primary">Bienvenidos a partydise</Typography>
      <Typography variant="body1" color="initial">¡Únete a la diversión! Celebremos fiestas infantiles llenas de alegría.</Typography>
    </Stack>
    <Stack  direction={{
        xs: 'column', 
        sm: 'row', 
        md: 'row',    
        lg: 'row'     
      }} justifyContent="center" spacing={2} sx={{ mt: 4 }}>
      <LoginAutho />
      <Button variant="contained" color="primary">
        Registrarse
      </Button>
    </Stack>
    <Box sx={{ display: "flex", justifyContent: "center", mt: 4 }}>
      <Profile/>
    </Box>
  </Grid>
</Grid>



  );
};

export default Login;