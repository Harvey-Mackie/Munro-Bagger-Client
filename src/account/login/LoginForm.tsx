import { FunctionComponent } from 'react'
import { Field, Form, useField } from 'formik'
import { Button, makeStyles } from '@material-ui/core'

const useStyles = makeStyles(theme => ({
  form: {
    width: '25rem',
    '& input': {
      width: '100%',
      marginBottom: '1rem'
    }
  }
}))

interface LoginFormProps {}

const LoginForm: FunctionComponent<LoginFormProps> = () => {
  const styles = useStyles()

  const [, emailMeta] = useField<string>('email')
  const [, passwordMeta] = useField<string>('password')

  return (
    <Form className={styles.form}>
      <Field name='email' type='email' />

      <Field name='password' type='password' />

      {emailMeta.touched && emailMeta.error && <p>{emailMeta.error}</p>}
      {passwordMeta.touched && passwordMeta.error && (
        <p>{passwordMeta.error}</p>
      )}

      <Button type='submit' variant='outlined' fullWidth>
        Submit
      </Button>
    </Form>
  )
}

export default LoginForm
