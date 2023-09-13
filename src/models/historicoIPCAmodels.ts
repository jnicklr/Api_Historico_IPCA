// Definindo o formato do objeto que irá conter os dados de IPCA.
export interface IpcaModel {
    id: number;
    ano: number;
    mes: number;
    ipca: number;
}

// Criando um array de objetos que possuem o formato do objeto IpcaModel.
const historicoIPCA: IpcaModel[] = [];

// Função que retorna todos o array com todos os objetos de IpcaModel.
export function getHistoricoIPCA(): IpcaModel[] {
    return historicoIPCA;
}

// Função que recebe um objeto do tipo IpcaModel e adiciona o objeto ao array.
export function addHistoricoIPCA(historico: IpcaModel): IpcaModel {
    historicoIPCA.push(historico);
    return historico;
}

// Função que recebe um ID e retorna o objeto desse ID. Caso não exista, retorna undefined.
export function getHistoricoIPCAById(id: number): IpcaModel | undefined{
    const index = historicoIPCA.findIndex((historico) => historico.id === id);
    return (index !== -1) ? historicoIPCA[index] : undefined;
}

// Função que recebe um ID e um objeto como parâmetro e atualiza um determinado objeto do array historicoIPCA
// que tenha o ID que foi definido. Caso não existe, retorna undefined.
export function updateHistoricoIPCA(id: number, updatedhistorico: IpcaModel): IpcaModel | undefined{
    const index = historicoIPCA.findIndex((historico) => historico.id === id);
    if (index !== -1){
        historicoIPCA[index] = {...updatedhistorico, id: id};
        return historicoIPCA[index];
    } 
    return undefined; 
}

// Função que recebe um ID e deleta o objeto do array historicoIPCA que tenha esse ID. 
// Caso não existe, retorna undefined.
export function deleteHistoricoIPCA(id: number): IpcaModel | undefined{
    const index = historicoIPCA.findIndex((historico) => historico.id === id);
    if (index !== -1){
        const deletedHistorico = historicoIPCA.splice(index, 1)[0];
        return deletedHistorico;
    }
    return undefined;
}

