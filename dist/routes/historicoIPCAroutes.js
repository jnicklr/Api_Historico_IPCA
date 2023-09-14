"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
// Importa a biblioteca express.
const express_1 = __importDefault(require("express"));
// Importa as funções do controller.
const historicoIPCAcontrollers_1 = require("../controllers/historicoIPCAcontrollers");
// Declarando a instância do express que vai definir as rotas da Api.
const router = express_1.default.Router();
// Definindo as rotas:
router.get('/', historicoIPCAcontrollers_1.getHistoricoIPCAController);
router.post('/', historicoIPCAcontrollers_1.addHistoricoIPCAController);
router.get('/:id', historicoIPCAcontrollers_1.getHistoricoIPCAByIdController);
router.put('/:id', historicoIPCAcontrollers_1.updateHistoricoIPCAController);
router.delete('/:id', historicoIPCAcontrollers_1.deleteHistoricoIPCAController);
exports.default = router;
