import * as http from 'http';
import Api from './api/api';

const config = require('./config/env/config')();
const models = require('./models');

const server = http.createServer(Api);

models.sequelize.sync({ force: true })
    .then(() => {
        server.listen(config.serverPort);
        server.on('listening', () => console.log(`Server iniciado na porta ${config.serverPort}`));
        server.on('error', (error: NodeJS.ErrnoException) => console.log(`Ocorreu um erro: ${error}`));
        models.user;
    });

