import express from 'express';
import router from './router/masterRouter';

const server = express();
server.use('/', router);
server.listen(8000, console.log('listening on port 8000'));