import React from 'react'
import Box from '@mui/material/Box'
import { SigninForm } from '../../components'

const Signin: React.FC = (): JSX.Element => {
  return (
    <Box
      sx={{
        height: '100vh',
        display: 'grid',
        justifyContent: 'center',
        placeItems: 'center',
      }}
    >
      <SigninForm />
    </Box>
  )
}

export default Signin
