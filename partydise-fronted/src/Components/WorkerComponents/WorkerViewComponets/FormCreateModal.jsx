import { Alert, Button, Stack } from '@mui/material';
import React, { useState } from 'react';
import CheckIcon from '@mui/icons-material/Check';

const ControlledForm = ({handleClose}) => {
  const [formData, setFormData] = useState({
    email: '',
    nombre: '',
    telefono: '',
    cargo: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    handleClose()
    console.log('Datos capturados:', formData);
    
  };



  return (
    <form onSubmit={handleSubmit}>

      <Stack
      direction="column"
      justifyContent="center"
      alignItems="center"
      spacing={2}
      
      >
      <div>
     
        <label>Email:</label>
        <input
         className='WorkerForm'
          type="email"
          name="email"
          value={formData.email}
          onChange={handleChange}
          required
        />
      </div>
      <div>
        <label>Nombre:</label>
        <input
         className='WorkerForm'
          type="text"
          name="nombre"
          value={formData.nombre}
          onChange={handleChange}
          required
        />
      </div>
      <div>
        <label>Teléfono :</label>
        <input
         className='WorkerForm'
          type="tel"
          name="telefono"
          value={formData.telefono}
          onChange={handleChange}
          required
        />
      </div>
      <div>
        <label>Cargo:</label>
        <input
         className='WorkerForm'
          type="text"
          name="cargo"
          value={formData.cargo}
          onChange={handleChange}
          required
        />
        
      
      </div>
      <Stack direction='row' spacing={2}>

      
      <Button variant="outlined" type="submit">Enviar</Button >
      <Button variant="outlined" color="primary"onClick={handleClose}>
        Canelar
      </Button>
      </Stack>
      </Stack>  
    </form>
  );
};

export default ControlledForm;
