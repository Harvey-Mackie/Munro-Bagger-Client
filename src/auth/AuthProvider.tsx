import { FunctionComponent } from 'react'
import authClient from './authClient'
import { AuthContext } from './AuthContext'

interface AuthProviderProps {
  children: React.ReactNode
}

const AuthProvider: FunctionComponent<AuthProviderProps> = ({ children }) => {
  const handleLogin = async (email: string, password: string) => {
    return await authClient.login(email, password)
  }

  const handleLogout = async () => {
    authClient.logout()
  }

  return (
    <AuthContext.Provider
      value={{
        login: handleLogin,
        logout: handleLogout
      }}
    >
      {children}
    </AuthContext.Provider>
  )
}

export default AuthProvider
