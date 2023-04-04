import constants from './constant'

const {
  REGEX_EMPTY, REGEX_EMAIL, REGEX_NUMBER,
  REQUIRED, INVALID_EMAIL, INVALID_NUMBER,
  REGEX_URL, INVALID_URL,
} = constants

const emptyField = (path) => ({
  path,
  pattern: REGEX_EMPTY,
  message: REQUIRED,
  emptyCheck: true,
})

const emailField = (path) => ({
  path,
  pattern: REGEX_EMAIL,
  message: INVALID_EMAIL,
})

const numberField = (path) => ({
  path,
  pattern: REGEX_NUMBER,
  message: INVALID_NUMBER,
})

const urlField = (path) => ({
  path,
  pattern: REGEX_URL,
  message: INVALID_URL,
})

const customField = ({ path, message = REQUIRED, custom }) => ({
  path,
  custom,
  message,
})

export default {
  emptyField,
  emailField,
  numberField,
  customField,
  urlField,
}
