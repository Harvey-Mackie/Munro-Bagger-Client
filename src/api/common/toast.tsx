import { toast } from 'react-toastify'

export const errorToast = (errorMessage: string): void => {
  toast.error(errorMessage, {
    position: 'bottom-center',
    autoClose: 5000
  })
}
