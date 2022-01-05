import React, { PropsWithChildren } from 'react'
import { Navigate, useLocation } from 'react-router-dom'
import { isUserLogged } from '../signin_form/SigninForm'

interface ProtectedRouteProps {
  children: JSX.Element
}

const ProtectedRoute: React.FC<ProtectedRouteProps> = ({
  children,
}: PropsWithChildren<ProtectedRouteProps>): JSX.Element => {
  let auth: boolean = isUserLogged
  let location = useLocation()

  if (!auth) {
    return <Navigate to='/signin' state={{ from: location }} replace />
  }
  return children
}

export default ProtectedRoute
