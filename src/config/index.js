import axios from 'axios'

import constants from './constant'
import validation from './validation'

const API = axios.create({
  baseURL: '',
})

export {
  API,
  constants,
  validation,
}
