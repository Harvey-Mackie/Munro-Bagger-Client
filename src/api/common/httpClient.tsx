import Axios from 'axios'
import { AppResponse, AppResponseCollection } from './types'

export type HttpClientResponse<T> = AppResponseCollection<T> | AppResponse<T>

export async function getRequest<TResponse> (
  url: string
): Promise<HttpClientResponse<TResponse>> {
  try {
    const response = await Axios.get(url, {
      headers: {
        'Control-Allow-Origin': '*',
        'Access-Control-Allow-Methods':
          'GET, POST, PATCH, PUT, DELETE, OPTIONS',
        'Access-Control-Allow-Headers':
          'Origin, Content-Type, X-Auth-Token, Authorization, Accept,charset,boundary,Content-Length'
      }
    })
    const responseData = response.data

    return responseData
  } catch (error) {
    return {
      content: undefined,
      message: 'An error has occured' //To-Do - Return message from API.
    } as AppResponseCollection<TResponse>
  }
}

export async function postRequest<TResponse> (
  url: string,
  payload?: unknown
): Promise<HttpClientResponse<TResponse>> {
  try {
    const response = await Axios.post(url, payload)

    const responseData = response.data

    return responseData
  } catch (error) {
    return {
      content: undefined,
      message: 'An error has occured'
    }
  }
}
