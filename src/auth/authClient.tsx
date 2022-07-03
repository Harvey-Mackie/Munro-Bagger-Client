import { Login } from '../api/accounts'
import { LoginResponse } from '../api/models/Account'

const createAuthClient = () => {
  const login = async (
    email: string,
    password: string
  ): Promise<LoginResponse> => {
    const response = await Login(email, password)

    if (!response.content) {
      throw new Error('Invalid login attempt')
    }

    localStorage.setItem(
      'mb-account-information',
      JSON.stringify(response.content)
    )

    return response.content
  }

  const logout = () => {
    localStorage.removeItem('mb-account-information')
  }

  const getAccessToken = () => {
    const accountString = localStorage.getItem('mb-account-information')

    if (!accountString) {
      return undefined
    }

    const account = JSON.parse(accountString) as LoginResponse

    return account.accessToken
  }

  return {
    login,
    logout,
    getAccessToken
  }
}

const authClient = createAuthClient()

export default authClient
