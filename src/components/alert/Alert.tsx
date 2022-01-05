import React, { PropsWithChildren } from 'react'
import Snackbar from '@mui/material/Snackbar'
import IconButton from '@mui/material/IconButton'
import { AiOutlineClose } from 'react-icons/ai'

interface AlertProps {
  openAlert: boolean
  closeAlert: () => void
  message: string
}
const Alert: React.FC<AlertProps> = ({
  openAlert,
  closeAlert,
  message,
}: PropsWithChildren<AlertProps>): JSX.Element => {
  const action: JSX.Element = (
    <React.Fragment>
      <IconButton onClick={closeAlert} color='inherit'>
        <AiOutlineClose />
      </IconButton>
    </React.Fragment>
  )
  return (
    <Snackbar
      open={openAlert}
      onClose={closeAlert}
      autoHideDuration={6000}
      message={message}
      action={action}
    />
  )
}

export default Alert
