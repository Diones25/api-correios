import { Router } from 'express';
import * as correiosController from '../controller/correiosController.js'

const router = Router();


router.get('/rastrear/:codigo', correiosController.rastreioEncomendas);
router.post('/consulta/prazo/entrega', correiosController.consultaPrecoEPrazo);
router.get('/consulta/:cep', correiosController.buscaCep);

export default router; 