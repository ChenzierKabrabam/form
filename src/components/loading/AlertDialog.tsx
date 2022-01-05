import React, { PropsWithChildren } from 'react'
import Button from '@mui/material/Button'
import Dialog from '@mui/material/Dialog'
import DialogActions from '@mui/material/DialogActions'
import DialogContent from '@mui/material/DialogContent'
import DialogContentText from '@mui/material/DialogContentText'
import DialogTitle from '@mui/material/DialogTitle'

interface AlertDialogProps {
  open: boolean
  handleClose: () => void
}

const AlertDialog: React.FC<AlertDialogProps> = ({
  open,
  handleClose,
}: PropsWithChildren<AlertDialogProps>): JSX.Element => {
  return (
    <div>
      <Dialog
        open={open}
        aria-labelledby='alert-dialog-title'
        aria-describedby='alert-dialog-description'
      >
        <DialogTitle id='alert-dialog-title'>{''}</DialogTitle>
        <DialogContent>
          <DialogContentText id='alert-dialog-description'>
            Registration is successful
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button variant='contained' color='success' onClick={handleClose} autoFocus>
            ok
          </Button>
        </DialogActions>
      </Dialog>
    </div>
  )
}
export default AlertDialog
