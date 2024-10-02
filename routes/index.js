import AppController from '../controllers/AppController';

const filemanRoutes = (api) => {
  api.get('/status', AppController.getStatus);
  api.get('/stats', AppController.getStats);
};

export default filemanRoutes;
