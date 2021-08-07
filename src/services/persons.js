import axios from "axios"
const baseUrl ="/api/persons"
//"http://localhost:3004/api/persons"
//"https://stark-temple-23512.herokuapp.com/api/persons"

const getAll = () => {
    return  axios.get(baseUrl)
}

const create = newObject => {
    return axios.post(baseUrl, newObject)
}

const updateNumber = (id, newObject) => {
    return  axios.put(`${baseUrl}/${id}`, newObject)
}

async function remove(id) {
    return await axios.delete(`${baseUrl}/${id}`)
}

export default { getAll, create, updateNumber, remove }

//rodar o backend na porta 3004, depois rodar o frontend, refazer as rotas de post e filtros