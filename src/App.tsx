import React from 'react'
import Box from '@mui/material/Box'
import { Routes, Route, Navigate } from 'react-router-dom'
import { Dashboard, PageNotFound, Signin, Signup } from './pages'
import { ProtectedRoute } from './components'

const App: React.FC = (): JSX.Element => {
  return (
    <Box
      sx={{
        width: '100%',
        height: '100vh',
      }}
    >
      <Routes>
        <Route path='/' element={<Navigate to='/signin' replace />} />
        <Route path='/signin' element={<Signin />} />
        <Route path='/signup' element={<Signup />} />
        <Route
          path='/dashboard'
          element={
            <ProtectedRoute>
              <Dashboard />
            </ProtectedRoute>
          }
        />
        <Route path='*' element={<PageNotFound />} />
      </Routes>
    </Box>
  )
}

export default App
