import React from 'react'
import Box from '@mui/system/Box';
import Stack from '@mui/material/Stack';
import Typography from '@mui/material/Typography'
import Logo from '../../../../public/img/logo';
import Button from '@mui/material/Button'
import GrainIcon from '@mui/icons-material/Grain';
import InsertInvitationOutlinedIcon from '@mui/icons-material/InsertInvitationOutlined';
import CelebrationOutlinedIcon from '@mui/icons-material/CelebrationOutlined';
import NavbarMenu from './NavbarMenu';

export default function Navbar() {

    return (
        <Box sx={{ backgroundColor: 'white', width: 170, height: 1000 }}>
            <Stack
                direction="column"
                justifyContent="center"
                alignItems="center"
                spacing={2}
            >
                <div style={{ marginTop: 20 }}> <Logo /></div>
                <Button variant="text" color="primary" startIcon={<GrainIcon/>}>
                Dasboard
                </Button>
                <Button variant="text" color="primary" startIcon={<InsertInvitationOutlinedIcon />}>
                fechas
                </Button>
                <Button variant="text" color="primary" startIcon={<CelebrationOutlinedIcon />}>
                planes
                </Button>
                <NavbarMenu/>
            </Stack>


        </Box>
    )
}
