import { FunctionComponent, useState } from 'react'
import authClient from './authClient'
import { AuthContext } from './AuthContext'

interface AuthProviderProps {
  children: React.ReactNode
}

const AuthProvider: FunctionComponent<AuthProviderProps> = ({ children }) => {
  const [isLoggedIn, setIsLoggedIn] = useState<boolean>(
    authClient.getAccessToken() != undefined
  )

  const handleLogin = async (email: string, password: string) => {
    const response = await authClient.login(email, password)
    setIsLoggedIn(true)

    return response
  }

  const handleLogout = async () => {
    authClient.logout()
    setIsLoggedIn(false)
  }

  return (
    <AuthContext.Provider
      value={{
        login: handleLogin,
        logout: handleLogout,
        isLoggedIn
      }}
    >
      {children}
    </AuthContext.Provider>
  )
}

export default AuthProvider
