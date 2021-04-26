import axios from 'axios'

const api = axios.create({
  baseURL: 'https://covid19-brazil-api.now.sh/api/report/v1/brazil/uf'
  // dados po estado/report/v1/brazil/uf
  // status da api => /status/v1
})

export default api;