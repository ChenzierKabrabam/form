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
import { Alert } from '..'
import { Link, NavigateFunction, useNavigate } from 'react-router-dom'
import axios from 'axios'

export let isUserLogged: boolean

const SigninForm: React.FC = (): JSX.Element => {
  const theme: Theme = useTheme()
  const navigate: NavigateFunction = useNavigate()
  const [email, setEmail] = React.useState<string>('')
  const [password, setPassword] = React.useState<string>('')
  const [error, setError] = React.useState<boolean>(false)
  const [errorMessage, setErrorMessage] = React.useState<string>('')
  const [user, setUser] = React.useState<boolean>(false)

  // to find if logged in or not
  isUserLogged = user

  const handleChangedEmailValue = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setEmail(e.target.value)
  }

  const handleChangedPasswordValue = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setPassword(e.target.value)
  }

  const handleFormSubmit = () => {
    const formData: {
      email: string
      password: string
    } = { email, password }
    axios
      .post('https://ttmg-backend.herokuapp.com/api/auth/staffLogin', formData)
      .then((res) => {
        setUser(true)
        navigate('../dashboard', { replace: true })
      })
      .catch((err) => {
        // code 401 is Invalid Credentials
        if (err.message === 'Request failed with status code 401') {
          setError(true)
          return setErrorMessage('Invalid Credentials')
        }
        if (err.message === 'Request failed with status code 400') {
          setError(true)
          return setErrorMessage('Email/password is missing')
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
          <Typography variant='h6'>Login</Typography>
        </Toolbar>
        <Divider />
        <Box sx={{ padding: theme.spacing(2, 3) }}>
          <FormControl variant='standard' fullWidth sx={{ marginBottom: theme.spacing(2) }}>
            <InputLabel htmlFor='email-input'>Email</InputLabel>
            <Input
              id='email-input'
              type='email'
              value={email}
              onChange={handleChangedEmailValue}
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
              onChange={handleChangedPasswordValue}
              autoComplete='off'
              margin='dense'
            />
          </FormControl>
        </Box>
        <Box
          sx={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'flex-end',
            paddingRight: theme.spacing(3),
          }}
        >
          <Typography variant='body1'>Forgot Password?</Typography>
        </Box>
        <Box
          sx={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            padding: theme.spacing(2),
          }}
        >
          <Button variant='contained' color='success' onClick={handleFormSubmit}>
            Login
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
          <Typography variant='body1'>Don't have an account?</Typography>
          <Link to='/signup' style={{ textDecoration: 'none' }}>
            <Button variant='text' color='primary'>
              Register
            </Button>
          </Link>
        </Box>
      </Paper>
      <Alert openAlert={error} closeAlert={handleAlertCloseToggle} message={errorMessage} />
    </React.Fragment>
  )
}

export default SigninForm
