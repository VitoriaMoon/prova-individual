import axios from "axios";

const api = axios.create({
    baseURL: 'http://localhost:7000'
})


export async function cadastrar(nome){
    const resposta = await api.post('/anime', {
        nome: nome
    })
    return resposta.data
}


export async function listar(){
    const resposta = await api.get('/anime');
    return resposta.data;
}