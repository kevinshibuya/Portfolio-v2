const { Router } = require('express');
const ProjectController = require('./controllers/ProjectController');

const routes = Router();

routes.get('/', ProjectController.index);
routes.post('/admin', ProjectController.store);

module.exports = routes;