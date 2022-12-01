import axios from 'axios'

const Instance = axios.create({
    baseURL: 'http://localhost:7000'
})

export default Instance;