"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.deleteHistoricoIPCAController = exports.updateHistoricoIPCAController = exports.getHistoricoIPCAByIdController = exports.addHistoricoIPCAController = exports.getHistoricoIPCAController = void 0;
// Importa as funções do models.
const historicoIPCAmodels_1 = require("../models/historicoIPCAmodels");
// Função que retorna um JSON e mostra todos os dados.
function getHistoricoIPCAController(req, res) {
    const historicoIPCA = (0, historicoIPCAmodels_1.getHistoricoIPCA)();
    res.json(historicoIPCA);
}
exports.getHistoricoIPCAController = getHistoricoIPCAController;
// Função que adiciona um dado JSON ao models.
function addHistoricoIPCAController(req, res) {
    const novo_historico = req.body;
    const historico = (0, historicoIPCAmodels_1.addHistoricoIPCA)(novo_historico);
    res.status(201).json(historico);
}
exports.addHistoricoIPCAController = addHistoricoIPCAController;
// Função que retorna um JSON e mostra os dados de um determinado ID.
function getHistoricoIPCAByIdController(req, res) {
    const { id } = req.params;
    const historicoId = parseInt(id, 10);
    const historico = (0, historicoIPCAmodels_1.getHistoricoIPCAById)(historicoId);
    (historico) ? res.json(historico) : res.status(404).json({ msg: "Histórico não encontrado" });
}
exports.getHistoricoIPCAByIdController = getHistoricoIPCAByIdController;
// Função que atualiza um dado JSON do models.
function updateHistoricoIPCAController(req, res) {
    const { id } = req.params;
    const historicoId = parseInt(id, 10);
    const historico = req.body;
    const updated_historico = (0, historicoIPCAmodels_1.updateHistoricoIPCA)(historicoId, historico);
    (updated_historico) ? res.json(updated_historico) : res.status(404).json({ msg: "Histórico não encontrado" });
}
exports.updateHistoricoIPCAController = updateHistoricoIPCAController;
// Função que deleta um dado JSON do models.
function deleteHistoricoIPCAController(req, res) {
    const { id } = req.params;
    const historicoId = parseInt(id, 10);
    const deleted_historico = (0, historicoIPCAmodels_1.deleteHistoricoIPCA)(historicoId);
    (deleted_historico) ? res.json(deleted_historico) : res.status(404).json({ msg: "Histórico não encontrado" });
}
exports.deleteHistoricoIPCAController = deleteHistoricoIPCAController;
