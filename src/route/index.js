import Router from 'express';
import ProjectController from '../project/project.controller.js';

const router = new Router();

router.post('/project', ProjectController.createProject);
router.post('/projects/:id', ProjectController.editProject);
router.get('/projects/:id', ProjectController.getProjectById);
router.get('/projects', ProjectController.getProjects);

export default router;
