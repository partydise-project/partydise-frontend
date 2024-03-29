import React from 'react';
import { Card, CardContent, CardMedia, Typography, Button, CardActions, Grid } from '@mui/material';

const usersData = [
  {
    id: 17,
    name: 'Mariana Vanegas',
    email: 'marianavanegas@gmail.com',
    phoneNumber: '3185667986',
    role: 'administrador',
    image: 'https://previews.123rf.com/images/dtiberio/dtiberio1706/dtiberio170600568/81055216-j%C3%B3venes-mujeres-adolescentes-bastante.jpg',
  },
  {
    id: 27,
    name: 'Mariana Vanegas',
    email: 'marianavanegas@gmail.com',
    phoneNumber: '3185667986',
    role: 'administrador',
    image: 'https://previews.123rf.com/images/dtiberio/dtiberio1706/dtiberio170600568/81055216-j%C3%B3venes-mujeres-adolescentes-bastante.jpg',
  },
  {
    id: 37,
    name: 'Mariana Vanegas',
    email: 'marianavanegas@gmail.com',
    phoneNumber: '3185667986',
    role: 'administrador',
    image: 'https://previews.123rf.com/images/dtiberio/dtiberio1706/dtiberio170600568/81055216-j%C3%B3venes-mujeres-adolescentes-bastante.jpg',
  },
  {
    id: 47,
    name: 'Mariana Vanegas',
    email: 'marianavanegas@gmail.com',
    phoneNumber: '3185667986',
    role: 'administrador',
    image: 'https://previews.123rf.com/images/dtiberio/dtiberio1706/dtiberio170600568/81055216-j%C3%B3venes-mujeres-adolescentes-bastante.jpg',
  },
  {
    id: 57,
    name: 'Mariana Vanegas',
    email: 'marianavanegas@gmail.com',
    phoneNumber: '3185667986',
    role: 'administrador',
    image: 'https://previews.123rf.com/images/dtiberio/dtiberio1706/dtiberio170600568/81055216-j%C3%B3venes-mujeres-adolescentes-bastante.jpg',
  },
  {
    id: 67,
    name: 'Mariana Vanegas',
    email: 'marianavanegas@gmail.com',
    phoneNumber: '3185667986',
    role: 'administrador',
    image: 'https://previews.123rf.com/images/dtiberio/dtiberio1706/dtiberio170600568/81055216-j%C3%B3venes-mujeres-adolescentes-bastante.jpg',
  },


];

export default function CardAadmin() {
  return (
    
      <Grid container spacing={3}  justifyContent="center"
      alignItems="center" 
      sx={{ padding: {
        xs: 2,
        lg:0
        
      } }}>
        {usersData.map((user) => (
          <Grid item key={user.id} xs={12} sm={6} md={4} lg={4}>
            <Card sx={{
              maxWidth: {
                xs: 320,
                sm: 320,
                
              }
            }}>
              <CardMedia
                component="img"
                alt={user.name}
                height="140"
                image={user.image}

              />
              <CardContent>
                <Typography gutterBottom variant="h6" component="div">
                  {user.name}
                </Typography>
                <Typography variant="body2" color="text.secondary">
                  {user.email}
                </Typography>
                <Typography variant="body2" color="text.secondary">
                  {user.phoneNumber}
                </Typography>
                <Typography variant="body2" color="text.secondary">
                  {user.role}
                </Typography>
              </CardContent>

            </Card>
          </Grid>
        ))}
      </Grid>
    
  );
}
