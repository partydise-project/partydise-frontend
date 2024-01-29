import * as React from 'react';
import TextField from '@mui/material/TextField';
import Stack from '@mui/material/Stack';
import Autocomplete from '@mui/material/Autocomplete';

export default function WorkerSearch() {
  return (
    <Stack spacing={2} sx={{ width: 300 }}>
      <Autocomplete
  
        id="recreador"
        freeSolo
        options={top100Films.map((option) => option.title)}
        renderInput={(params) => <TextField {...params} label="busca recreador" />}
      />
    </Stack>
  );
}


const top100Films = [
  { title: 'mariana' },
  { title: 'stive' },
  { title: 'tatiana' },
  { title: 'paula'},
  ]
