import express from 'express';
import bodyParser from 'body-parser';
import historicoIPCAroutes from './routes/historicoIPCAroutes';

const app = express();
const port = 3000;

app.use(bodyParser.json());
app.use('/api/historicoIPCA', historicoIPCAroutes);

app.listen(port, () => {
    let data = new Date();
    console.log(`O servidor foi aberto na porta ${port} às ${data}`);
})