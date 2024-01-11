import ProjectService from './project.service.js';

class ProjectController {
  getProjects(req, res) {
    res.json(ProjectService.getProjects());
  }

  getProjectById(req, res) {
    const id = Number(req.params.id);
    res.json(ProjectService.getProjectById(id));
  }
  editProject(req, res) {
    const id = Number(req.params.id);
    const name = req.body;
    res.json(ProjectService.editProject(id, name));
  }

  createProject(req, res) {
    res.json(ProjectService.createProject(req.body));
  }
}
export default new ProjectController();
