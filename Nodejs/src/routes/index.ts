import { Router, Request, Response } from 'express';

const router = Router();

router.get('./', (req: Request, res: Response)=>{
    res.send('Olá Mundo!');
})

router.get('/contato', (req: Request, res: Response)=>{
    res.send('Formulário de contato');
})

router.get('/sobre', (req: Request, res: Response)=>{
    res.send('Página institucional sobre a empresa');
})

router.get('/teste', (req: Request, res: Response)=> {
    res.send('teste')
})

export default router;