import React from 'react'
import Box from '@mui/material/Box'
import { SignupForm } from '../../components'

const Signup: React.FC = (): JSX.Element => {
  return (
    <Box
      sx={{
        height: '100vh',
        display: 'grid',
        justifyContent: 'center',
        placeItems: 'center',
      }}
    >
      <SignupForm />
    </Box>
  )
}

export default Signup
