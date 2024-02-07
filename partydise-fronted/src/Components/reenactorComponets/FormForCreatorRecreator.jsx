import React, { useState } from 'react';
import { Grid, TextField, Button, Checkbox, FormControlLabel, Typography, FormControl, InputLabel, Select, MenuItem } from '@mui/material';
import Alert from '@mui/material/Alert';

const FormForCreatorRecreator = () => {
  const [formData, setFormData] = useState({
    email: '',
    nombre: '',
    telefono: '',
    lugarResidencia: '',
    fechaNacimiento: '',
    dotacion: false,
    sexo: '',
    experienciaRecreando: '',
    nivelRecreacion: '',
    nivelDecoracion: '',
    nivelMagia: '',
  });

  const [showAlert, setShowAlert] = useState(false);

  const handleChange = (event) => {
    const { name, value, checked } = event.target;
    const newValue = name === 'dotacion' ? checked : value;

    setFormData((prevData) => ({
      ...prevData,
      [name]: newValue
    }));
  };

  const handleSubmit = async (event) => {
    event.preventDefault();

    try {
      const response = await fetch('http://localhost:8080/recreador', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({
          experiencia_recreando: formData.experienciaRecreando,
          dotacion: formData.dotacion,
          nivel_recreacion: formData.nivelRecreacion,
          nivel_decoracion: formData.nivelDecoracion,
          nivel_magia: formData.nivelMagia,
          usuario: {
            email: formData.email,
            numero_celular: formData.telefono,
            direccion_residencia: formData.lugarResidencia,
            fecha_nacimiento: formData.fechaNacimiento,
            genero: formData.sexo,
            nombre: formData.nombre
          }
        })
      });

      if (!response.ok) {
        throw new Error('Error al enviar los datos al servidor');
      }

      setShowAlert(true);
      setFormData({
        email: '',
        nombre: '',
        telefono: '',
        lugarResidencia: '',
        fechaNacimiento: '',
        dotacion: false,
        sexo: '',
        experienciaRecreando: '',
        nivelRecreacion: '',
        nivelDecoracion: '',
        nivelMagia: '',
      });

    } catch (error) {
      console.error('Error al enviar los datos al servidor:', error);
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <Grid container spacing={2} sx={{ padding: { xs: 2 } }}>
        <Grid item xs={12} sm={6}>
          <TextField
            id="email"
            label="Email"
            variant="outlined"
            name="email"
            value={formData.email}
            onChange={handleChange}
            required
            fullWidth
          />
        </Grid>
        <Grid item xs={12} sm={6}>
          <TextField
            id="nombre"
            label="Nombre"
            variant="outlined"
            name="nombre"
            value={formData.nombre}
            onChange={handleChange}
            required
            fullWidth
          />
        </Grid>
        <Grid item xs={12}>
          <TextField
            id="telefono"
            label="Teléfono celular"
            variant="outlined"
            name="telefono"
            value={formData.telefono}
            onChange={handleChange}
            required
            fullWidth
          />
        </Grid>
        <Grid item xs={12}>
          <TextField
            id="lugarResidencia"
            label="Lugar de residencia"
            variant="outlined"
            name="lugarResidencia"
            value={formData.lugarResidencia}
            onChange={handleChange}
            required
            fullWidth
          />
        </Grid>
        <Grid item xs={12}>
          <TextField
            id="fechaNacimiento"
            variant="outlined"
            type="date"
            name="fechaNacimiento"
            value={formData.fechaNacimiento}
            onChange={handleChange}
            required
            fullWidth
          />
        </Grid>
        <Grid item xs={12}>
          <FormControlLabel
            control={
              <Checkbox
                checked={formData.dotacion}
                onChange={handleChange}
                name="dotacion"
                color="primary"
              />
            }
            label="Tiene dotación"
          />
        </Grid>
        <Grid item xs={12}>
          <FormControl fullWidth>
            <InputLabel id="sexo-label">Sexo</InputLabel>
            <Select
              labelId="sexo"
              id="sexo"
              value={formData.sexo}
              label="Sexo"
              name="sexo"
              onChange={handleChange}
            >
              <MenuItem value={"femenino"}>Femenino</MenuItem>
              <MenuItem value={"masculino"}>Masculino</MenuItem>
            </Select>
          </FormControl>
        </Grid>
        <Grid item xs={12}>
          <TextField
            id="experiencia"
            label="Experiencia en recreación"
            variant="outlined"
            type="text"
            name="experienciaRecreando"
            value={formData.experienciaRecreando}
            onChange={handleChange}
            required
            fullWidth
          />
        </Grid>
        <Grid item xs={12}>
          <Typography variant="body1" color="initial">Habilidades</Typography>
          <FormControl fullWidth>
            <InputLabel id="nivel-recreacion-label">Nivel de recreación</InputLabel>
            <Select
              labelId="nivel-recreacion"
              id="nivel-recreacion"
              value={formData.nivelRecreacion}
              label="Nivel de recreación"
              name="nivelRecreacion"
              onChange={handleChange}
            >
              <MenuItem value={"basico"}>Básico</MenuItem>
              <MenuItem value={"medio"}>Intermedio</MenuItem>
              <MenuItem value={"experto"}>Experto</MenuItem>
            </Select>
          </FormControl>
        </Grid>
        <Grid item xs={12}>
          <FormControl fullWidth>
            <InputLabel id="nivel-decoracion-label">Nivel en decoración</InputLabel>
            <Select
              labelId="nivel-decoracion"
              id="nivel-decoracion"
              value={formData.nivelDecoracion}
              label="Nivel en decoración"
              name="nivelDecoracion"
              onChange={handleChange}
            >
              <MenuItem value={"basico"}>Básico</MenuItem>
              <MenuItem value={"medio"}>Intermedio</MenuItem>
              <MenuItem value={"experto"}>Experto</MenuItem>
            </Select>
          </FormControl>
        </Grid>
        <Grid item xs={12}>
          <FormControl fullWidth>
            <InputLabel id="nivel-magia-label">Nivel en magia</InputLabel>
            <Select
              labelId="nivel-magia"
              id="nivel-magia"
              value={formData.nivelMagia}
              label="Nivel en magia"
              name="nivelMagia"
              onChange={handleChange}
            >
              <MenuItem value={"basico"}>Básico</MenuItem>
              <MenuItem value={"medio"}>Intermedio</MenuItem>
              <MenuItem value={"experto"}>Experto</MenuItem>
            </Select>
          </FormControl>
        </Grid>
        <Grid item xs={12}>
          <Button type="submit" variant="contained" color="primary" fullWidth>
            Enviar
          </Button>
        </Grid>
        {showAlert && (
          <Grid item xs={12}>
            <Alert severity="success">
              ¡Formulario enviado con éxito!
            </Alert>
          </Grid>
        )}
      </Grid>
    </form>
  );
};

export default FormForCreatorRecreator;
