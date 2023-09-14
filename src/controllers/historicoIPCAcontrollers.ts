// Importa as requisições e respostas do express.
import { Request, Response } from 'express';

// Importa as funções do models.
import { 
    getHistoricoIPCA, 
    addHistoricoIPCA, 
    getHistoricoIPCAById,
    updateHistoricoIPCA,
    deleteHistoricoIPCA,
    IpcaModel
} from '../models/historicoIPCAmodels';

// Função que retorna um JSON e mostra todos os dados.
export function getHistoricoIPCAController(req: Request, res: Response): void{
    const historicoIPCA = getHistoricoIPCA();
    res.json(historicoIPCA);
}

// Função que adiciona um dado JSON ao models.
export function addHistoricoIPCAController(req: Request, res: Response): void{
    const novo_historico = req.body;
    const historico = addHistoricoIPCA(novo_historico);
    res.status(201).json(historico);
}

// Função que retorna um JSON e mostra os dados de um determinado ID.
export function getHistoricoIPCAByIdController(req: Request, res: Response): void{
    const { id } = req.params;
    const historicoId = parseInt(id, 10);
    const historico = getHistoricoIPCAById(historicoId);
    (historico) ? res.json(historico) : res.status(404).json({msg: "Histórico não encontrado"});
}

// Função que atualiza um dado JSON do models.
export function updateHistoricoIPCAController(req: Request, res: Response): void{
    const { id } = req.params;
    const historicoId = parseInt(id, 10);
    const historico: IpcaModel = req.body;
    const updated_historico = updateHistoricoIPCA(historicoId, historico);
    (updated_historico) ? res.json(updated_historico) : res.status(404).json({msg: "Histórico não encontrado"});
}

// Função que deleta um dado JSON do models.
export function deleteHistoricoIPCAController(req: Request, res: Response): void{
    const { id } = req.params;
    const historicoId = parseInt(id, 10);

    const deleted_historico = deleteHistoricoIPCA(historicoId);
    (deleted_historico) ? res.json(deleted_historico) : res.status(404).json({msg: "Histórico não encontrado"});
}