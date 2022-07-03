import { makeStyles } from '@material-ui/core'
import { FunctionComponent } from 'react'
import { Navigate } from 'react-router-dom'
import { useAuth } from '../../auth/AuthContext'
import LoginFormContainer from './LoginFormContainer'

const useStyles = makeStyles(() => ({
  container: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center'
  }
}))

interface LoginPageProps {}

const LoginPage: FunctionComponent<LoginPageProps> = () => {
  const styles = useStyles()
  const auth = useAuth()

  if (auth.isLoggedIn) {
    return <Navigate to='/' />
  }

  return (
    <div className={styles.container}>
      <h2>Sign in</h2>
      <LoginFormContainer />
    </div>
  )
}

export default LoginPage
