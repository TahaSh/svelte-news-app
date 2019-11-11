import * as api from './api'

export function register (data) {
  return api.post('/register', data)
}

export function login (data) {
  return api.post('/login', data)
}
