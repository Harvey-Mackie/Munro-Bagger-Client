import { FunctionComponent } from 'react'
import { Formik } from 'formik'
import * as Yup from 'yup'
import LoginForm from './LoginForm'
import { useAuth } from '../../auth/AuthContext'
import { useNavigate } from 'react-router-dom'

interface LoginFormContainerProps {}

export type LogInFormContainerValues = {
  email: string
  password: string
}

export const defaultLogInFormValues: LogInFormContainerValues = {
  email: '',
  password: ''
}

export const logInFormValidationSchema: Yup.SchemaOf<LogInFormContainerValues> = Yup.object().shape(
  {
    email: Yup.string()
      .email('Please enter a valid email address.')
      .required('Please provide an email address.'),
    password: Yup.string().required('Please provide a password.')
  }
)

const LoginFormContainer: FunctionComponent<LoginFormContainerProps> = () => {
  const auth = useAuth()
  const navigate = useNavigate()

  const handleSubmit = async (values: LogInFormContainerValues) => {
    await auth.login(values.email, values.password)
    navigate('/')
  }

  return (
    <Formik
      initialValues={defaultLogInFormValues}
      validationSchema={logInFormValidationSchema}
      onSubmit={handleSubmit}
    >
      <LoginForm />
    </Formik>
  )
}

export default LoginFormContainer
