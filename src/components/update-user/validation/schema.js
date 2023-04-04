import { validation } from '@config'

const {
  emptyField, emailField,
} = validation

const validationSchema = [
  emptyField('name'),
  emptyField('phone'),
  emptyField('email'),
  emailField('email'),
  emptyField('website'),
]

export default validationSchema
