import React from 'react'
import Box from '@mui/material/Box'
import Typography from '@mui/material/Typography'
import Button from '@mui/material/Button'
import { useNavigate } from 'react-router-dom'

const PageNotFound: React.FC = (): JSX.Element => {
  const navigate = useNavigate()
  return (
    <Box sx={{ padding: (theme) => theme.spacing(10) }}>
      <Typography variant='h4' sx={{ fontWeight: '600' }}>
        404
      </Typography>
      <Typography variant='h6'>Page not Found</Typography>
      <Button
        variant='text'
        color='primary'
        sx={{ textTransform: 'capitalize' }}
        onClick={() => navigate(-1)}
      >
        Go back
      </Button>
    </Box>
  )
}

export default PageNotFound
