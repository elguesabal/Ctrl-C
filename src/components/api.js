import react from 'react'
import axios from 'axios'

export default axios.create({
    baseURL: `http://localhost:5000/`
})


// axios.get(url)
// .then(resposta => console.log(resposta))
// .catch(erro => console.log('nao deu certo'))