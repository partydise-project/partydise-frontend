import React from 'react'
import Box from '@mui/system/Box';
import Stack from '@mui/material/Stack';
import Logo from '../../../../public/img/logo';
import Button from '@mui/material/Button'
import InsertInvitationOutlinedIcon from '@mui/icons-material/InsertInvitationOutlined';
import CelebrationOutlinedIcon from '@mui/icons-material/CelebrationOutlined';
import PersonOutlineOutlinedIcon from '@mui/icons-material/PersonOutlineOutlined';
import CakeOutlinedIcon from '@mui/icons-material/CakeOutlined';
import AccountCircleOutlinedIcon from '@mui/icons-material/AccountCircleOutlined';
import LogoutIcon from '@mui/icons-material/Logout';
import NavbarMenu from './NavbarMenu';

export default function Navbar() {

  return (
    <>
      <Box sx={{ backgroundColor: 'white', width: 170, height: "100vh", position: 'relative' }}>
        <Stack direction="column" justifyContent="center" alignItems="center" spacing={2.5}>
          <div style={{ marginTop: 20 }}> <Logo /></div>
          <Button variant="text" color="primary" startIcon={<AccountCircleOutlinedIcon />}>
            Mi Perfil
          </Button>
          <Button variant="text" color="primary" startIcon={<InsertInvitationOutlinedIcon />}>
            fechas
          </Button>
          <Button variant="text" color="primary" startIcon={<CelebrationOutlinedIcon />}>
            planes
          </Button>
          <Button variant="text" color="primary" startIcon={<PersonOutlineOutlinedIcon />}>
            Clientes
          </Button>
          <Button variant="text" color="primary" startIcon={<CakeOutlinedIcon />}>
            Eventos
          </Button>
          <NavbarMenu />
        </Stack>
        <Box sx={{ position: 'absolute', bottom: 0, left: 0, width: '100%', backgroundColor: '#9747FF', height: 70 }}>
          <Button variant="text" color="secondary" startIcon={<LogoutIcon />}>
            Logout
          </Button>
        </Box>
      </Box>

    </>
  )
}
