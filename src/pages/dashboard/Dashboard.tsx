import React from 'react'
import Box from '@mui/material/Box'
import Typography from '@mui/material/Typography'

const Dashboard: React.FC = (): JSX.Element => {
  return (
    <Box
      sx={{
        height: '100vh',
        display: 'grid',
        justifyContent: 'center',
        placeItems: 'center',
      }}
    >
      <Typography variant='h5'>Successfully logged in</Typography>
    </Box>
  )
}

export default Dashboard
