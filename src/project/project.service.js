class ProjectService {
  constructor() {
    this.projects = [
      {
        name: 'express',
        description: 'desc',
        priority: 'High',
        tasks: [
          {
            taskName: 'task 1',
            status: 'Done',
          },
          {
            taskName: 'task 2',
            status: 'Pending',
          },
        ],
      },
      {
        name: 'react',
        description: 'complex project',
        priority: 'medium',
        status: 'in progress',
        comment: 'another comment',
        tasks: [
          {
            taskName: 'task 1',
            status: 'Pending',
          },
          {
            taskName: 'task 2',
            status: 'Pending',
          },
        ],
      },
      {
        name: 'vue',
        description: 'intermediate project',
        priority: 'Low',
        status: 'Pending',
        comment: 'third comment',
        tasks: [
          {
            taskName: 'task 1',
            status: 'Pending',
          },
          {
            taskName: 'task 2',
            status: 'Pending',
          },
        ],
      },
    ];
  }

  updateProject(id, updatedData) {
    const projectToUpdate = this.projects[id];

    if (!projectToUpdate) {
      return null;
    }

    const updatedProject = { ...projectToUpdate };

    Object.keys(updatedData).forEach((key) => {
      switch (key) {
        case 'name':
        case 'description':
        case 'status':
        case 'priority':
        case 'technology':
        case 'comment':
          if (updatedData[key]) {
            updatedProject[key] = updatedData[key];
          }
          break;

        case 'tasks':
          if (updatedData[key]) {
            Object.keys(updatedData[key]).forEach((index) => {
              const taskIndex = Number(index);
              const task = updatedData[key][index];

              if (taskIndex < updatedProject.tasks?.length) {
                updatedProject.tasks[taskIndex] = { ...updatedProject.tasks[taskIndex], ...task };
              } else {
                updatedProject.tasks.push(task);
              }
              if (!task.taskName) {
                updatedProject.tasks.splice(taskIndex, 1);
              }
            });
          }
          break;

        default:
          break;
      }
    });

    this.projects[id] = updatedProject;
    return updatedProject;
  }

  editProject(id, newData) {
    return this.updateProject(id, newData);
  }

  getProjects() {
    return this.projects;
  }

  getProjectById(id) {
    return this.projects[id];
  }

  createProject(project) {
    this.projects.push({ tasks: [] });
    const id = this.projects.length - 1;
    this.updateProject(id, project);
    return this.projects;
  }
}

export default new ProjectService();
