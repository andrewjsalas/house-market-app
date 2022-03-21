import { Navigate, Outlet } from "react-router-dom"
import { useAuthStatus } from '../hooks/useAuthStatus'
import Spinner from "./Spinner"

// Checks to see if user is logged in. 
// If user is logged in they are sent to to the profile page.
// Else they are sent to the sign-in page. 
const PrivateRoute = () => {
  const { loggedIn, checkingStatus } = useAuthStatus()

  if(checkingStatus) {
    return <Spinner />
  }

  return loggedIn ? <Outlet /> : <Navigate to='/sign-in' />
}

export default PrivateRoute