import axios from 'axios';
const baseURL = 'http://localhost:3001/persons'

const getAll = () => {
    return axios.get(baseURL)
}

const create = (personObject) => {
    return axios.post(baseURL, personObject)
}

const remove = (id) => {
    console.log('poistetaan ' + id )
    return axios.delete(`${baseURL}/${id}`)
}

export default {
    getAll, create, remove
}

