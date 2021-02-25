import express, { request } from 'express';

const app = express();

app.get('/', (request, response) =>{
    return response.json({message: 'Hello Joooj'});
})

app.listen(3333,() =>{
    console.log('Servidor iniciado na porta 3333');
})
