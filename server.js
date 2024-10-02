import express from 'express';
import filemanRoutes from './routes';

const server = express();

filemanRoutes(server);

export default server;
