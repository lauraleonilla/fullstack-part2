import axios from 'axios'
const baseURL = 'http://localhost:3001/persons'

const getAll = () => {
    return axios.get(baseURL)
}

const create = (personObject) => {
    return axios.post(baseURL, personObject)
}

const remove = (deleteId) => {
    return axios.delete(`${baseURL}/${deleteId}`)
}

export default {
    getAll, create, remove
}

