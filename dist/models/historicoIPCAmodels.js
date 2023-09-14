"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.deleteHistoricoIPCA = exports.updateHistoricoIPCA = exports.getHistoricoIPCAById = exports.addHistoricoIPCA = exports.getHistoricoIPCA = void 0;
// Criando um array de objetos que possuem o formato do objeto IpcaModel.
const historicoIPCA = [];
// Função que retorna todos o array com todos os objetos de IpcaModel.
function getHistoricoIPCA() {
    return historicoIPCA;
}
exports.getHistoricoIPCA = getHistoricoIPCA;
// Função que recebe um objeto do tipo IpcaModel e adiciona o objeto ao array.
function addHistoricoIPCA(historico) {
    historicoIPCA.push(historico);
    return historico;
}
exports.addHistoricoIPCA = addHistoricoIPCA;
// Função que recebe um ID e retorna o objeto desse ID. Caso não exista, retorna undefined.
function getHistoricoIPCAById(id) {
    const index = historicoIPCA.findIndex((historico) => historico.id === id);
    return (index !== -1) ? historicoIPCA[index] : undefined;
}
exports.getHistoricoIPCAById = getHistoricoIPCAById;
// Função que recebe um ID e um objeto como parâmetro e atualiza um determinado objeto do array historicoIPCA
// que tenha o ID que foi definido. Caso não existe, retorna undefined.
function updateHistoricoIPCA(id, updatedhistorico) {
    const index = historicoIPCA.findIndex((historico) => historico.id === id);
    if (index !== -1) {
        historicoIPCA[index] = { ...updatedhistorico, id: id };
        return historicoIPCA[index];
    }
    return undefined;
}
exports.updateHistoricoIPCA = updateHistoricoIPCA;
// Função que recebe um ID e deleta o objeto do array historicoIPCA que tenha esse ID. 
// Caso não existe, retorna undefined.
function deleteHistoricoIPCA(id) {
    const index = historicoIPCA.findIndex((historico) => historico.id === id);
    if (index !== -1) {
        const deletedHistorico = historicoIPCA.splice(index, 1)[0];
        return deletedHistorico;
    }
    return undefined;
}
exports.deleteHistoricoIPCA = deleteHistoricoIPCA;
