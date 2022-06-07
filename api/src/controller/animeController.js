import {AdicionarAnime, ChecarAnimes } from '../repository/animeRepository.js'

import { Router } from 'express'

const server = Router();

server.post('/anime', async (req, resp) =>{
    try {
        const anime = req.body;

        const InserirAnime = await AdicionarAnime(anime);

        resp.send(InserirAnime)
    } 
    catch (err) {
        resp.status(400).send({
            erro: err.message
        });
    }
})

server.get('/anime', async (req, resp) => {
    try {
        const resposta = await ChecarAnimes();
        resp.send(resposta);

    } 
    catch (err) {
        resp.status(400).send({
            erro: err.message
        });
    }
})

export default server
