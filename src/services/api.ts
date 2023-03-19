import axios from 'axios'

const baseUrl = 'http://localhost:6006'

const reservations = axios.create({
  baseURL: `${baseUrl}/`,
})

reservations.interceptors.request.use((response) => response)

export const api = {
  reservations,
}
