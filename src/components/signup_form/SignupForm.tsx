import React from 'react'
import Box from '@mui/material/Box'
import Paper from '@mui/material/Paper'
import Toolbar from '@mui/material/Toolbar'
import Typography from '@mui/material/Typography'
import FormControl from '@mui/material/FormControl'
import InputLabel from '@mui/material/InputLabel'
import Input from '@mui/material/Input'
import Divider from '@mui/material/Divider'
import Button from '@mui/material/Button'
import { useTheme, Theme } from '@mui/material'
import { Link, NavigateFunction, useNavigate } from 'react-router-dom'
import axios from 'axios'
import { Alert, AlertDialog } from '..'

const SignupForm: React.FC = (): JSX.Element => {
  const theme: Theme = useTheme()
  const navigate: NavigateFunction = useNavigate()
  const [email, setEmail] = React.useState<string>('')
  const [password, setPassword] = React.useState<string>('')
  const [name, setName] = React.useState<string>('')
  const [mobile, setMobile] = React.useState<string>('')
  const [error, setError] = React.useState<boolean>(false)
  const [errorMessage, setErrorMessage] = React.useState<string>('')
  const [alertDialogOpen, setAlertDialogOpen] = React.useState<boolean>(false)

  const handleEmailValue = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setEmail(e.target.value)
  }

  const handlePasswordValue = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setPassword(e.target.value)
  }

  const handleNameValue = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setName(e.target.value)
  }

  const handlePhoneNumberValue = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setMobile(e.target.value)
  }

  const handleAlertDialogClose = () => {
    setAlertDialogOpen(!alertDialogOpen)
    return navigate('/signin', { replace: true })
  }

  const handleRegisterSubmit = () => {
    const formData = { email, password, name, mobile }
    axios
      .post('https://ttmg-backend.herokuapp.com/api/auth/staffRegister', formData)
      .then((res) => {
        setAlertDialogOpen(true)
      })
      .catch((err) => {
        if (err.message === 'Request failed with status code 400') {
          setError(true)
          return setErrorMessage('Some of the fields are missing')
        }
        if (err.message === 'Request failed with status code 402') {
          setError(true)
          return setErrorMessage('User Already Exists with the given email id')
        }
      })
  }

  const handleAlertCloseToggle = () => {
    setError(!error)
  }

  return (
    <React.Fragment>
      <Paper
        elevation={1}
        sx={{
          width: { xs: '95%', sm: 400 },
          padding: theme.spacing(),
        }}
      >
        <Toolbar>
          <Typography variant='h6'>Register</Typography>
        </Toolbar>
        <Divider />
        <Box sx={{ padding: theme.spacing(2, 3) }}>
          <FormControl variant='standard' fullWidth sx={{ marginBottom: theme.spacing(2) }}>
            <InputLabel htmlFor='email-input'>Email</InputLabel>
            <Input
              id='email-input'
              type='email'
              value={email}
              onChange={handleEmailValue}
              autoComplete='off'
              margin='dense'
            />
          </FormControl>
          <FormControl variant='standard' fullWidth sx={{ marginBottom: theme.spacing(2) }}>
            <InputLabel htmlFor='password-input'>Password</InputLabel>
            <Input
              id='password-input'
              type='password'
              value={password}
              onChange={handlePasswordValue}
              autoComplete='off'
              margin='dense'
            />
          </FormControl>
          <FormControl variant='standard' fullWidth sx={{ marginBottom: theme.spacing(2) }}>
            <InputLabel htmlFor='name-input'>Name</InputLabel>
            <Input
              id='name-input'
              type='text'
              value={name}
              onChange={handleNameValue}
              autoComplete='off'
              margin='dense'
            />
          </FormControl>
          <FormControl variant='standard' fullWidth sx={{ marginBottom: theme.spacing(2) }}>
            <InputLabel htmlFor='number-input'> Mobile Number</InputLabel>
            <Input
              id='number-input'
              type='text'
              value={mobile}
              onChange={handlePhoneNumberValue}
              autoComplete='off'
              margin='dense'
            />
          </FormControl>
        </Box>
        <Box
          sx={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            padding: theme.spacing(2),
          }}
        >
          <Button variant='contained' color='success' onClick={handleRegisterSubmit}>
            register
          </Button>
        </Box>
        <Box
          sx={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            padding: theme.spacing(1),
          }}
        >
          <Typography variant='body1'>Already have an account?</Typography>
          <Link to='/signin' style={{ textDecoration: 'none' }}>
            <Button variant='text' color='primary'>
              Login
            </Button>
          </Link>
        </Box>
      </Paper>
      <AlertDialog open={alertDialogOpen} handleClose={handleAlertDialogClose} />
      <Alert openAlert={error} closeAlert={handleAlertCloseToggle} message={errorMessage} />
    </React.Fragment>
  )
}

export default SignupForm
