import 'dotenv/config'

import express from 'express'
import cors from 'cors'

//importar o anime controller
import animeController  from "./src/controller/animeController.js";

const server = express ();
server.use(cors());
server.use(express.json());

// usar anime conntroller
server.use(animeController);

server.listen(process.env.PORT, 
                 () => console.log(`API ON NA PORTA ${process.env.PORT}`));