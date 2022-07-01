import { buildApiUrl } from './common/buildUrl'
import { httpClient } from './common'
import { LoginResponse } from './models/Account'
import { AppResponse } from './common/types'

export async function Login (
  email: string,
  password: string
): Promise<AppResponse<LoginResponse>> {
  const url = buildApiUrl('api/account/login')
  const response = (await httpClient.postRequest<LoginResponse>(url, {
    email,
    password
  })) as AppResponse<LoginResponse>

  return response
}
