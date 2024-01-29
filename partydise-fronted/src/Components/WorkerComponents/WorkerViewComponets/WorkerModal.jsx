import * as React from 'react';
import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import Slide from '@mui/material/Slide';
import ControlledForm from './FormCreateModal';

const Transition = React.forwardRef(function Transition(props, ref) {
  return <Slide direction="up" ref={ref} {...props} />;
});

export default function WorkerModal() {
  const [open, setOpen] = React.useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <React.Fragment>
      <Button variant="contained" onClick={handleClickOpen}>
        Crea un nuevo administrador
      </Button>
      <Dialog
        open={open}
        TransitionComponent={Transition}
        keepMounted
        onClose={handleClose}
        aria-describedby="Crea un nuevo administrador"
      >
        <DialogTitle>{"crea un nuevo administrador"}</DialogTitle>
        <DialogContent>
          <DialogContentText id="crea un nuevo administrador">
          <ControlledForm handleClose={handleClose}/>
          </DialogContentText>
        </DialogContent>
      
      </Dialog>
    </React.Fragment>
  );
}