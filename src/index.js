import express from 'express';
import cors from 'cors';
import chalk from 'chalk';
import router from './routes/router.js';

const app = express();
const port = 6000;

app.use(cors());
app.use(express.json());
app.use(router);

app.listen(port, () => {
    console.log(chalk.bgGreenBright.black(`Servidor rodando: http://localhost:${port}`));
})