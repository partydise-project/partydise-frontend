import React, { useState } from 'react';
import { Grid, TextField, Button, Stack } from '@mui/material';

const ControlledForm = ({ handleClose }) => {
  const [formData, setFormData] = useState({
    cargo: '',
    usuario: {
      email: '',
      numero_celular: '',
      direccion_residencia: '',
      fecha_nacimiento: '',
      genero: '',
      nombre: '',
    },
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => {
      if (name.includes('.')) {
        const [nestedKey, subKey] = name.split('.');
        return {
          ...prevData,
          [nestedKey]: {
            ...prevData[nestedKey],
            [subKey]: value,
          },
        };
      } else {
        return {
          ...prevData,
          [name]: value,
        };
      }
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    handleClose();
    console.log(formData)
    try {
      const response = await fetch('http://localhost:8080/trabajador', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      if (!response.ok) {
        throw new Error('Error al enviar los datos');
      }

      console.log('Datos capturados enviados con éxito al backend:', formData);
    } catch (error) {
      console.error('Error al enviar los datos al backend:', error.message);
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <Grid container spacing={2}>
        <Grid item xs={12}>
          <TextField
            fullWidth
            label="Cargo"
            type="text"
            name="cargo"
            value={formData.cargo}
            onChange={handleChange}
            required
          />
        </Grid>
        <Grid item xs={12} sm={6}>
          <TextField
            fullWidth
            label="Email"
            type="email"
            name="usuario.email"
            value={formData.usuario.email}
            onChange={handleChange}
            required
          />
        </Grid>
        <Grid item xs={12} sm={6}>
          <TextField
            fullWidth
            label="Número Celular"
            type="text"
            name="usuario.numero_celular"
            value={formData.usuario.numero_celular}
            onChange={handleChange}
            required
          />
        </Grid>
        <Grid item xs={12}>
          <TextField
            fullWidth
            label="Dirección Residencia"
            type="text"
            name="usuario.direccion_residencia"
            value={formData.usuario.direccion_residencia}
            onChange={handleChange}
            required
          />
        </Grid>
        <Grid item xs={12}>
          <TextField
            fullWidth
            type="text"
            label="fecha de nacimineto"
            name="usuario.fecha_nacimiento"
            value={formData.usuario.fecha_nacimiento}
            onChange={handleChange}
            required
          />
        </Grid>
        <Grid item xs={12}>
          <TextField
            fullWidth
            label="Género"
            type="text"
            name="usuario.genero"
            value={formData.usuario.genero}
            onChange={handleChange}
            required
          />
        </Grid>
        <Grid item xs={12}>
          <TextField
            fullWidth
            type="text"
            label="Nombre"
            name="usuario.nombre"
            value={formData.usuario.nombre}
            onChange={handleChange}
            required
          />
        </Grid>
        <Grid item xs={12}>
          <Stack direction="row" spacing={2}>
            <Button variant="outlined" type="submit">
              Enviar
            </Button>
            <Button variant="outlined" color="primary" onClick={handleClose}>
              Cancelar
            </Button>
          </Stack>
        </Grid>
      </Grid>
    </form>
  );
};

export default ControlledForm;
