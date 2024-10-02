import express from 'express';
import filemanRoutes from './routes';

const server = express();
const PORT = process.env.PORT || 5000;

filemanRoutes(server);

server.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});

export default server;
