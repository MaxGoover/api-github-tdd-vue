import axios from 'axios'
import httpAdapter from 'axios/lib/adapters/http'

const instance = axios.create({
  adapter: httpAdapter,
  baseURL: 'https://api.github.com',
})

export default {
  searchUser(username) {
    return instance
      .get(`/users/${ username }`)
      .then(result => result.data)
  }
}