import { API } from '@config'

const url = 'https://jsonplaceholder.typicode.com/users'

const user = {
  getAll: () => API.get(url),
  getById: (id) => API.get(`${url}/${id}`),
  add: (requestBody) => API.post(url, requestBody),
  update: (id, data) => API.patch(`${url}/${id}`, data),
  delete: (id) => API.delete(`${url}/${id}`),
}

export default user
