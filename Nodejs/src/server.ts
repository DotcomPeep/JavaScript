import express from 'express';

import mainRoutes from './routes/index';

const server = express();

server.use(mainRoutes);

/*
//REQUEST: Ao acessar um site, você manda várias informações como cookies, IP etc.
//RESPONSE: Responsável para dar a resposta ao usuário do que vai ser acessado (Frase, Página, Imagem...)
server.get('/', (req: Request, res: Response) => {
    res.send('Olá Marilene!');
})

// /:slug => /noticia/:slug transforma-se em dinâmico
server.get('/noticia/:slug', (req: Request, res: Response) => {
    let slug= req.params.slug;
    res.send(`Noticia: ${slug}`);
})

//site.com/voo/gru-rec => guarulhos para recife
server.get('/voo/:origem-:destino', (req: Request, res: Response) => {
    let {origem, destino} = req.params;
    res.send(`Procurando voos de ${origem.toUpperCase()} até ${destino.toUpperCase()}`);
})

//GET, POST
*/
server.listen(80);