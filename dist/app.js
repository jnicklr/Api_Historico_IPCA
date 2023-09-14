"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const body_parser_1 = __importDefault(require("body-parser"));
const historicoIPCAroutes_1 = __importDefault(require("./routes/historicoIPCAroutes"));
const app = (0, express_1.default)();
const port = 3000;
app.use(body_parser_1.default.json());
app.use('/api/historicoIPCA', historicoIPCAroutes_1.default);
app.listen(port, () => {
    let data = new Date();
    console.log(`O servidor foi aberto na porta ${port} às ${data}`);
});
