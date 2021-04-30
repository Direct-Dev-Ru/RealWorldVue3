import axios from 'axios'
import { config } from '@/config/config'

const apiClient = axios.create({
  baseURL: config.apiBaseUrl, //'https://my-json-server.typicode.com/Direct-Dev-Ru/MockDb',
  withCredentials: false,
  headers: {
    Accept: 'application/json',
    'Content-Type': 'application/json'
  }
})


export default {
  getEvents() {
    return apiClient.get(`/events`)
  },
  getEvent(id) {
    const event = apiClient.get(`/events/${id}`)
    return event
  }
}
