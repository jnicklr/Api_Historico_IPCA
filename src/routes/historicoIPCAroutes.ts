// Importa a biblioteca express.
import express from 'express';

// Importa as funções do controller.
import { 
    getHistoricoIPCAController,
    addHistoricoIPCAController,
    getHistoricoIPCAByIdController,
    updateHistoricoIPCAController,
    deleteHistoricoIPCAController,
} from '../controllers/historicoIPCAcontrollers';

// Declarando a instância do express que vai definir as rotas da Api.
const router = express.Router();

// Definindo as rotas:
router.get('/', getHistoricoIPCAController);
router.post('/', addHistoricoIPCAController);
router.get('/:id', getHistoricoIPCAByIdController);
router.put('/:id', updateHistoricoIPCAController);
router.delete('/:id', deleteHistoricoIPCAController);

export default router;